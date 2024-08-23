const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"como você acha que as escolas poderiam integrar melhor o cuidado com os animais ao curriculo, promovendo tanto a educação quanto o envolvimento em esportes?",
        alternativas: [
            {
                texto:"incluir atividades esportivas que envolvam cuidados com animais, como equitação ou corrida com cães.",
                afirmacao: "a integração de esportes que envolvem animais pode proporcionar aos alunos experiências práticas de responsabilidade e cuidado. "
            },
    {
        texto:"criar projetos educativos que permitam aos alunos aprender sobre diferentes espécies e seu ambiente natural.",
        afirmacao:"projetos educativos sobre animais podem estimular o interesse dos alunos pela biologia e conservção, complementando seu aprendizado acadêmico."
    },
]
    }
];
    

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}