$(function () {
  var time

  $(window).scroll(function () {
    //Evento de quando o scroll ocorre.
  })

  $(window).resize(function () {
    //Evento de quando redimensionamos a tela.
    clearTimeout(time)
    time = setTimeout(function () {
      location.href = 'www.googlr'
    })
  })

  $('.box').click(function(e){
    e.stopPropagation()
  })

  $('body').click(function(){
    $('.box').css('background-color', 'red')
  })
})
