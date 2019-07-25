const express =require('express');
const router =express.Router();
const User = require('../models/user');
const Project = require('../models/user');
const Group = require('../models/user');
const MyProject = require('../models/user');
const Task = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');

//User Registeration Route
router.post("/register",(req,res)=>{


    const newUser = new User.model1({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    });

        /*if( req.body.username == null || req.body.username ==='' || req.body.name == null || req.body.name === '' || req.body.email == null ||
        req.body.email ==='' || req.body.password == null || req.body.password ===''){
            if(err.errors.username) {
                res.json({state: false, msg: err.errors.username.message});
            }
    }else{*/

    User.saveUser(newUser,function(err,user){
        if(err){
            res.json({state:false,msg:"data is not inserted"});
        }
        if(user){
            res.json({state:true,msg:"data inserted"});
        }
        console.log(newUser);

    });

});




//Login for User
router.post("/login",(req,res)=>{

    const email=req.body.email;
    const password=req.body.password;

    User.findByEmail(email,function (err,user) {

        if(err) throw err;

        if(!user){
            return res.json({state:false,msg:"No user found"});

        }

        User.passwordCheck(password,user.password,function(err,match){
            if(err) throw err;

            if(match){
                const token = jwt.sign({data:user}, config.secret,{expiresIn:86400});
                res.json(
                    {
                        state:true,
                        token:`Bearer ${token}`,
                        user:{
                            id:user._id,
                            name:user.name,
                            username:user.username,
                            email:user.email

                        }
                    }
                )
            }
            else {
                return res.json({state:false,msg:"Password incorrect"});
            }
        });
    });


});

//Get user data from database
router.get('/profile', passport.authenticate('jwt', { session: false }), function(req, res) {
        res.json({user:req.user});
    });

//Create new project
router.post('/saveProject',(req,res)=>{


    const newProject = new User.model2({


        projectname:req.body.projectname,
        description:req.body.description,
        email:req.body.email,
        //ownerid : req.body.ownerid,


    });

    User.saveProject(newProject,function(err,pro){
        if(err){
            res.json({state:false,msg:"data is not inserted"});
        }
        if(pro){
            res.json({state:true,msg:"data inserted"});
        }

    })
});

//Create new Group
router.post('/saveGroup',(req,res)=>{

    const newGroup = new User.model3({

        groupname:req.body.groupname,
        description:req.body.description,
        private:req.body.private,
        internal:req.body.internal,
        public:req.body.public,



    });

    User.saveGroup(newGroup,function(err,gro){
        if(err){
            res.json({state:false,msg:"data is not inserted"});
        }
        if(gro){
            res.json({state:true,msg:"data inserted"});
        }

    })
});

//Create new task
router.post('/saveTask',(req,res)=>{

    const newTask = new User.model4({

        projectname:req.body.projectname,
        tasktitle:req.body.tasktitle,
        startdate:req.body.startdate,
        duedate:req.body.duedate,

    });

    User.saveTask(newTask,function(err,gro){
        if(err){
            res.json({state:false,msg:"data is not inserted"});
        }
        if(gro){
            res.json({state:true,msg:"data inserted"});
        }

    })
    console.log(newTask);
});



router.post('/myprojects',function(req,res){

    const getProData = new User.model2({

        userid:req.body.userid
    });

    console.log(userid);

    User.getProject(getProData,function (err,user)
    {
      if (err) throw err;
      if(!user)
      {
          return res.json({state:false,msg:"Didnt get data"});
      }
      else
      {
          return res.json({state:true,msg:"data got"});
      }
    })

});

/*router.put('/profile/:id', function (req,res) {
    console.log('update my profile');
    user.findByIdAndUpdate(req.params.id ,
    {
        $set:{
            username:req.body.username,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password}
        },
        {
          new: true
    },
        User.updateProfile(updateUser ,function (err,pro) {
            if(err){
                res.json({state:false,msg:"data is not updated"});
            }
            if(pro){
                res.json({state:true,msg:"data updated"});
            }

        })

    );


})*/
//Delete a user from the db
/*
router.delete('/users/:userid',function(req,res,next){
    user.findByIdAndRemove(req.params.id).then(function(user){
        res.send(user);
    });
    console.log(user);

});*/

/*router.delete('/:id',function(req,res,next) {
    user.findByIdAndRemove(req.params.userid, function (err, user) {
        if (err) return res.send(err);
        res.json({message: 'Deleted'});
    });
});*/

//Update a user in the mongodb
/*router.put('/users/:id',function(req,res,next){
    user.findById({_id:req.params.id},req.body).then(function(){
        user.findOne({_id:req.params.id}).then(function (user) {
            res.send(user);

        });
    });
});*/

/*router.patch('/:id',(req,res,next) =>{
    const id =req.params.user.id;
    const updateOps= {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;

    }
    user.update({_id:id},{$set:updateOps})
        .exec()
        .then(result =>{
            console.log(result);
            res.json(result);
        })
        .catch(err =>{
        console.log(err);
        res.json({
            error:err
        });
    });
})
*/
module.exports = router;