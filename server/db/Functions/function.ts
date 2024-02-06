import { Collection, Duck } from '../../../models/Ducks.ts'
import connection from '../connection.ts'

async function getDuck(): Promise<Duck[]> {
  const data = await connection('Ducks').select('*')
  return data as Duck[]
}

async function getDuckById(id: number): Promise<Duck> {
  const data = await connection('Ducks').where('id', id).select('*').first()
  return data as Duck
}

async function getCollectionByUserName(
  username: string
): Promise<Collection[]> {
  const data = await connection('Collection')
    .where('username', username)
    .join('Ducks', 'Collection.duck_Id', 'Ducks.id')
    .select([
      'username',
      'duck_id as duckId',
      'times_collected as timesCollected',
      'Ducks.id',
      'name',
      'image',
      'rarity',
    ])
  return data as Collection[]
}

function collectedCanary() {
  return connection('Collection').select('*')
}

function duckCollected(duckId: number, username: string) {
  return connection('Collection')
    .update({
      times_collected: connection.raw('times_collected + 1'),
    })
    .where('username', username)
    .andWhere('duck_id', duckId)
}

async function newUser(username: string): Promise<Collection[]> {
  const ducks = await connection('Ducks').select('id')

  const newUserEntries = ducks.map((duck) => ({
    username,
    duck_id: duck.id,
    times_collected: 0,
  }))

  return connection('Collection')
    .insert(newUserEntries)
    .returning(['id', 'duck_id', 'username', 'times_collected'])
}

export {
  getDuck,
  getDuckById,
  getCollectionByUserName,
  duckCollected,
  collectedCanary,
  newUser,
}
