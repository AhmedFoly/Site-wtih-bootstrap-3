$(function() {
  'use strict';
    $(window).scroll(function () {
    //  window.console.log($('.navbar').height());
//      window.console.log($(window).scrollTop());
      var navbar = $('.navbar');
      if ($(window).scrollTop() >= navbar.height()) {
        navbar.addClass('scrolled');
      }else{
        navbar.removeClass('scrolled');
      }
    });
//  tab selected
    $('.tab-switch li').hover(function () {
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.tab-section .content > div').hide();
      $('.' + $(this).data('class')).show();
    });
});
