!function(){var e=document.querySelector("form"),t=(document.querySelector("button"),{}),a=localStorage;if(e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,a.setItem("formData",JSON.stringify(t))})),a.getItem("formData"))for(var l in t=JSON.parse(a.getItem("formData")))e.elements[l].value=t[l];e.addEventListener("submit",(function(t){t.preventDefault(),console.log(e.elements.email.value),console.log(e.elements.message.value),(""===e.elements.email.value||""===e.elements.message.value)&&alert("Please,enter text!");(e.elements.email.value||e.elements.message.value)&&(t.currentTarget.reset(),localStorage.clear())}))}();
//# sourceMappingURL=03-feedback.5541a74a.js.map