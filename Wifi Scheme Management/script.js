document.getElementById("addschemebtn").addEventListener("click", function () {
  const schemeName = document.getElementById("schemeName").value.trim();
  const connectionType = document.getElementById("connectionType").value.trim();
  const speed = document.getElementById("speed").value.trim();
  const dataLimit = document.getElementById("dataLimit").value.trim();
  const price = document.getElementById("price").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!schemeName || !connectionType || !speed || !dataLimit || !price) {
    errorMessage.textContent = "Please fill out all fields";
  } else {
    errorMessage.textContent = "";
    alert("Scheme submitted successfully!");
    // Optional: Clear form
    document.getElementById("wifiForm").reset();
  }
});
