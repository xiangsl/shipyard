(function(){
	'use strict';

	angular
	    .module('shipyard.images')
            .factory('ImagesService', ImagesService);

	ImagesService.$inject = ['$http'];
        function ImagesService($http) {
            return {
                list: function() {
                    var promise = $http
                        .get(base_url+'/images/json')
                        .then(function(response) {
                            return response.data;
                        });
                    return promise;
                },
                remove: function(image) {
                    var promise = $http
                        .delete(base_url+'/images/' + image.Id + '?force=1')
                        .then(function(response) {
                            return response.data;
                        });
                    return promise;
                }
            } 
        } 
})();
