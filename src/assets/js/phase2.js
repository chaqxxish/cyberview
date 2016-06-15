$(document).ready(function () {
  // Standard carousel initiation

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

  $('.mixitup').mixItUp({
    selectors: {
      target: '.columns'
    },
    animation: {
      effects: 'fade'
    },
    callbacks: {
      onMixLoad: function(state) {
        $('.mixitup').resize();
      }
    }
  }); 

  $('select.filter-event').on('change', function(){
    $('.mixitup').mixItUp('filter', this.value);
    console.log(this.value);
  });
})