{"changed":true,"filter":false,"title":"controllers.js","tooltip":"/client/js/controllers.js","value":"var myControllers = angular.module('myControllers', []);\n\nmyControllers.controller('dashboardCtrl', ['$scope', '$http', function(){\n                                console.log(\"----Controller dashboardCtrl called ---\");\n                            }\n]);\n\nmyControllers.controller('fadCtrl', ['$scope', '$http', function($scope, $http){\n                                    \n                                    //make http get call here\n                                    \n                                    /*\n                                        structure of httpResult should be something like this \n                                        objHttpResult = {\n                                                        \"Company Name\": [],\n                                                        \"xxxxxx\": []\n                                                     }\n                                        var arrHttpResultKeys = Object.keys(objHttpResult); //This will give keys of the response in an array \n                                        //get the length of the array. \n                                        //check if the array has any values at all. If not, then do nothing. User didnt save anything last time.\n                                        //for each value in arrHttpResultsKeys = objData.result[i].rowName, get the array and deep copy into objData.result[i].rowValues\n                                        \n                                    */\n                                    \n                                    \n                                    $scope.objData = {\n                                        \"arrHeaders\":[\"Parameter\", \"Units\", \"Reference\", \"Value\"],\n                                        \"result\": [\n                                        {\n                                            \"rowName\":\"Company Name\",\n                                            \"rowUnits\":\"\",\n                                            \"rowReference\":\"Contact us if you do not see your company's name\",\n                                            \"rowValues\":[\"1\"]\n                                        }\n                                    ]};\n                                    \n                                    \n                                    $scope.save = function(){\n                                        //make http post here\n                                    }\n                                    \n                                    }\n]);","undoManager":{"mark":97,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":19,"column":72},"end":{"row":19,"column":73},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":73},"end":{"row":19,"column":74},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":73},"end":{"row":19,"column":74},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":72},"end":{"row":19,"column":73},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":71},"end":{"row":19,"column":72},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":44},"end":{"row":16,"column":45},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":45},"end":{"row":16,"column":46},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":46},"end":{"row":16,"column":47},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":60},"end":{"row":19,"column":61},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":61},"end":{"row":19,"column":62},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":62},"end":{"row":19,"column":63},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"insert","lines":["K"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":75},"end":{"row":19,"column":76},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":76},"end":{"row":19,"column":77},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":77},"end":{"row":19,"column":78},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":78},"end":{"row":19,"column":79},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":76},"end":{"row":16,"column":77},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":77},"end":{"row":16,"column":78},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":78},"end":{"row":16,"column":79},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":79},"end":{"row":16,"column":80},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":79},"end":{"row":16,"column":80},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":63},"end":{"row":19,"column":64},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":63},"end":{"row":19,"column":64},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":78},"end":{"row":19,"column":79},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":79},"end":{"row":19,"column":80},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":80},"end":{"row":19,"column":81},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":81},"end":{"row":19,"column":82},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":82},"end":{"row":19,"column":83},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":83},"end":{"row":19,"column":84},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":84},"end":{"row":19,"column":85},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":85},"end":{"row":19,"column":86},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":86},"end":{"row":19,"column":87},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":87},"end":{"row":19,"column":88},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":88},"end":{"row":19,"column":89},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":89},"end":{"row":19,"column":90},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":90},"end":{"row":19,"column":91},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":91},"end":{"row":19,"column":92},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":92},"end":{"row":19,"column":93},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":93},"end":{"row":19,"column":94},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":94},"end":{"row":19,"column":95},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":95},"end":{"row":19,"column":96},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":96},"end":{"row":19,"column":97},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":97},"end":{"row":19,"column":98},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":98},"end":{"row":19,"column":99},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":99},"end":{"row":19,"column":100},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":100},"end":{"row":19,"column":101},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":101},"end":{"row":19,"column":102},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":102},"end":{"row":19,"column":103},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":102},"end":{"row":19,"column":103},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":101},"end":{"row":19,"column":102},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":100},"end":{"row":19,"column":101},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":99},"end":{"row":19,"column":100},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":98},"end":{"row":19,"column":99},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":98},"end":{"row":19,"column":99},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":99},"end":{"row":19,"column":100},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":100},"end":{"row":19,"column":101},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":101},"end":{"row":19,"column":102},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":102},"end":{"row":19,"column":103},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":103},"end":{"row":19,"column":104},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":104},"end":{"row":19,"column":105},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":105},"end":{"row":19,"column":106},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":106},"end":{"row":19,"column":107},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":107},"end":{"row":19,"column":108},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":108},"end":{"row":19,"column":109},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":109},"end":{"row":19,"column":110},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":110},"end":{"row":19,"column":111},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":111},"end":{"row":19,"column":112},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":112},"end":{"row":19,"column":113},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":113},"end":{"row":19,"column":114},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":113},"end":{"row":19,"column":137},"action":"insert","lines":["objData.result.rowValues"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":78},"end":{"row":19,"column":79},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":79},"end":{"row":19,"column":80},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":80},"end":{"row":19,"column":81},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":81},"end":{"row":19,"column":95},"action":"insert","lines":["objData.result"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":95},"end":{"row":19,"column":96},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":96},"end":{"row":19,"column":97},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":97},"end":{"row":19,"column":98},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":98},"end":{"row":19,"column":99},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":99},"end":{"row":19,"column":100},"action":"insert","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":100},"end":{"row":19,"column":101},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":101},"end":{"row":19,"column":102},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":102},"end":{"row":19,"column":103},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":95},"end":{"row":19,"column":96},"action":"insert","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":96},"end":{"row":19,"column":97},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":97},"end":{"row":19,"column":98},"action":"insert","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":155},"end":{"row":19,"column":156},"action":"insert","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":156},"end":{"row":19,"column":157},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":157},"end":{"row":19,"column":158},"action":"insert","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":36},"end":{"row":22,"column":108},"action":"remove","lines":["//reset EACH objData.result.rowValues with the EACH httpResult.rowValues"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":36},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":36},"action":"insert","lines":["                                    "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":36},"action":"insert","lines":["                                    "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":25,"column":36},"action":"remove","lines":["","                                    "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":36},"end":{"row":24,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1430013496891}