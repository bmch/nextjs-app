exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bikes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bikes').insert([
        {
          id: 1,
          name: 'Specialized-S-Works-Tarmac-SL7-Dura-Ace-Di2',
          price: 11500,
          launch_date: new Date().toISOString(),
          score: 4.85,
          brand: 'Specialized',
          model_family: 'Tarmac SL7',
          model_variant: 'S-Works Tarmac SL7 DURA ACE DI2',
          model_year: 2020,
          brake_type: 'hydraulic disc',
          image_url:
            '/images/bicycles/2021-s-works-tarmac-sl7-dura-ace-di2.jpg',
          drive_train_type: 'Shimano Dura-Ace Di2 Disc R9170',
        },
        {
          id: 2,
          name: 'Canyon-Aeroad-CFR-Di2',
          price: 7699,
          launch_date: new Date().toISOString(),
          score: 4.2,
          brand: 'Canyon',
          model_family: 'Tarmac SL7',
          model_variant: 'S-Works Tarmac SL7 DURA ACE DI2',
          model_year: 2020,
          brake_type: 'hydraulic disc',
          image_url:
            '/images/bicycles/2021-s-works-tarmac-sl7-dura-ace-di2.jpg',
          drive_train_type: 'Shimano Dura-Ace Di2 Disc R9170',
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
