
$(document).ready(function($){


$("#go").on("click", function() {
	if($(this).hasClass('up')){
		$("#go").attr("class","go");
		$("body").animate({
			scrollTop:0
		},800);
	}else{
		var footer =$('#contact').offset();
		var footerTop = $('#contact').offset().top;
		$("#go").attr("class","up");
		$("body").animate({
			scrollTop:footer.top - 67*2
		},800);
	}
});

	$('.btn_box').click(function() {
	    $(this).parent().parent().addClass('open').removeClass('out');
		$('body').addClass('modal-active');
	});
	$('.modal-close').click(function() {
	    $('.modal-close').parent().parent().parent().parent().parent().addClass('out')
		$('body').removeClass('modal-active');
	});

});
