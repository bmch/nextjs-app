exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('brands', function (table) {
    table.increments('id');
    table.string('brand_name').notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('brands');
};
