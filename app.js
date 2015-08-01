var app = angular.module('app', [
    'ngMaterial'
]);

app.config(function ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('amber')
        .warnPalette('red')
        .backgroundPalette('grey');
});