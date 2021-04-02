import PagePrint from "./classes/page-print/PagePrint";

document.addEventListener("DOMContentLoaded", () => {
    const pathnames = ["/", "/contact.html", "/404.html", "/redirected.html", "/index.html", "/about.html"];
    
    console.log(location.pathname);
    
    if (location.pathname === "/") {
        location.href = "./index.html";
    }
    
    if (!pathnames.includes(location.pathname)) {
        console.log(location.pathname);
        location.href = "./404.html";
    }

    const pagePrint = new PagePrint("page-print", "Print this page");
    pagePrint.render();
});