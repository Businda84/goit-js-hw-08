const e=document.querySelector("form");document.querySelector("button");let t={};const a=localStorage;if(e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,a.setItem("formData",JSON.stringify(t))})),a.getItem("formData")){t=JSON.parse(a.getItem("formData"));for(let a in t)e.elements[a].value=t[a]}e.addEventListener("submit",(function(t){t.preventDefault(),console.log(e.elements.email.value),console.log(e.elements.message.value),(""===e.elements.email.value||""===e.elements.message.value)&&alert("Please,enter text!");(e.elements.email.value||e.elements.message.value)&&(t.currentTarget.reset(),localStorage.clear())}));
//# sourceMappingURL=03-feedback.d9e7b64c.js.map