import { AppObjectCreator } from "../app-element-creators/AppObjectCreator";
import { AppSpanElementCreator } from "../app-element-creators/AppSpanElementCreator";
import AppLayoutChanger from "./AppLayoutChanger";
import { Attr } from "../../interfaces/elementable";
import { simulatePrintMedia, restoreScreenMedia } from "../../utils/printCssToggle";


export interface AppLayoutPrintProps {
    parentId: string; 
    innerHtml: [string, string];
    object: false | {
        srcData: string;
    };
}

export default class AppLayoutPrint extends AppLayoutChanger {
    private _isPrintMode = false;
    private hasObjectHtml = false;
    private descriptioninnerHTML: [string, string];


    constructor(props: AppLayoutPrintProps) {
        super(props.parentId);
        this.descriptioninnerHTML = props.innerHtml;
        if (props.object) {
            this.hasObjectHtml = true;
            const attr: Attr[] = [{name: "class", value: "object-class"}, {name: "data", value: props.object.srcData}];
            this.objectHTMLElement = new AppObjectCreator().createElement(this.divHTMLElement.id, attr);
        }
        this._isPrintMode = Boolean(window.localStorage.getItem("isPrintMode") === "true");
        this.descriptionElement = new AppSpanElementCreator(false).createElement(this.divHTMLElement.id, this._isPrintMode ? props.innerHtml[1] : props.innerHtml[0]); 
    }

    get isPrintMode() {
        return this._isPrintMode;
    }

    renderElement() {
        this.divHTMLElement.renderElement();
        if (this.hasObjectHtml) {
            this.objectHTMLElement.renderElement();
        }

        this.descriptionElement.renderElement();
    }

    watchElement() {
        if (!this.divHTMLElement.mounted || !this.descriptionElement.mounted && !this.descriptionElement.mounted) {
            console.error("Elements are not in the DOM, or were unmounted from there. Please consider render them first");
            return;
        }
        this.divHTMLElement.listenEvent("click", async () => {
            this._isPrintMode = !this._isPrintMode;
            this.changeView();
            window.localStorage.setItem("isPrintMode", String(this._isPrintMode));
            if (!this._isPrintMode) {
                this.descriptionElement.changeInnerHtml(this.descriptioninnerHTML[0]);
            } else {
                this.descriptionElement.changeInnerHtml(this.descriptioninnerHTML[1]);
            }
        });
    }

    changeView() {
        if (this._isPrintMode) {
            simulatePrintMedia();
        } else if (!this._isPrintMode) {
            restoreScreenMedia();
        }
    }

    changeDescriptionText(innerHTML: string) {
        this.descriptionElement.changeInnerHtml(innerHTML);
    }

    unmountElement() {
        this.descriptionElement.unmountElement();
        if (this.hasObjectHtml) {
            this.objectHTMLElement.unmountElement();
        }
        this.divHTMLElement.unmountElement();
    }

    changeClass(htmlClasses: string[]) {
        this.objectHTMLElement.changeClasses(htmlClasses);
    }
}