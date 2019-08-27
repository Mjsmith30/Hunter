const Item = require('../model/Item');

module.exports = {
  index,
  new: newItem,
  create,
  // show,
  edit,
  update,
 delete: deleteOne,

};

function update(req, res){
  Item.findByIdAndUpdate(req.params.id, req.body, 
    {new: true}, function(err, item){
    if(err) res.redirect('back')
    return res.redirect('/items')
  })
}

function edit(req, res){
  Item.findById(req.params.id, function(e, item){
    res.render('items/edit', {
      item: item,
      user: req.user
    })
  })
}

function index(req, res) {
  Item.find({}, function (e, items) {
    res.render('items/index', {
      user: req.user,
      items: items

    })

  })
}

function newItem(req,res){
  res.render('items/new', { user: req.user})
}

function create(req, res){
  req.body.seller = req.user
  var newItem = new Item(req.body)
  console.log(newItem)

  

  newItem.save(function(err){
    if(err) res.redirect("/items/new")
    res.redirect('/items')
  })

}
// function show(req, res){
//   hunter.findById(req.params.id,
//     function(err,hunted){
//     res.render("/show",
//     hunted
//     )}
//   )}

  function deleteOne(req, res){
    Item.findByIdAndUpdate(req.params.id, req.body, 
      {new: true}, function(err, item){
      if(err) res.redirect('back')
      return res.redirect('/items')
      }
    )}
    function deleteOne(id) {
      item.splice(id, 1);
    }