const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.text('user_id').primary()
        table.text('user_name')
        table.text('team_name')
        table.text('team_id')
        table.text('access_token')
        table.boolean('is_admin').defaultTo(false)
        table.text('status').defaultTo('active')
        table.boolean('is_intern').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
