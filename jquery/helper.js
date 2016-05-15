var header = $(".header").html();
var links = $(".links").html();
var clicker = $("#container")[0].outerHTML;



$("a.aboutme").click(
	function(){
		var boxText = $(".about-me").html();
		
		

		$("#box").html(boxText+links+clicker);
		$("#box").animate({height:'500px', width:'700px',"margin-top":"-250px", "margin-left": "-350px"});
		$("a.aboutme").text("Home");
		$("#container").animate({'bottom': '6em', 'left': '20.5em'});
		$("a.aboutme").attr({'class': 'home', 'href':''});
		$.getScript("jquery/h.js")

		return false
	}
)

