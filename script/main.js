var mainApp = angular.module('mainApp', []);

mainApp.controller('mainCtrl', ['$scope', function($scope) {
        var raw_array = [
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
            var fname = "IJGResults";
        
            var csvContent = "";

console.info(raw_array);
$scope.raw_array = raw_array;
        $scope.press = function() {
            raw_array.forEach(function(infoArray, index){
                dataString = infoArray.join(",");
                console.log(dataString);
                csvContent += dataString+ "\n";
            });
            console.log(csvContent);
        };
    }]);

