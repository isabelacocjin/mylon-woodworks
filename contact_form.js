// document.addEventListener("DOMContentLoaded", function () {

//   const projectSelect = document.getElementById("projectSelect");
//   const messageBox = document.getElementById("otherMessage");


//   if (!projectSelect || !messageBox) {
//     console.error("Dropdown or textarea not found. Check your IDs.");
//     return;
//   }

//   messageBox.style.display = "none";


//   projectSelect.addEventListener("change", function () {
//     if (this.value === "other") {
//       messageBox.style.display = "block";
//       messageBox.value = "";
//     } else {
//       messageBox.style.display = "none";
//       messageBox.value = "";
//     }
//   });

// });

const otherCheckbox = document.getElementById("otherServices");
const otherText = document.getElementById("otherText");

otherCheckbox.addEventListener("change", function () {
    if (this.checked) {
        otherText.style.display = "block";
    } else {
        otherText.style.display = "none";
        otherText.value = "";
    }
});

// NAME INPUT
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, "");
});

// PHONE INPUT
const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

const appointmentDate = document.getElementById("appointmentDate");

// Get today's date
const today = new Date();

// Format to YYYY-MM-DD
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const minDate = `${year}-${month}-${day}`;

// Prevent selecting past dates
appointmentDate.min = minDate;