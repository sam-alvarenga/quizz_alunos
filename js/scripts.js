/* Parágrafo onde será exibida a pergunta */
const question = document.querySelector("#question");
/* div onde será exibida as respostas */
const answersBox = document.querySelector("answersBox");
//elemento pai one serão exibidas as perguntas
const quizContainer = document.querySelector("#quizz-container");
//elemento pai onde serão exibidas as respostas
const scoreContainer = document.querySelector("#score-container");
//explicação de vetores "Arrays", sempre que for declarar um array usamos [] se for texto declarar 'a', 'b', 'c' e se fr número declarar normal sem aspas. 
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

const question = [
    /* Nó que representa um pergunta */
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "sistena operacional ",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },

    {
        "question": "Uma forma de declacar variável em Javascript ",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS",
        "ansewers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },

]

//create a question 
function createQuestion(i) {

    //limpa questão anterior
    const oldButtons = answersBox.querySelectorAll("button");

    /* oldButtons = [button, button, button, button] */

    //percorre todas as posições do array limpando os botões que já estão na tela
    oldButtons.forEach(function (btn) {
        btn.remove();

    });

    //altera o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    //altera o texto da questão atual de acordo com as questões do arquivo json
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;


    //Insere alternativas 
    question[i].ansewers.forEach(function (answer, i) {

        //Altera texto do template 
        const ansewerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i]
        answerText.textContent = answer['answer'];

    })
}

