// JavaScript Document

/* Controllers */

cddp92App.controller('ViewsCtrl', function ($scope) {
        //the list of actus
	   $scope.actualites=[];
	   //the list of confs 
	   $scope.conferences =[];
	   $scope.selectedConference = [];		
	   $scope.majConfs = function (data) {
			$scope.conferences = data;	
		}
		$scope.getConfSelected = function () {
			return $scope.selectedConference;	
		}
		$scope.setConfSelected = function (conf) {
			$scope.selectedConference = conf;
		}
    })
    .controller('ContactsCtrl', ['$scope', 'StateService', function () {
		//todo : allumer le bouton Contacts
		removeAllMenuActiveClass();
		var d = document.getElementById("lienContacts");
		//d.classList.add("active");
		addClass("active",d);
    }])
    .controller('ActusCtrl',  function () {
		//todo : allumer le bouton Actualités
		removeAllMenuActiveClass();
		var d = document.getElementById("lienActualites");
		//d.classList.add("active");
		addClass("active",d);
    })
	.controller('ConfsCtrl',  function () {
		//todo : allumer le bouton Conferences
		removeAllMenuActiveClass();
		var d = document.getElementById("lienConferences");
		//d.classList.add("active");
		addClass("active",d);
    })
	.controller('VenirCtrl', function () {
		//todo : allumer le bouton Venir
		removeAllMenuActiveClass();
		var d = document.getElementById("lienVenir");
		//d.classList.add("active");
		addClass("active",d);
	})
	.controller('HomeCtrl', function () {
		//todo : allumer le bouton Accueil
		removeAllMenuActiveClass();
		var d = document.getElementById("lienAccueil");
		//d.classList.add("active");
		addClass("active",d);
	})
	.controller('MenuCtrl', function ($scope) {
		//todo

	})
    .controller('MentionsCtrl', function ($scope) {
		//todo

	})
	.controller('AlaUneCtrl', function ($scope,xmlService) {
		// à la une 
			xmlService.getSlides(function(data) {
				if ($scope.slides !== data) {
				$scope.slides = data.actualite;
				//alert(data);
				}
			});
			xmlService.getMessage(function(data) {
				if ($scope.message !== data) {
				$scope.message = data;
				//alert(data);
				}
			});
			$scope.slidenumber=0;
			$scope.myInterval = 7000;
	})
	.controller('ActusPreviewCtrl',  function ($scope, jsonService) {
		jsonService.getActusPreview(function(data) {
			$scope.actuspreview = data;	
		})
    })

	.controller('ActualitesListCtrl', function($scope, jsonService) {
 		 	//actualites au format json
			jsonService.getActualites(function(data) {
    	 	if ($scope.actualites !== data) {
				$scope.actualites = data;
				
			}
			$scope.actualites.predicate = '-date';
  			});
	})
	.controller('ConfsPreviewCtrl',  function ($scope, jsonService) {
		jsonService.getConfsPreview(function(data) {
			$scope.confspreview = data;	
		})
    })
	.controller('ConferencesListCtrl',function ($scope, jsonService) {
  			//conferences au format json
			jsonService.getConferences(function(data) {
				if ($scope.conferences !== data) {
    	 			$scope.conferences = data;
					
				}
				$scope.conferences.predicate = 'title';
  			});
			$scope.filterTerm = "2015";
			$scope.sortProp = "-date";
			
	})
	.controller('ActualitesNumCtrl', function($scope,jsonService) {
			jsonService.getRssFromActusNum(function(data) {
   				$scope.actusNum = data;
				$scope.actusNum.predicate = '-date';
  			});

	})
	.controller('ConfplayerCtrl', function ($scope, $routeParams, $http) {
		//todo : remplacer l' appel  au json par un service + allumer le bouton 'La conférence'
		removeAllMenuActiveClass();
		var d = document.getElementById("lienConferences");
		addClass("active",d);
		//
		
  		$http.get('http://www.cddp92.ac-versailles.fr/drupal7/?q=gateway/node/' + $routeParams.id + '.json').success(function(data) {
    	$scope.conference = data;
		$scope.onglet="conference";
		$scope.urlVideo = data.field_video.und[0].value;
		$scope.setOnglet = function (numero) {
			
			switch (numero) {
				case 1:
				$scope.onglet="conference";
				break;
				case 2:
				$scope.onglet="auteur";
				break
				case 3:
				$scope.onglet="biblio"
				break;
				default:
				$scope.onglet="conference";
				break;	
			}
		}
		$scope.setChapitre = function (item) {
			$scope.urlVideo = item.value;
		}
		
	});	
})
