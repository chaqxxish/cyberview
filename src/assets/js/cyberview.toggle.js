var toggleElem = (function() {
	var options = {};

  options.toggleElem = '.toggle';
  options.toggleBtnElem = '.toggle__button';
  options.toggleConElem = '.toggle__content';

  var init = function() {
    var $elem;

    $(options.toggleBtnElem).on('click', function(e){
      e.preventDefault();

      $elem = $(this).parent(options.toggleElement);
      $elem.toggleClass('is-toggle').promise().done(function() {
        toggleElement($elem);
      });

      return false;
    })
  };

  var toggleElement = function(elem) {
    var $elem = elem;

    $elem.hasClass('is-toggle') ? (
      $(options.toggleConElem, $elem).slideDown(),
      $(options.toggleBtnElem, $elem).text('close')
    ) : (
      $(options.toggleConElem, $elem).slideUp(),
      $(options.toggleBtnElem, $elem).text('Read more')
    );
  };

  return init();
})();
