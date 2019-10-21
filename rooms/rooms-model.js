const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('rooms');
}

function findBy(filter) {
  return db('rooms').where(filter).first();
}

function add(ticket) {
  return db('rooms').insert(ticket);
}

function findById(id) {
  return db('rooms')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("rooms")
  .where({ id })
  .update(changes)
}

function remove(id) {
  return db("rooms")
  .where({ id })
  .del()
}