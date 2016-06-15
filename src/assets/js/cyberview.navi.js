/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in our plugin).

    // Create the defaults once
    var pluginName = "cyberviewNav",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
      var _this = this;

      $('.first-level').on('mouseenter touchstart', function(e){
        var $el = $(this);

        if($el.hasClass('is-hover')) {
          return true;
        } else {
          $('.first-level').removeClass('is-hover');
          $(this).addClass('is-hover');
          _this.toggleDropdown();
          _this.resetDropdown('submenu');
          e.preventDefault();
          return false;
        }
      });

      $('.second-level').on('mouseenter touchstart', function(e){
        var $el = $(this);
        $el.siblings('.nav-third').slideDown();
      });

      $('header').on('mouseleave', function() {
        _this.resetDropdown();
      });

      $('.button-menu').on('click', function(e) {
        e.stopPropagation();
        $('.nav--mobile').slideToggle();
      })

      $(document).on('click',function(e) {
        var container = $(".nav--mobile");
        if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.slideUp();
        }
      });

    };

    Plugin.prototype.toggleDropdown = function() {
      // Show/hide version
      $('.l-header__dropdown').hide();
      $('.first-level').filter('.is-hover').siblings('.l-header__dropdown').show();

      // Slide version
      /*$('.l-header__dropdown').filter(':visible').slideUp().promise().done(function() {
        $('.first-level').filter('.is-hover').siblings('.l-header__dropdown').slideDown();
      });*/
    };

    Plugin.prototype.resetDropdown = function(type) {
      if(type === 'submenu') {
        $('.nav-third').hide();
      } else {
        $('.l-header__dropdown').hide();
        $('.nav__link').removeClass('is-hover');
        $('.nav-third').hide();
      }
    }

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
