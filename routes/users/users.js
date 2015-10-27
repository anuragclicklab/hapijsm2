 var controller = require('../../controllers');
var createuser = { method:'GET',
    path:'/createuser',
    config:{
        description:'insert into db',
        handler: function(request,reply){
            //console.log("fjdwbkgfdsg",request.query);

           controller.user.createuser(request.query, function (error, success) {
                if (error)
                {
                     reply(error);
                }else {
                    reply(success);
                }
            } );
        },
        /*validate: {
            payload: { fname: Joi.string().required().trim(),
                email: Joi.string().email().required().trim(),
            },
            failAction: function (request, reply, source, error) {

                error.output.payload.message = 'custom';
                //return reply(error).code(400);
                return reply(error);
            }
        }*/
    }
}


var abc = [createuser];
module.exports = abc;