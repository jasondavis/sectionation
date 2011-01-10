/*
 * Sectionation v0.1
 * http://github.com/nickawalsh/sectionation
 */

$(document).ready(function() {
  var sections = $('.sectionation');
  var sectionActive = 0;
  var nav = $('#nav a');
  var headerOffset = 70;
  sectionAlter();
        
  window.onscroll = function(){ sectionAlter(); }
        
  function sectionAlter() {
    var distanceFromTop = $(window).scrollTop();
    sectionCompare(distanceFromTop);
    nav.not(nav[sectionActive]).removeClass('active');
    nav.eq(sectionActive).addClass('active');
  }
        
  function sectionCompare(distanceFromTop) {
    if(distanceFromTop + headerOffset < sections.eq(1).offset().top) {
      sectionActive = 0;
    } else {
      for(i = 1; i < sections.length; i++) {
        if(distanceFromTop + headerOffset - sections.eq(i).offset().top >= 0) {
          sectionActive = i;
        }
      }
    }
  }
        
  nav.bind('click', function() {
    if(nav.index($(this)) == 0) {
      $('html,body').animate({scrollTop:0}, 1000);
    } else {
      var scroll = sections.eq(nav.index($(this))).offset().top - headerOffset;
      $('html,body').animate({scrollTop:scroll}, 1000);
    }
  }, false);
});