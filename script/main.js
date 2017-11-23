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
            // $scope.attributeList = ['Gorgeous','Simple','Elegance','Lively','Mature','Cute','Sexy','Pure','Cool','Warm'];
            $scope.rankList = [
                {value: 'SS', name: 'SS'},
                {value: 'S', name: 'S'},
                {value: 'A', name: 'A'},
                {value: 'B', name: 'B'}
              ];
            $scope.tagList = [
                {value: 'Sun Care', name: 'Sun Care防晒'},
                {value: 'Dancer', name: 'Dancer舞者'},
                {value: 'Floral', name: 'Floral碎花'},
                {value: 'Winter', name: 'Winter冬装'},
                {value: 'Britain', name: 'Britain英伦'},
                {value: 'Swimsuit', name: 'Swimsuit泳装'},
                {value: 'Shower', name: 'Shower沐浴'},
                {value: 'Kimono', name: 'Kimono和风'},
                {value: 'Pajamas', name: 'Pajamas睡衣'},
                {value: 'Wedding', name: 'Wedding婚纱'},
                {value: 'Army', name: 'Army军装'},
                {value: 'Office', name: 'OfficeOL'},
                {value: 'Apron', name: 'Apron围裙'},
                {value: 'Cheongsam', name: 'Cheongsam旗袍'},
                {value: 'Maiden', name: 'Maiden女仆装'},
                {value: 'Evening Gown', name: 'Evening Gown晚礼服'},
                {value: 'Navy', name: 'Navy海军风'},
                {value: 'Traditional', name: 'Traditional民族风'},
                {value: 'Bunny', name: 'Bunny兔女郎'},
                {value: 'Lady', name: 'Lady大小姐'},
                {value: 'Lolita', name: 'Lolita洛丽塔'},
                {value: 'Gothic', name: 'Gothic哥特风'},
                {value: 'Sports', name: 'Sports运动系'},
                {value: 'Harajuku', name: 'Harajuku原宿系'},
                {value: 'Preppy', name: 'Preppy学院系'},
                {value: 'Unisex', name: 'Unisex中性风'},
                {value: 'Future', name: 'Future未来系'},
                {value: 'Fairy', name: 'Fairy童话系'},
                {value: 'Rock', name: 'Rock摇滚风'},
                {value: 'Denim', name: 'Denim牛仔布'},
                {value: 'Pet', name: 'Pet小动物'},
                {value: 'Goddess', name: 'Goddess女神系'},
                {value: 'pop', name: 'pop'},
                {value: 'Homewear', name: 'Homewear居家服'},
                {value: 'Chinese Classical', name: 'Chinese Classical中式古典'},
                {value: 'Hindu', name: 'Hindu印度服饰'},
                {value: 'Republic of China', name: 'Republic of China民国服饰'},
                {value: 'European', name: 'European欧式古典'},
                {value: 'Swordsman', name: 'Swordsman侠客联盟'},
                {value: 'Rain', name: 'Rain雨季装备'},
                {value: 'Modern China', name: 'Modern China中式现代'},
                {value: 'Dryad', name: 'Dryad森女系列'},
                {value: 'Bohemia', name: 'Bohemia波西米亚'},
                {value: 'Paramedics', name: 'Paramedics医务使者'}
            ];

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

