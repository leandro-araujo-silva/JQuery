$(function(){
  $('.box1').addClass('minhaclasse');

  // $('.minhaclasse').remove()

  $('.box2').removeClass('box')

  var el = $('.box1').find('.child1').find('.child2')

  el.css('fontSize','15pt')

  console.log($('minhatag').attr('meuattr'))

  // alert($('minhatag').attr('meuattr'))
})