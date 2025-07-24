angular.module("JuegoBingo", [])
    .controller("ControladorJuegoBingo",
        function ($scope) {
            $scope.cantor = new cantor();
            $scope.iniciarJuego = function () {

            }
        }
    );