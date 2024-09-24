// addEvent Handler to donation
document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationNoakhali = parseFloat(
      document.getElementById("donation-amount").value
    );
    console.log(donationNoakhali);
  });
