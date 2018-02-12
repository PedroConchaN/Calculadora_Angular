angular.module('Calcu',[])
.controller("CalcuController",function($scope){
	$scope.num="0";

	$scope.agr = function(nume){
     if($scope.num == "0" || $scope.num == "Error de Sintaxis")
     {
     	$scope.num="";
     }
     $scope.num += nume;
     
	}
	$scope.limpiar = function(){
		$scope.num="0";
		$scope.annum="";
	}
	$scope.igual=function(){
		try{
			$scope.ig=eval($scope.num);
			$scope.num=$scope.ig.toString();
		}catch{
			$scope.num="Error de Sintaxis";
		}
			

	}
	$scope.borrar=function(){
		$scope.num=$scope.num.substring(0,$scope.num.length -1);
	}
});