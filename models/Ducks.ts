export interface Duck {
  id: number
  name: string
  image: string
  rarity: number
}

export interface User {
  id: number
  name: string
  email: string
}

export interface Collection {
  username: string
  duckId: number
  timesCollected: number
  id: number
  name: string
  image: string
  rarity: number
}
