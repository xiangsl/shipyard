(function(){
	'use strict';

	angular
		.module('shipyard.nodes')
        .factory('NodesService', NodesService);

	NodesService.$inject = ['$http'];
        function NodesService($http) {
            return {
                list: function() {
                    var promise = $http
                        .get(base_url+'/api/nodes')
                        .then(function(response) {
                            return response.data;
                        });
                    return promise;
                },
                removeNode: function(node) {
                    var promise = $http
                        .delete(base_url+'/api/nodes/' + node.name)
                        .then(function(response) {
                            return response.data;
                        });
                    return promise;
                },
            } 
        } 
})();
