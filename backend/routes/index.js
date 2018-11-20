let router = require('express').Router();

let Poll = require('../models/poll');

router.get('/:pollId', (req, res, next) => {
    console.log("Inside GET Polls");
    //console.log("Got Request "+req.params.pollId);
    Poll.find({"pollid": req.params.pollId}).exec((err, polls) => {
        console.log(polls);
        return res.status(200).json(polls);
    });
});

router.post('/createPoll', (req, res, next) => {
    var poll = new Poll({});    
    poll.questions = [];
    poll.userid = req.body.userid;

    poll.save(function(err, poll, numberAffected){
        return res.json(poll);
    });

});

router.post('/:pollId/:questionId/vote', (req, res, next) => {

    const pollId = req.params.pollId;
    const questionId = req.params.questionId;

    const choice = req.body.choice;
    const identifier = `questions.$.choices.${choice}.votes`;

    console.log("PollID: "+pollId+" QuestionId : "+questionId);

    Poll.update({'questions._id':questionId}
        , {$inc: {[identifier] : 1}}, {}, (err, numberAffected) => {
        let Pusher = require('pusher');
        let pusher = new Pusher({
            appId: process.env.PUSHER_APP_ID,
            key: process.env.PUSHER_APP_KEY,
            secret: process.env.PUSHER_APP_SECRET,
            cluster: process.env.PUSHER_APP_CLUSTER
        });

        let payload = { pollId: pollId, choice: choice, questionId: questionId };
        pusher.trigger('poll-events', 'vote', payload, req.body.socketId);
    //     Poll.update({ _id: pollId, 
    //     questions: { 
    //         $elemMatch: { _id: questionId}
    //     } 
    //   }, 

    //   { $inc: { 

    //     [identifier]:1

    //    }});    


         res.send('');
    });

});

module.exports = router;
