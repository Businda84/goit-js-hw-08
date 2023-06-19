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
{form.elements[key].value=formData[key]}
     
}
submitBtm.addEventListener('click', formClear);


function formClear(evt) {
     evt.preventDefault();
    console.log( form.elements.message);
    if (form.elements.email.value === '' || form.elements.message.value === '') {
        alert('Please,enter text!')
    };
    evt.currentTarget.reset();
        
      localStorage.clear()  
    
}
