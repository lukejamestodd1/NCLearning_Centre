(function($){
 $(function(){
   console.log('hi');
   $('.button-collapse').sideNav();
   $('.parallax').parallax();

 }); // end of document ready
})(jQuery); // end of jQuery name space

$(function(){
	if (window.location.href === '/'){
		$('#homepage').addClass('current-page');
	}
	else{
	  $('a').each(function() {
	  	//if current url includes button link, change status
			if (window.location.href.indexOf($(this).prop('href')) > -1) {
		  	$(this).addClass('current-page');
		  }
	  });
	}
 });
