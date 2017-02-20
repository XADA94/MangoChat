'use strict'

const Schema = use('Schema')

class ConversationUserTableSchema extends Schema {

  up () {
    this.create('conversation_user', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('conversation_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('conversation_user')
  }

}

module.exports = ConversationUserTableSchema
