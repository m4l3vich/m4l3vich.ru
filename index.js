// Source code is available under MIT License
// License text is available at https://github.com/m4l3vich/m4l3vich.ru/blob/master/LICENSE.md

/* eslint-disable */

$(document).ready(function(){$(".linkcontent").mouseenter(function(){$("#newtab").css("opacity","0.5"),clearTimeout(document.timeout)}),$(".linkcontent").mouseleave(function(){document.timeout=setTimeout(function(){$("#newtab").css("opacity","0")},1e3)}),$("#downwards").click(function(){$("#downwards").toggleClass("inverted"),$("#content").toggleClass("hidden","shown"),$("#projects").toggleClass("hidden","shown")})});$(window).on('load',function(){$('#preloader').delay(500).fadeOut('slow')});
