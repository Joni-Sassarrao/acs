const body = document.body;

function banner(){
    let header = document.createElement('header');
    let textoHeader = document.createElement('p');
    textoHeader.innerHTML = "Bem-vindo ao meu site professional";

    body.appendChild(header);
    header.append(textoHeader);
}

banner();

function apresentacao(){
    let containerDiv = document.createElement('div');
    let h2_sozinho = document.createElement('h2');
    h2_sozinho.innerHTML = "Apresentação Pessoal"

    body.appendChild(containerDiv);
    containerDiv.append(h2_sozinho);

    containerDiv.classList('container');
    h2_sozinho.classList('sozinho');

    let imagensDiv = document.createElement('div');
    let h2Cocchi = document.createElement('h2')
    h2Cocchi.innerHTML = "Gustavo Estevam Cocchi"

    containerDiv.appendChild(imagensDiv);
    imagensDiv.appendChild(h2Cocchi);

    

    



    let imagem_cocchi = document.createElement('img');
    imagem_cocchi.src = 'imgs/cocchi.png'
}

apresentacao();
//h2.setAttribute('type', 'text')
//h2.classList.add('')