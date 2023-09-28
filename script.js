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
let randomNr=Math.floor((Math.random()*6))
let qoute=document.querySelector(".image_qoute")
qoute.textContent=qoutes[randomNr]
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
    document.querySelector(".main_screen").classList.add = "fade"
    await fetch("https://snapsmart-api.onrender.com/v1/tests", {
      method: "POST",
      mode: "cors",
      headers: {
        ACCESS_TOKEN:
          "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
        HTTP_ACCESS_TOKEN:
          "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    }).then((response) => {
      test = response.json()
    })
    document.querySelector("#subject").textContent=test.subject
    document.querySelector("#difficulty").textContent = test.difficulty
    document.querySelector("#questions").textContent = test.number_of_questions
    document.querySelector(".loading_screen").classList.add("fade")
    document.querySelector("#startTestBtn").addEventListener("click",()=>{
      document.querySelector(".success_screen").classList.add("fade")
      
    })
  }
})
