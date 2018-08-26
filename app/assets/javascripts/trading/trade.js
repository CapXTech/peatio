$(document).ready(function() {
    $('#my-orders').DataTable({
        "paging":   false
	});
	
    $('#trading-pairs').DataTable({
        "paging":   false
	});		
	
    $('#trading-pairs2').DataTable({
        "paging":   false
	});		
	
    $('#trading-pairs3').DataTable({
        "paging":   false
	});		
	
    $('#trading-pairs4').DataTable({
        "paging":   false
	});	
	
	$("#my-orders tbody tr").hover(function(){
		$(this).addClass("act");
	});	
	
	$("#my-orders tbody tr").mouseleave(function(){
		$(this).removeClass("act");
	});	
	
	$(".toggle-bar").click(function(){
		$("body").toggleClass("dark-mode");
		$(this).parent().toggleClass("act");
	});	
	
	$(".percent li").click(function(){
		$(".percent li").removeClass("act");
		$(this).addClass("act");
	});	
		
	$(".my-orders tbody tr td:first-child").click(function(){
		$(".cancel-popup").addClass("act");
		$(".my-orders tbody tr").addClass("noshow");
	});	
	
	$(".cancel-order").click(function(){
		$(".cancel-popup").addClass("act");
		$(".my-orders tbody tr").addClass("noshow");
	});	
	
	$(".cancel-popup .btn-danger").click(function(){
		$(".cancel-popup").removeClass("act");
		$(".my-orders tbody tr").removeClass("noshow");
	});	

	$(".mob-my-orders").click(function(event){
		event.preventDefault();
		$(".module > div").removeClass("act");
		$(".module > div.my-orders").addClass("act");
		$(".mob-dropdown ul").children('.inits').html($(this).html());
		$(".mob-buy").removeClass("act");
		$(".mob-sell").removeClass("act");		
	});	

	$(".mob-market-depth").click(function(event){
		event.preventDefault();
		$(".module > div").removeClass("act");
		$(".module > div.market-depth").addClass("act");
		$(".mob-dropdown ul").children('.inits').html($(this).html());
		$(".mob-buy").removeClass("act");
		$(".mob-sell").removeClass("act");			
	});	

	$(".mob-order-book").click(function(event){
		event.preventDefault();
		$(".module > div").removeClass("act");
		$(".module > div.order-book").addClass("act");
		$(".mob-dropdown ul").children('.inits').html($(this).html());
		$(".mob-buy").removeClass("act");
		$(".mob-sell").removeClass("act");			
	});	

	$(".mob-trading-pairs").click(function(event){
		event.preventDefault();
		$(".module > div").removeClass("act");
		$(".module > div.trading-pairs").addClass("act");
		$(".mob-dropdown ul").children('.inits').html($(this).html());
		$(".mob-buy").removeClass("act");
		$(".mob-sell").removeClass("act");			
	});	

	$(".mob-live-trades").click(function(event){
		event.preventDefault();
		$(".module > div").removeClass("act");
		$(".module > div.live-trades").addClass("act");
		$(".mob-dropdown ul").children('.inits').html($(this).html());
		$(".mob-buy").removeClass("act");
		$(".mob-sell").removeClass("act");			
	});	
	
	$(".trading-pairs tbody tr").click(function(event){
		event.preventDefault();
		$(".module > div").removeClass("act");
		$(".module > div.price-chart").addClass("act");
		$(".mob-dropdown ul").children('.inits').html('Price Chart');
		$(".mob-buy").removeClass("act");
		$(".mob-sell").removeClass("act");			
	});	
	
	$(".bsf-buy").click(function(event){
		event.preventDefault();
		$(".mob-buy").toggleClass("act");
		$(".mob-sell").removeClass("act");
		return false;
	});		

	$(".bsf-sell").click(function(event){
		event.preventDefault();
		$(".mob-sell").toggleClass("act");
		$(".mob-buy").removeClass("act");
		return false;
	});		
	

$(".mob-dropdown ul").on("click", ".inits", function(event) {
	event.preventDefault();
    $(this).closest(".mob-dropdown ul").children('li:not(.inits)').toggle();
});

var allOptions = $(".mob-dropdown ul").children('li:not(.inits)');
$(".mob-dropdown ul").on("click", "li:not(.inits)", function(event) {
	event.preventDefault();
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $(".mob-dropdown ul").children('.inits').html($(this).html());
    allOptions.toggle();
});
	
	
});