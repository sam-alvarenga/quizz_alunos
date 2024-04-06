/* Parágrafo onde será exibida a pergunta */
const question = document.querySelector("#question");
/* div onde será exibida as respostas */
const answersBox = document.querySelector("#answersBox");
//elemento pai one serão exibidas as perguntas
const quizContainer = document.querySelector("#quizz-container");
//elemento pai onde serão exibidas as respostas
const scoreContainer = document.querySelector("#score-container");
//explicação de vetores "Arrays", sempre que for declarar um array usamos [] se for texto declarar 'a', 'b', 'c' e se fr número declarar normal sem aspas. 
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

const questions = [
    /* Nó que representa uma pergunta */
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

//Substituição do layout pela primeira questão
function init() {
    createQuestion(0)
}

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

        answerTemplate.setAAtribute("correct-answer", answer["correct"]);

        //remove classe de hide e template do template 
        answersTemplate.ClassList.remove("hide");
        answersTemplate.ClassList.remove("answer-template");

        //Insere template na tela 
        answersBox.appendChild(answerTemplate);


    });

    //Cria eventos em todos os botões
    const buttons = answersBox.querySelectorAll("button");

    buttons.forEach(function (button) {
        buttons.addEventListener("click", function () {
            checkAnswer(this, buttons);
        });
    });

    //Incrementa o número atual de questões
    actualQuestion++;
}

function checkAnswer(btn, buttons) {
    //Exibir respostas erradas e a certa
    buttons.forEach(function (button) {

        if (button.getAttribute("correct-answer") === "true") {
            button.ClassList.add("correct-answer");
            //checa se o usuário acertou
            if (btn === button) {
                //incrementa os pontos 
                points++;
            }
        } else {
            button.ClassList.add("wrong-answer");
        }
    });

};

function nextQuestion() {
    //Time para ver se acertou ou errou 
    setTimeout(function () {

        //checa se ainda há mais perguntas 
        if (actualQuestion >= questions.length) {

            //apresenta msg de sucesso
            showSuccessMessage();
            return;
        }

        createQuestion(actualQuestion)

    }, 1000);
}

//Tela final
function showSuccessMessage() {

    hideOrShowQuizz();

    //calc score
    const score = ((points / questions.length) * 100).toFixed
    const scoreDisplay = document.querySelector("#display-score span");

    scoreDisplay.textContent = score.toString();

    //altera número de perguntas corretas
    const correctAnswers = document.querySelector
        ("#correct-answer")
    correctAnswers.textContent = points;

    //alterar total de perguntas
    const totalQuestions = document.querySelector
        ("#questions-qty");
    totalQuestions.textContent = questions.length;
}

//Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function () {
    actualQuestion = 0;
    points = 0;
    hiderOnShowQuizz()
    init();
});

//mostra ou exibi o quizz
function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

//inicialização
init();







