var myControllers = angular.module('myControllers', []);

myControllers.controller('dashboardCtrl', ['$scope', '$http', function(){
                                console.log("----Controller dashboardCtrl called ---");
                            }
]);

myControllers.controller('fadCtrl', ['$scope', '$http', function($scope, $http){
                                    
                                    //make http get call here
                                    /*
                                        structure of httpResult should be something like this 
                                        objHttpResult = {
                                                        "Company Name": [],
                                                        "xxxxxx": []
                                                     }
                                        var arrHttpResultKeys = Object.keys(objHttpResult); //This will give keys of the response in an array 
                                        //get the length of the array. 
                                        //check if the array has any values at all. If not, then do nothing. User didnt save anything last time.
                                        //for each value in arrHttpResultsKeys = objData.result[i].rowName, get the array and deep copy into objData.result[i].rowValues
                                        
                                    */
                                    
                                    
                                    $scope.objData = {
                                        "arrHeaders":["Parameter", "Units", "Reference", "Value"],
                                        "result": [
                                        {
                                            "rowName":"Company Name",
                                            "rowUnits":"",
                                            "rowReference":"Contact us if you do not see your company's name",
                                            "rowValues":["1"]
                                        }
                                    ]};
                                    
                                    
                                    $scope.save = function(){
                                        //make http post here
                                    }
                                    
                                    }
]);