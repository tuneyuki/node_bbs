const express = require('express');
const router = express.Router();
const bbsSchema = require('../model/bbs');

router.get('/', (req, res) => {

  let Posts = bbsSchema.find({});
  let update;

  Posts.then((results) => {
    // console.log(results);
    res.render('bbs', { title: "BBS", posts: results, update : update });
  });
  // res.render('bbs', { title: "Hoge", posts : [{post: "hoge"}, {post: "fuga"}, {post: "fooo"}]});
});

router.post('/post', (req, res) => {

  let post = new bbsSchema({ post: req.body.text });
  post.save().then((result) => {
    console.log('Saved post: ' + result );
    res.redirect('/bbs');
  });

});

router.post('/edit', (req, res) => {
  // console.log(req.body);

  bbsSchema.find({}).then((results) => {
    // console.log(results);
    let postEdit = results.filter(posts => {
      return (posts._id == req.body._id)? true : false;
    });
    console.log(postEdit);
    
    res.render('bbs', { title: "BBS", posts: results, update: postEdit});
  });
});

router.post('/update/:id', async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  
  bbsSchema.findById(req.params.id).then((postEdit) => {

    postEdit.post = req.body.text;
    postEdit.save().then((result) => {
      console.log(result);
      res.redirect('/bbs');
    });
  }); 
});


module.exports = router;