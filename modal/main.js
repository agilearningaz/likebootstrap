function openModal() {
  document.getElementById('myModal').classList.add('show');
}

document.getElementById('openmodal').addEventListener('click', openModal);

function closeModal() {
  document.getElementById('myModal').classList.remove('show');
}

document.getElementById('closemodal').addEventListener('click', closeModal);