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

let qoutes = [
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Education is not the filling of a pail, but the lighting of a fire.",
  "Education is not preparation for life; education is life itself.",
  "The roots of education are bitter, but the fruit is sweet.",
  "Education is the key to unlocking the world, a passport to freedom.",
  "An investment in knowledge pays the best interest.",
  "The beautiful thing about learning is that no one can take it away from you.",
]
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

    document.querySelector(".main_screen").classList.add("screen_exit")

    // await fetch("https://snapsmart-api.onrender.com/v1/tests", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     ACCESS_TOKEN:
    //       "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
    //     HTTP_ACCESS_TOKEN:
    //       "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
    //     // "Access-Control-Allow-Origin": "*",

    //   },
    //   body: formData,
    // }).then((response) => {
    //   testOriginal = response.json()
    // })

    await fetch("https://snapsmart-api.onrender.com/v1/tests", {
      method: "POST",
      mode: "cors",
      headers: {
        ACCESS_TOKEN:
          "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
        HTTP_ACCESS_TOKEN:
          "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
      },
      body: formData,
    }).then((res) => {
      let inner = res.json()
      inner.rezolve
      inner.then((value) => {
        
        //Template
        let test = {
          subject: "George Feydeau",
          difficulty: "medium",
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
            },
            {
              choices: ["Tragedies", "Romantic novels", "Farces", "capybara"],
              content: "What is Georges Feydeau know for?",
              correct_answer: "Farces",
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
            },
            {
              choices: [
                "A fle in her ear",
                "Romeo and Julliet",
                "to kill a mocking bird",
                "to pet a capybara",
              ],
              content:
                "Which of the following is on of Georges Feydea's full-lenght plays?",
              correct_answer: "A flea in her ear",
            },
          ],
        }
        console.log(value)
        if (value.number_of_questions < 5) {
          document.querySelector("#success_message").innerHTML =
            "Sorry! Not enough content, try again with a different image."
          document.querySelector("#image_fail").classList.add("fail_image")
          document.querySelector(".loading_screen").classList.add("screen_exit")
          document.querySelector("#startTestBtn").innerHTML = "Retry"
          document
            .querySelector("#startTestBtn")
            .setAttribute("onClick", "window.location.reload();")
        } else {
          test.subject = value.subject
          test.difficulty = value.difficulty
          test.number_of_questions = value.number_of_questions
          test.questions = value.questions
          document.querySelector("#subject").textContent = test.subject
          document.querySelector("#difficulty").textContent = test.difficulty
          document.querySelector("#questions").textContent =
            test.number_of_questions

          document.querySelector(".loading_screen").classList.add("screen_exit")

          document
            .querySelector("#startTestBtn")
            .addEventListener("click", () => {
              document
                .querySelector(".success_screen")
                .classList.add("screen_exit")
              let i = 0
              let idNr = 1
              let screen = document.querySelector(".test_screen")
              // Generated Q&A
              while (i < test.number_of_questions) {
                let newTestQuestion = document.createElement("div")
                newTestQuestion.classList.add("test_question")
                newTestQuestion.setAttribute("id", `testQuestion${i}`)
                //Q
                let Q = document.createElement("div")
                Q.classList.add("question")

                let textQ = document.createTextNode(test.questions[i].content)
                Q.append(textQ)
                newTestQuestion.append(Q)
                //A1
                let A1 = document.createElement("div")
                A1.classList.add("answer")
                let text1 = document.createTextNode(
                  test.questions[i].choices[0]
                )
                A1.append(text1)
                A1.setAttribute("id", `answer${idNr}`)
                idNr++
                newTestQuestion.append(A1)
                //A2
                let A2 = document.createElement("div")
                A2.classList.add("answer")
                let text2 = document.createTextNode(
                  test.questions[i].choices[1]
                )
                A2.append(text2)
                A2.setAttribute("id", `answer${idNr}`)
                idNr++
                newTestQuestion.append(A2)
                //A3
                let A3 = document.createElement("div")
                A3.classList.add("answer")
                let text3 = document.createTextNode(
                  test.questions[i].choices[2]
                )
                A3.append(text3)
                A3.setAttribute("id", `answer${idNr}`)
                idNr++
                newTestQuestion.append(A3)
                //A4
                let A4 = document.createElement("div")
                A4.classList.add("answer")
                let text4 = document.createTextNode(
                  test.questions[i].choices[3]
                )
                A4.append(text4)
                A4.setAttribute("id", `answer${idNr}`)
                idNr++
                newTestQuestion.append(A4)
                //the rest
                screen.append(newTestQuestion)
                i++
              }
              let rating = 100
              //Q&A
              //Q1
              document
                .querySelector("#answer1")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer1").textContent !=
                    test.questions[0].correct_answer
                  ) {
                    document.querySelector("#answer1").classList.add("wrong")
                    rating -= 20
                    console.log(rating)
                  } else {
                    document.querySelector("#answer1").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion0")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer2")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer2").textContent !=
                    test.questions[0].correct_answer
                  ) {
                    document.querySelector("#answer2").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer2").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion0")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer3")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer3").textContent !=
                    test.questions[0].correct_answer
                  ) {
                    document.querySelector("#answer3").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer3").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion0")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer4")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer4").textContent !=
                    test.questions[0].correct_answer
                  ) {
                    document.querySelector("#answer4").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer4").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion0")
                    .classList.add("screen-exit-top")
                })
              //Q2
              document
                .querySelector("#answer5")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer5").textContent !=
                    test.questions[1].correct_answer
                  ) {
                    document.querySelector("#answer5").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer5").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion1")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer6")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer6").textContent !=
                    test.questions[1].correct_answer
                  ) {
                    document.querySelector("#answer6").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer6").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion1")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer7")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer7").textContent !=
                    test.questions[1].correct_answer
                  ) {
                    document.querySelector("#answer7").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer7").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion1")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer8")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer8").textContent !=
                    test.questions[1].correct_answer
                  ) {
                    document.querySelector("#answer8").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer8").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion1")
                    .classList.add("screen-exit-top")
                })
              //Q3
              document
                .querySelector("#answer9")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer9").textContent !=
                    test.questions[2].correct_answer
                  ) {
                    document.querySelector("#answer9").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer9").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion2")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer10")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer10").textContent !=
                    test.questions[2].correct_answer
                  ) {
                    document.querySelector("#answer10").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer10").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion2")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer11")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer11").textContent !=
                    test.questions[2].correct_answer
                  ) {
                    document.querySelector("#answer11").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer11").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion2")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer12")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer12").textContent !=
                    test.questions[2].correct_answer
                  ) {
                    document.querySelector("#answer12").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer12").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion2")
                    .classList.add("screen-exit-top")
                })
              //Q4
              document
                .querySelector("#answer13")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer13").textContent !=
                    test.questions[3].correct_answer
                  ) {
                    document.querySelector("#answer13").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer13").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion3")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer14")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer14").textContent !=
                    test.questions[3].correct_answer
                  ) {
                    document.querySelector("#answer14").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer14").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion3")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer15")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer15").textContent !=
                    test.questions[3].correct_answer
                  ) {
                    document.querySelector("#answer15").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer15").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion3")
                    .classList.add("screen-exit-top")
                })
              document
                .querySelector("#answer16")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer16").textContent !=
                    test.questions[3].correct_answer
                  ) {
                    document.querySelector("#answer16").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer16").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion3")
                    .classList.add("screen-exit-top")
                })
              //Q5
              document
                .querySelector("#answer17")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer17").textContent !=
                    test.questions[4].correct_answer
                  ) {
                    document.querySelector("#answer17").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer17").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion4")
                    .classList.add("screen-exit-top")
                  if (rating >= 50) {
                    document.querySelector(
                      "#grade_finish_passed"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_passed")
                      .classList.add("visible_now")
                  } else {
                    document.querySelector(
                      "#grade_finish_fail"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_fail")
                      .classList.add("visible_now")
                  }
                })
              document
                .querySelector("#answer18")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer18").textContent !=
                    test.questions[4].correct_answer
                  ) {
                    document.querySelector("#answer18").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer18").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion4")
                    .classList.add("screen-exit-top")
                  if (rating >= 50) {
                    document.querySelector(
                      "#grade_finish_passed"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_passed")
                      .classList.add("visible_now")
                  } else {
                    document.querySelector(
                      "#grade_finish_fail"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_fail")
                      .classList.add("visible_now")
                  }
                })
              document
                .querySelector("#answer19")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer19").textContent !=
                    test.questions[4].correct_answer
                  ) {
                    document.querySelector("#answer19").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer19").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion4")
                    .classList.add("screen-exit-top")
                  if (rating >= 50) {
                    document.querySelector(
                      "#grade_finish_passed"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_passed")
                      .classList.add("visible_now")
                  } else {
                    document.querySelector(
                      "#grade_finish_fail"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_fail")
                      .classList.add("visible_now")
                  }
                })
              document
                .querySelector("#answer20")
                .addEventListener("click", () => {
                  if (
                    document.querySelector("#answer20").textContent !=
                    test.questions[4].correct_answer
                  ) {
                    document.querySelector("#answer20").classList.add("wrong")
                    rating -= 20
                  } else {
                    document.querySelector("#answer20").classList.add("right")
                  }
                  document
                    .querySelector("#testQuestion4")
                    .classList.add("screen-exit-top")
                  if (rating >= 50) {
                    document.querySelector(
                      "#grade_finish_passed"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_passed")
                      .classList.add("visible_now")
                  } else {
                    document.querySelector(
                      "#grade_finish_fail"
                    ).innerHTML = `${rating}%`
                    document
                      .querySelector(".finish_screen_fail")
                      .classList.add("visible_now")
                  }
                })
            })
        }
      })
    })
  }
})
