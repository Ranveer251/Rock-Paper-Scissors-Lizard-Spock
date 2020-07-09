const classes = [".red", ".blue", ".yellow", ".cian", ".purple"];
let score = 0;

$(".rulesBtn").on("click", () =>{
    $(".rules").removeClass("invisible");
    $(".dim-background").removeClass("invisible");
});

$(".cross").on("click", () =>{
    $(".rules").addClass("invisible");
    $(".dim-background").addClass("invisible");
});

let choice ="";
$(".step-1 .blue,.step-1 .red,.step-1 .yellow,.step-1 .purple,.step-1 .cian").on("click", (e) => {
  $(".step-1").addClass("invisible");
  $(".result").removeClass("invisible");
  let rand = Math.round(Math.random()*4);
  console.log(rand);
  choice = classes[rand];
  $(".compChoice " + choice).delay(700).fadeIn("slow");
  $(".compChoice " + choice).delay(1100).animate({right:0},"slow");
  $(".resultText1").delay(1200).fadeIn("slow");
  $(".myChoice").delay(1200).removeClass("mLeft");
  $(".compChoice").delay(1200).removeClass("mRight");
  if($(window).width()< 650){
    $(".buttonContainer").css("top", "280px");
    $(".preElement").addClass("invisible");
  } else{
    $(".preElement").delay(1000).fadeOut();
  }
});

$(".step-1 .blue").on("click", (e) => {
  let text = "";
  $(".myChoice .blue").removeClass("invisible");
  if(choice === ".red" || choice === ".cian"){
    text = "YOU WIN";
    score+=1;
    setTimeout(scoreUpdate, 1200);
    setTimeout(win,1200);
  } else if(choice === ".yellow" || choice === ".purple"){
    text = "YOU LOSE";
    score-=1;setTimeout(scoreUpdate, 1200);setTimeout(lose,1200);
  } else{
    text = "DRAW";
  }
  $(".resultText1 p").html(text);
});

$(".step-1 .red").on("click", (e) => {
  let text = "";
  $(".myChoice .red").removeClass("invisible");
  if(choice === ".yellow" || choice === ".purple"){
    text = "YOU WIN";
    score+=1;setTimeout(scoreUpdate, 1200);setTimeout(win,1200);
  } else if(choice === ".blue" || choice === ".cian"){
    text = "YOU LOSE";
    score-=1;setTimeout(scoreUpdate, 1200);setTimeout(lose,1200);
  } else{
    text = "DRAW";
  }
  $(".resultText1 p").html(text);
});

$(".step-1 .yellow").on("click", (e) => {
  let text = "";
  $(".myChoice .yellow").removeClass("invisible");
  if(choice === ".blue" || choice === ".purple"){
    text = "YOU WIN";
    score+=1;setTimeout(scoreUpdate, 1200);setTimeout(win,1200);
  } else if(choice === ".red" || choice === ".cian"){
    text = "YOU LOSE";
    score-=1;setTimeout(scoreUpdate, 1200);setTimeout(lose,1200);
  } else{
    text = "DRAW";
  }
  $(".resultText1 p").html(text);
});

$(".step-1 .purple").on("click", (e) => {
  let text = "";
  $(".myChoice .purple").removeClass("invisible");
  if(choice === ".blue" || choice === ".cian"){
    text = "YOU WIN";
    score+=1;setTimeout(scoreUpdate, 1200);setTimeout(win,1200);
  } else if(choice === ".red" || choice === ".yellow"){
    text = "YOU LOSE";
    score-=1;setTimeout(scoreUpdate, 1200);setTimeout(lose,1200);
  } else{
    text = "DRAW";
  }
  $(".resultText1 p").html(text);
});

$(".step-1 .cian").on("click", (e) => {
  let text = "";
  $(".myChoice .cian").removeClass("invisible");
  if(choice === ".yellow" || choice === ".red"){
    text = "YOU WIN";
    score+=1;setTimeout(scoreUpdate, 1200);setTimeout(win,1200);
  } else if(choice === ".blue" || choice === ".purple"){
    text = "YOU LOSE";
    score-=1;setTimeout(scoreUpdate, 1200);setTimeout(lose,1200);
  } else{
    text = "DRAW";
  }
  $(".resultText1 p").html(text);
});

$(".resultText1 button").on("click", () => {
    // let text = "";
    $(".step-1").removeClass("invisible");
    $(".result").addClass("invisible");
    $(".compChoice " + choice).fadeOut();
    $(".resultText1").fadeOut();
    $(".myChoice .red, .myChoice .blue, .myChoice .yellow, .myChoice .cian, .myChoice .purple").addClass("invisible");
    if($(window).width()< 650){
      $(".buttonContainer").css("top", "120px");
    } else{
      $(".preElement").fadeIn();
    }
    $(".circleElementLeft").addClass("invisible");
    $(".circleElementRight").addClass("invisible");
});

function scoreUpdate(){
    $(".scoreValue").html(score);
}

function win(){
  $(".circleElementLeft").removeClass("invisible");
}

function lose(){
  $(".circleElementRight").removeClass("invisible");
}
