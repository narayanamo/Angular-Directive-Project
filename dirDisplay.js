var app = angular.module('directivePractice');
app.directive('dirDisplay',function() {
return { 
    template: '<div><h1> User </h1><div>'
    // templateUrl: 'app/dirDisplay.html'
    link: function (scope,element,attributes) { 
}
    
}
});