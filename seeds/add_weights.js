const table_name = 'weights';

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(table_name)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(table_name).insert([
        { id: 1, bike_id: 1, weight_kg: 6.6, size_cm: 52, publication_id: 1 },
        { id: 2, bike_id: 1, weight_kg: 6.85, size_cm: 56, publication_id: 3 },
        { id: 3, bike_id: 1, weight_kg: 6.8, size_cm: 56, publication_id: 4 },
        { id: 4, bike_id: 1, weight_kg: 6.82, size_cm: 56, publication_id: 5 },
      ]);
    });
};

// { id: 1, colName: 'Cycling Weekly' },
// { id: 2, colName: 'BikeRadar' },
// { id: 3, colName: 'road.cc' },
// { id: 4, colName: 'Cyclist' },
// { id: 5, colName: 'GRAN FONDO magazine' },
// { id: 6, colName: 'Cyclingnews' },
// { id: 7, colName: 'VeloNews' },
