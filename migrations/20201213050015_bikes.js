exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('bikes', function (table) {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.float('price').notNullable();
    table.datetime('launch_date', { precision: 6 });
    table.float('score').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('bikes');
};
