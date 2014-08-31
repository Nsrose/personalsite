$(document).ready(function(){

	//Static heights
	var card_height = parseInt($('#main').css('height').replace("px", ""));
	var shown = false;
	var about_content = parseInt($('#about').css('height').replace("px", ""));
	var exp_content = parseInt($('#experience').css('height').replace("px", "")) + parseInt($('#exp-content').css('height').replace("px", ""));
	var proj_content = parseInt($('#projects').css('height').replace("px", ""));

	//These guys change on resize
	var window_width = $(window).width();
	var about_height = about_content + .09 * window_width + 2 * .15 * window_width
	var exp_height = exp_content + 2 * .15 * window_width
	var proj_height = proj_content + .15 * window_width

	var distance_to_exp = card_height + about_height
	var distance_to_proj = distance_to_exp + exp_height

	





	$("#logo").fadeTo(4000, 1)
	window.setTimeout(function (){
		$("#name").fadeTo(4000, 1); 
		$("#subtitle").fadeTo(4000, 1);
		$("#relevant").fadeTo(4000, 1);
		$("#contacts").fadeTo(4000, 1);
		$("#scrolldown").fadeTo(4000, 0.45);

	}, 3000);
	

	var y = $(window).scrollTop();  
	$("#logo").click(function() {
		// $("html, body").animate({ scrollTop: y + $(window).height() }, 600); 	
		$("#card").addClass("flipped")
	})

	$("#flip-over").click(function() {
		$("#card").removeClass("flipped")
	})

	$(".proj_col").click(function() {
		$("#project_card").addClass("flipped")
	})

	$('#scrolldown').click(function(){
		// $("#contact").css({
		// 	"margin-top":"250px",
		// })
		// $("#page_content").css({
		// 	"height":"auto",
		// })
		$("html, body").animate({ scrollTop: $("#about").offset().top - 59 }, 1500);
	});

	$("#about-link").click(function() {
		// $("#contact").css({
		// 	"margin-top":"250px",
		// })
		// $("#page_content").css({
		// 	"height":"auto",
		// })
		$("html, body").animate({ scrollTop: $("#about").offset().top - 59 }, 1500);	
	})

	$("#exp-link").click(function() {
		// $("#contact").css({
		// 	"margin-top":"250px",
		// })
		// $("#page_content").css({
		// 	"height":"auto",
		// })
		$("html, body").animate({ scrollTop: $("#experience").offset().top }, 1500);	
	})
	$("#proj-link").click(function() {
		// $("#contact").css({
		// 	"margin-top":"250px",
		// })
		// $("#page_content").css({
		// 	"height":"auto",
		// })
		$("html, body").animate({ scrollTop: $("#projects").offset().top -120}, 2000);	
	})
	$("#contact-link").click(function() {
		$("#contact-item").click();
	})

	$("#logo").hover(function() {
		$(this).fadeTo(400, 0.5);
		this.src = "static/images/roseactivated.png"
		
	}, function() {
		this.src = "static/images/rose.png"
		$(this).fadeTo(400, 1)
	})



	var $document = $(document)
	
	$(window).resize(function() {
		var window_width = $(window).width();
		var about_height = about_content + .09 * window_width + .15 * window_width
		var exp_height = exp_content + .15 * window_width
		var proj_height = proj_content + .15 * window_width

		var distance_to_exp = card_height + about_height
		var distance_to_proj = distance_to_exp + exp_height
	})
	
	var lastScrollTop = 0;
	$document.scroll(function() {
		var st = $(this).scrollTop();
		if (st > lastScrollTop) {
			//Downscroll stuff here
			if ($document.scrollTop() >= card_height && $document.scrollTop() < distance_to_exp + 300) {
				$("#menu").show()
				$("#menu img").attr('src', 'static/images/menu.png');
				$("#navbar").css({
					"-webkit-transition":"1s",
					"transition":"1s"
				})
			} else if ($document.scrollTop() >= distance_to_exp && $document.scrollTop() < distance_to_proj + 200) {
					$("#menu img").attr('src', 'static/images/menuwhite.png');
					if ($document.scrollTop() > distance_to_exp + 500 && $document.scrollTop() < distance_to_exp + 750) {
						$("#exp-left-1").css({
							"margin-left":"5%"
						})
					} else if ($document.scrollTop() > distance_to_exp + 750 && $document.scrollTop() < distance_to_exp + 1000) {
						$("#exp-right-1").css({
							"margin-right":"5%"
						})
					}  
					else if ($document.scrollTop() > distance_to_exp + 1000 && $document.scrollTop() < distance_to_exp + 1250) {
						$("#exp-left-2").css({
							"margin-left":"5%"
						})
					}
					else if ($document.scrollTop() > distance_to_exp + 1250 && $document.scrollTop() < distance_to_exp + 1400) {
						$("#exp-right-2").css({
							"margin-right":"5%"
						})
					} else if ($document.scrollTop() > distance_to_exp + 1400 && $document.scrollTop() < distance_to_exp + 2000) {
						$("#exp-left-3").css({
							"margin-left":"5%"
						})
					}

				} else if ($document.scrollTop() >= distance_to_proj) {
					$("#menu img").attr('src', 'static/images/menu.png');
				}
				else {
				$("#menu").hide()
				$("#navbar").css({
					"-webkit-transition":"0s",
					"transition":"0s",
					"opacity":0
				})
				shown = false;
			}  
		} else {
			if ($document.scrollTop() >= card_height && $document.scrollTop() < distance_to_exp + 300) {
				$("#menu").show()
				$("#menu img").attr('src', 'static/images/menu.png');
				$("#navbar").css({
					"-webkit-transition":"1s",
					"transition":"1s"
				})
				$("#exp-left-1").css({
					"margin-left":"-40%"
				});
				$("#exp-right-1").css({
					"margin-right":"-40%"
				});
				$("#exp-left-2").css({
					"margin-left":"-40%"
				});
				$("#exp-right-2").css({
					"margin-right":"-40%"
				});
				$("#exp-left-3").css({
					"margin-left":"-40%"
				});
			} else if ($document.scrollTop() >= distance_to_exp && $document.scrollTop() < distance_to_proj + 200) {
					$("#menu img").attr('src', 'static/images/menuwhite.png');
			} else if ($document.scrollTop() >= distance_to_proj) {
				$("#menu img").attr('src', 'static/images/menu.png');
			}
			else {
				$("#menu").hide()
				$("#navbar").css({
					"-webkit-transition":"0s",
					"transition":"0s",
					"opacity":0
				})
				shown = false;
			}  
		}
		lastScrollTop = st;
		
		
	})

	$("#menu").click(function() {
		if(!shown) {
			$(".navbar-item").css({
				"visibility":"visible",
				"display":"inline-block",
			})

			$("#navbar").css({
				"opacity":1,
				"z-index":999,
				"width":"100%",
				
			})
			shown = true;
		} else {
			
			$("#navbar").css({
				"width":"50%",
				"z-index":0,
				"opacity":0,
				
			})
			$(".navbar-item").css({
				"visibility":"hidden",
			})
			shown = false;
		}
	});

	$("#card-item").click(function() {
		$("html, body").animate({ scrollTop: $("#card").offset().top }, 1500);
	})

	$("#about-item").click(function() {
		$("html, body").animate({ scrollTop: $("#about").offset().top - 61}, 1500);
	})
	$("#experience-item").click(function() {
		$("html, body").animate({ scrollTop: $("#experience").offset().top}, 1500);	
	})
	$("#projects-item").click(function() {
		$("html, body").animate({ scrollTop: $("#projects").offset().top - 120}, 2000);
	})
	$("#contact-item").click(function() {
		$("html, body").animate({ scrollTop: $("#projects").offset().top + 1000}, 2000);
	})

});