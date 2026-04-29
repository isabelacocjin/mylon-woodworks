/*"other" option in dropdown; there's smt wrong*/


document.addEventListener("DOMContentLoaded", function () {

  const projectSelect = document.getElementById("projectSelect");
  const messageBox = document.getElementById("otherMessage");

  // Safety check
  if (!projectSelect || !messageBox) {
    console.error("Dropdown or textarea not found. Check your IDs.");
    return;
  }

  // Hide textarea by default (in case CSS fails)
  messageBox.style.display = "none";

  // Listen for dropdown change
  projectSelect.addEventListener("change", function () {
    if (this.value === "other") {
      messageBox.style.display = "block";
    } else {
      messageBox.style.display = "none";
    }
  });

});