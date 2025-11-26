function index(req, res) {
  res.send("Posts List");
}

function get(req, res) {
  res.send(`Shows the post number ${req.params.id}`);
}

function store(req, res) {
  res.send("New post here");
}

function update(req, res) {
  res.send(`POst updated with id: ${req.params.id}`);
}

function modify(req, res) {
  res.send(`modifies post using id: ${req.params.id}`);
}

function destroy(req, res) {
  res.send(`delete post with id: ${req.params.id}`);
}

module.exports = {
  index,
  get,
  store,
  update,
  modify,
  destroy,
};
