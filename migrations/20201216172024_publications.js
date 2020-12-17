exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('publications', function (table) {
    table.increments('id');
    table.string('publication_name').notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {};
