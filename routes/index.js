const express=require('express')
const routes=express.Router()
const Users=require('../controllers/index')
const auth=require('../middleware/index')

routes.post("/user/adduser",Users.newuser)
      .post("/user/login",Users.login)
      .post("/user/update",auth,Users.updateuser)
      .post("/user/delete",auth,Users.deleteuser)


module.exports=routes