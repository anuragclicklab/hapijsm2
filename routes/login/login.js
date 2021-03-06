var controller = require('../../controllers');
var Joi        = require('joi');
var util       = require('../../Utilities/utili');
var login = {
             method:'GET',
             path:'/login',
             config:{
                 description:'login view',
                 handler:function(error,reply){
                     reply.view('login/login.ejs'); //reply("asdsadasd");
                 }
             }
}

var auth ={
    method:'POST',
        path:'/auth',
        config:{
        description:'check users details',
            handler:function(request,reply) {
            console.log("ddd",request.payload);//reply(request.payload);
            controller.login.auth(request.payload,function(error,success){
             if(error)
             return reply(error);
             else
             return reply(success);
             });
        },
        validate: {
            payload: {
                email:Joi.string().email().required().trim(),
                password: Joi.string().required().trim(),
            },failAction:util.failActionFunction

            /*failAction:function(request, reply, source, error){
                console.log("req",request);
                console.log("reply",reply);
                console.log("source",source);
                console.log("error",error);


            }*/
        }
    }
}
module.exports=[login,auth];