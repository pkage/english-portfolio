Template.bodyc.rendered = function() {
	Session.set("currentview", "home");
	Session.set("menuview", "p1");
	if (BrowserDetect.browser == "Chrome") {
		$('#videocontainer').tubular({videoId: '9d8wWcJLnFI'});
	} else {
		$('#videocontainer').css('height', '100vh');
		$('#videocontainer').css('background-image', 'url(/bg-min.jpg)');
		$('.pullbottomright').hide();
	}
}

Template.bodyc.helpers({
	template: function() {
		return Session.get("currentview");
	}
});
