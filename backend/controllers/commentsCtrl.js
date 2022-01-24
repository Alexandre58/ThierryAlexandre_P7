'use strict';
const models = require("../models");
function save(req, res) {
  const messages = {
    title: req.body.title,
    content: req.body.content,
    attachment: req.body.attachment,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    comments: req.body.comments,
    userId: 1,
    dateMessages: req.body.dateMessages
  };
  models.Messages.create(messages)//localhost3000/messages
    .then((result) => {
      res.status(201).json({
        message: "Message create",
        post: result
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "no create Message",
        error: error,
      });
    });
}

//*********************************recup id part l'url//
function show(req, res) {
    const id = req.params.id;

    models.Messages.findByPk(id)
    .then(result => {
          res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            message: "Response is not Ok "
        })

    });
}



module.exports = {
  save: save,
  show: show
};
