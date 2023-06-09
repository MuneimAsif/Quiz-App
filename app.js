var question = [
    {
        question:'HTML Stands for _________________',
        options:['HTML','HTML','HyperText Markup Language','HTML',],
        correctAnswer:'HyperText Markup Language',
    },
    
    {
        question:'Css Stands for _________________',
        options:['CSS','CSS','Cascading Style Sheet','CSS',],
        correctAnswer:'Cascading Style Sheet',
    },
    {
        question:'Js Stands for _________________',
        options:['Js','Js','JavaScript','Js',],
        correctAnswer:'JavaScript',
    },
    
    {
        question:'SQL Stands for _________________',
        options:['SQL','SQL','Structures Query Language','SQL',],
        correctAnswer:'Structures Query Language',
    }
]
var indexNum = 0;
var marks = 0;
var displayQuestion = document.getElementById('displayQuestion')
var currentQuestionNumber = document.getElementById('currentQuestionNumber')
var totalQuestionNumber = document.getElementById('totalQuestionNumber')
var optionsParent = document.getElementById('optionsParent')
function renderQuestion(){
    var que = question[indexNum]
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = question.length;
    currentQuestionNumber.innerHTML = indexNum + 1;

    optionsParent.innerHTML = ""

    for(var i = 0; i < que.options.length; i++){
        optionsParent.innerHTML += ` <div class="col-md-6">
        <button onclick= "checkAns('${que.correctAnswer}','${que.options[i]}')" class=" btn bg-info w-100 py-3">${que.options[i]}</button>
    </div>`
    }
}
function nextQue(){
    indexNum++;
    renderQuestion()
}

function checkAns(a,b){
    if(a == b ){
    marks = marks + 10
    }
    console.log(marks)
  nextQue()
}
renderQuestion();