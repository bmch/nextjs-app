exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('bikes', function (table) {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.decimal('price').notNullable();
    table.datetime('launch_date', { precision: 6 });
    table.decimal('score').notNullable();
    table.foreign('brand_id').references('id').inTable('brands').notNullable();
    table.string('model_family');
    table.string('model_variant');
    table.integer('model_year').unsigned();
    table.string('gender');
    table.string('frame_material');
    table.string('brake_type');
    table.string('chainset_type', 255);
    table.string('image_url').notNullable();
    table.string('drive_train_type')
    table.boolean('includes_powermeter').notNullable();
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('bikes');
};
