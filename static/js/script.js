$(document).ready(function(){


	// Scrolling operations ////////////////////////////////////////////////
	
	//Static heights
	var card_height = parseInt($('#main').css('height').replace("px", ""));
	var shown = false;

	//These guys change on resize
	var window_width = $(window).width();
	var about_height = document.getElementById('about').offsetHeight;
	var exp_height = document.getElementById('experience').offsetHeight + 
		document.getElementById("exp-content").offsetHeight;
	var proj_height = document.getElementById('projects').offsetHeight;

	// For some weird reason, scrollTop is adding 200 more px, so adjustment:
	var distance_to_exp = card_height + about_height + 200;
	var distance_to_proj = distance_to_exp + exp_height;

	var $document = $(document)
	
	$(window).resize(function() {
		var window_width = $(window).width();
		var about_height = document.getElementById('about').offsetHeight;
		var exp_height = document.getElementById('experience').offsetHeight + 
			document.getElementById("exp-content").offsetHeight;
		var proj_height = document.getElementById('projects').offsetHeight;

		var distance_to_exp = card_height + about_height + 200;
		var distance_to_proj = distance_to_exp + exp_height + 200;
	})

	var lastScrollTop = 0;
	$document.scroll(function() {
		var st = $(this).scrollTop();
		var distanceToTop = $document.scrollTop();
		if (st > lastScrollTop) {
			
			//Downscroll stuff here
			if (distanceToTop >= card_height && distanceToTop < distance_to_exp) {
				$("#menu").show()
				$("#menu img").attr('src', 'static/images/menu.png');
				$("#navbar").css({
					"-webkit-transition":"1s",
					"transition":"1s"
				})
			} else if (distanceToTop >= distance_to_exp  && distanceToTop < distance_to_proj) {
					$("#menu img").attr('src', 'static/images/menuwhite.png');
					if (distanceToTop > distance_to_exp + 300 && distanceToTop < distance_to_exp + 550) {
						$("#exp-left-1").css({
							"margin-left":"5%"
						})
					} else if (distanceToTop > distance_to_exp + 550 && distanceToTop < distance_to_exp + 800) {
						$("#exp-right-1").css({
							"margin-right":"5%"
						})
					}  
					else if (distanceToTop > distance_to_exp + 800 && distanceToTop < distance_to_exp + 1050) {
						$("#exp-left-2").css({
							"margin-left":"5%"
						})
					}
					else if (distanceToTop > distance_to_exp + 1050 && distanceToTop < distance_to_exp + 1200) {
						$("#exp-right-2").css({
							"margin-right":"5%"
						})
					} else if (distanceToTop > distance_to_exp + 1200 && distanceToTop < distance_to_exp + 1800) {
						$("#exp-left-3").css({
							"margin-left":"5%"
						})
					}

				} else if (distanceToTop >= distance_to_proj) {
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
			// Upscroll stuff here
			if (distanceToTop >= card_height && distanceToTop < distance_to_exp) {
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
			} else if (distanceToTop >= distance_to_exp && distanceToTop < distance_to_proj) {
					$("#menu img").attr('src', 'static/images/menuwhite.png');
			} else if (distanceToTop >= distance_to_proj) {
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
	//////////////////////////////////////////////////////////////////////////



	$("#logo").fadeTo(4000, 1);
	window.setTimeout(function (){
		$("#name").fadeTo(4000, 1); 
		$("#subtitle").fadeTo(4000, 1);
		$("#relevant").fadeTo(4000, 1);
		$("#contacts").fadeTo(4000, 1);
		$("#scrolldown").fadeTo(4000, 0.45);

	}, 3000);
	

	var y = $(window).scrollTop();  
	$("#logo").click(function() {
		$("#card").addClass("flipped")
	})

	$("#flip-over").click(function() {
		$("#card").removeClass("flipped")
	})

	$(".proj_col").click(function() {
		$("#project_card").addClass("flipped")
	})

	$('#scrolldown').click(function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top - 59 }, 1500);
	});

	$("#about-link").click(function() {
		$("html, body").animate({ scrollTop: $("#about").offset().top - 59 }, 1500);	
	})

	$("#exp-link").click(function() {
		$("html, body").animate({ scrollTop: $("#experience").offset().top }, 1500);	
	})
	$("#proj-link").click(function() {
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