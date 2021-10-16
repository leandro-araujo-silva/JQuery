$(function () {

  var timer;
  var timeOut = function(){
    $('.box1').animate({
      'width':'40%',
      'height':'500px',
      'paddingTop':'200px'
    },2000)
  }

  $('body').click(function(){
    alert('Animação com timeout foi cancelada!')
    clearTimeout(timer)
  })

  $('.box0').animate(
    {
      width: '40%',
      height: '500px'
    },
    2000, function(){
      timer = setTimeout(timeOut,3000)
    }
  )

/*
  var hr

  hr = setInterval(function(){
    alert('Olá, mundo!')
  },10000)

*/
})
