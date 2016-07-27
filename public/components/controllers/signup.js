var app = angular.module("MovieApp.Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.passwordMessage = "";
    $scope.signup = function(user) {
        // check to see if the user password matches the repeat password
        if (user.password !== $scope.passwordRepeat) {
            // if passwords do not match display error message
            $scope.passwordMessage = "Passwords do not match!";
        } else {
            // else send the data to the user service and navigate to the login page
            UserService.signup(user).then(function(response) {
                $location.path("/login");
            }, function(response) {
                alert("There was a problem " + response.data.message);
            });
        }
    }
}]);