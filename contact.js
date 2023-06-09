let btn = document.getElementById('btn');
let name=document.getElementById("name")
let username =document.getElementById("name");
let email =document.getElementById("email");
let subject =document.getElementById("subject");
let message =document.getElementById("message");
btn.addEventListener("click",function (e) {
	e.preventDefault();
	if (username.value===""|| email.value ==="" ||subject.value===""||message.value==="") {
		alert("Please Enter Data !!!")
	}else{
		alert(`Message has been sent successfully, Thanks for participation`)	
	}
})

