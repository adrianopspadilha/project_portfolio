const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.conteudo-principal');

//teste

function MudaPaginas() {
    //Classe que ativa o clique dos botões
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Classe que ativa as sections
    allSections.addEventListener('click', (e) => {
        //console.log(e.target);
        const id = e.target.dataset.id;
        if (id) {
            //remove seleção de outro botão
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //esconder outras sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

MudaPaginas();