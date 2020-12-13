exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bikes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bikes').insert([
        {
          id: 1,
          name: 'sl7',
          price: 11999,
          launch_date: new Date().toISOString(),
          score: 5,
        },
        {
          id: 2,
          name: 'Canyon-Aeroad-CFR-Di2',
          price: 7699,
          launch_date: new Date().toISOString(),
          score: 4.2,
        },
        {
          id: 3,
          name: 'Trek-Madone-SLR9-Disc',
          price: 11050,
          launch_date: new Date().toISOString(),
          score: 5,
        },
      ]);
    });
};
