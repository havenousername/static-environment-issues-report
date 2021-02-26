import {FormData} from "./classes/FormData.js";
"use strict"
document.addEventListener('DOMContentLoaded', () => {
   const formData = new FormData();
   const checkboxes = document.getElementById('checkboxes').getElementsByClassName('checkbox');

   const initForm = () => {
    const injured = Object.values(formData.injuredFromAttack);
    for (let i = 0; i < checkboxes.length; i++) {
        document.getElementsByClassName('checkbox')[i].checked = injured[i];
    }
    Object.keys(formData).map((item, key) => {
        if(key < 3) {
            document.getElementById(`form-${item}`).value = formData[item];
        } 
    });
    document.getElementById('form-description').value = formData.description;
   }

   const listenDomElementCollection = (element, formObject, isRadio = false) => {
    const domObject = document.getElementsByClassName(element);

    for (let i = 0; i < domObject.length; i++) {
        domObject[i].addEventListener('input', (e) => {
            if (isRadio) {
                Object.keys(formObject).map(i => {
                    formObject[i] = false
                })
            }
             const key = Object.keys(formObject).find((_, ind) => ind === i);
             formObject[key] = e.target.checked;
         });
    }
   }

   const listenDomElement = (elementName, formObject) => {
       const domObject = document.getElementById(elementName);
       domObject.addEventListener('input', (e) => {
            formObject = e.target.value;
            console.log(formData);
       })
   }

   initForm();
   listenDomElementCollection("checkboxes", formData.injuredFromAttack);
   listenDomElementCollection("form-radio-type", formData.type, true);
   listenDomElementCollection("form-radio-amount", formData.amountOfInjures, true);
   Object.keys(formData).map((item, key) => {
    if(key < 3) {
        listenDomElement(`form-${item}`);
    } 
    listenDomElement('form-description');
});
   
});