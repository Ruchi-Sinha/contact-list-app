var myApp = angular.module('myApp', []);
myApp.controller('appCtrl', ['$scope', '$http',
function($scope, $http){
$scope.error = ""
var refresh = function(){
  $http.get('/api/contactlist').then(function(response){
    console.log('I got the data requested');
    $scope.contactlist = response.data;
    $scope.error = null;
  }).catch(function(error){
    $scope.error = error;
  });
}
refresh();

  $scope.addContact = function(){
    $http.post('api/contactlist',$scope.contact).then(function(response){
      $scope.error = null;
      refresh();
      $scope.contact = null;
    }).catch(function(error){
      $scope.error = error;
    });
  }

  $scope.removeContact = function(id){
    $http.delete('api/contactlist/'+id).then(function(response){
      $scope.error = null;
      refresh();
    }).catch(function(error){
      $scope.error = error;
    });
  }

  $scope.editContact = function(id){
    $http.get('api/contactlist/'+id).then(function(response){
      console.log(response)
      $scope.error = null;
      $scope.contact = response.data;
    }).catch(function(error){
      $scope.error = error;
    });
  }

    $scope.update = function(id){
      $http.put('api/contactlist/'+id, $scope.contact).then(function(response){
        $scope.error = null;
        refresh();
        $scope.contact = null;
      }).catch(function(error){
        $scope.error = error;
      });
  }

}]);
