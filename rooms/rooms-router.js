const router = require('express').Router();

const db = require('./rooms-model.js');
/*
router.get('/', restricted, (req, res) => {
  db.find()
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  db.findById(req.params.id)
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
  if (!req.body.type || !req.body.description || !req.body.owner) {
    res.status(400).json({message: "All required fields must be filled to create a ticket"})    
  } else {
    db.add(req.body)
    .then(ticket => {
        res.status(201).json({message: "Post was successful!"})
    }).catch(err => {
      res.status(500).json({message: err})
    })
  }
});

router.put('/:id', restricted, checkAuthType, (req, res) => {

  const changes = req.body;
  const id = req.params.id;
  
  db.update(id, changes)
  .then(count => {
    if (count > 0) {
      db.findById(id)
      .then(ticket => {
        res.status(200).json(ticket)
      }) 
    } else {
      res.status(404).json("Ticket not found")
    }
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(count => {
    if (count > 0) res.status(204).end()
    else zoo.status(404).json("Ticket not found")
  }).catch(err => {
    res.status(500).json(err)
  })
});
*/
module.exports = router;