/* Fundation plugin initiation */
$(document).foundation();

/* Landing template background image injection */
var list = document.querySelectorAll("[data-image]");

for (var i = 0; i < list.length; i++) {
  var url = list[i].getAttribute('data-image');
  var className = '.' + list[i].className;

  //addCSSRule(document.styleSheets[0], className + ':before', "background-image: url(" + url + ")");
  injectStyles(className + ':before', "background-image: url(" + url + ")");
}

function addCSSRule(sheet, selector, rules, index) {
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}

function injectStyles(selector, rules) {
  var div = $("<div />", {
    html: '&shy;<style>' + selector + "{" + rules + "}" + '</style>'
  }).appendTo("body");
}

/* Social share */
var share = $('.share').cvShare();


// Standard carousel initiation
$('.carousel').slick({
  dots: true,
  mobileFirst: true,
  arrows: false,
  //adaptiveHeight: true,
  responsive: [{
    breakpoint: 640,
    settings: { arrows: true }
  }]
});

/* Landing page banner carousel */
$('.banner__media__carousel').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  asNavFor: '.header-box__listing'
})

$('.header-box__listing').slick({
  dots: false,
  arrows: false,
  swipe: false,
  swipeToSlide: false,
  draggable: false
})

/* Navigation initiation */
$('.nav--main').cyberviewNav();

/* Landing banner new listing scrollbar */
$(".news__listing-scroller").simplemarquee({
  speed: 20,
  direction: "top",
  cycles: "infinity",
  space: 30,
  delayBetweenCycles:0,
  handleResize: !0
})

$('.carousel-withthumbnails-thumbnails').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: true,
  centerMode: false,
  responsive: [{
    breakpoint: 860,
    settings: { 
      arrows: false,
      dots: true
   }
  }]
});

$('.carousel-withthumbnails-thumbnails li').on('click', function  () {
  var load = $(this).find('img').data('url'),
      type = $(this).find('img').data('type');
  $('.carousel-withthumbnails li').html($('<' + type + '>').attr('src', load));
});

$('.tabs-title').on('click', function () {
  $('.carousel-withthumbnails ul').resize();
})

// Go through each slider and assign custom paging slider
$('.ts-slider').each(function () {
  $(this).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: true,
    focusOnSelect: true,
    appendDots: $(this).prev().find('.slick-custompaging'),
    customPaging: function (slider, i) {
      var name = $(slider.$slides[i]).data('paging');
      return '<a href="#">' + name + '</a>';
    },
    responsive: [{
      breakpoint: 640,
      settings: { arrows: true }
    }]
  });

  var $nav = $(this).parent().find('.slick-custompaging');

  // Do not initializa custom scroll bar if content 
  // is less than 4. This is so that the nav will
  // have a full  width tab.
  if ($nav.find('.slick-dots li').length <= 4) {
    $nav.addClass('l-tabs--pill__justified');
  } else {
    $nav.mCustomScrollbar({
      axis:"x",
      theme:"dark-thin",
      scrollbarPosition: 'outside',
      scrollButtons: { 
        enable: true
        },
      advanced:{autoExpandHorizontalScroll:true}
    })
  }
})

$('[type="radio"]').on('change', function() {
  var t = $(this).data('target');  
  if ($(this).is(':checked')) {
    var r;

    $('[type="text"].input-others')
      .attr('disabled', 'disabled')
      .val('')
      .blur();

    $('[type="text"].input-others').each(function() { 
      r = $(this).attr('data-target-radio');

      if (t == r) {
        $('[data-target-radio="'+ t +'"]').removeAttr('disabled').focus();
      }
    })
    
  }

})

/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/

'use strict';

;( function( $, window, document, undefined )
{
  $( '.input-file' ).each( function()
  {
    var $input   = $( this ),
      $label   = $input.parent().find( '.input-filename' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
})( jQuery, window, document );