( function( $ ) {

// GET STARTED HOVER
$(".get--started ul li:last-child").mouseover(function(){
    $(".get--started ul li").addClass("act");
    $(".get--started ul li:nth-child(2)").addClass("act2");
});
		
$(".get--started ul li:last-child").mouseleave(function(){
    $(".get--started ul li").removeClass("act");
    $(".get--started ul li:nth-child(2)").removeClass("act2");
})	
	
$(".nav-trigger").click(function(){
    $(".mob-menu").toggleClass("act");
    $(this).toggleClass("act");
});
	
// EXCHANGE CAROUSEL
$('.exchange__carousel').slick({
  dots: false,
  arrows: true,
  prevArrow:"<i class='icon-arrow-left'></i>",
  nextArrow:"<i class='icon-arrow-right'></i>",
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5
      }
    },
    { 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// FIXED HEADER
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 80)
        $(".navbar").addClass("affix");
    else
        $(".navbar").removeClass("affix");
});

$(".custom-sel").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-sel").removeClass("opened");
  });
  $(this).parents(".custom-sel").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-sel").removeClass("opened");
  $(this).parents(".custom-sel").find(".custom-select-trigger").text($(this).text());
});
	
	
$(document).ready(function(){
  $('.custom-upload1 input').change(function () {
    var file = $('.custom-upload1 input')[0].files[0].name;
    $('.custom-upload1 p').text(file);
  });
});	

$(document).ready(function(){
  $('.custom-upload2 input').change(function () {
    var file = $('.custom-upload2 input')[0].files[0].name;
    $('.custom-upload2 p').text(file);
  });
});	
	
$("ul.dropul").on("click", ".init", function() {
    $(this).closest("ul.dropul").children('li:not(.init)').toggle();
});

var allOptions = $(this);
$("ul.dropul").on("click", "li:not(.init)", function() {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().children('.init').html($(this).html());
    allOptions.toggle();
});	

	
} )( jQuery );