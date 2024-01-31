function toggleMode() {
  //fundo
  const html = document.documentElement
  html.classList.toggle("light")

  //imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/1601477247315.jpeg")
  } else {
    img.setAttribute("src", "./assets/1601477247314.jpeg")
  }
}
