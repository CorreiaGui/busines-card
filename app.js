document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true,
    })
    .type("Hi, my name's Gui Correia!", {delay: 900}).delete(26)
    .type("I am a development student", {delay: 900}).delete(26)
    .go();
})

function btnRedesSociais(str){
    const redesSociais = {
        'linkedin': 'https://www.linkedin.com/in/guilherme-correia-353629224',
        'github': 'https://github.com/CorreiaGui',
        'gmail': 'mailto:gc.correia21@gmail.com',
        'instagram': 'https://www.instagram.com/correiagui_/'
    };
    const url = redesSociais[str];
    url ? window.location.href = url : console.error('Rede social não reconhecida');
}