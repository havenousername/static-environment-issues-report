!function(){var e,t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire0232,n=t("5OWkL"),o=t("2s1fH"),d=t("55ZWq"),s=(e=d())&&e.__esModule?e.default:e;n(),o(),d();class i{createNewElement(e){const t=document.createElement(e.tag);t.id=e.id,e.class.map((e=>t.classList.add(e))),e.attributes&&e.attributes.map((e=>t.setAttribute(e.name,e.value))),e.innerHtml&&(t.innerHTML=e.innerHtml);document.getElementById(e.parentElementId).appendChild(t)}constructor(e){const t=s();this.dropdown={tag:"div",id:`dropdown-${t}`,class:"dropdown is-w-full".split(" "),parentElementId:e.appendTo},this.optionButton={tag:"button",id:`options-menu-${t}`,class:"button select cursor-pointer is-display-flex".split(" "),parentElementId:this.dropdown.id,attributes:[{name:"aria-haspopup",value:"true"},{name:"aria-expanded",value:"true"}]},this.menuDropdown={tag:"div",id:`menu-dropdown-${t}`,class:"dropdown-leave menu-dropdown".split(" "),parentElementId:this.dropdown.id},this.selected={tag:"span",id:`current-dropdown-${t}`,class:"button-span".split(" "),parentElementId:this.optionButton.id,innerHtml:e.defaultText},this.dropdownOptions={tag:"div",id:`dropdown-options-${t}`,class:["is-flex-column"],parentElementId:this.menuDropdown.id,attributes:[{name:"role",value:"menu"},{name:"aria-orientation",value:"vertical"},{name:"aria-labelledby",value:`options-menu-${t}`}]},Object.keys(this).map((e=>this.createNewElement(this[e]))),e.arrayOfElements.map((e=>{const n={tag:"button",id:`dropdown-element-${t}`,class:["option-dropdown","select"],parentElementId:this.dropdownOptions.id,attributes:[{name:"value",value:e.country}],innerHtml:e.country};this.createNewElement(n)})),this.listenOptions(),this.listenButton(),this.clickOutsideListen()}listenOptions(){const e=document.getElementsByClassName("option-dropdown"),t=document.getElementById(this.menuDropdown.id);for(const n of e)n.addEventListener("click",(n=>{const o=document.getElementById(this.selected.id);o.innerHTML=n.target.value;for(const t of e)t.innerText===o.innerText?t.classList.add("dropdown-selected"):t.classList.remove("dropdown-selected");t.classList.add("dropdown-leave"),t.classList.remove("dropdown-enter")}))}listenButton(){document.getElementById(this.optionButton.id).addEventListener("click",(()=>{const e=document.getElementById(this.menuDropdown.id);e.classList.contains("dropdown-leave")?(e.classList.remove("dropdown-leave"),e.classList.add("dropdown-enter")):(e.classList.add("dropdown-leave"),e.classList.remove("dropdown-enter"))}))}clickOutsideListen(){document.addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById(this.dropdown.id).contains(e.target),n=document.getElementById(this.menuDropdown.id);!t&&n.classList.contains("dropdown-enter")&&(n.classList.add("dropdown-leave"),n.classList.remove("dropdown-enter"))}))}}document.addEventListener("DOMContentLoaded",(()=>{const e=new(n().default),t=()=>{const t=Object.values(e.injuredFromAttack);for(let e=0;e<t.length;e+=1)document.getElementsByClassName("checkbox")[e].checked=t[e];Object.keys(e.type).map(((t,n)=>document.getElementsByClassName("form-radio-type")[n].checked=e.type[t])),Object.keys(e.amountOfInjures).map(((t,n)=>document.getElementsByClassName("form-radio-amount")[n].checked=e.amountOfInjures[t])),Object.keys(e).map(((t,n)=>{n<3&&(document.getElementById(`form-${t}`).value=e[t])})),document.getElementById("form-description").value=e.description},d=(e,t,n="input",o,d=!1)=>{const s=document.getElementsByClassName(e);for(let e=0;e<s.length;e++)s[e].addEventListener(n,(()=>{d&&Object.keys(t).map((e=>{t[e]=!1}));const n=Object.keys(t).find(((t,n)=>n===e));t[n]=!t[n];const i=s[e].getElementsByClassName(o)[0];void 0!==i.checked?i.checked=t[n]:console.error("Selection error: This element doesn't have input with checked attribute")}),!0)},s=(t,n)=>{document.getElementById(t).addEventListener("input",(t=>{e[n]=t.target.value}))};t(),d("cb-container",e.injuredFromAttack,"click","checkbox"),d("form-radio-type-wrapper",e.type,"click","form-radio-type",!0),d("form-radio-amount-wrapper",e.amountOfInjures,"click","form-radio-amount",!0),Object.keys(e).map(((e,t)=>(t<3&&s(`form-${e}`,e),e))),s("form-description","description");(async()=>{const e=await o().api.loadCountries();new i({arrayOfElements:e,defaultText:"Select your region",appendTo:"dropdown-section"})})(),document.getElementById("send-compliant").addEventListener("click",(async()=>{await o().api.sendReport(e),localStorage.setItem("formItem",JSON.stringify(e)),window.location.href="./redirected.html"})),document.getElementById("reset-form").addEventListener("click",(()=>{console.log("reset form"),e.resetForm(),t()}))}))}();
//# sourceMappingURL=contact.32327d8d.js.map
