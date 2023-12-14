const form = document.getElementById('myForm');

const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('submit', (e) => {
  e.preventDefault;

  const fullName = document.getElementById('fname');

  alert(`thank you ${fullName.value} for submitting, this is a demo page`);
})