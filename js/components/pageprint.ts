/* eslint-disable no-undef */
import PagePrint, { ImageView, WatchOnClickPrint } from "../classes/page-print/PagePrint";


document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementsByTagName("body");
    body[0].id = "body";
    const links = document.getElementsByTagName("link");
    console.log(Array.from(links).filter(i => i.rel === "stylesheet").map(i => console.log("links:", i.href)));

    const currentPath = window.location.pathname;
    const currentPage = currentPath.slice(1).split(".")[0];
    const image: ImageView = {
        tag: "span",
        imgAttr: [{name: "class", value: "print-image"}]
    };

    let currentStyles = Array.from(links).filter(i => i.rel === "stylesheet").map(i => i.href); 

    const watchOptions: WatchOnClickPrint = {
        printElementId: "body",
        cssPaths: currentStyles
    };

    
    console.log(currentStyles);

    const pagePrint = new PagePrint("page-print", "Print page", watchOptions, image);
    pagePrint.render();
});
