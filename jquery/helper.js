var header = $(".header").html();
var links = $(".links").html();
var clicker = $("#container")[0].outerHTML;
var script = $('.helper')[0].outerHTML;
var description = $('.about-me')[0].outerHTML;

$( document ).ready(function(){
	$(document).on('click', 'a.aboutme',
		function(){
			var boxText = $(".about-me").html();
			
			$("#box").html(links+clicker);
			$("#box").animate({height:'500px', width:'700px',"margin-top":"-250px", "margin-left": "-350px"});
			$("#container").animate({'bottom': '6em', 'left': '20.5em'});
			$("a.aboutme").text("Home");
			
			$(":animated").promise().done(
				function() {
					$(boxText).appendTo('#box').hide().fadeIn('fast');
				});
			$("a.aboutme").attr('class', 'home');
		}
	);
	$(document).on('click', 'a.home',
		function(){

			$('.description').attr('style', 'display:none');
			$("#container").animate({'bottom': '7em', 'left': '13.4em'});
			
			$(":animated").promise().done(
				function() {
					$('#box').html(links+description);
					$(header).appendTo('#box').hide().fadeIn('fast');
					$('#box').animate({height:'300px', width:'500px',"margin-top":"-150px", "margin-left": "-250px"});
					$('#box').append(clicker)
				});

			
		}
	)
})



