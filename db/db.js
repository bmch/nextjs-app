import knex from 'knex';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3',
  },
  useNullAsDefault: false,
});

export async function getBikeData() {
  const allBikeData = await db.select('*').from('bikes');
  return allBikeData;
}

export async function getAllBikeNames() {
  // const allBikeNameData = await db.select('name').from('bikes');
  const allBikeNameData = await db.select('*').from('bikes');
  const valToLog = allBikeNameData.map((val) => {
    return {
      params: {
        id: val.name,
      },
    };
  });
  return valToLog;
}

export async function getDataById(val) {
  //for static props
  const getBikeByName = await db
    .from('bikes')
    .select('*')
    .where({ name: val })
    .limit(1);

  const returnValue = {
    ...getBikeByName[0],
    id: val,
  };

  return returnValue;
}
