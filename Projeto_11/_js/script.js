$(function(){
  $.ajax({
    'url':'conteudo.html',
    //'method':'post',
    //data:{'nome':'leandro','idade':'22'}
  }).done(function(data){
    $('#container').append(data)
  })
})