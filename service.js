angular.module('userProfiles').service('mainService', function($http , $q) {

  this.getUsers = function() {
    var dfd = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function (response) {
      var edit = response.data.data
      for (var i = 0 ; i < edit.length ; i++) {
        edit[i].first_name = 'Ralf'
      }
      dfd.resolve(edit)
      dfd.resolve(response)
    });
    return dfd.promise;
    }

});
