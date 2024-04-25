/**
 *	ZYAN - Personal Portfolio Templete (HTML)
 *	Author: codeefly
 *	Author URL: http://themeforest.net/user/codeefly
 *	Copyright © ZYAN by codeefly. All Rights Reserved.
 **/

(function ($) {
  "use strict";
  console.clear();

  let device_width = window.innerWidth;
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;

  var zyan = {
    /* ZYAN init */
    init() {
      zyan.imgToSvg(),
        zyan.mobileMenu(),
        zyan.counter(),
        zyan.slickSlider(),
        zyan.marquee(),
        zyan.marquee2(),
        zyan.stickySideBar(),
        zyan.textAnimation(),
        zyan.headingAnimation(),
        zyan.progressbar(),
        zyan.parallaxie(),
        zyan.animation(),
        zyan.customMouse(),
        zyan.magnificPopup(),
        zyan.serviceHover(),
        zyan.stickySideBar();
    },
    /* Svg to image */
    imgToSvg() {
      document.querySelectorAll("img.svg").forEach((el) => {
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL)
          .then((data) => data.text())
          .then((response) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
              svg.setAttribute("id", imgID);
            }

            if (typeof imgClass !== "undefined") {
              svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
              el.parentNode.replaceChild(svg, el);
            }
          });
      });
    },
    /** Mobile Menu */
    mobileMenu() {
      if ($(".main_menu").offset() != undefined) {
        var navoff = $(".main_menu").offset().top;
        $(window).scroll(function () {
          var scrolling = $(this).scrollTop();

          if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
          } else {
            $(".main_menu").removeClass("menu_fix");
          }
        });
      }
      /** Mobile Menu Button */
      $(".menu_2_icon").on("click", function () {
        $(".menu_2_icon").toggleClass("show_icon");
      });
      $(".menu_2_icon").on("click", function () {
        $(".main_menu_2").toggleClass("show_menu");
      });
      $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
      });
    },
    /** counter */
    counter() {
      $(".counter").countUp();
    },
    /** Slick Slider */
    slickSlider() {
      $(".testi_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    },
    /** marquee */
    marquee() {
      $(".marquee_animi").marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    },
    marquee2() {
      $(".marquee_animi2").marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: "right",
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    },
    /** Sticky sidebar */
    stickySideBar() {
      $("#sticky_sidebar").stickit({
        top: 100,
      });
    },
    /** Animation */
    animation() {
      /** Fade Left */
      let fade_left = gsap.utils.toArray(".fade_left");
      gsap.set(fade_left, {
        opacity: 0,
        x: -30,
      });

      if (fade_left) {
        if (device_width < 1023) {
          fade_left.forEach((item, i) => {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          });
        } else {
          fade_left.forEach((item, i) => {
            const containerID = `#${item.getAttribute("data-trigerId")}`;
            gsap.to(
              `${containerID !== "#null" ? containerID : ""} .fade_left`,
              {
                scrollTrigger: {
                  trigger: containerID !== "#null" ? containerID : ".fade_left",
                  start: "top center+=150",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              }
            );
          });
        }
      }

      /** Fade Right */
      let fade_right = gsap.utils.toArray(".fade_right");
      gsap.set(fade_right, {
        opacity: 0,
        x: +30,
      });

      if (fade_right) {
        if (device_width < 1023) {
          fade_right.forEach((item, i) => {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          });
        } else {
          fade_right.forEach((item, i) => {
            const containerID = `#${item.getAttribute("data-trigerId")}`;
            const stagger = item.getAttribute("data-stagger");
            gsap.to(`${containerID} .fade_right`, {
              scrollTrigger: {
                trigger: containerID,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: stagger ? stagger : 0.4,
              },
            });
          });
        }
      }

      /** Fade Bottom */
      let fade_bottom = gsap.utils.toArray(".fade_bottom");
      if (device_width < 1023) {
        fade_bottom.forEach((item, i) => {
          gsap.set(item, { opacity: 0, y: 60 });
          let featured2Timeline = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top center+=200",
            },
          });
          featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
          });
        });
      } else {
        fade_bottom.forEach((item, i) => {
          const containerID = `#${item.getAttribute("data-trigerId")}`;
          const stagger = item.getAttribute("data-stagger");
          const duration = item.getAttribute("data-duration");
          const defaultValue = item.getAttribute("data-default-value");
          console.log(defaultValue);
          gsap.set(
            `${containerID !== "#null" ? containerID : ""} .fade_bottom`,
            {
              opacity: 0,
              y: defaultValue ? defaultValue : 30,
            }
          );
          gsap.to(
            `${containerID !== "#null" ? containerID : ""} .fade_bottom`,
            {
              scrollTrigger: {
                trigger: containerID !== "#null" ? containerID : ".fade_bottom",
                start: "top center+=200",
              },
              opacity: 1,
              y: 0,
              duration: duration ? duration : 2,
              ease: "power4.out",
              stagger: stagger ? stagger : 0.3,
            }
          );
        });
      }
    },
    /** Text animation */
    textAnimation() {
      if (device_width > 767) {
        var hasAnim = $(".text_hover_animaiton");
        if (hasAnim.length !== 0) {
          hasAnim.each(function () {
            var $this = $(this);
            var splitType = "words,chars";
            new SplitText($this, {
              type: splitType,
              wordsClass: "menu-text",
            });
          });
        }
      }
    },
    headingAnimation() {
      var hasAnim = $(".has-animation");
      if (device_width > 767) {
        hasAnim.each(function () {
          var $this = $(this);
          var splitType = "lines, chars";
          var splitto = new SplitText($this, {
            type: splitType,
            linesClass: "anim_line",
            charsClass: "anim_char",
            wordsClass: "anim_word",
          });
          var lines = $this.find(".anim_line"),
            words = $this.find(".anim_word"),
            chars = $this.find(".anim_char");
          gsap.fromTo(
            chars,
            { y: "100%" },
            {
              y: "0%",
              duration: 0.8,
              stagger: 0.01,
              ease: "power2.out",
              scrollTrigger: {
                trigger: $(this).parent("div"),
                start: "top center+=300",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    },
    progressbar() {
      var progressbar = $(".tf__team_skills_bar_single .fill");
      progressbar.each(function () {
        const percentage = progressbar.attr("data-percentage");
        gsap.fromTo(
          progressbar,
          { css: { width: 0 } },
          {
            scrollTrigger: {
              trigger: $(this).parent("div"),
              start: "top center+=300",
              toggleActions: "play none none none",
            },
            css: { width: `${percentage}%` },
            duration: 0.8,
            stagger: 0.01,
            ease: "power2.out",
          }
        );
      });
    },
    /** parallaxie */
    parallaxie() {
      $(".tf__subscribe").parallaxie({
        speed: 0.8,
        size: "cover",
      });
    },
    /** Preloader */
    preloader() {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.to(".preloader-text", {
        delay: 0.5,
        y: -100,
        opacity: 0,
      });
      tl.to(svg, {
        duration: 0.1,
        // attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      });
      tl.to(".preloader", {
        y: -1500,
      });
      tl.to(".preloader", {
        zIndex: -1,
        display: "none",
      });
    },
    /** Mouse */
    customMouse() {
      var mouse = { x: 0, y: 0 }; // Cursor position
      var pos = { x: 0, y: 0 }; // Cursor position
      var ratio = 0.15; // delay follow cursor
      var active = false;
      var ball = $("#ball");

      /** default */
      const defaultValue = {
        duration: 0.3,
        opacity: 0.5,
        width: "30px",
        height: "30px",
        backgroundColor: "transparent",
        border: "2px solid #fff",
      };
      const hoverBall = {
        duration: 0.3,
        css: {
          borderWidth: 0,
          opacity: "1!important",
          width: "95px!important",
          height: "95px!important",
          backgroundColor: "#fff",
        },
      };
      gsap.set(ball, {
        // scale from middle and style ball
        xPercent: -50,
        yPercent: -50,
      });
      document.addEventListener("mousemove", mouseMove);
      function mouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      gsap.ticker.add(updatePosition);
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;

          gsap.set(ball, { x: pos.x, y: pos.y });
        }
      }
      // link
      $("a,.c-pointer,button,.progress")
        .not(".project_slider a") // omit from selection.
        .on("mouseenter", function () {
          gsap.to(ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.5,
            backgroundColor: "#CCC",
            width: "80px",
            height: "80px",
          });
        })
        .on("mouseleave", function () {
          gsap.to(ball, defaultValue);
        });
      // Data cursor
      if ($("[data-cursor]")) {
        $("[data-cursor]").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append('<div class="ball-view"></div>');
              $(".ball-view").append($(this).attr("data-cursor"));
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-view").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
      // Slider
      if ($(".slick-list")) {
        $(".slick-list").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-drag"><i class="far fa-angle-left"></i><i class="far fa-angle-right"></i></div>'
              );
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-drag").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
      // Gallery
      if ($(".gallery")) {
        $(".gallery").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-gallery"><i class="fa-sharp fa-solid fa-eye"></i></div>'
              );
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-gallery").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
    },
    magnificPopup() {
      $(".play_btn").each(function () {
        $(this).magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          preloader: false,
          fixedContentPos: true,
        });
      });
      $(".image_popup,.gallery_popup a").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
      });
      $(".details").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: true,
        mainClass: "mfp-fade zyan-popup",
      });
    },
    serviceHover() {
      const services = document.querySelectorAll(".tf__single_service_2");
      services.forEach((service) => {
        service.addEventListener("mouseenter", () => {
          document
            .querySelector(".tf__single_service_2.active")
            .classList.remove("active");
          service.classList.add("active");
        });
      });
    },
  };
  $(document).ready(function () {
    zyan.init();
    zyan.preloader();
  });
})(jQuery);


/* Please ❤ this and follow me if you like it! */

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function () {
	var lastTime = 0;
	var vendors = ["webkit", "moz", "ms", "o"];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
		window.cancelAnimationFrame =
			window[vendors[x] + "CancelAnimationFrame"] ||
			window[vendors[x] + "CancelRequestAnimationFrame"];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
})();

(function () {
	var html = document.documentElement;

	function Snowflake(maxX) {
		this.reset(maxX);
	}
	Snowflake.prototype.tick = function () {
		var sidePhase = (this.sidePhase += this.sideVel);
		this.y += this.vel;
		this.x += this.sideVel;
	};
	Snowflake.prototype.reset = function (maxX) {
		var rand = Math.random();
		var chanceOfLargeSnowflake = 0.15;

		this.size = Math.random();
		this.vel = 2 + Math.random() * 3;

		if (this.size < chanceOfLargeSnowflake) {
			this.size += 2;
		} else {
			this.size += 0.5;
			this.vel *= 0.8;
		}

		this.alpha = 0.5 + Math.random() * 0.8;

		// random x position
		this.x = Math.random() * maxX;
		this.y = -this.size;

		// side-to-side movement
		this.sideVel = (0.5 - Math.random()) * this.vel;

		return this;
	};

	(function () {
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");
		var settleCanvas = document.createElement("canvas");
		var settleContext = context && settleCanvas.getContext("2d");
		var windowResized;
		var activeFlakes = [];
		var snowflakesPerPixelPerSecond = 0.1;
		var PIx2 = Math.PI * 2;
		var assumedFps = 60;
		var settlePoint;
		var snowflakePool = [];

		function resizeCanvas() {
			settlePoint = Array(html.clientWidth);
			settleCanvas.width = canvas.width = html.clientWidth;
			settleCanvas.height = canvas.height = html.clientHeight;
		}

		function updateSettlePoints(flake) {
			var size = flake.size * 0.8; // reduce coral effect
			var xStart = Math.floor(flake.x - size);
			var range = size * 2;
			var newY;

			if (xStart < 0) {
				range += xStart;
				xStart = 0;
			}
			if (xStart + range > settlePoint.length) {
				range -= xStart + range - settlePoint.length;
			}

			for (var i = 0; i < range; i++) {
				newY = flake.y - size * Math.cos((i / range) * Math.PI - Math.PI / 2);
				settlePoint[i + xStart] = Math.min(
					settlePoint[i + xStart] || Infinity,
					newY
				);
			}
		}

		var flakesToCreate = 0;

		function frame() {
			flakesToCreate += (snowflakesPerPixelPerSecond / assumedFps) * canvas.width;
			var flakesThisFrame = Math.floor(flakesToCreate);
			flakesToCreate -= flakesThisFrame;

			// clear canvas
			if (windowResized) {
				resizeCanvas();
				windowResized = false;
			} else {
				context.clearRect(0, 0, canvas.width, canvas.height);
			}

			// add new flake?
			while (flakesThisFrame--) {
				if (snowflakePool.length) {
					activeFlakes.push(snowflakePool.pop().reset(canvas.width));
				} else {
					activeFlakes.push(new Snowflake(canvas.width));
				}
			}

			var i = activeFlakes.length;
			var flake;

			// for each flake...
			while (i--) {
				flake = activeFlakes[i];
				flake.tick();

				// splice flake if it's now out of rendering zone
				if (
					flake.y >= canvas.height ||
					flake.y >= settlePoint[Math.floor(flake.x)]
				) {
					snowflakePool.push.apply(snowflakePool, activeFlakes.splice(i, 1));
					// this flake effects our settle points
					if (flake.alpha > 0.8) {
						updateSettlePoints(flake);
					}
					settleContext.fillStyle = "rgba(255, 255, 255, " + flake.alpha + ")";
					settleContext.beginPath();
					settleContext.arc(flake.x, flake.y, flake.size, 0, PIx2, true);
					settleContext.closePath();
					settleContext.fill();
					continue;
				}

				// render to canvas
				context.fillStyle = "rgba(255, 255, 255, " + flake.alpha + ")";
				context.beginPath();
				context.arc(flake.x, flake.y, flake.size, 0, PIx2, true);
				context.closePath();
				context.fill();
			}
			requestAnimationFrame(frame);
		}

		if (context) {
			resizeCanvas();

			// watch out for resizes
			window.addEventListener(
				"resize",
				function () {
					windowResized = true;
				},
				false
			);

			// add it to the page & start animating
			document.body.appendChild(canvas);
			document.body.appendChild(settleCanvas);
			requestAnimationFrame(frame);
		}
	})();
})();

