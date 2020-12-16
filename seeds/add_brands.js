const table_name = 'brands';

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(table_name)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(table_name).insert([
        { id: 1, brand_name: 'Specialized' },
        { id: 2, brand_name: 'Trek' },
        { id: 3, brand_name: 'Cannondale' },
        { id: 4, brand_name: 'Bianchi' },
        { id: 5, brand_name: 'Merida' },
        { id: 6, brand_name: 'Cervelo' },
        { id: 7, brand_name: 'Pinarello' },
        { id: 8, brand_name: 'Colnago' },
        { id: 9, brand_name: 'Canyon' },
        { id: 10, brand_name: 'Giant' },
        { id: 11, brand_name: 'BMC' },
        { id: 12, brand_name: 'Scott' },
      ]);
    });
};
