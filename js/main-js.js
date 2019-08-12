//========== menu ==========//
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });

//   ========== isotope =========
$(document).ready(function(){
	var $gallery = $('.gallery');

	$gallery.isotope({
			itemSelector: '.item'
		});


	// filter buttons
	$('#filter button').click(function(){
		console.log(this);
		var $this = $(this);
		if(!$this.hasClass('is-checked')){
			$this.parent('#options').find('.is-checked').removeClass('is-checked');
			$this.addClass('is-checked');	
		}
		var selector = $this.attr('data-filter');
		$gallery.isotope({
			filter: selector
		});
		return false;
	});
});

	// add and remove button's classes
	$('#filter button').click(function() {  
    	$(this).siblings().removeClass('is-checked');
    	$(this).addClass('is-checked');
	});



//========== for video (android) ==========//
var v = document.getElementById("movie");
   v.onclick = function() {
    if (v.paused) {
     v.play();
    } else {
     v.pause();
    }
   };



//========== for slick-slider =========//
   $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });


//========== for more load =========//
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
	document.getElementById('ajax').innerHTML = xhr.responseText;
}
}

xhr.open('GET', './data.html');
function sendAJAX(){
	xhr.send();
	document.getElementById('load').style.display = 'none';
}

//for button load-more
//$(function(){

	//$('.load-more').on('click', function(){
		//const btn = $(this);
		//const loder = btn('.ba-our-work__btn');
		//$.ajax({
			//url: 'data.html',
			//type: 'GET',
			//beforeSend: function(){
				//btn.attr('diabled', true);
				//loader.addClass('d-innline-block');
			//},
			//succcess: function(response){
				//setTimeout(function(){
					//loader.removeClass('d-innline-block');
					//btn.attr('diabled', false);
					//console.log(response);
				//}, 1000);
			//},
			//error: function(){
				//alert('Error!');
				//loader.removeClass('d-innline-block');
				//btn.attr('diabled', false);
			//}
		//})	
	//});



})
