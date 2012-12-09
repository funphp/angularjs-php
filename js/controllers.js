function RouteCtrl($route) {
	
    var self = this;
    
    $route.when('/goals', {template:'tpl/welcome.html'});

    $route.when('/goals/:goalId', {template:'tpl/goal-details.html', controller:GoalDetailCtrl});
   // $route.when('#/goals/add', {template:'tplgoal-details.html'});
    $route.otherwise({redirectTo:'/goals'});

    $route.onChange(function () {
        self.params = $route.current.params;
    });

    $route.parent(this);

    this.addGoal = function () {
        window.location = "#/goals/add";
    	 
    };

}

function GoalListCtrl(Goal) {
	
  //this.wines = Wine.query();
	this.goals=Goal.get({
						oauth_consumer_key: 'okdoitkey',
						oauth_token:'okdoitaccesskey',
						oauth_signature_method:'HMAC-SHA1',
						oauth_timestamp:1341921523,
						oauth_nonce:'z6TaAG',
						oauth_signature:'i8FYPJzUmPInZ7woM%2FnUGZ0OQ%2FQ%3D'
					}, function(o) {
		 //console.log(o.data.goals);
						//this.goals=o.data.goals;
		});

	
}

function GoalDetailCtrl(Goal) {

    
	this.goal=Goal.get({oauth_consumer_key: 'okdoitkey',
		oauth_token:'okdoitaccesskey',
		oauth_signature_method:'HMAC-SHA1',
		oauth_timestamp:1341921523,
		oauth_nonce:'z6TaAG',
		oauth_signature:'i8FYPJzUmPInZ7woM%2FnUGZ0OQ%2FQ%3D',
		goalId:this.params.goalId}, function(o) {
		 //console.log(o.data.goals);
		//this.goal=o.data.goal;
		//console.log(this.goal);
		
});


    this.saveGoal = function () {
        if (this.goal.id > 0)
            this.goal.$update({goalId:this.goal.id});
        else{
        	var post_data = $.param({title:this.goal.title,reward:this.goal.reward,assignee:1});
        	//this.goal.$save();
            Goal.save({oauth_consumer_key: 'okdoitkey',
		oauth_token:'okdoitaccesskey',
		oauth_signature_method:'HMAC-SHA1',
		oauth_timestamp:1341921523,
		oauth_nonce:'z6TaAG',
		oauth_signature:'i8FYPJzUmPInZ7woM%2FnUGZ0OQ%2FQ%3D'
		
			
			},post_data, function() {
	            alert('Goal  created')
	            window.location = "#/goals";
	        });
        }
       
    
    }

    this.deleteGoal = function () {
    	//console.log(this.goal.data.goal);
        this.goal.$delete({oauth_consumer_key: 'okdoitkey',
    		oauth_token:'okdoitaccesskey',
    		oauth_signature_method:'HMAC-SHA1',
    		oauth_timestamp:1341921523,
    		oauth_nonce:'z6TaAG',
    		oauth_signature:'i8FYPJzUmPInZ7woM%2FnUGZ0OQ%2FQ%3D',
    		id:this.goal.data.goal.id}, function() {
            alert('Goal  deleted')
            window.location = "#/goals";
        });
    }

}