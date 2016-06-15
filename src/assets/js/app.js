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
$('.news__listing').perfectScrollbar();
