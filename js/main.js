$( "nav a" ).click(function() {
	if( !$( this).hasClass("selected")) {
		// Load Section:
		var section_to_load = $( this ).data("section");
		$(".section.current").removeClass("current");
		$(".section." + section_to_load).addClass("current");

		// Toggle Nav:
		$("nav a.selected").removeClass("selected");
		$( this ).addClass("selected");
	}
});

$( "li" ).hover(
  function() {
    var test = $( this ).data( "splash" );
    set_splash(test);
  }, function() {
    unset_splash();
  }
);

function set_splash(splash_img) {
	if(splash_img) {
		$('body').css('background-image', 'url(' + splash_img + ')');
	} else {
		$('body').css('background-image', 'none');
	}
}

function unset_splash() {
	$('body').css('background-image', 'none');
}