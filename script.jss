const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwDsLls_drbZI21E7FKnROW0zNjHNFBOb1gLHrj_3pLhI7ihCyyBvn0qCLDSnJiVgIi/exec";

function enviar(status) {
  const nome = document.getElementById("nome").value.trim();

  if (!nome) {
    alert("Informe seu nome");
    return;
  }

  fetch(URL_SCRIPT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      status: status
    })
  });

  alert("Resposta enviada com sucesso!");
  document.getElementById("nome").value = "";
}

function abrirMapa() {
  window.open(
    "https://maps.app.goo.gl/oRpxdxofpsLVWyne6",
    "_blank"
  );
}

function toggleModal() {
  const modal = document.getElementById("modalPresente");
  modal.style.display =
    modal.style.display === "flex" ? "none" : "flex";
}
