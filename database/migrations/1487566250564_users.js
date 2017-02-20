'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nickname').unique()
      table.string('avatar').unique().defaultTo('avatar.png')
      table.string('email').unique()
      table.string('password', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
