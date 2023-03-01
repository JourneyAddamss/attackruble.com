const historyWall = document.getElementById("history-wall");
historyWall.classList.add("show");

// move input field and button up
inputField.classList.add("hide");
document.getElementById("check-button").classList.add("hide");
function resetForm() {
  inputField.classList.remove("hide");
  document.getElementById("check-button").classList.remove("hide");
  historyWall.classList.remove("show");
}
