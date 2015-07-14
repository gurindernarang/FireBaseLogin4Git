
ionicFirebase.controller("LoginCtrl", function ($scope) {
    $scope.loginGithub = function(authMethod) {
        var ref = new Firebase("https://gurinder.firebaseio.com");
        ref.authWithOAuthPopup("github", function(error, authDataGithub) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authDataGithub);
            }
        });
    };

    $scope.loginfacebook = function(authMethod) {
        var ref = new Firebase("https://gurinder.firebaseio.com");
        ref.authWithOAuthPopup("facebook", function(error, authDataFacebook) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authDataFacebook);
            }
        });
    };
});