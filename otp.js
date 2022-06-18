let submit = document.querySelector("button");

submit.addEventListener("click", otpFun);

// alert("your one time password is 123456. Do not share with anyone!");
function otpFun(event) {

   event.preventDefault();

   let storedOTP = "123456";
   let enteredOTP = document.querySelector("#input").value;
   if (enteredOTP == storedOTP) {
      alert("Payment Successful!");
      window.location.href = "Success.html";
   } else {
      alert("Invalid OTP");
      window.location.href = "http://127.0.0.1:5500/Payment%20part/payment.html";
   }
}