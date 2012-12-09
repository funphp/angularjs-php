 angular.module('blog',['blogapiservice']).
     config(['$routeProvider',function($routeProvider) {        
    $routeProvider
        .when('/about',{templateUrl:'partials/about.html',controller:aboutCtrl})
        .when('/photos',{templateUrl:'partials/goals.html',controller:photoCtrl})
        .when('/blog/:id',{templateUrl:'partials/blog-details.html',controller:blogDetailsCtrl})
        .when('/blog',{templateUrl:'partials/blog.html',controller:blogCtrl})
        .when('/links',{templateUrl:'partials/links.html',controller:linkCtrl})
        .when('/contact',{templateUrl:'partials/links.html',controller:contactCtrl})
       
       
       .otherwise({redirectTo:'/home',templateUrl:'partials/home.html',controller:homeCtrl});
    
    
}]);


function MainController($scope,$location){
    
    $scope.addTask=function(){
       window.location = "#/tasks/add";  
    }
    $scope.setRoute=function(route){
        $location.path(route);
    }

}

function contactCtrl($scope){
    $scope.title="Contact";
    $scope.body="This is contact page";
}

function photoCtrl($scope){
    $scope.title="Photo";
    $scope.body="This is photo page";
}

function aboutCtrl($scope){
    $scope.title="About";
    $scope.body="This is about page";
}

function blogCtrl($scope,Blog){
    $scope.title="Blog";
    $scope.body="This is blog page";
  
     Blog.get({action:'home'},function(response){
        
         $scope.posts =response.data;
    });
    
}
function blogDetailsCtrl($scope,$routeParams,Blog){
    
    $scope.title="Blog";
    $scope.body="This is blog page";
   	Blog.get({blogId:$routeParams.id,action:'blog_details'},function(response){
    $scope.post=response.data;    
    });
    
}
function linkCtrl($scope,Task){
    $scope.title="Links";
    $scope.body="This is link page";
    $scope.tasks=Task.get();
}

function taskDetailsCtrl($scope,$routeParams,Task){
    $scope.title = "Goal";
    $scope.body = "This is goal page";
    Task.get({taskId:$routeParams.taskId},function(response){
         $scope.task =response.data.task;
    });
    
    //this.task = Task.get({taskId:this.params.taskId});
    //this.task =  $scope.task.data;
// console.log( this.task);

    $scope.saveTask = function () {
         
         var post_data = $.param({title:$scope.task.title});
        	
        console.log($scope.task);
        if ($scope.task.id > 0)
           Task.update($scope.task);
        else
            Task.save($scope.task);
        window.location = "#/tasks";
    }

    this.deleteTask = function () {
        this.task.$delete({taskId:this.task.id}, function() {
            alert('Task ' + task.name + ' deleted')
            window.location = "#/tasks";
        });
    }
}
function homeCtrl($scope,Blog){
    $scope.title="Home";
    $scope.body="This is home page";
   
}
