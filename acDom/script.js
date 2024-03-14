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

    containerDiv.classList.add('container');
    h2_sozinho.classList.add('sozinho');

    let imagensDiv = document.createElement('div');
    let h2Cocchi = document.createElement('h2')
    h2Cocchi.innerHTML = "Gustavo Estevam Cocchi"

    containerDiv.appendChild(imagensDiv);
    imagensDiv.append(h2Cocchi);

    imagensDiv.classList.add('imagens');

    let imagem_div = document.createElement('div');

    imagem_div.classList.add('imagem');

    let imagem_cocchi = document.createElement('img');
    imagem_cocchi.src = 'imgs/cocchi.png'

    let imagem_texto = document.createElement('p');
    imagem_texto.innerHTML = "Olá! Meu nome é Gustavo Estevam Cocchi, e sou estudante da Fiap School e estou no último ano do ensino médio técnico. ";

    containerDiv.append(imagem_div);
    containerDiv.append(imagem_cocchi);
    containerDiv.append(imagem_texto)
    
    let h2_eu = document.createElement('h2');
    h2_eu.innerHTML = "João Pedro Sassarrão";

    let imagem_joni = document.createElement('img');
    imagem_joni.src = 'imgs/eu.jpg';

    let imagem_texto_2 = document.createElement('p');
    imagem_texto_2.innerHTML = "Olá! Meu nome é João Pedro Sassarrão e sou estudante da Fiap School e estou no último ano do ensino médio técnico.";

    containerDiv.append(h2_eu);
    containerDiv.append(imagem_div);
    containerDiv.append(imagem_joni);
    containerDiv.append(imagem_texto_2);

    let h2_munhoz = document.createElement('h2');
    h2_munhoz.innerHTML = "Pedro Munhoz";

    let imagem_munhoz = document.createElement('img');
    imagem_munhoz.src = 'imgs/munhoz.jpg';

    let imagem_texto_3 = document.createElement('p');
    imagem_texto_3.innerHTML = "Olá! Meu nome é Pedro Munhoz e sou estudante da Fiap School e estou no último ano do ensino médio técnico.";

    containerDiv.append(h2_munhoz);
    containerDiv.append(imagem_div);
    containerDiv.append(imagem_munhoz);
    containerDiv.append(imagem_texto_3);
}

apresentacao();

function habilidades(){
    let sessao = document.createElement('section');
    let h2_habilidades = document.createElement('h2');
    h2_habilidades.innerHTML = "Principais Habilidades";

    let div_card = document.createElement('div');
    div_card.classList.add('card');

    let h3_html = document.createElement('h3');
    h3_html.innerHTML = "HTML";

    let p_html = document.createElement('p');
    p_html.innerHTML = "HTML Básico";

    let h3_css = document.createElement('h3');
    h3_css.innerHTML = "CSS";

    let p_css = document.createElement('p');
    p_css.innerHTML = "CSS Básico";

    let h3_java = document.createElement('h3');
    h3_java.innerHTML = "JavaScript";

    let p_java = document.createElement('p');
    p_java.innerHTML = "JavaScript Básico";

    body.append(sessao);
    sessao.append(h2_habilidades);
    sessao.append(div_card);
    div_card.append(h3_html);
    div_card.append(p_html);
    div_card.append(h3_css);
    div_card.append(p_css);
    div_card.append(h3_java);
    div_card.append(p_java);
}

habilidades();

function contato(){
    let sessao_contato = document.createElement('div');
    let h2_form = document.createElement('h2');
    h2_form.innerHTML = "Formulário de Contato";

    let formulario = document.createElement('form');

    let label_nome = document.createElement('label');
    label_nome.setAttribute('for', 'nome');

    let input_nome = document.createElement('input');
    input_nome.setAttribute('type', 'text');
    input_nome.setAttribute('name', 'nome',);

    let label_email = document.createElement('label');
    label_email.setAttribute('for', 'email')

    let input_email = document.createElement('input');
    input_email.setAttribute('type', 'email');
    input_email.setAttribute('name', 'email');

    let label_msg = document.createElement('label');
    label_msg.setAttribute('for', 'mensagem');

    let areaTexto = document.createElement('textarea');
    areaTexto.setAttribute('id', 'mensagem');
    areaTexto.setAttribute('name', 'mensagem');
    areaTexto.setAttribute('rows', 4);
    
    let input_botao = document.createElement('input');
    input_botao.setAttribute('type', 'submit');
    input_botao.setAttribute('value', 'Enviar');

    body.append(sessao_contato);
    sessao_contato.append(h2_form);
    sessao_contato.append(formulario);
    formulario.append(label_nome);
    formulario.append(input_nome);
    formulario.append(label_email);
    formulario.append(input_email);
    formulario.append(label_msg);
    formulario.append(areaTexto);
    formulario.append(input_botao);
}

contato();

function final(){
    let final_footer = document.createElement('footer');
    let final_p = document.createElement('p')
    final_p.innerHTML = '&copy; 2024 - Todos os direitos reservados | Desenvolvido por , Gustavo Estevam Cocchi e Pedro Munhoz.'

    body.appendChild(final_footer);
    final_footer.append(final_p);
}

final();
//h2.setAttribute('type', 'text')
//h2.classList.add('')