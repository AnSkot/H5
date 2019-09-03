$(document).ready(function(){
  $('.slick').slick({
    dots : true,
    dotsClass : 'mydots'
  })
})

$(window).scroll(function(){

  var fix = $('.headLine')

  if($(this).scrollTop() > 300){
    fix.addClass('fix')
  }
  else{
    fix.removeClass('fix')
  }
})  
   $('.our-works-img').magnificPopup({
    delegate: 'a',
    type: 'image' 
 });