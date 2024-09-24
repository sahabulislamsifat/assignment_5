// Reduce balance from Available Balance
const balanceBtn = document.getElementById("available-balance");
const donateBtn = document.getElementById("btn-donate");
const inputAmount = document.getElementById("input-amount");
const updateBalance = document.getElementById("donated-amount");

donateBtn.addEventListener("click", function () {
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
  inputAmount.value = "";
});

// History Button
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("main-card-section").classList.add("hidden");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("main-card-section").classList.remove("hidden");
});
