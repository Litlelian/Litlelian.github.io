//index.html
//button
$('#pump').click(function(){
  $('#pump2').transition('fly down')
  $('#pump3').transition('fly down')
  setTimeout(function(){
    $('#layout').css('display','block')
    $('#popup').css('display','block')
  },400)
})

$('#layout').click(function(){ 
  $('#pump3').transition('fly down')
  setTimeout(function(){
    $('#layout').css('display','none')
    $('#popup').css('display','none')
  },400)
  $('#pump2').transition('fly down')
})

//duck
$('#duck3').click(function(){
  $('.duck2').css('opacity','1')
  $('#duck').css('zIndex','2')
  setTimeout(function(){
    $('.duck2').css('opacity','0')
    $('#duck').css('zIndex','-1')
  },400)
  setTimeout(function(){
    $('html,body').animate({
      scrollTop:$('#top').offset().top
    },500)
  },500)
})

//archor
$('.nav2').click(function(){
  $('html,body').animate({
    scrollTop:$('#top').offset().top
  },500)
})

$('a[href="#top"]').click(function(){
  $('html,body').animate({
    scrollTop:$('#top').offset().top
  },500)
})

$('a[href="#cooperation"]').click(function(){
  $('html,body').animate({
    scrollTop:$('#cooperation').offset().top
  },500)
})

$('a[href="#duck"]').click(function(){
  $('html,body').animate({
    scrollTop:$('#duck').offset().top
  },500)
})

$('a[href="#contact"]').click(function(){
  $('html,body').animate({
    scrollTop:$('#contact').offset().top
  },500)
})

//question
let q1c = false, q2c = false, q3c = false
$('.qt1').click(function(){
  const display = q1c
  if(display){
    $('.q1').animate({height:'72px'},300)
    $('.anw1').css('opacity','0')
  }else{
    q2c = false
    q3c = false
    $('.anw2').css('opacity','0')
    $('.anw3').css('opacity','0')
    $('.q2').animate({height:'72px'},300)  
    $('.q3').animate({height:'72px'},300)
    $('.q1').css('height','auto')
    let ah = $('.q1').height()
    $('.q1').css('height','72px')
    $('.q1').animate({height:ah},300)
    $('.anw1').css('opacity','1')
  }
  q1c = !q1c
})

$('.qt2').click(function(){
  const display2 = q2c
  if(display2){
    $('.q2').animate({height:'72px'},300)
    $('.anw2').css('opacity','0')
  }else{
    q3c = false
    q1c = false
    $('.anw1').css('opacity','0')
    $('.anw3').css('opacity','0')
    $('.q1').animate({height:'72px'},300)  
    $('.q3').animate({height:'72px'},300)
    $('.q2').css('height','auto')
    let ah = $('.q2').height()
    $('.q2').css('height','72px')
    $('.q2').animate({height:ah},300)
    $('.anw2').css('opacity','1')
  }
  q2c = !q2c
})

$('.qt3').click(function(){
  const display3 = q3c
  if(display3){
    $('.q3').animate({height:'72px'},300)
    $('.anw3').css('opacity','0')
  }else{  
    q2c = false
    q1c = false
    $('.anw2').css('opacity','0')
    $('.anw1').css('opacity','0')
    $('.q2').animate({height:'72px'},300)  
    $('.q1').animate({height:'72px'},300)
    $('.q3').css('height','auto')
    let ah = $('.q3').height()
    $('.q3').css('height','72px')
    $('.q3').animate({height:ah},300)
    $('.anw3').css('opacity','1')
  }
  q3c = !q3c
})

