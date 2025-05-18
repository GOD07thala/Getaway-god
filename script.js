function generateOrderID() {
  const id = "ORD" + Math.floor(Math.random() * 1000000);
  document.getElementById("orderid").value = id;
}
function storePayment() {
  const upi = document.getElementById("upi").value;
  const amount = document.getElementById("amount").value;
  const orderid = document.getElementById("orderid").value;
  let payments = JSON.parse(localStorage.getItem("payments") || "[]");
  payments.push({ upi, amount, orderid });
  localStorage.setItem("payments", JSON.stringify(payments));
}
window.onload = function () {
  if (document.getElementById("orderid")) {
    generateOrderID();
  }
};
