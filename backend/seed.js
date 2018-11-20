require('mongoose').connect('mongodb://localhost/VotingApp');

    const topics = [
        "Should dogs be allowed to fly?",
        "Should doors be shut at night?",
        "Should developers use IDEs?",
        "Should cars have four wheels?",
        "Should humans be allowed to wear shoes?"
    ];
    let User = require('../models/User');

    User.deleteMany({})
        .then(() => {
            // var user = new User({});
            // user.username = "Atharva";
            // user.password = "abc";
            // user.email = "def";
        
            // return user.save();
            users=[];
                users.push(
                    {
                    name: "Atharva",
                    email: "Atharva@gmail.com",
                    password: "abcd"});
                users.push(
                    {name: "Niyam",
                    email: "Niyam@gmail.com",
                    password: "abcd"});
                users.push(
                    {name : "Samriddhi",
                    email: "Samriddhi@gmail.com",
                    password: "abcd"});
                    
            
            return User.create(users);
        })
        .then(() => {
            process.exit();
        })
        .catch((e) => {
            console.log(e);
            process.exit(1);
        });