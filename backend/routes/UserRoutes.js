const app=require('express');
const {registerUser,authUser, allUsers} = require('../controllers/userController');
const{protect}=require('../Middlewares/authMiddleware')


// const { authUser } = require('../controllers/authController'); // Import the authUser function



const router=app.Router()
// router.post('/',registerUser)



router.get('/',(req,res)=>{
    res.send("Login");
});



router.route('/').post(registerUser).get(protect,allUsers)
// router.post('/login',authUser);




// router.route('/login',authUser)

module.exports=router;
