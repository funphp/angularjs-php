
angular.service('Goal', function ($resource) {
    return $resource('api/goal/:goalId', {}, {
        update: {method:'PUT'}
       
    });
});


