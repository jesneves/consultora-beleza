function enviar() {
  var nome = document.getElementById('name').value;
  var telefone = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;

  var texto = 'Nome: ' + nome + '; Telefone: ' + telefone + '; Email: ' + email; // como quiser formatar

  return true;
  // console.log(texto);
}

$(function () {
  $('#header').load('header.html');
  $('#imports').load('imports.html');
  $('#footer').load('footer.html');
});

$(document).ready(function () {
  $('.slider').slider({ full_width: true });
});
function modalMyScript() {
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById('img01');
  var captionText = document.getElementById('caption');
  img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
  return true;
}

$(document).ready(function () {
  $('#subir').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

function Enviar() {
  var nome = document.getElementById('nomeid');

  if (nome.value != '') {
    alert(
      'Obrigado sr(a) ' +
        nome.value +
        ' os seus dados foram encaminhados com sucesso'
    );
  }
}
