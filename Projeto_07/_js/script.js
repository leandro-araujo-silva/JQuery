$(function () {
  var indiceAtual = 0
  var indiceMaximo = $('.slider img').length
  var delay = 5000

  initSlider()
  cliqueSlider()

  function initSlider() {
    for (var i = 0; i < indiceMaximo; i++) {
      if (i == 0) {
        $('.bullets-nav').append('<span style="background-color: red"></span>')
      } else {
        $('.bullets-nav').append('<span></span>')
      }
    }
    $('.slider img').eq(0).fadeIn()
    setInterval(function () {
      alternarSlider()
    }, delay)
  }

  function cliqueSlider() {
    $('.bullets-nav span').click(function () {
      $('.slider img').eq(indiceAtual).fadeOut(2000)
      indiceAtual = $(this).index()
      $('.slider img').eq(indiceAtual).fadeIn(2000)
      $('.bullets-nav span').css('background-color', '#ccc')
      $(this).css('background-color', 'red')
    })
  }

  function alternarSlider() {
    $('.slider img').eq(indiceAtual).fadeOut(2000)
    indiceAtual += 1
    if (indiceAtual == indiceMaximo) {
      indiceAtual = 0
    }
    $('.slider img').eq(indiceAtual).fadeIn(2000)
    $('.bullets-nav span').css('background-color', '#ccc')
    $('.bullets-nav span').eq(indiceAtual).css('background-color', 'red')
  }
})
