$(document).ready(function(e){


Isotope.Item.prototype._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };
  this.sortData = {};
};

Isotope.Item.prototype.layoutPosition = function() {
  this.emitEvent( 'layout', [ this ] );
};

Isotope.prototype.arrange = function( opts ) {
  // set any options pass
  this.option( opts );
  this._getIsInstant();
  // just filter
  this.filteredItems = this._filter( this.items );
  // flag for initalized
  this._isLayoutInited = true;
};

// layout mode that does not position items
Isotope.LayoutMode.create('none');


// --------------- //

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'none'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// filter items on button click
$('.filter-button-group').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.button-group a.button').on('click', function(){
  $('.button-group a.button').removeClass('active');
  $(this).addClass('active');
});







// init Isotope
// var $grid = $('.grid').imagesLoaded( function() {
//   // init Isotope after all images have loaded
//   $grid.isotope({
//     itemSelector: '.element-item',
//     percentPosition: true,
//     masonry: {
//       // use element for option
//       columnWidth: '.grid-sizer',
//       gutter: 20
//     }
//   });
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'a', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });
// $('.button-group a.button').on('click', function(){
//   $('.button-group a.button').removeClass('active');
//   $(this).addClass('active');
// });




 //  $("#request-menu").on("click", function(e){
	// 	if ($(".menu-items").hasClass("visible")){
	// 		$(".menu-items").fadeOut();
	// 		$(".menu-items").removeClass("visible");
	// 	} else {
	// 		$(".menu-items").fadeIn();
	// 		$(".menu-items").addClass("visible");
	// 	}
	// });

  // $(window).on("resize", function(e){
  //   if ($(window).width() > 800) {
  //     $(".menu-items").show();
  //   }
  // })

  // if ($("#search-results").length) {
  //   var results = $("#search-results").children();
  //   if (!results.length) {
  //     var searchPrompter = "<li>Search for something in the search box at the top of the page!</li>"
  //     $("#search-results").append(searchPrompter);
  //   };
  // };

});
