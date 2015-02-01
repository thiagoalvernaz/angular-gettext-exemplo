'use strict';

var app = angular.module('app-traducao', ['gettext']);

app.controller('Traducao', function ($scope, gettextCatalog) {

	$scope.name = "My name:";
	$scope.title = "My first translation";

	$scope.ChangeLanguage = function (language) {
		gettextCatalog.setCurrentLanguage(language);
	}
	
});