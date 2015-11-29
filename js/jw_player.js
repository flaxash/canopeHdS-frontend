// JavaScript Document
cddp92App.directive('jwPlayer', function () {
	return {
		restrict:'A',
       link:function (scope, element, attrs) {
	   	scope.$watch('urlVideo', function (value) {
			   if (value) {
				   jwplayer("player").setup({
					file: value,
					logo:{ hide:true },
					height: 240,
					width: 360
					});
			   }
		   });
	   }
	
	};
	
})