let firstBtn = Array.from(document.getElementsByClassName("hero_first_btn"))

let secondBtn = Array.from(document.getElementsByClassName("hero_second_btn"))

firstBtn[0].addEventListener("mouseover", () => {
  secondBtn[0].classList.add("hero_second_mouseover")
  firstBtn[0].classList.add("hero_first_mouseover")
})
firstBtn[0].addEventListener("mouseout", () => {
  secondBtn[0].classList.remove("hero_second_mouseover")
  firstBtn[0].classList.remove("hero_first_mouseover")
})
secondBtn[0].addEventListener("mouseover", () => {
  firstBtn[0].classList.add("hero_first_mouseover")
  secondBtn[0].classList.add("hero_second_mouseover")
})
secondBtn[0].addEventListener("mouseout", () => {
  firstBtn[0].classList.remove("hero_first_mouseover")
  secondBtn[0].classList.remove("hero_second_mouseover")
})
firstBtn[1].addEventListener("mouseover", () => {
  secondBtn[1].classList.add("hero_second_mouseover_bottom")
  firstBtn[1].classList.add("hero_first_mouseover_bottom")
})
firstBtn[1].addEventListener("mouseout", () => {
  secondBtn[1].classList.remove("hero_second_mouseover_bottom")
  firstBtn[1].classList.remove("hero_first_mouseover_bottom")
})
secondBtn[1].addEventListener("mouseover", () => {
  firstBtn[1].classList.add("hero_first_mouseover_bottom")
  secondBtn[1].classList.add("hero_second_mouseover_bottom")
})
secondBtn[1].addEventListener("mouseout", () => {
  firstBtn[1].classList.remove("hero_first_mouseover_bottom")
  secondBtn[1].classList.remove("hero_second_mouseover_bottom")
})

// let qoutes = {
//   "1": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
//   "2": "Education is not the filling of a pail, but the lighting of a fire.",
//   "3": "Education is not preparation for life; education is life itself.",
//   "4": "The roots of education are bitter, but the fruit is sweet.",
//   "5": "Education is the key to unlocking the world, a passport to freedom.",
//   6: "An investment in knowledge pays the best interest.",
//   seven: "The beautiful thing about learning is that no one can take it away from you.",
// }
let qoutes = [
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Education is not the filling of a pail, but the lighting of a fire.",
  "Education is not preparation for life; education is life itself.",
  "The roots of education are bitter, but the fruit is sweet.",
  "Education is the key to unlocking the world, a passport to freedom.",
  "An investment in knowledge pays the best interest.",
  "The beautiful thing about learning is that no one can take it away from you.",
]
//  qoutes = JSON.parse(qoutes);
//*********************** */
//Hard part starts here
//*********************** */

// Start screen
let startBtn = document.querySelector("#startBtn")
let startScreen = document.querySelector(".start_screen")
startBtn.addEventListener("click", () => {
  startScreen.classList.add("dissapear_screen")
})

//Main Screen
let fileName = document.querySelector("#file_name")
function uploadFile(target) {
  fileName.innerHTML = target.files[0].name
}
let randomNr = Math.floor(Math.random() * 6)
let qoute = document.querySelector(".image_qoute")
qoute.textContent = qoutes[randomNr]
const myForm = document.getElementById("uploadForm")
const inpFile = document.getElementById("inpFile")

myForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  if (!inpFile.files[0]) {
    // alert("Please select a file")
    let errorText = document.querySelector("#error")
    errorText.textContent = "You haven't selected any file"
    errorText.classList.add("fade")
    myForm.classList.add("secouer")
  } else if (
    inpFile.files[0].type != "image/png" &&
    inpFile.files[0].type != "image/jpg" &&
    inpFile.files[0].type != "image/jpeg"
  ) {
    let errorText = document.querySelector("#error")
    errorText.textContent = "Only .PNG, .JPG and .JPEG files are allowed!"
    errorText.classList.add("fade")
    myForm.classList.add("secouer")
  } else {
    const formData = new FormData()
    formData.append("image", inpFile.files[0])
    let test = null
    document.querySelector(".main_screen").classList.add("screen_exit")
    // await fetch("https://snapsmart-api.onrender.com/v1/tests", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     ACCESS_TOKEN:
    //       "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
    //     HTTP_ACCESS_TOKEN:
    //       "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: formData,
    // }).then((response) => {
    //   test = response.json()
    // })
    // console.log(test)
    test = {
      subject: "George Feydeau",
      difficulty: "medium",
      id: 92,
      number_of_questions: 5,
      questions: [
        {
          choices: [
            "8 December 1862",
            "5 June 1921",
            "1886-1914",
            "6 July 1980 capybara",
          ],
          content: "When was Georges Feydeau born?",
          correct_answer: "8 December 1862",
          points_received: 2,
        },
        {
          choices: ["Tragedies", "Romantic novels", "Farces", "capybara"],
          content: "What is Georges Feydeau know for?",
          correct_answer: "Farces",
          points_received: 2,
        },
        {
          choices: [
            "Eugene Labiche, Alfred Hennequin, Henri Meilhac",
            "Shaspeare, Moliere, Goethe",
            "George Bernard Shaw, Anton Chekhov, Henrik Ibsen",
            "Bonaparte, JK Rolaing, Capybara",
          ],
          content:
            "Who are some of the erlier masters of french comedy that George Feydeau studied?",
          correct_answer: "Eugene Labiche, Alfred Hennequin, Henri Meilhac",
          points_received: 2,
        },
        {
          choices: [
            "Depression, unsuccesful gambling, divorce",
            "Succes in his carrer, happy family life, travel",
            "Sports,music,cookin",
            "Capybara, capybara, capybara",
          ],
          content: "What impacted George Feydeau's personal life?",
          correct_answer: "Depression, unsuccesful gambling, divorce",
          points_received: 2,
        },
      ],
    }
    // document.querySelector("#subject").textContent = "test.subject"
    // document.querySelector("#difficulty").textContent = "test.difficulty"
    // document.querySelector("#questions").textContent =
    //   "test.number_of_questions"
    document.querySelector("#subject").textContent = test.subject
    document.querySelector("#difficulty").textContent = test.difficulty
    document.querySelector("#questions").textContent = test.number_of_questions
    document.querySelector(".loading_screen").classList.add("screen_exit")

    document.querySelector("#startTestBtn").addEventListener("click", () => {
      document.querySelector(".success_screen").classList.add("screen_exit")
      //Test Element
      function changeText(Q, answer1, answer2, answer3, answer4) {
        document.querySelector("#question").innerHTML = Q
        document.querySelector("#answer1").innerHTML = answer1
        document.querySelector("#answer2").innerHTML = answer2
        document.querySelector("#answer3").innerHTML = answer3
        document.querySelector("#answer4").innerHTML = answer4
      }
      let Q1 = test.questions[0].content
      let Q2 = test.questions[1].content
      let Q3 = test.questions[2].content
      let Q4 = test.questions[3].content
      let Q5 = test.questions[4].content

      let a11 = test.questions[0].choices[0]
      let a12 = test.questions[0].choices[1]
      let a13 = test.questions[0].choices[2]
      let a14 = test.questions[0].choices[3]

      let a21 = test.questions[1].choices[0]
      let a22 = test.questions[1].choices[1]
      let a23 = test.questions[1].choices[2]
      let a24 = test.questions[1].choices[3]

      let a31 = test.questions[2].choices[0]
      let a32 = test.questions[2].choices[1]
      let a33 = test.questions[2].choices[2]
      let a34 = test.questions[2].choices[3]

      let a41 = test.questions[3].choices[0]
      let a42 = test.questions[3].choices[1]
      let a43 = test.questions[3].choices[2]
      let a44 = test.questions[3].choices[3]

      let a51 = test.questions[4].choices[0]
      let a52 = test.questions[4].choices[1]
      let a53 = test.questions[4].choices[2]
      let a54 = test.questions[4].choices[3]
    })
  }
})
