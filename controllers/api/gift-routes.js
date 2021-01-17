const router = require('express').Router();
const { Gift } = require('../../models');

// GET ALL GIFTS  
router.get('/', (req, res) => {
  Gift.findAll({

  })
  .then(dbGiftData => res.json(dbGiftData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// GET SINGLE GIFT
router.get('/:id', (req, res) => {
  Gift.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dbGiftData => {
    if (dbGiftData) {
      res.status(404).json({ message: 'No gift found with that id'});
      return;
    }
    res.json(dbGiftData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE GIFT 
router.post('/', (req, res) => {
  Gift.create({
    name: req.body.name,
    gift_description: req.body.gift_description,
    gift_url: req.body.gift_url,
    user_id: req.session.user_id
  })
  .then(dbGiftData => res.json(dbGiftData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE GIFT
router.delete('/:id', (req, res) => {
  Gift.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(dbGiftData => {
    if (!dbGiftData) {
      res.status(404).json({ message: 'No gift found with this id'});
      return;
    }
    res.json(dbGiftData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;