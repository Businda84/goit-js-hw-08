import throttle from "lodash.throttle";

const formEl = document.querySelector('form');
const btnEl = document.querySelector('button')
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');
const keyStorage = 'feedback-form-state';

console.log(inputEl);
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

let formData = {};

onSaveStorage();



function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(keyStorage, JSON.stringify(formData));
   
}
function onFormSubmit(e) {
    e.preventDefault();
 

    if (textEl.value === '' || inputEl.value === '') {
        alert('Please,enter text!')
        return
    }
 


    const dataText = localStorage.getItem(keyStorage);
    console.log(dataText);
    const dataControle = JSON.parse(dataText);
    e.currentTarget.reset();
    localStorage.removeItem(keyStorage);
    localStorage.clear();
   
}

function onSaveStorage() {
    const savedMessage = localStorage.getItem(keyStorage);
    let formData = JSON.parse(savedMessage);
    if (savedMessage) {
        formEl.elements.email.value = formData.email;
        formEl.elements.message.value = formData.message;
    }
}
