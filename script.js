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
