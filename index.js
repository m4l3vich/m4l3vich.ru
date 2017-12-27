/* eslint-env jquery */
$(document).ready(function () {
  $('.linkcontent').mouseenter(function () {
    $('#newtab').css('opacity', '0.5')
    clearTimeout(document.timeout)
  })
  $('.linkcontent').mouseleave(function () {
    document.timeout = setTimeout(function () {
      $('#newtab').css('opacity', '0')
    }, 1000)
  })

  $('#downwards').click(function () {
    $('#downwards').toggleClass('inverted')
    $('#content').toggleClass('hidden', 'shown')
    $('#projects').toggleClass('hidden', 'shown')
  })
})
