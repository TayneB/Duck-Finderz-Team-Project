import express from 'express'
import {
  getDuck,
  getDuckById,
  getCollectionByUserName,
  duckCollected,
  collectedCanary,
  newUser,
} from '../db/Functions/function'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const Ducks = await getDuck()
    res.status(200).json(Ducks)
  } catch (error) {
    console.error('Error fetching Ducks:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    console.log(id)
    const duck = await getDuckById(id)
    res.status(200).json(duck)
  } catch (error) {
    console.error('Error fetching Ducks:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/user/:username', async (req, res) => {
  try {
    const username = req.params.username
    const Collection = await getCollectionByUserName(username)
    res.status(200).json(Collection)
  } catch (error) {
    console.error('Error fetching Collection:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.put('/collect-duck', async (req, res) => {
  try {
    const { duckId, username } = req.body
    await duckCollected(duckId, username)
    const canary = await collectedCanary()
    console.log(canary, req.body)
    res.status(200).json({ message: `Duck Collected` })
  } catch (e) {
    console.error('Error collecting duck:', e)
    res.status(500).json({ e: 'Internal Server Error' })
  }
})

router.post('/new/:username', async (req, res) => {
  try {
    const username = req.params.username
    const collection = await newUser(username)
    res.status(200).json(collection)
  } catch (error) {
    console.error('Error fetching Collection:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
