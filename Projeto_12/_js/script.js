$(function () {
  /*

  var frase = 'roberto@gmail.com'

  var verifica = frase.match(/^(.*?)(@)(.*?)$/)

  if (verifica != null) {
    console.log('Encontramos algo!')
    for (let i = 0; i < 4; i++) {
      console.log(verifica[i])
    }
  } else {
    console.log('Não encontramos nada')
  }

  */

  // Abrir e fechar o formulário

  abrirJanela()
  verificarCliqueFechar()

  function abrirJanela() {
    $('.btn').click(function (e) {
      e.stopPropagation()
      $('.bg').fadeIn()
    })
  }

  function verificarCliqueFechar() {
    var el = $('body,.closeBtn')

    el.click(function () {
      $('.bg').fadeOut()
    })

    $('.form').click(function (e) {
      e.stopPropagation()
    })
  }

  //Validando formulário

  $('form#form1').submit(function () {
    var nome = $('input[name=nome]').val()
    var telefone = $('input[name=telefone]').val()
    var email = $('input[name=email]').val()

    //Contando a quantidade de espaços e os respectivos valores.
    var amount = nome.split(' ').length
    var splitStr = nome.split(' ')
    if (amount >= 2) {
      for (var i = 0; i < amount; i++) {
        if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
          console.log('yes')
        } else {
          aplicarCampoInvalido($('input[name=nome'))
          return false
        }
      }
    } else {
      aplicarCampoInvalido($('input[name=nome]'))
      return false
    }
  })

  function aplicarCampoInvalido(el) {
    el.css('border', '2px solid red')
    el.data('invalido', 'true')
  }
})
