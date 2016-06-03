// JavaScript Document
cddp92App.directive('jwPlayer', function () {
	return {
		restrict:'A',
       link:function (scope, element, attrs) {
	   	scope.$watch('urlVideo', function (value) {
			   if (value) {
                   var playerInstance = jwplayer('player');
				   playerInstance.setup({
					file: value,
					height: 240,
					width: 360
					});
			   }
		   });
	   }
	
	};
	
})