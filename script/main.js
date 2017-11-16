var mainApp = angular.module('mainApp', []);

mainApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.raw_array = [
            ['成玦','Accessory-Earrings','500','3','','A','A','','S','','','A','A','','中式古典','浪·缥缈','','V1.3.6'],
            ['夕月','Accessory-Headwear·Hair ornaments','501','4','S','','A','','SS','','B','','A','','中式古典','浪·缥缈','','V1.3.6'],
            ['蓝瓷·包','Accessory-Handheld·Right','502','5','S','','SS','','A','','','SS','A','','中式现代','浪·缥缈','','V1.3.6'],
            ['祥云舞·包','Accessory-Handheld·Right','503','5','S','','SS','','S','','','SS','A','','中式现代','设·定502','','V1.3.2'],
            ['迷彩帽','Accessory-Headwear·Hair ornaments','504','4','','A','','S','S','','A','','','A','军装','设·图','北地英姿','V1.3.6'],
            ['迷彩手套','Accessory-Bracelet·Glove','505','3','','B','','SS','S','','A','','','B','军装','设·图','北地英姿','V1.3.6'],
            ['月石链','Accessory-Bracelet·Right','506','5','S','','SS','','A','','','S','A','','中式古典','浪·缥缈/兑·翡翠','水中月','V1.3.6'],
            ['月香渺','Accessory-Special·Foreground','507','5','A','','S','','A','','','SS','S','','中式古典','浪·缥缈/兑·翡翠','水中月','V1.3.6'],
            ['月水莲','Accessory-Headwear·Hair ornaments','508','5','','S','SS','','S','','','S','A','','中式古典','浪·缥缈/兑·翡翠','水中月','V1.3.6'],
            ['月光石','Accessory-Necklace·Necklace','510','5','','A','S','','','A','','SS','A','','中式古典','浪·缥缈/兑·翡翠','水中月','V1.3.6'],
            ['月千重','Accessory-Special·Background','511','5','','A','SS','','S','','','S','S','','中式古典','浪·缥缈/兑·翡翠','水中月','V1.3.6'],
            ['海沫星','Accessory-Earrings','512','5','','SS','A','','S','','','A','B','','','充值·VIP礼包','钻石人鱼','V1.3.7'],
            ['海沫花','Accessory-Headwear·Hair ornaments','513','5','A','','SS','','A','','','S','B','','','充值·VIP礼包','钻石人鱼','V1.3.7'],
            ['银泡沫','Accessory-Handheld·Right','514','5','','A','S','','SS','','','A','B','','','充值·VIP礼包','钻石人鱼','V1.3.7'],
            ['人鱼手套','Accessory-Bracelet·Glove','515','5','SS','','A','','A','','S','','B','','','充值·VIP礼包','钻石人鱼','V1.3.7'],
            ['海沫链','Accessory-Necklace·Necklace','516','5','S','','SS','','S','','A','','B','','','充值·VIP礼包','钻石人鱼','V1.3.7'],
            ['韵花枝','Accessory-Headwear·Hair ornaments','517','6','S','','SS','','','S','','SS','S','','','设·图','韶颜倾城','V1.3.8'],
            ['莺蕊','Accessory-Earrings','518','6','','A','SS','','S','','','SS','A','','','设·图','韶颜倾城','V1.3.8'],
            ['蝴蝶舞','Accessory-Special·Foreground','519','6','SS','','S','','','S','','SS','A','','','成就','韶颜倾城','V1.3.8'],
        ];
        var cache_array = $scope.raw_array;
        console.log(cache_array);

        $scope.title = ["name","catagory","id","hearts","gorgeous","simple","elegant","active","mature","cute","sexy","pure","cool","warm","tag","source","set","version"];
        // $http({
        //     method: 'GET',
        //     url: '/assets/wardrobe.json'
        // }).then(function successCallback(response) {
        //     $scope.title = data;
        // }, function errorCallback(response) {

        // });


        function saveText(text, filename) {
            var a = document.createElement('a');
            a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
            a.setAttribute('download', filename);
            a.click()
        }

        $scope.press = function(id) {
            if(id == 0) {
                var minifyJSON = Object.setPrototypeOf(cache_array, Object.prototype);
                $scope.display_array = minifyJSON;

            } else if(id == 1) {
                var minifyJSON = Object.setPrototypeOf(cache_array, Object.prototype);
                console.log(minifyJSON);
                saveText( JSON.stringify(minifyJSON), "wardrobe.json" ); // output as minified json

            } else if(id == 2) {
                var standardJSON = Object.setPrototypeOf(cache_array, Object.prototype);
                standardJSON = JSON.stringify(standardJSON, null, 4);
                console.log(standardJSON);
                saveText( standardJSON, "wardrobe.json" ); // output as standard json


            }

        };
    }]);

