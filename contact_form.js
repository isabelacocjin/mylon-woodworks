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



const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, "");
});


const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

const appointmentDate = document.getElementById("appointmentDate");


const today = new Date();


const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const minDate = `${year}-${month}-${day}`;

appointmentDate.min = minDate;

const appointmentNotes = document.getElementById("appointmentNotes"); 
appointmentNotes.value = "";


const zipInput = document.getElementById('zipInput');

zipInput.addEventListener('keydown', (e) => {

  const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
  
  if (allowedKeys.includes(e.key)) {
    return;
  }


  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
});