var mainApp = angular.module('mainApp', []);

mainApp.controller('mainCtrl', ['$scope', function($scope) {
        $scope.raw_array = [
            ['Legend of the Kid','Hair','1112','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Guardian Kami','Dress','921','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Strange Neighbor','Dress','922','5','A','','S','','SS','','SS','','','A','Kimono','event','Zashiki','150'],
            ['Samsara Twilight','Coat','453','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Samsara Twilight','Hosiery-Socks','426','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Samsara Twilight','Shoes','993','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Story in Memory','Accessory-Headwear·Hair ornaments','2062','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Handbag in Childhood','Accessory-Handheld·Right','2063','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150'],
            ['Kid`s Doll','Accessory-Handheld·Left','2064','5','A','','S','','SS','','SS','','','A','','event','Zashiki','150']
        ];


        $scope.press = function() {
            var csvContent = "", raw_array = $scope.raw_array;
            raw_array.forEach(function(infoArray, index){
                dataString = infoArray.join(",");
                csvContent += dataString+ "\n";
            });
            console.log(csvContent);
            $scope.csvContent = csvContent;
        };
    }]);

