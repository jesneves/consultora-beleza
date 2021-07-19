const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert('E-mail cadastrado com sucesso!')
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    }

    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content');

    let carregando = '<img width="50px" src="./assets/loading.gif" alt="Carregando">';
    let pronto = '<p>Cadastrado com sucesso!<p>'
// '   <a href="index.html"><button id="button">Ir para home</button></a>';

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})
