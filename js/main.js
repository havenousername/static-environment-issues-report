import appSettings from "./classes/AppSettings";
import { AppViewModes } from "./interfaces/viewModes";

document.addEventListener("DOMContentLoaded", () => {
    const pathnames = ["/", "/contact.html", "/404.html", "/redirected.html", "/index.html", "/about.html"];
    
    console.log(location.pathname);

    if (appSettings.currentMode === AppViewModes.CONTRAST && appSettings.currentMode === AppViewModes.PRINT) {
        appSettings.currentMode = AppViewModes.CONTRAST;
    }
    
    if (location.pathname === "/") {
        location.href = "./index.html";
    }
    
    if (!pathnames.includes(location.pathname)) {
        console.log(location.pathname);
        location.href = "./404.html";
    }

});