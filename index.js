// Source code is available under MIT License
// License text is available at https://github.com/m4l3vich/m4l3vich.ru/blob/master/LICENSE.md

/* eslint-disable */

$(document).ready(function () {
    $(".linkcontent").mouseenter(function () {
        $("#newtab").css("opacity", "0.5"), clearTimeout(document.timeout)
    }), $(".linkcontent").mouseleave(function () {
        document.timeout = setTimeout(function () {
            $("#newtab").css("opacity", "0")
        }, 1000)
    }), $("#downwards").click(function () {
        $("#downwards").toggleClass("inverted"), $("#content").toggleClass("hidden", "shown"), $("#projects").toggleClass("hidden", "shown")
    })
});
$(window).on('load', function () {
    $('#preloader').delay(500).fadeOut('slow')
});
// $('body').mousemove(function (event) {
//     var pos = $('#s1').position();
//     $('#s1').css({"transform": `translate(${(event.offsetX - pos.left) * 0.15}px, ${(event.offsetY - pos.top) * 0.15}px)`})
//     console.log(`translate(${(event.offsetX - pos.left) * 0.15}px, ${(event.offsetY - pos.top) * 0.15}px)`)
// });
 $('body').mousemove(function (e) {
     var change;
     var left = change * 20;
     xpos = e.clientX * 2;
     ypos = e.clientY * 2;
    $('#s1').css({"transform": `translate(${0+(xpos/50)}px, ${0+(ypos/50)}px)`})
    $('#s2').css({"transform": `translate(${0+(xpos/250)}px, ${0+(ypos/250)}px)`})
    $('#s3').css({"transform": `translate(${0+(xpos/100)}px, ${0+(ypos/100)}px)`})
    $('#s4').css({"transform": `translate(${0+(xpos/80)}px, ${0+(ypos/80)}px)`})
    $('#s5').css({"transform": `translate(${0+(xpos/400)}px, ${0+(ypos/400)}px)`})
    $('#s6').css({"transform": `translate(${0+(xpos/20)}px, ${0+(ypos/20)}px)`})
 });