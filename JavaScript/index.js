// Reduce balance from Available Balance
const mainBalance = document.getElementById("available-balance");
const donateBtn = document.getElementById("btn-donate1");
const inputAmount = document.getElementById("input-amount1");
const updateBalance = document.getElementById("donated-amount1");
// Donation Template  1
donateBtn.addEventListener("click", function () {
  const currentBalance = parseFloat(mainBalance.innerText);
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

  let div = document.createElement("div");
  div.innerHTML = `<div class= "border rounded-lg p-5 shadow-lg my-10">
            <h2 class= "text-2xl my-5 font-semibold">${donationAmount} Donate for Flood at Noakhali, Bangladesh</h2>
            <p class= "text-xl font-semibold mb-5 ml-5">Date: ${new Date()}</p>
          </div>`;
  document.getElementById("history-container").appendChild(div);

  const newBalance = currentBalance - donationAmount;
  updateBalance.innerText = updateBalanceValue + donationAmount;

  mainBalance.innerText = newBalance.toFixed(2);

  // my_modal_1.showModal();
  inputAmount.value = "";
});

// Donation Template  2
document.getElementById("btn-donate2").addEventListener("click", function () {
  const inputValue2 = parseFloat(
    document.getElementById("input-amount2").value
  );
  const cardAmount = parseFloat(
    document.getElementById("donated-amount2").innerText
  );
  const mainBalanceValue = parseFloat(
    document.getElementById("available-balance").innerText
  );

  if (
    isNaN(inputValue2) ||
    inputValue2 < 0 ||
    inputValue2 >= mainBalanceValue
  ) {
    alert("invalid Donation Amount");
    return;
  }

  let div = document.createElement("div");
  div.innerHTML = `<div class= "border rounded-lg p-5 shadow-lg my-10">
            <h2 class= "text-2xl my-5 font-semibold">${inputValue2}  Donate for Flood Relief in Feni,Bangladesh</h2>
            <p class = "text-xl font-semibold mb-5 ml-5">Date: ${new Date()}</p> 
          </div>`;
  document.getElementById("history-container").appendChild(div);

  document.getElementById("donated-amount2").innerText =
    cardAmount + inputValue2;

  mainBalance.innerText = mainBalanceValue - inputValue2;
  mainBalance.innerText = mainBalance.toFixed(2);

  // my_modal_1.showModal();
  document.getElementById("input-amount-2").value = "";
});

// Donation Template  3
document.getElementById("btn-donate-3").addEventListener("click", function () {
  const inputValue3 = parseFloat(
    document.getElementById("input-amount-3").value
  );
  const cardAmount3 = parseFloat(
    document.getElementById("donated-amount-3").innerText
  );
  const mainBalanceValue3 = parseFloat(
    document.getElementById("available-balance").innerText
  );

  if (
    isNaN(inputValue3) ||
    inputValue3 < 0 ||
    inputValue3 >= mainBalanceValue3
  ) {
    alert("invalid Donation Amount");
    return;
  }

  let div = document.createElement("div");
  div.innerHTML = `<div class= "border rounded-lg p-5 shadow-lg my-10">
            <h2 class= "text-2xl my-5 font-semibold">${inputValue3}  Aid for Injured in the Quota Movement </h2>
            <p class = "text-xl font-semibold mb-5 ml-5">Date:${new Date()}</p> 
          </div>`;
  document.getElementById("history-container").appendChild(div);

  document.getElementById("donated-amount-3").innerText =
    cardAmount3 + inputValue3;

  mainBalance.innerText = mainBalanceValue3 - inputValue3;
  mainBalance.innerText = mainBalance.toFixed(2);

  // my_modal_1.showModal();
  document.getElementById("input-amount-3").value = "";
});

// History Button Toggle
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("main-card-section").classList.add("hidden");
  document.getElementById("history-btn").classList.add("bg-btn-bg");
  document.getElementById("donation-btn").classList.remove("bg-btn-bg");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("main-card-section").classList.remove("hidden");
  document.getElementById("history-btn").classList.remove("bg-btn-bg");
  document.getElementById("donation-btn").classList.add("bg-btn-bg");
});
