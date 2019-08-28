const Hunter = require('../model/Hunter');

module.exports = {
  index,
  show,
  update
  // addFact,
  // delFact,
  
};

function update(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, 
    {new: true}, function(err, user){
      console.log(user)
    if(err) res.redirect('back')
    return res.redirect(`/hunter/${req.params.id}`)
  })
}

function show(req, res){
  Hunter.findById(req.params.id, function(e, user){
    res.render('hunter/show', {
      user
    })
  })
}

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Hunter.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Hunter.find(modelQuery)
  .sort(sortKey).exec(function(err, hunters) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('hunter/index', {
      hunters,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

// function addFact(req, res, next) {
//   req.user.facts.push(req.body);
//   req.user.save(function(err) {
//     res.redirect('/Hunters');
//   });
// }
  


// function delFact(req, res, next) {
//   req.user.facts.push(req.body);
//   req.user.save(function(err) {
//     res.redirect('/Hunters');
//   });
// }