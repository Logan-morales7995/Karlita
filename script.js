window.onload = function() {
  const envelope = document.querySelector('.envelope');
  setTimeout(() => {
    envelope.classList.add('open');
  }, 3000);  // Después de 3 segundos, el sobre se abre
};
