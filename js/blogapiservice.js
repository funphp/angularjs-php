var module=angular.module('blogapiservice',['ngResource']);

    module.factory('Blog',function ($resource) {
    return $resource('/api.php/:id',{}, {
        update: {method:'PUT'}
    });
    
    
    
});

module.factory('Task',function ($resource) {
    return $resource('task.json/:taskId', {oauth_consumer_key: 'okdoitkey',
						oauth_token:'okdoitaccesskey',
						oauth_signature_method:'HMAC-SHA1',
						oauth_timestamp:1341921523,
						oauth_nonce:'z6TaAG',
						oauth_signature:'i8FYPJzUmPInZ7woM%2FnUGZ0OQ%2FQ%3D'}, {
        update: {method:'PUT'}
    });
    
    
    
});
