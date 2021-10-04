$(function(){
  $('.artigo1').css('cursor','pointer');

  $('.artigo1').click(function(){
    $('.artigo2').css('background-color','purple').css('color', 'white')
  });

  $('.artigo1').hover(function(){
    $('.artigo2').css('background-color', 'red')
  })

  function validarFormulario() {
    /*
    $('textarea').focus(function(){
      //Executa alguma função quando existe foco no elemento 
    }).blur(function(){
      // Executa uma função quando retiramos o foco
    })
    */

    $('select').change(function(){
      console.log('Meu select foi alterado!')
    })
  }

  validarFormulario()

})