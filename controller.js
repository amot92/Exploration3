angular
    .module('calApp', [])
	.controller('LoginController', function($scope) {
    
//        var testUser = {
//                userName: "test",
//                password: "pass",
//            }
//        var testUsers = [];
//        testUsers.push(testUser);
//    
//        localStorage.setItem("users", JSON.stringify(testUsers));
//        localStorage.setItem("users", "");
    
        
        $scope.doLogin = function() {
            
            //grab the html input values
            var userName = $scope.userName;
            if((/^[a-zA-Z]+$/).test(userName)){
                $scope.alert="username regex match";
            }else {
                $scope.alert = "Username has improper format(alphanumeric only)";
                exit;
            }
            var password = $scope.password;
            
            //valiate the login credentials
            
            //make an object from the credentials
            var user = {
                userName: userName,
                password: password,
            }
            $scope.alert2 = user;
            
            
            //pull the list of valid credentials into the model ($scope)
            var unparsedList = localStorage.getItem("users");
            var parsedList = [];
            
            if(unparsedList == null || unparsedList == ""){
                $scope.alert="localStorage is empty!";
//                $scope.alert = "Invalid Username/Password!"
            } else {
                parsedList = JSON.parse(unparsedList);
                $scope.alert="localStorage not empty!";
            }
                $scope.alert3 = parsedList;

            for (i=0; i < parsedList.length; i++){
                if (parsedList[i].userName == user.userName && 
                    parsedList[i].password == user.password){
                        $scope.alert4="success!";
                }
                else{
                    $scope.alert4="User not found!";
                }
            }
        }
});