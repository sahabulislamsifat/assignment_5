// Reduce balance from Available Balance
const availableBalance = document.getElementById("available-balance").innerText;
const availableBalanceNumber = parseFloat(availableBalance);

// addEvent Handler to donation
document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationNoakhali = parseFloat(
      document.getElementById("input-amount").value
    );

    const balance = parseFloat(
      document.getElementById("donated-amount").innerText
    );
    const addedDonationAmount = donationNoakhali + balance;
    // Update Donated Amount in the UI/DOM
    document.getElementById("donated-amount").innerText = addedDonationAmount;
  });

const reduceBalance = addedDonationAmount - availableBalanceNumber;
document.getElementById("available-balance").innerText = reduceBalance;
