// Reduce balance from Available Balance
const balanceBtn = document.getElementById("available-balance");
const donateBtn = document.getElementById("btn-donate");
const inputAmount = document.getElementById("input-amount");
const updateBalance = document.getElementById("donated-amount");
// Donation Template  1
donateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const currentBalance = parseFloat(balanceBtn.innerText);
  const donationAmount = parseFloat(inputAmount.value);
  const updateBalanceValue = parseFloat(updateBalance.innerText);

  if (
    isNaN(donationAmount) ||
    donationAmount < 0 ||
    donationAmount >= currentBalance
  ) {
    alert("invalid Donation Amount");
    return;
  }

  const newBalance = currentBalance - donationAmount;
  updateBalance.innerText = updateBalanceValue + donationAmount;

  balanceBtn.innerText = newBalance.toFixed(2);
  my_modal_1.showModal();
  inputAmount.value = "";
});

// Donation Template  2
const balanceBtn2 = document.getElementById("btn-donate-2");
balanceBtn2.addEventListener("click", function () {
  const currentBalance = parseFloat(balanceBtn.innerText);
  const donationAmount = parseFloat(inputAmount.value);
  const updateBalanceValue = parseFloat(updateBalance.innerText);
  console.log(donationAmount)

  if (
    isNaN(donationAmount) ||
    donationAmount < 0 ||
    donationAmount >= currentBalance
  ) {
    alert("invalid Donation Amount");
    return;
  }

  const newBalance = currentBalance - donationAmount;
  updateBalance.innerText = updateBalanceValue + donationAmount;

  balanceBtn.innerText = newBalance.toFixed(2);
  my_modal_1.showModal();
  inputAmount.value = "";
});

// History Button Toggle
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("main-card-section").classList.add("hidden");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("main-card-section").classList.remove("hidden");
});
