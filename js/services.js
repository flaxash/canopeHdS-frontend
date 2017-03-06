// JavaScript Document

cddp92App.factory('StateService', function () {
    var message = 'Hello Message';
    var getMessage = function () {
        return message;
    };
    var setMessage = function (m) {
        message = m;
    };

    return {
        getMessage: getMessage,
        setMessage: setMessage
    }
   })
	.factory('jsonService', function ($http,$q) {
			 return {
     			getActualites: function(callback) {
       			//$http.get('http://www.cddp92.ac-versailles.fr/drupalCddp/?q=gateway/views/actualitesApercu.json').success(callback);
				$http.get('https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/actualites.json').success(callback);
				},
				getConferences:function(callback) {
				//$http.get('http://www.cddp92.ac-versailles.fr/drupalCddp/?q=gateway/views/conferencesApercu.json').success(callback);
				$http.get('https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/conferences.json').success(callback);	
				},
				getConfsPreview:function(callback) {
					$http.get('https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/confspreview.json').success(callback);	
				},
				getActusPreview:function(callback) {
					$http.get('https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/actuspreview.json').success(callback);	
				},
        getRssFromActusNum:function(callback) {
          $http.get('https://blog.crdp-versailles.fr/usagestice92/index.php/feed/atom').success(callback);
        }
			 }
	})
	.factory('xmlService', function ($http) {
        	return {
            	getSlides: function(callback) {
       			//$http.get('http://www.cddp92.ac-versailles.fr/aLaUne/listeImages.xml').success(callback);
				$http.get(
                    "https://www.reseau-canope.fr/atelier-hauts-de-seine/aLaUne/listeImages.xml?t="+Math.random(),
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
						//alert(json.actualites.actualite);
                        return json.actualites;
							
                        }
                    }
                ).
                success(function(data, status) {
                    // send the converted data back
                    // to the callback function
                    callback(data);
                })
				},
				getMessage: function(callback) {
       			//$http.get('http://www.cddp92.ac-versailles.fr/aLaUne/listeImages.xml').success(callback);
				$http.get(
                    "https://www.reseau-canope.fr/atelier-hauts-de-seine/aLaUne/listeImages.xml?t="+Math.random(),
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
						//alert(json.actualites.annonce);
                        return json.actualites.annonce;
							
                        }
                    }
                ).
                success(function(data, status) {
                    // send the converted data back
                    // to the callback function
                    callback(data);
                })
				}
			}       
   });
