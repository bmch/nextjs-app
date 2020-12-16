exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('weights', function (table) {
    table.increments('id');
    table.foreign('bike_id').references('id').inTable('bikes');
    table.decimal('weight_kg').notNullable();
    table.integer('size_cm').notNullable().unsigned();
    table.foreign('publication_id').references('id').inTable('publications');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('weights');
};
