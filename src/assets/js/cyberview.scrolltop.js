var toggleElem = (function() {
	var options = {};
  var didScroll = false;
  var delta = 5;
  var lastScrollTop = 0;
  var navbarHeight = 100;
	var windowHeight;
	var footerHeight;
	var footerPos;

  options.btnElem = '.button-scrolltop';
  options.template = '<button class="button-scrolltop"><i class="icon-chevron-thin-up"></i></button>';
	/* Old template
  options.template = '<div class="l-scrolltop"><button class="button-scrolltop"><i class="icon-chevron-thin-up"></i></button></div>'; */

  var init = function() {
    // Insert component markup before footer element
    $('footer').before(options.template);

		windowHeight = $(window).height();

		$(window).load(function() {
			documentHeight = $(document).height();
			footerHeight = $('footer').outerHeight();
			footerPos = documentHeight - footerHeight;
		})
  };

  var checkInsertion = setInterval(function() {
    if($(options.btnElem).length > 0) {
      createEvent();
    }
	}, 250);

  var createEvent = function() {
		// Clear markup inspection interval once element is found
    clearInterval(checkInsertion);

    $(window).on('scroll', function(e){
        didScroll = true;
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
    });

		$(window).on('resize', function(e){
			// Update footer height on viewport resize
			documentHeight = $(document).height();
			footerHeight = $('footer').outerHeight();
			footerPos = documentHeight - footerHeight;

			// Update window height on viewport resize
			windowHeight = $(window).height();
		});

    $(options.btnElem).on('click', function(e){
      $('html, body').animate({ scrollTop: 0 }, {duration: 800, queue: false});
    });
  };

  var hasScrolled = function() {
    var st = $(this).scrollTop();
		var stView = st + windowHeight;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > navbarHeight){
        // Scroll Down
        $('.button-scrolltop').addClass('is-active');

				if(st + windowHeight >= footerPos) {
					$(options.btnElem).css('bottom', (stView - footerPos) + 20 + 'px');
				} else {
					$(options.btnElem).css('bottom', 20 + 'px');
				}
    } else {
        // Scroll Up
        $('.button-scrolltop').removeClass('is-active');
        // if(st + $(window).height() < $(document).height()) {
        //     $('.button-scrolltop').removeClass('is-active');
        // }
    }

    lastScrollTop = st;
  }

  return init();
})();
