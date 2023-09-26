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

//*********************** */
//Hard part starts here
//*********************** */

const myForm = document.getElementById("uploadForm")
const inpFile = document.getElementById("inpFile")

myForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData()
  formData.append("inpFile", inpFile.files[0])
  let test = null

  fetch("https://snapsmart-api.onrender.com/v1/tests", {
    method: "POST",
    mode: "cors",
    headers: {
      ACCESS_TOKEN:
        "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
      HTTP_ACCESS_TOKEN:
        "IH4bGrgADT8Qk3Ma3wYJ6GsuZaLFxQogWayDshUUeZwDa9RH9FaResUPaP97378R",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    debugger
    test = response.json()
  })
})
