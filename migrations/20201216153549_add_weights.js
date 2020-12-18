exports.up = function (knex) {
  return knex.schema.createTable('weights', function (table) {
    table.increments('id');
    table.integer('bike_id').unsigned().notNullable();
    table.integer('publication_id').unsigned().notNullable();
    table.decimal('weight_kg').notNullable();
    table.integer('size_cm').notNullable().unsigned();
    table.timestamps();
    table.foreign('bike_id').references('id').inTable('bikes');
    table.foreign('publication_id').references('id').inTable('publications');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('weights');
};
