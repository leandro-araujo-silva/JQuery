$(function () {

  var indiceAtual = 0
  var indiceMaximo = $('.slider img').length
  var delay = 5000

  initSlider()

  function initSlider() {
    $('.slider img').eq(0).fadeIn()
    setInterval(function () {
      alternarSlider()
    }, delay)
  }

  function alternarSlider() {
    $('.slider img').eq(indiceAtual).fadeOut(2000)
    indiceAtual += 1
    if (indiceAtual == indiceMaximo) {
      indiceAtual = 0
    }
    $('.slider img').eq(indiceAtual).fadeIn(2000)
  }
})
