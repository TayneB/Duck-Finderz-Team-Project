import connection from '../connection.ts'
import { Preferences, PreferencesData } from '../../../models/preferences.ts'

const columns = ['favouriteFruit']

export async function getCollectionById(
  auth0Id: string,
  db = connection
): Promise<PreferencesData> {
  return db('collection')
    .select('duckId')
    .where('auth0Id', auth0Id).join('duckId')
    .first()
}

export async function addDuck(
  newPreferences: Preferences,
  db = connection
): Promise<PreferencesData[]> {
  return db('collection')
    .insert(newPreferences)
    .returning([...columns])
}


