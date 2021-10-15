$(function(){
  $('.box0').fadeOut(3000, function(){
    // $('.box1').css('display', 'block')
    $('.box1').fadeIn(3000)
  })

  $('.box1').click(function(){
    $('.box2').slideToggle(2000, function(){
      location.href="https://www.google.com.br/"
    })
  })
})