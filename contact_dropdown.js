document.addEventListener("DOMContentLoaded", function () {

  const projectSelect = document.getElementById("projectSelect");
  const messageBox = document.getElementById("otherMessage");


  if (!projectSelect || !messageBox) {
    console.error("Dropdown or textarea not found. Check your IDs.");
    return;
  }

  messageBox.style.display = "none";


  projectSelect.addEventListener("change", function () {
    if (this.value === "other") {
      messageBox.style.display = "block";
      messageBox.value = "";
    } else {
      messageBox.style.display = "none";
      messageBox.value = "";
    }
  });

});