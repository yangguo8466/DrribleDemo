/**
 * Created by guoyang on 2016/11/6.
 */
angular.module("myApp")
    .controller("myController", ["$scope", "$mdSidenav","LoadingService", function ($scope, $mdSidenav,LoadingService) {
        // $scope.isLoad=LoadingService.isLoad();
        $scope.openLeftMenu = function () {
            $mdSidenav("sideLeft").toggle().then(function () {
                console.log("left");
            });
        }
        $scope.$on("$stateChangeStart",function ($event) {
            // $scope.isLoad=true;
            LoadingService.setLoad(true);
            console.log("页面开始加载")
            // console.log(LoadingService.isLoad());

        })
        $scope.$on("$stateChangeError",function ($event) {
            console.log("页面载入失败");
            // $scope.isLoading=false;
        })
    }])