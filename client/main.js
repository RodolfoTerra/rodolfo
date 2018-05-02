import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';

import './main.html';

//if(Meteor.IsClient){


	Template.headerPage.onRendered(function() {
		$(function() {
			
		 	// your code goes here
			let winW = $(window).width();
			if (winW>767) {
				$('.top-nav').addClass('desktop');
			}else{
				$('.top-nav').removeClass('desktop');
			}
			
			$('.flexslider').flexslider({
				animation: "slide",
				controlsContainer: ".flexslider",
				slideshowSpeed: 3000,
				directionNav: false,
				controlNav: true,
				animationDuration: 900
			});

		});
  	});


	Template.menuSite.onCreated(function menuSiteOnCreated() {
	  // counter starts at 0
	  this.activeInicio = new ReactiveVar(0);
	  this.activeTrabalhos = new ReactiveVar(0);
	  this.activeArtigos = new ReactiveVar(0);
	  this.activeCertificacoes = new ReactiveVar(0);
	  this.activeContato = new ReactiveVar(0);
	});


	Template.menuSite.helpers({
		activeInicio: function () {
			// make this re-render on change, even if we don't use var
	  		let routeUrl = FlowRouter.current().path;
	  		let resUrl = routeUrl.split('/', 3);
	  		let verUrl = resUrl[1];

			if (verUrl === '') {
				return 'active';
			}
		},
		activeTrabalhos: function () {
			// make this re-render on change, even if we don't use var
	  		let routeUrl = FlowRouter.current().path;
	  		let resUrl = routeUrl.split('/', 3);
	  		let verUrl = resUrl[1];

			if (verUrl === 'trabalhos') {
				return 'active';
			}
		},
		activeArtigos: function () {
			// make this re-render on change, even if we don't use var
	  		let routeUrl = FlowRouter.current().path;
	  		let resUrl = routeUrl.split('/', 3);
	  		let verUrl = resUrl[1];

			if (verUrl === 'artigos') {
				return 'active';
			}
		},
		activeCertificacoes: function () {
			// make this re-render on change, even if we don't use var
	  		let routeUrl = FlowRouter.current().path;
	  		let resUrl = routeUrl.split('/', 3);
	  		let verUrl = resUrl[1];

			if (verUrl === 'certificacoes') {
				return 'active';
			}
		},
		activeContato: function () {
			// make this re-render on change, even if we don't use var
	  		let routeUrl = FlowRouter.current().path;
	  		let resUrl = routeUrl.split('/', 3);
	  		let verUrl = resUrl[1];

			if (verUrl === 'contato') {
				return 'active';
			}
		},				
	});	

//}


Template.pageHome.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.pageHome.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.pageHome.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
