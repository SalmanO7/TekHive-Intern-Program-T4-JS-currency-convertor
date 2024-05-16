const convert = () => {
  let amount = document.querySelector("#form").value;
  let fromCurrency = document.getElementById("from").value;
  let toCurrency = document.getElementById("to").value;

  let url = `https://api.exchangerate-api.com/v4/latest/` + fromCurrency;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let rate = data.rates[toCurrency];
      let convertAmount = amount * rate;
      document.getElementById("result").innerHTML =
        amount + " " + fromCurrency + " " + convertAmount + " " + toCurrency;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
