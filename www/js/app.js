'use strict';


angular.module('devfest', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
	    when('/ponentes', {templateUrl: 'partials/ponentes.html'}).
            when('/agenda', {templateUrl: 'partials/agenda.html'}).
            when('/localizacion', {templateUrl: 'partials/localizacion.html'}).
            when('/inscripcion', {templateUrl: 'partials/inscripcion.html'}).
            when('/otros_devfest', {templateUrl: 'partials/otros_devfest.html'}).
            when('/inicio', {templateUrl: 'partials/inicio.html'}).
            when('/info-patrocinadores', {templateUrl: 'partials/info-patrocinadores.html'}).
            when('/prensa', {templateUrl: 'partials/prensa.html'}).
	    when('/feedback', {templateUrl: 'partials/feedback.html'}).
            when('/post-devfest', {templateUrl: 'partials/post-devfest.html'}).
	    when('/videos/:video', {
		templateUrl: 'partials/videoRouter.html',
		controller: 'VideoRouterController'
		}).
            otherwise({redirectTo: '/inicio'});
    }]);


// Video router controller
function VideoRouterController($scope, $routeParams) {
    $scope.videoTemplateUrl = 'partials/videos/' + $routeParams.video + '.html';
}
