$(function () {
  var el = $('#source .texto').clone()

  el.appendTo('#container') //Para clonar em outra div.

  $('#source .texto').appendTo('#container1') //Para copiar em outra div.
})
