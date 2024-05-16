function nextStep() {
  document.getElementById("order-step1").style.display = "none";
  document.getElementById("order-step2").style.display = "block";
}

function submitForm() {
  // Submit the form to the payment link
  window.location.href = "https://ncwallet.net/pay/98chico";
}