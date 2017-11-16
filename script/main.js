var mainApp = angular.module('mainApp', []);

mainApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {


        function saveText(text, filename) {
            var a = document.createElement('a');
            a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
            a.setAttribute('download', filename);
            a.click()
        }

        $scope.inputSet = function(action) {
            if(action) { // read from array

            } else {

            }
        };
        $scope.outputSet = function(action) {
            if(action) {
                var minifyJSON = Object.setPrototypeOf(cache_array, Object.prototype);
                console.log(minifyJSON);
                saveText( JSON.stringify(minifyJSON), "wardrobe.json" ); // output as minified json

            } else{
                var standardJSON = Object.setPrototypeOf(cache_array, Object.prototype);
                standardJSON = JSON.stringify(standardJSON, null, 4);
                console.log(standardJSON);
                saveText( standardJSON, "wardrobe.json" ); // output as standard json
            }

        };
        function init() {
            
            $(document).ready(function() {
                $('select').material_select();
            });

            $scope.raw_array = [
                ['成玦','Accessory-Earrings','500','3','','A','A','','S','','','A','A','','中式古典','浪·缥缈','','V1.3.6'],
                ['夕月','Accessory-Headwear·Hair ornaments','501','4','S','','A','','SS','','B','','A','','中式古典','浪·缥缈','','V1.3.6'],
            ];
            var cache_array = $scope.raw_array;
            $scope.display_array = $scope.raw_array;
            // console.log(cache_array);
    
            $scope.title = ["name","catagory","id","hearts","gorgeous","simple","elegant","active","mature","cute","sexy","pure","cool","warm","tag","source","set","version"];
            // $http({
            //     method: 'GET',
            //     url: '/assets/wardrobe.json'
            // }).then(function successCallback(response) {
            //     $scope.title = data;
            // }, function errorCallback(response) {
    
            // });
        }

        init();
    }]);

