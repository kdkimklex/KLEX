
const mongoose =require ('mongoose');
const bcrypt =require('bcryptjs');
const schema =mongoose.Schema;
//const  titlize = require('mongoose-title-case');
//const validate = require('mongoose-validator');

//Validation
/*var nameValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\-]+$/i,
    })

]*/

//Create schema for user
const userSchema = new schema({

    username:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

});
//Validation
/*userSchema.plugin(titlize, {
    paths: [ 'name']
});*/

//Create schema for project
const projectSchema = new schema({

    projectname:{type:String,required:true},
    description:{type:String,required:true},
    email:{type:String,required:true},
    //ownerid:{type:String,required:true}


});

//Create schema for Group
const groupSchema = new schema({

    groupname:{type:String,required:true},
    description:{type:String,required:true},
    private:{type:String},
    internal:{type:String},
    public:{type:String},



});

//Create schema for Task
const taskSchema = new schema({

    projectname:{type:String,required:true},
    tasktitle:{type:String,required:true},
    startdate:{type:String,required:true},
    duedate:{type:String,required:true}


});

const User = module.exports = {
    model1:mongoose.model("User",userSchema),
    model2:mongoose.model("Project",projectSchema),
    model3:mongoose.model("Group",groupSchema),
    model4:mongoose.model("Task",taskSchema)
};

module.exports.saveUser = function(newUser,callback){

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password =hash;

            if (err) throw err;
            newUser.save(callback);

        });
    });



};


module.exports.saveProject = function(newProject,callback){

            newProject.save(callback);
};

module.exports.saveGroup = function(newGroup,callback){

    newGroup.save(callback);
};

module.exports.saveTask = function(newTask,callback){

    newTask.save(callback);
};

module.exports.passwordCheck=function (plainpassword,hash,callback) {
    bcrypt.compare(plainpassword, hash, function(err, res) {
        if(err) throw err;

        if(res){
            callback(null,res);
        }
    });
};

module.exports.findByEmail = function(email,callback){
    const query = {email:email};
    User.model1.findOne(query,callback); //functions use karaddi model1 and 2 call karanna one
};


module.exports.findUserbyId =function (id,callback) {

    User.model1.findById(id,callback);

};

module.exports.getProject =function (id,callback) {

    User.model2.findById({ownerid:id},callback);

};
/*module.exports.updateProfile = function(updateUser,callback){

    updateUser.save(callback);
};*/




