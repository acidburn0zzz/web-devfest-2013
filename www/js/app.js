'use strict';


angular.module('devfest', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/agenda', {templateUrl: 'partials/agenda.html'}).
            when('/localizacion', {templateUrl: 'partials/localizacion.html'}).
            when('/inscripcion', {templateUrl: 'partials/inscripcion.html'}).
            when('/otros_devfest', {templateUrl: 'partials/otros_devfest.html'}).
            when('/inicio', {templateUrl: 'partials/inicio.html'}).
            when('/info-patrocinadores', {templateUrl: 'partials/info-patrocinadores.html'}).
            otherwise({redirectTo: '/inicio'});
    }]);
