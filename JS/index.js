document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email === "robiul@gmail.com" && password === "secret") {
    window.location.href = "transaction.html";
  } else {
    window.alert("Wrong email or password!!!");
  }
});
