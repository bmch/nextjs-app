const table_name = 'publications';

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(table_name)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(table_name).insert([
        { id: 1, name: 'Cycling Weekly' },
        { id: 2, name: 'BikeRadar' },
        { id: 3, name: 'road.cc' },
        { id: 4, name: 'Cyclist' },
        { id: 5, name: 'GRAN FONDO magazine' },
        { id: 6, name: 'Cyclingnews' },
        { id: 7, name: 'VeloNews' },
      ]);
    });
};
