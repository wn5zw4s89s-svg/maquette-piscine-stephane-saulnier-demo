document.addEventListener("submit", function(e){
  var f = e.target;
  if (f && f.classList.contains("devis")) {
    e.preventDefault();
    var note = f.querySelector(".form-note");
    if (note) note.textContent = "Ce formulaire n'envoie rien. Ceci est une maquette de démonstration.";
  }
});
