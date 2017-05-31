(function(){
    'use strict';

    angular
        .module('shipyard.registry')
        .factory('RegistryService', RegistryService)

    RegistryService.$inject = ['$http'];
    function RegistryService($http) {
        return {
            list: function() {
                var promise = $http
                    .get(base_url+'/api/registries')
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            inspectRegistry: function(name) {
                var promise = $http
                    .get(base_url+'/api/registries/'+name)
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            inspectRepository: function(name, namespace, repository) {
                var promise = $http
                    .get(base_url+'/api/registries/'+name +'/repositories/'+namespace+'/'+repository)
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            listRepositories: function(name) {
                var promise = $http
                    .get(base_url+'/api/registries/'+name+'/repositories')
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            removeRegistry: function(registry) {
                var promise = $http
                    .delete(base_url+'/api/registries/'+registry.name)
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            removeRepository: function(name, repo) {
                var promise = $http
                    .delete(base_url+'/api/registries/'+name+'/repositories/'+repo.namespace+'/'+repo.repository)
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
        } 
    }
})();
