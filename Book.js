let card = document.getElementById('card-number');
let cvv=document.getElementById("card-cvv")
let amount =document.getElementById("payment-amount");
let Method =document.getElementById("payment-Method");
let submit = document.getElementById('submit-btn');
submit.addEventListener("click",function (e) {
 e.preventDefault();
 if (card.value===""|| cvv.value ==="" ||amount.value===""||Method.value==="") {
 alert("Please Enter Data !!!");
}
 else{
 alert(`Payment has been made. We wish you a pleasant stay ✅`)
 }
})



