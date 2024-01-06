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
    if(str === 'linkedin'){
        window.location.href = 'https://www.linkedin.com/in/guilherme-correia-353629224';
    }
    if(str === 'github'){
        window.location.href = 'https://github.com/CorreiaGui';
    }
    if(str === 'whatsapp'){
        window.location.href = 'https://wa.me/5511932052850';
    }
    if(str === 'gmail'){
        window.location.href = 'mailto:gc.correia21@gmail.com';
    }
    if(str === 'instagram'){
        window.location.href = 'https://www.instagram.com/correiagui_/';
    }
}