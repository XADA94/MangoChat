'use strict'

const Schema = use('Schema')

class ConversationsTableSchema extends Schema {

  up () {
    this.create('conversations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('conversations')
  }

}

module.exports = ConversationsTableSchema
