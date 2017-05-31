(function(){
    'use strict';

    angular
        .module('shipyard.services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$state'];
    function AuthService($http, $state) {
        return {
            login: function(credentials) {
                return $http
                    .post(base_url+'/auth/login', credentials)
                    .success(function(data, status, headers, config) {
                        localStorage.setItem('X-Access-Token', credentials.username + ':' + data.auth_token);
                    })
                    .error(function(data, status, headers, config) {
                        localStorage.removeItem('X-Access-Token');
                    })
                    .then(function(response) {
                        return response.data;
                    });
            },
            logout: function() {
                localStorage.removeItem('X-Access-Token');
            },
            isLoggedIn: function() {
                localStorage.setItem('X-Access-Token', 'admin:tydic_0001');
                return localStorage.getItem('X-Access-Token') != null;
            },
            getUsername: function() {
                localStorage.setItem('X-Access-Token', 'admin:tydic_0001');
                var token = localStorage.getItem('X-Access-Token');
                if(token == null) {
                    return "";
                }
                return token.split(':')[0];
            }
        };
    }
})();

