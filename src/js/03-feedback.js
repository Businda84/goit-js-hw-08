const form = document.querySelector('form');
const submitBtm = document.querySelector('button');
let formData = {};
const LS = localStorage;

form.addEventListener('input', function (e) {

    formData[e.target.name] = e.target.value;
    console.log(formData);
    LS.setItem('formData', JSON.stringify(formData));
});
if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));
    console.log(formData);
    // console.log( form.elements[name]);

for(let key in formData)
{form.elements[key].value=formData[key]}
     
}

submitBtm.addEventListener('click', formClear);
function formClear() {
    if (formData) {
        localStorage.clear()
    }
}