//efeito de esconder formulário de cadastro
$(document).ready(function () {
  $("#botao-cadastrar").click(
    function () {
      $("#form-cadastrar").slideToggle("slow");
      $("#section-login").slideToggle("slow")
      $("#botao-cadastrar").hide("slow")
    }
  )
});

// Ativar alert no botão cadastrar
function cadastro() {
  alert("Cadastro realizado com sucesso!")
  window.location.href = "index.html";
}