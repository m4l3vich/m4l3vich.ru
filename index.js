$(document).ready(function() {
  $('.linkcontent').mouseenter(function() {
    $('#newtab').css('opacity', '0.5')
    clearTimeout(document.timeout)
  })
  $('.linkcontent').mouseleave(function() {
    document.timeout = setTimeout(function(){
      $('#newtab').css('opacity', '0')
    }, 1000)
  })
})
