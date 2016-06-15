;(function($, window, document, undefined) {

    var pluginName = 'cvShare';
    var defaults = {
      toggleElem: '.share__toggle',
      twitterElem: '.share__twitter',
      facebookElem: '.share__facebook',
      emailElem: '.share__email'
    };

    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options);

        this._name = pluginName;

        this.url = location.protocol + '//' + location.host + location.pathname;

        this.init();
    }

    Plugin.prototype = {
        init: function(name) {
            this.events();
            this.initFacebook();
            this.initTwitter();
            this.initEmail();
        },

        // Setup twitter share/tweet default parameters
        initTwitter: function() {
          var _this = this;
          var url = this.url;
          var via;
          var hashtag = 'cyberview';
          var text = document.getElementsByTagName("title")[0].innerHTML;

          $(this.options.twitterElem).attr('href',
            'https://twitter.com/intent/tweet?' +
            '&url=' + _this.encodeToURI(url) +
            '&hashtags=' + _this.encodeToURI(hashtag) +
            '&text=' + _this.encodeToURI(text)
          );
        },

        initFacebook: function() {
          $(this.options.facebookElem).on('click', function() {
            var url = [location.protocol, '//', location.host, location.pathname].join('');

            FB.ui({
              method: 'share',
              href: url
            }, function(response){});
          });
        },

        initEmail: function() {
          var _this = this;
          var url = this.url;
          var subject = document.getElementsByTagName("title")[0].innerHTML;
          var body = 'Check out this site ';

          $(this.options.emailElem).attr('href',
            'mailto:?' +
            'subject=' + _this.encodeToURI(subject) +
            '&body=' + _this.encodeToURI(body) + url
          );
        },

        encodeToURI: function(string) {
          return encodeURI(string);
        },

        events: function() {
          var $el = $(this.element);

          $(this.options.toggleElem).on('click', function(){
        		$(this).siblings('.mui-enter').toggleClass('mui-enter-active');
        	});

          // Outside click
          $(document).on('click',function(e) {
            var container = $el;

            if (!container.is(e.target) // if the target of the click isn't the container...
              && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.children().removeClass('mui-enter-active');
            }
          });
        }
    }


    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
            else if ($.isFunction(Plugin.prototype[options])) {
                $.data(this, 'plugin_' + pluginName)[options]();
            }
        });
    }
})(jQuery, window, document);
