const db = require("../data/db-config")

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes")
    .where({ id })
}

function findSteps(id) {
  return db("steps")
    .where({ id })
}

async function add(scheme) {
  const [id] = await db("schemes")
    .insert(scheme)
  return db("schemes")
    .where({ id })
}

async function update(changes, id) {
  await db("schemes")
    .where({ id })
    .update(changes)
  const updated = await db("schemes")
    .where({ id })
  return updated
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del()
}



module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}