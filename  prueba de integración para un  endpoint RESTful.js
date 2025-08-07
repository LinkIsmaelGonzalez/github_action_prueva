//src/routers/userRouters.js
const express = require ('express');
const {createUser} = require ('../controllers/userController');
const router = express.Router();

router.post =('/user',(req, res) =>{
    try{
        const user = createUser(req.body);
        res.status(201).json(user);
    }   catch(error) {
        res.status(400).json({ error:error.message});
    }
})

module.exports = router;