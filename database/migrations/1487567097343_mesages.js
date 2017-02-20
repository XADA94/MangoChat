'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('conversation_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
