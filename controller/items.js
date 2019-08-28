const Item = require('../model/Item');

module.exports = {
  index,
  new: newItem,
  create,
  // show,
  edit,
  update,
  delete: deleteItem,

};

function update(req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body,
    { new: true }, function (err, item) {
      if (err) res.redirect('back')
      return res.redirect('/items')
    })
}

function edit(req, res) {
  Item.findById(req.params.id, function (e, item) {
    res.render('items/edit', {
      item: item,
      user: req.user
    })
  })
}

function index(req, res) {
  Item.find({}).populate('seller').exec(function (err, items) {
    console.log(items)
    res.render('items/index', {
      user: req.user,
      items: items
    })
  })

}

function newItem(req, res) {
  res.render('items/new', { user: req.user })
}

function create(req, res) {
  req.body.seller = req.user
  var newItem = new Item(req.body)
  console.log(newItem)



  newItem.save(function (err) {
    if (err) res.redirect("/items/new")
    res.redirect('/items')
  })

}


function deleteItem(req, res) {
  // item.deleteOne(req.params.id)
  // req.user.item.push(req.body);
  // req.user.save(function (err) {
  //   res.redirect('/items');
  // });
  Item.findByIdAndDelete(req.params.id, function(er, item){
    if(er) res.redirect('back')
    res.redirect('/items')
  })
}




