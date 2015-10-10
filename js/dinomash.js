//DinoMash JS
$(document).ready(function()
{
	var parentAddress = "";
	//Animation Function -- returns animation id
	animateImage = function(elt, name, frameEnd, fps, life, cycle, frameStart){
		var time = 1000/fps;
		var curFrame = frameStart;
		timer_id = setInterval(function() {          
	             var prevFrame = curFrame-1;
	             if (curFrame > 0)
	             	$(elt).removeClass("sprite-" + name + "_" + prevFrame); 
	             	
	             	if (curFrame > frameEnd){
	        			if (cycle){
	        				curFrame = 0;
	        			}else{
	        				clearInterval(time_id);
	        			}
	        		}

	        		$(elt).addClass("sprite-" + name + "_" + curFrame); 
	        		curFrame += 1;

	        }, time);

		if (life > 0){
			setTimeout(function() {
		            clearInterval(timer_id);
		        }, life*1000);
		}

		return timer_id;
	}

	animateGetFrame = function(elt, name){
		 var myClass = $(elt).attr("class");
		 var num = myClass.slice(-1);
		 return num;
	}

	animateSetFrame = function(elt, name, frame){
		prevFrame = frame-1;
		$(elt).removeClass("sprite-" + name + "_" + prevFrame);     
	    $(elt).addClass("sprite-" + name + "_" + frame);
	}

	animateStop = function(animationId){
		clearInterval(animationId);
	}

	animateResume = function(elt, name, frameEnd, fps, life, cycle, frameStart){
		var frame = animateGetFrame(elt, name);
		return animateImage(elt, name, frameEnd, fps, life, cycle, frameStart);
	}

	
	animateMoveAcrossDeprecated = function(elt,time,cycleTime,startPos){
		
		if (cycleTime > 0){
			var calcTime = $(window).width()

			myTimer = setInterval(function(){
				$(elt).css("visiblity", "visible");
				$(elt).animate({left:"3000px"},time*1000,function(){
					$(elt).css("left", startPos);
					$(elt).css("visiblity", "hidden");
				}); 
			}, cycleTime*1000);
		}
		$(elt).css("visiblity", "visible");
		$(elt).animate({left:"3000px"},time*1000,function(){
			$(elt).css("left", startPos);
			$(elt).css("visiblity", "hidden");
		}); 
	
	}

	animateMoveAcross = function(elt,speed,cycleTime,startPos, startTime){
		$(elt).stop(true,true);
		$(elt).css("left", startPos);
		$(elt).css("visiblity", "hidden");
		$(elt).css("visiblity", "visible");
		var startTimer = setTimeout(function(){
			var ww = $(window).width();
			var time =  ww/speed;
			$(elt).animate({left:$(window).width()},time*1000,"linear",function(){
				$(elt).css("left", startPos);
				$(elt).css("visiblity", "hidden");
				if (cycleTime > 0){
					myTimer = setTimeout(function(){
						if(ww == $(window).width())
							animateMoveAcross(elt,speed,cycleTime,startPos);
						else
							console.log("window changed do not animate");
					},cycleTime*1000);
				}
			}); 
		}, startTime*1000);

		return startTimer;
	}

	//Animate different images!
	var slothAni = animateImage("#sloth","sSlothSnore",6,10,30, true, 0);
	var slothAni = animateImage("#sloth-banner","sSlothSnore",6,10,0, true, 0);
	var barneyAni = animateImage("#barney-banner","sBarney",9,15,0, true, 0);
	var chickenAni = animateImage("#chicken-banner","sChicken",7,15,0, true, 0);
	var dinoAni1 = animateImage("#dino-banner-1","sMiniDino",9,30,0, true, 0);
	var dinoAni2 = animateImage("#dino-banner-2","sMiniDino",9,30,0, true, 0);
	var dinoAni3 = animateImage("#dino-banner-3","sMiniDino",9,30,0, true, 0);
	var dinoAni4 = animateImage("#dino-banner-3","sMiniDino",9,30,0, true, 0);
	
	var barneyMoveAni =	animateMoveAcross("#barney-banner", 200, 3+5, "-600px", 8);
	var chickenMoveAni = animateMoveAcross("#chicken-banner", 350, 2+5, "-1000px", 15);
	var dino1MoveAni =	animateMoveAcross("#dino-banner-1", 300, 1+5, "-200px", 12);
	var dino2MoveAni =	animateMoveAcross("#dino-banner-2", 400, 3+5, "-200px",11);
	var dino3MoveAni =	animateMoveAcross("#dino-banner-3", 320, 6+5, "-200px",12);



	animateQuoteBanner = function(){ 
		clearTimeout(barneyMoveAni);
  		clearTimeout(chickenMoveAni);
  		clearTimeout(dino1MoveAni);
  		clearTimeout(dino2MoveAni);
  		clearTimeout(dino3MoveAni);
		 barneyMoveAni = animateMoveAcross("#barney-banner", 200, 3+5, "-600px", 8);
		 chickenMoveAni = animateMoveAcross("#chicken-banner", 350, 2+5, "-1000px", 15);
		 dino1MoveAni =	animateMoveAcross("#dino-banner-1", 300, 1+5, "-200px", 12);
		 dino2MoveAni =	animateMoveAcross("#dino-banner-2", 400, 3+5, "-200px",11);
		 dino3MoveAni =	animateMoveAcross("#dino-banner-3", 320, 6+5, "-200px",12);
	}
		
	adjustBanner = function(){
  		var bannerRatio = 800/1100;
  		var bwidth = $(window).width();
  		var bheight = 800;

  		if ($(window).height() < 800){
  			bheight = $(window).height();
  		}

  		if ($(window).width() < 980){
  			$("#facts").children().removeClass("block");
  			$("#facts").children().addClass("block-small");
  		} else {
  			$("#facts").children().removeClass("block-small");
  			$("#facts").children().addClass("block");
  		}

  		animateQuoteBanner();

  		if ($(window).width() < 1100){ 
			$(".shrink").css("height", bwidth*bannerRatio);
			$("#dino_mash_top").css("background-image", "url('../"+parentAddress+"/images/dinomash_cond.png')");
			$("#social_bar_top img").css("max-width", "100%");
			$(".social_icons_top").css("width", 50);
			$("#youtube_top").css("width", 65);
			$( "#nav_banner" ).css('display', 'none');
			$( "#nav_top" ).css('display', 'block');
		}else{
			$(".shrink").css("height", bheight);
			$("#dino_mash_top").css("background-image", "url('../"+parentAddress+"/images/dinomash.png')");
			$("#social_bar_top img").css("max-width", "100%");
			$(".social_icons_top").css("width", "auto");
			$( "#nav_top" ).css('display', 'none')
			$( "#nav_banner" ).css('display', 'block');
		}
		
		$( "#dino_mash_top" ).hide();
		$( "#dino_mash_top" ).css('opacity', 0);
		$( "#social_bar_top" ).css('opacity', 0);
		$( "#nav_banner" ).css('opacity', 0)
		$( "#dino_mash_top" ).slideDown(900+300);

		
		setTimeout(function() {
	    	$("#dino_mash_top")
			  .animate(
			    { opacity: 1 },
			    { queue: false, duration: 'slow' }
			  );
	     }, 500+300);

		setTimeout(function() {
	    	$("#social_bar_top")
			  .animate(
			    { opacity: 1 },
			    { queue: false, duration: 'slow' }
			  );

			  $("#nav_banner")
			  .animate(
			    { opacity: .8 },
			    { queue: false, duration: 'slow' }
			  );
	     }, 800+300);
	};

	//Adjust the Banner 
	adjustBanner();

	//Screen Shots JS
	$('.screens').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery:{enabled:true},
	  removalDelay: 200
	});

	//Actions When Browser Changes With
	$(function() {

	    var timer_id;

	    $(window).resize(function() {

	        clearTimeout(timer_id);

	        timer_id = setTimeout(function() {

	            adjustBanner();

	        }, 300);
	    });
	});

	//Quote Object
	/*
	var QuoteObject = function(quoteTimeSec, elt){
		//Public Members
		me = this;
		me.fadeOutTimer = null;
		me.active = false;
		me.elt = elt;	
		me.displayConditions = {
			fullyInView: function(){
				if ($(me.elt).visible()) //&& $('#quote_banner_cover').visible() == false
					return true;
				else
					return false;
			}
		};
		
		//Semi-Public Memebers 
		me._setQuoteNext = function() {
  			$(me.elt).text(me.getNextQuote());
		};

		me._queueNextQuote = function(condition){
			if (condition() == false)
				this._active = false;

				setTimeout(function(){
					me.quoteDisplay(me.displayConditions.fullyInView);
				},quoteTime);
		}


		//Private Members
		me.quoteTime = quoteTimeSec*1000;
		me.quoteCur = 0;
		me.quotes = [
			"Best game ever! I like how it feels, the graphics, and simplicity. Its just wonderul and friendly to all ages.",
			"I love this game more than my unborn child.",
			"This game could save america.",
			"Penis",
			"DINOOOOOOOOOOOOOOOOOOO MASHHHHHHHHHHHHHHHHH"
		];

		me.getNextQuote = function (){
			me.quoteCur += 1;
			if (me.quoteCur >= me.quotes.length)
				me.quoteCur = 0;

			return me.quotes[me.quoteCur];
		}

		me.getQuote = function (quoteNum){
			return quotes[quoteNum];
		}	

		me.quoteFadeIn = function(){
			$(me.elt)
				  .animate(
				    { opacity: 1 },
				    { queue: true, duration: 'slow'});
		}
 	
		me.quoteFadeOut = function(){
			$(me.elt)
			  .animate(
			    { opacity: 0 },
			    { queue: true, duration: 'slow', complete: function(){
			    	 me.checkAndCycle();
			    }});
		}

		me.checkAndCycle = function(){
			if (me.displayConditions.fullyInView()){
				me._setQuoteNext();
				me.quoteDisplay();
			} else {
				me.active = false;
			}
		}
	}

	QuoteObject.prototype.quoteDisplay = function() {
  		
  		var me = this;
  		this.quoteFadeIn();  		
  		clearTimeout(quoteObject.fadeOutTimer);
  		fadeOutTimer = setTimeout(function(){
  			me.quoteFadeOut();
  		},me.quoteTime);
	};

	var quoteObject = new QuoteObject(10, "#quote_banner_quote");*/

	//If the user scrolls...
	/*$(window).scroll(function() {
		 if (quoteObject.displayConditions.fullyInView()){
		 		quoteObject.active = true;
		 } else {
				quoteObject.active = false;
		}
	});*/

});


