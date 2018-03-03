// Source code is available under MIT License
// License text is available at https://github.com/m4l3vich/m4l3vich.ru/blob/master/LICENSE.md

/* eslint-disable */

$(document).ready(function () {
  // Newtab text
  $(".linkcontent").mouseenter(function () {
    $("#newtab").css("opacity", "0.5"), clearTimeout(document.timeout)
  })
  $(".linkcontent").mouseleave(function () {
    document.timeout = setTimeout(function () {
      $("#newtab").css("opacity", "0")
    }, 1000)
  })

  // Button behavior
  function switchContent () {
    $("#downwards").toggleClass("inverted")
    $("#content").toggleClass("hidden", "shown")
    $("#projects").toggleClass("hidden", "shown")
  }
  $("#downwards").click(switchContent)
  $("body").scroll(switchContent)
});
$(window).on('load', function () {
  $('#preloader').delay(500).fadeOut('slow')
});

function moveSquares (xOffset, yOffset) {
  $('#s1').css({ "transform": `translate(${0 + (xOffset / 50)}px, ${0 + (yOffset / 50)}px)` })
  $('#s2').css({ "transform": `translate(${0 + (xOffset / 250)}px, ${0 + (yOffset / 250)}px)` })
  $('#s3').css({ "transform": `translate(${0 + (xOffset / 100)}px, ${0 + (yOffset / 100)}px)` })
  $('#s4').css({ "transform": `translate(${0 + (xOffset / 80)}px, ${0 + (yOffset / 80)}px)` })
  $('#s5').css({ "transform": `translate(${0 + (xOffset / 400)}px, ${0 + (yOffset / 400)}px)` })
  $('#s6').css({ "transform": `translate(${0 + (xOffset / 20)}px, ${0 + (yOffset / 20)}px)` })
}
$('body').mousemove(function (e) {
  xOffset = e.clientX * 2;
  yOffset = e.clientY * 2;
  moveSquares(xOffset, yOffset)
})

window.addEventListener("deviceorientation", function (event) {
  yOffset = event.beta;
  xOffset = event.gamma;
  moveSquares(xOffset * 180, yOffset * 180)
}, true);