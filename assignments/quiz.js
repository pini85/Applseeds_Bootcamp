const bImg = document.querySelector("#bigImg");
const question = document.querySelector("#question");

let myQuestions = [
  {
    question: "How many hours do you often sleep a day?",
    imageSrc: "./img/0.jpg",
    answers: [
      "Less then average person,less than 7 hours",
      "More than average person, more than 8 hours",
      "I don't sleep",
      "depends on what activity I have done during the day!"
    ],
    point: [1, 0, 3, 2]
  },
  {
    question: "Which gif describe you?",
    imageSrc: "./img/1.jpg",
    answers: [
      "<img width=200px height=200px src=./img/giphy.gif>",
      "<img width=200px height=200px src=./img/source.gif>",
      "<img width=200px height=200px src=./img/k.gif>",
      "<img width=200px height=200px src=./img/kl.gif>"
    ],
    point: [1, 0, 2, 3]
  },
  {
    question: "When it comes to how well you can concentrate",
    imageSrc: "./img/1.webp",
    answers: [
      "I'm good at concentrating",
      "It's hard to, but if I can occasionally manage to",
      "Depends on the time of the day",
      "I can't"
    ],
    point: [1, 0, 2, 3]
  },
  {
    question: "Do you feel hopeless or helpless?",
    imageSrc: "./img/hopeless.jpg",
    answers: [
      `<input type="radio" > I am hopeless/helpless`,
      `<input type="radio" >Depends on situation`,
      `<input type="radio" > Not, not really`,
      `<input type="radio" >Kind of,sometimes `
    ],
    point: [0, 1, 3, 2]
  },
  {
    question: "Do you tend to have a lot of negative thoughts about yourself?",
    imageSrc: "./img/negative.jpg",
    answers: [
      "Yeah, and it takes a while to stop them",
      "Yes, I can't seem control them,either",
      "Depends on how i'm feelinf/how the day went",
      "No, I don't tend to think that way"
    ],
    point: [1, 0, 2, 3]
  },
  {
    question: "Do you hide your emotions at all?",
    imageSrc: "./img/emotions.jpeg",
    answers: [
      "Yes,nobody can see how i'm feeling!",
      "No, I let how I'm feeling know",
      "I can't hide my emotions",
      "Why would I need to?"
    ],
    point: [2, 3, 1, 0]
  },
  {
    question: "How are your eating habits?",
    imageSrc: "./img/habits.webp",
    answers: [
      "Lately I haven't been eating",
      "My eating has increased a bit lately",
      "It keeps going all over the place",
      "They've been the same for a while"
    ],
    point: [1, 0, 3, 2]
  },
  {
    question: "You are much more irritable or tempered lately.",
    imageSrc: "./img/bee.jpg",
    answers: [
      "I've always been easily irritated and tempered",
      "True, I've been a bit on the edge lately",
      "False, I don't act that way",
      "I don't know"
    ],
    point: [3, 1, 2, 0]
  },
  {
    question: "How's life been?",
    imageSrc: "./img/life.gif",
    answers: [
      "Decent, Normal",
      "A bit rocky",
      "Horrible",
      "Theworst it's been"
    ],
    point: [0, 1, 3, 2]
  }
];
let i = 0;
let points = 0;
function start() {
  document.querySelector("#start").style.display = "none";
  document.querySelector(".buttons").style.display = "inline-flex";

  nextQuest();
}

function choice(choiceindex) {
  if (i < 10) {
    points += myQuestions[i].point[choiceindex];
    console.log(points);
    nextQuest();
  }
}

function nextQuest() {
  question.innerHTML = myQuestions[i].question;
  bImg.src = myQuestions[i].imageSrc;
  for (let index = 0; index < myQuestions[i].answers.length; index++) {
    document.querySelector(`#btn${index}`).innerHTML =
      myQuestions[i].answers[index];
  }
  console.log(i);

  if (i === myQuestions.length - 1) {
    document.querySelector(".container").style.display = "none";
    submit();
  } else {
    i++;
  }
}
function submit() {
  document.querySelector(".container").style.display = "none";
  var text1 =
    "You got: You're bored and that makes you lazy.You are sleeping too much and the monotony of life is making you lazy. Try and avoid that. Escape to a paradise, eat healthily and party moderately.";
  var text2 =
    "You got: You need help Go to a therapist or psychologist. Talk to him immediately. You need help and its always better to talk to someone who's experienced in dealing with such situations. If you can't share with a therapist, talk to your family, and friends. They will guide you";
  if (points < 14) {
    document.querySelector("#solution").innerHTML = text1;
    document.querySelector("#sol").src = "./img/lazy.jpeg";
  } else {
    document.querySelector("#solution").innerHTML = text2;
    document.querySelector("#sol").src = "./img/dip.jpg";
  }
}
