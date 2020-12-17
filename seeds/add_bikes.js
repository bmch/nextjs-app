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
          brand_id: 1,
          model_family: 'Tarmac SL7',
          model_variant: 'S-Works Tarmac SL7 DURA ACE DI2',
          model_year: 2020,
          brake_type: 'disc',
          image_url:
            '/images/bicycles/2021-s-works-tarmac-sl7-dura-ace-di2.jpg',
          drive_train_type: 'Shimano Dura-Ace Di2 Disc R9170',
          includes_powermeter:true
        },
        {
          id: 2,
          name: 'Canyon-Aeroad-CFR-Di2',
          price: 7699,
          launch_date: new Date().toISOString(),
          score: 4.2,
          brand_id: 9,
          model_family: 'Aeroad',
          model_variant: 'Aeroad CFR DURA ACE DI2',
          model_year: 2020,
          brake_type: 'disc',
          image_url:
            '/images/bicycles/2021-Canyon-Aeroad-carbon-aero-road-bike_Canyon-Aeroad-CFR-Disc-Di2-1920x1152.webp',
          drive_train_type: 'Shimano Dura-Ace Di2 Disc R9150',
          includes_powermeter:true
        },
        {
          id: 3,
          name: 'Trek-Madone-SLR9-Disc',
          price: 11050,
          launch_date: new Date().toISOString(),
          score: 5,
          brand_id: 2,
          model_family: 'Madone',
          model_variant: 'Madone SLR 9 Disc',
          model_year: 2020,
          brake_type: 'disc',
          image_url:
            '/images/bicycles/Trek-Madone-SLR9-Disc.jpg',
          drive_train_type: 'Shimano Dura-Ace Di2 Disc R9150',
          includes_powermeter:true
        },
        {
          id: 4,
          name: 'Cervélo-S5-Disc-Dura-Ace-Di2',
          price: 9699,
          launch_date: new Date().toISOString(),
          score: 5,
          brand_id: 6,
          model_family: 'S5',
          model_variant: 'S5 Disc Dura Ace Di2',
          model_year: 2020,
          brake_type: 'disc',
          image_url:
            '/images/bicycles/2019_s5_disc_black_axs_1.jpg',
          drive_train_type: 'Shimano Dura-Ace Di2 Disc R9150',
          includes_powermeter:false
        },
        {
          id: 5,
          name: 'Bianchi-Oltre-XR4',
          price: 7700,
          launch_date: new Date().toISOString(),
          score: 4.5,
          brand_id: 4,
          model_family: 'Oltre XR4',
          model_variant: 'Oltre XR4 CV Disc',
          model_year: 2020,
          brake_type: 'disc',
          image_url:
            '/images/bicycles/bianchi-oltre-xr4-2020-di2.jpg',
          drive_train_type: 'Shimano Ultegra Di2',
          includes_powermeter: false
        },        {
          id: 6,
          name: 'BMC-Timemachine-01-Road-One',
          price: 6999,
          launch_date: new Date().toISOString(),
          score: 4.5,
          brand_id: 11,
          model_family: 'Timemachine',
          model_variant: 'Timemachine 01 Road One',
          model_year: 2020,
          brake_type: 'disc',
          image_url:
            '/images/bicycles/bmc_2020_timemachine_road_01_one_pet_red_gol.png',
          drive_train_type: '',
          includes_powermeter: false
        },
      ]);
    });
};
