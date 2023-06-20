

const form = document.querySelector('form');
const submitBtm = document.querySelector('button');
let formData = {};
const LS = localStorage;

form.addEventListener('input', function (e) {
   
    formData[e.target.name] = e.target.value;
 
    LS.setItem('formData', JSON.stringify(formData));
});


if (LS.getItem('formData')) {
    
    formData = JSON.parse(LS.getItem('formData'));


for(let key in formData)
{
    form.elements[key].value = formData[key]
}
     
}
form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
     evt.preventDefault();
  
    console.log(form.elements.email.value);
    console.log(form.elements.message.value);
    if (form.elements.email.value === '' || form.elements.message.value === '') {
        alert('Please,enter text!')

    };
    if (form.elements.email.value || form.elements.message.value) {
        evt.currentTarget.reset();
       localStorage.clear()  
    
    }

}
