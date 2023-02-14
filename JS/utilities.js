function handleButtonClick(inputAmount, previousBalance, total) {
  const input = parseFloat(document.getElementById(inputAmount).value);
  const previous = parseFloat(document.getElementById(previousBalance).innerText);
  const totalBalance = parseFloat(document.getElementById(total).innerText);
  if (isNaN(input)) {
    window.alert("Please Enter a number!!!");
  } else {
    if (inputAmount === "deposit-amount") {
      document.getElementById(previousBalance).innerText = input + previous;
      document.getElementById(total).innerText = totalBalance + input;
    } else {
      if (totalBalance < input) {
        window.alert("You don't have that much money!!!");
      } else {
        document.getElementById(previousBalance).innerText = input + previous;
        document.getElementById(total).innerText = totalBalance - input;
      }
    }
  }

  document.getElementById(inputAmount).value = "";
}
