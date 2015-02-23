Template.home.events({
	'click #home': function() {
		Session.set("currentview", "menu");
	}
});

Template.a.events({
	'click': function() {
		Session.set("currentview", this.href);
	}
});


Template.menubtn.events({
	'click': function() {
		Session.set("currentview", "menu");
	}
});

Template.menuiconbtn.events({
	'click': function() {
		Session.set("currentview", this.href);
	}
});

Template.menuiconbtn.helpers({
	'external_h': function() {
		if (this.external == true) {
			return 'href="' + this.href + '"';
		}
		return "";
	}
});

addscrollbar = function() {
	$('.doc').mCustomScrollbar({theme: 'minimal'});
}

Template.journal.rendered = addscrollbar;
Template.dsonessay.rendered = addscrollbar;
Template.fessay.rendered = addscrollbar;
Template.infog.rendered = addscrollbar;
Template.tproj.rendered = addscrollbar;

Template.menu.rendered = function() {
	if (Session.get('menuview') == 'p1') {$('#menup2').hide();} else {$('#menup1').hide();}
}

Template.menu.events({
	'click #nextpage': function() {
		Session.set('menuview', 'p2');
		$('#menup1').slideUp();
		$('#menup2').slideDown();
	},
	'click #prevpage': function() {
		Session.set('menuview', 'p1');
		$('#menup2').slideUp();
		$('#menup1').slideDown();
	}
});

Template.hintbox.events({
	'click .hintbox': function() {
		$("#hintbox-modal").openModal();
		
	}
})
