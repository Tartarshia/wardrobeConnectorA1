var mainApp = angular.module('mainApp', []);

mainApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

        var cache_array;
        
        function saveText(text, filename) {
            var a = document.createElement('a');
            a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
            a.setAttribute('download', filename);
            a.click()
        }

        $scope.inputSet = function(action) {
            if($scope.manualInput.$invalid) {
                return;
            }
            if(action) { // read from array
                var alignarray = [];
                $scope.input_array.Field15 = $scope.input_array.Field15.toString();
                Object.keys($scope.input_array).forEach(function(key) {
                    console.log(key + $scope.input_array[key])
                    alignarray.push($scope.input_array[key]);
                 });
                $scope.display_array.push(alignarray);
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

            $scope.raw_array = [//sample data
                ['Momo Stalking','Accessory-Foreground','3146','5','S','','','SS','','SS','A','','S','','','Recharge','','V1.5.1-US'],
                ['Halloween Bats','Accessory-Tattoo','3147','5','A','','','A','SS','','SS','','S','','','Recharge','','V1.5.1-US']
            ];
            $scope.input_array = {
                Field1: '',Field2: '',Field3: '',Field4: '',Field5: '',Field6: '',Field7: '',Field8: '',Field9: '',Field10: '',Field11: '',Field12: '',Field13: '',Field14: '',Field15: '',Field16: '',Field17: '',Field18: ''
            };
            $scope.rankList = [
                {value: 'SS', name: 'SS'},
                {value: 'S', name: 'S'},
                {value: 'A', name: 'A'},
                {value: 'B', name: 'B'}
              ]
            cache_array = $scope.raw_array;
            $scope.display_array = $scope.raw_array;
    
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

