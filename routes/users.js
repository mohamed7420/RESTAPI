const e = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const users = {users: []};

router.get('/' , (req , res)=>{
    console.log(users);
    res.send(users);
});

router.post('/' , (req , res) =>{

    const user = req.body;

    users.users.push({...user , id: uuidv4()});

    res.send('successfully');
});

// get a specific user by his id

router.get('/:id' , (req , res) => {

    const id = req.params.id;

    const user = users.users.find((user) => user.id == id);
    
    res.send(user);

});

router.delete('/:id' , (req , res) => {

    const id = req.params.id;

    users.users = users.users.filter((user) => user.id !== id);

    res.send(`user with id ${id} is deleted successfully`);

});

router.patch('/:id' , (req , res) =>{
    const id = req.params.id;

    const {firstName , lastName , age} = req.body;

    const foundedUser = users.users.find((user) => user.id === id);

    if (firstName) {foundedUser.firstName = firstName}else{res.send('You can set empty first name')};
    if (lastName) foundedUser.lastName = lastName;
    if (age) foundedUser.age = age;
    
    res.send(`user with id ${id} updated successfully`);
});

module.exports = router;