/* Utilizando variável

$(function(){
  var el = $('div.box');

  el.css('background-color','green');

  function teste(){
    el.css('color','red');
  }

  teste()
})
*/

$(function(){

  //Pegamos a largura do nosso elemento.
  $('.box').width();

  //Setamos a largura
  $('.box').css('width','900px');

  // Width/height = Dimensão calculada total com base no padding.
  // innerWidth/innerHeight = Dimensão calculada total incluindo o padding.
  // outerWidth/outerHeight = Dimensão calculada total incluindo o padding e margin (se o parâmetro for true).

  console.log("Width: "+ $('.box').width())
  console.log("Inner Width: " + $('.box').innerWidth())
  console.log("Outer Width: "+ $('.box').outerWidth())

  console.log("Height: "+ $('.box').height())
  console.log("Inner Height: " + $('.box').height())
  console.log("Outer Height: "+ $('.box').outerHeight())
})