
/* App Module */
var cddp92App = angular.module('website',  ['ngSanitize','ui.bootstrap', 'ngYoutubeEmbed','ngRoute','ngtweet']);

var baseURL = 'https://www.reseau-canope.fr/atelier-hauts-de-seine/';
//var baseURL = 'http://172.31.104.30/crdp-versailles/atelier92/';

cddp92App.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/accueil', {templateUrl: 'partials/accueil.html', controller: 'HomeCtrl'}).
            when('/confs', {templateUrl: 'partials/conferences.html', controller: 'ConfsCtrl'}).
            when('/confs/:id',{templateUrl:'partials/confplayer.html',controller:'ConfplayerCtrl'}).
            when('/contacts', {templateUrl: 'partials/contacts.html', controller: 'ContactsCtrl'}).
            when('/venir', {templateUrl: 'partials/venir.html', controller: 'VenirCtrl'}).
            when('/actus', {templateUrl: 'partials/actualites.html', controller: 'ActusCtrl'}).
            when('/mentions', {templateUrl: 'partials/mentions.html', controller: 'MentionsCtrl'}).
            when('/ressources', {templateUrl: 'partials/ressources.html', controller: 'RessourcesCtrl'}).
			otherwise({redirectTo: '/accueil'}); 
}]);

function addClass( classname, element ) {
    var cn = element.className;
    //test for existance
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}
function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}
function removeAllMenuActiveClass() {
	removeClass (	"active",document.getElementById("lienContacts"));
	removeClass (	"active",document.getElementById("lienActualites"));
	removeClass (	"active",document.getElementById("lienConferences"));
	removeClass (	"active",document.getElementById("lienVenir"));
	removeClass (	"active",document.getElementById("lienAccueil"));
  removeClass (	"active",document.getElementById("lienRessources"));

}