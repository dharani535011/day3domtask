let firstnamee=document.getElementById("validationTooltip011")
let lastnamee=document.getElementById("validationTooltip022")
let mailide=document.getElementById("validationTooltipUsername1")
let addresse=document.getElementById("validationTooltip033")
let statee=document.getElementById("validationTooltip044")
let countrye=document.getElementById("validationTooltip055")
let gendere=document.getElementById("validationTooltip066")
let foode=document.getElementById("validationTooltip077")
let pincodee=document.getElementById("validationTooltip088")
let body=document.getElementById("root")
function resultt(event){
       let d=`<tr><td>${firstnamee.value}</td><td>${lastnamee.value}</td><td>${mailide.value}</td><td>${addresse.value}</td><td>${statee.value}</td><td>${countrye.value}</td><td>${gendere.textContent}</td><td>${foode.textContent}</td><td>${pincodee.value}</td></tr>`
       body.innerHTML +=d
       
}


