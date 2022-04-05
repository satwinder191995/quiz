var questions = [{
  question: "What is 2*5?",
  choices: [2, 5, 10, 15, 20],
  correctAnswer: 10
}, {
  question: "What is 3*6?",
  choices: [3, 6, 9, 12, 18],
  correctAnswer: 18
}, {
  question: "What is 8*9?",
  choices: [72, 99, 108, 134, 156],
  correctAnswer: 72
}, {
  question: "What is 1*7?",
  choices: [4, 5, 6, 7, 8],
  correctAnswer: 7
}, {
  question: "What is 8*8?",
  choices: [20, 30, 40, 50, 64],
  correctAnswer: 64
}]; 
var currentQuestion = 0;
var score=0;
var high = window.document.querySelector(".high");
high.addEventListener("click",function(){
   var sectionScore = window.document.querySelector(".remove");
  sectionScore.remove();
  highScore();
});
var mainPage = function (){
  var high = window.document.querySelector(".high");
  if(high != null){
  high.remove();
  }
  var main = document.createElement("section");
  main.className = "remove";
  var h1 = document.createElement("h1");
  var divCenter = document.createElement("div");
  divCenter.className= "high";
  var divLeft = window.document.querySelector(".div-left");
  divCenter.textContent="View High scores";
  console.log("this is "+divLeft);
  mainSection.appendChild(main);
  divLeft.appendChild(divCenter);
  h1.textContent="Coding Quiz Challange";
  main.appendChild(h1);
  var p = document.createElement("p");
  p.textContent="Try to answer the following code-related questions within the time limit . Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  main.appendChild(p);
  var button = document.createElement("button");
  button.textContent="Start Quiz";
  button.className="start";
  main.appendChild(button);
  var high = window.document.querySelector(".high");
high.addEventListener("click",function(){
  var sectionScore = window.document.querySelector(".remove");
      sectionScore.remove();
  highScore();
});
  
}

var newQuestion = function(){
  var section = window.document.querySelector(".remove");
  section.remove();
var sectionQuiz = document.createElement("section");
sectionQuiz.className = "remove";
var question = document.createElement("h1");
mainSection.appendChild(sectionQuiz);
sectionQuiz.appendChild(question);
question.className="questionHeading";
question.textContent=questions[currentQuestion].question;
var choices = document.createElement("ol");
sectionQuiz.appendChild(choices);
num = 1;
for(i=0;i<questions[currentQuestion].choices.length;i++){
  
  var li = document.createElement("li");
  li.setAttribute("id","select"+num);
  li.textContent= questions[currentQuestion].choices[i];
  choices.appendChild(li);
 num++
}
var ans = document.createElement("h2");
ans.className="result";
// ans.textContent="right";
sectionQuiz.appendChild(ans);

};   
var saveScore = function(){
  document.getElementById("footer").innerText = "";
  clearInterval(myInterval)
  var section = window.document.querySelector(".remove");
  section.remove();
  var sectionQuiz = document.createElement("section");
  sectionQuiz.className = "remove";
  var h2 = document.createElement("h2");
  mainSection.appendChild(sectionQuiz);
  h2.textContent="All done!";
  sectionQuiz.appendChild(h2);
  
  var h3 = document.createElement("h3");
  h3.textContent="Your final score is  "+score;
  sectionQuiz.appendChild(h3);
  
  var lable = document.createElement("lable");
  lable.textContent="Enter initials";
  var input = document.createElement("input");
  input.setAttribute("id","initials");
  sectionQuiz.appendChild(lable);
  sectionQuiz.appendChild(input);
  var button = document.createElement("button");
  button.textContent="Submit";
  button.className="submit";
  sectionQuiz.appendChild(button);
  }; 


var highScore = function(){
  document.getElementById("footer").innerText = "";
    var high = document.createElement("section");
    high.className = "remove";
    var h2 = document.createElement("h2");

    high.appendChild(h2);
    var p = document.createElement("p");
    mainSection.appendChild(high);
    high.appendChild(p);
    var json = localStorage.getItem("highScore");
    console.log(json);
    try {
      // if jQuery
      json = JSON.parse(json);
      // if plain js
    }
    catch(e) {
      // forget about it :)
    }
   
    var max = [];
    if (json == null || json == ""){
      var msg = "There is no high score yet";
      p.textContent="";
      h2.textContent=msg;
    }else{
    for (i=0;i<json.length;i++){
       max.push(json[i].score);
      // var highlocal = Integer.parseInt(json(i).score);
       
    }
    var final= Math.max(...max);
    h2.textContent="High Score is "+final;
    for (i=0;i<json.length;i++){
      if (json[i].score == final){
        var player = json[i].initials;
      }
    }
    p.textContent="Initials: " + player+"  Score:" +final;
  }
 
  console.log(final);
    // console.log(result);
    console.log(json)
   
    

    var back = document.createElement("button");
  back.textContent="Go Back";
  back.className="back";
  var clear = document.createElement("button");
  clear.textContent="Clear the high Score";
  clear.className="clear";
  high.appendChild(back);
  high.appendChild(clear);
}
var mainSection = window.document.querySelector(".quiz");
var header = window.document.querySelector(".header");
mainSection.addEventListener("click",function(event){
  if(event.target.matches(".high")){
    alert("hello");
}
})
function time (timer){
  
  myInterval= setInterval(function () {
    if(timer === 0){
      clearInterval(myInterval);

      saveScore();
    }else{
      timer= timer - 1 ;
      document.getElementById("timer").innerText=timer;
    }
   }, 1000);
}
mainSection.addEventListener("click",function(event){
 
  if(event.target.matches(".start")){
    var high = window.document.querySelector(".high");
    high.remove();
    var timer = 200;
     time(timer);

    var setTimer = myInterval;
  
    
    newQuestion();
  }else if(event.target.matches("li"))
  {
  
            current = event.target.getAttribute("id");
            var userSelected = document.getElementById(current).innerText;
            if(userSelected == questions[currentQuestion].correctAnswer)
              {
                
                  var result = "right";
                  score = score + 1;
                  document.getElementById("footer").innerText = result;
              }else
              {
                clearInterval(myInterval);
                var current = document.getElementById("timer").innerText;
                timer= parseInt(current) - 25;
                time(timer);
                var result = "wrong";
                document.getElementById("footer").innerText = result;
              }
              currentQuestion++;
              console.log("question number is"+currentQuestion);
              // var rem = window.document.querySelector(".remove");
              // rem.remove();
              if(currentQuestion< questions.length)
              {
              newQuestion();
  
      }else{
       saveScore();
      }
  }else if(event.target.matches(".submit")){
   
    while(initial == null){
      var initial = document.getElementById("initials").value;
      console.log(initial);
    }
    var obj = [];
      obj = localStorage.getItem("highScore");
      try {
        // if jQuery
        obj = JSON.parse(obj);
        // if plain js
      }
      catch(e) {
        // forget about it :)
      }
    //   if(get!=null || get!== ""){
     
    //   obj = JSON.parse(get);
    //   console.log ("obj iss"+ obj)
    // }
    console.log(obj);
    var join = [];
    var array = 
    {
      "initials":initial,
      "score":score
    } 
    console.log(array);
   if(obj != null){
     obj.push(array);
    console.log(join);
    localStorage.setItem("highScore",JSON.stringify(obj));
   }else{
     join.push(array);
     localStorage.setItem("highScore",JSON.stringify(join));
   }
   console.log(join);
  // for(i=0;i<array.length;i++){
  // var join = obj.push(array);
  // }

  console.log("joint is "+join);
  var sectionScore = window.document.querySelector(".remove");
  sectionScore.remove();
  highScore();
  }
  else if(event.target.matches(".back")){
    // clearInterval(myInterval);
    var rem = window.document.querySelector(".remove");
    currentQuestion =0;
    score= 0;
    rem.remove();
  mainPage();
 
    }
    else if(event.target.matches(".clear")){
      var obj = []
      localStorage.removeItem("highScore");
      alert("High scores are cleared");
      // var high = window.document.querySelector(".high");
      // high.remove();
      var rem = window.document.querySelector(".remove");
      rem.remove();
      mainPage();
    }
})

