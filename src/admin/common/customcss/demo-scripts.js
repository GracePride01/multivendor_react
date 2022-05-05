$( document ).ready(function() {

	// Make Dropdown Submenus possible
	$('.dropdown-submenu a.dropdown-submenu-toggle').on("click", function(e){
		$('.dropdown-submenu ul').removeAttr('style');
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
	
	// Clear secondary dropdowns on.Hidden
	$('#bs-navbar-collapse-1').on('hidden.bs.dropdown', function () {
  		$('.navbar-nav .dropdown-submenu ul.dropdown-menu').removeAttr('style');
	});
	
});