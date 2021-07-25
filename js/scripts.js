function reloadPage(){
  // Sem redimencionamento à 100ms!
  location.reload();
}

var reload;
window.onresize = function(){
clearTimeout(reload);
reload = setTimeout(reloadPage, 100);
};


function enviar() {
  var nome = document.getElementById('name').value;
  var telefone = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;

  var texto = 'Nome: ' + nome + '; Telefone: ' + telefone + '; Email: ' + email; // como quiser formatar

  return true;
  // console.log(texto);
}

$(function () {
  $('#header').load('../html/header.html');
  $('#footer').load('../html/footer.html');
  // $('#scripts').load('html/importScripts.html');

});

$(document).ready(function () {
  $('.slider').slider({ full_width: true });
});
// function modalMyScript() {
//   var modal = document.getElementById('myModal');

//   // Get the image and insert it inside the modal - use its "alt" text as a caption
//   var img = document.getElementById('myImg');
//   var modalImg = document.getElementById('img01');
//   var captionText = document.getElementById('caption');
//   img.onclick = function () {
//     modal.style.display = 'block';
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   };

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName('close')[0];

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//     modal.style.display = 'none';
//   };
//   return true;
// }

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


$(function () {
  var imgPromotions = document.getElementById("promotions");
  var windowWidth = window.innerWidth;
  var numberOfImg = 0;
  var imgIterator = '';
  var imgIterator2 = '';

  if (windowWidth >= 611 && windowWidth <= 800) {
    numberOfImg = 9;
  }

  if (windowWidth > 800 && windowWidth <= 1200) {
    numberOfImg = 6;
  }

  if (windowWidth > 1200 && windowWidth <= 1600) {
    numberOfImg = 4;
  }

  if (windowWidth > 1600){
    numberOfImg = 3;
  }

  for (let i = numberOfImg; i > 0; i--) {
    imgIterator = '<div class="img-promo-' + i +'"> <a href=""><img id="' + i +'" src="../img/promotion' + i +'.jpg" alt="' + i +' imagem de produto na promoção"/></a></div>' + imgIterator2;
    imgIterator2 = imgIterator;
  }

  imgPromotions.innerHTML = imgIterator;

  // document.location.reload();

  let withoutLogo = document.getElementById("id-logo");
  let menu = document.getElementById("menu");
  if (windowWidth < 600) {
    withoutLogo.innerHTML;
    menu.innerHTML = '<nav class="nav-home"><div class="menu-drop">'+
    '<div class="btn-menu">'+
      '<a type="button" id="menu-btn" name="drop">'+
        '<i class="fas fa-bars" aria-hidden="true"></i>'+
      '</a>'+
    '</div>'+
    '<div class="drop-content">'+
  '<a href="#">Home</a>'+
  '<a href="../html/tips.html">Dicas</a>'+
  '<a href="../html/promotions.html">Promoções</a>'+
  '<a href="../html/contact.html">Contato</a>'+
  '<a href="../html/about.html">Sobre Nós</a>'+
    '</div>'+
  '</div></nav>';

  } else {
    withoutLogo.innerHTML = '<a href="/index.html"><img src="./img/logo-consultora.jpg" alt="logo da página" /></a>';
  //   menu.innerHTML = ' <nav class="nav-home">'+
  //   '<a href="#">Home</a>'+
  // '<a href="../html/tips.html">Dicas da Jess</a>'+
  // '<a href="../html/promotions.html">Promoções</a>'+
  // '<a href="../html/contact.html">Contato</a>'+
  // '<a href="../html/about.html">Sobre Nós</a>'+
  // '</nav>';
  
    // menu.innerHTML =   '<!-- Dropdown Trigger -->'+
    // '<a class="dropdown-trigger btn" href="#" data-target="dropdown1">Drop Me!</a>'+
  
    // '<!-- Dropdown Structure -->'+
    // '<ul id="dropdown1" class="dropdown-content">'+
    //   '<li><a href="#!">one</a></li>'+
    //   '<li><a href="#!">two</a></li>'+
    //   '<li class="divider" tabindex="-1"></li>'+
    //   '<li><a href="#!">three</a></li>'+
    //   '<li><a href="#!"><i class="material-icons">view_module</i>four</a></li>'+
    //   '<li><a href="#!"><i class="material-icons">cloud</i>five</a></li>'+
    // '</ul>';


    function GetCards() {
      let showCards = document.getElementById("promotionCards");
      let arrayOfHtml = [];
      // showCards.innerHTML = '<div class="buttons-line-1">';
    
      for (let i = 1; i < 8; i++) {
        arrayOfHtml.push('<div class="promo-card" id="' + i + '">'+
          '<div class="img-page-promo">'+
              '<a href="#"><img src="../img/promotion' + i +'.jpg" alt="">'+
              '<h6>Deo Parfum Luna Intenso</h6></a>'+
              '</div>'+
        '<p>'+
          'Compre diretamente do site da <strong>Avon</strong> e receba na'+
          'comodidade de sua casa.'+
        '</p>'+
        '<nav><a target="_blank" href="https://www.jesneves.loja.avon.com.br" class="waves-effect waves-light btn" >VER PROMOÇÃO</a></nav>'+
      '</div>');
      }
      // showCards.innerHTML = '</div>'
    
      showCards.innerHTML = arrayOfHtml;
      
      console.log("Estoy aquí");
    }
  }
});



