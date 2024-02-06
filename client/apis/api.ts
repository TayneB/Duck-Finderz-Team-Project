import request from 'superagent'

async function getDuck() {
  const data = await request.get('/api/v1/routes')
  return data.body
}

async function getDuckById(id: number) {
  const data = await request.get(`/api/v1/routes/${id}`)
  return data.body
}

async function getCollectionByUserName(username: string) {
  const data = await request.get(`/api/v1/routes/user/${username}`)
  return data.body
}

async function newUser(username: string) {
  const data = await request
    .post(`/api/v1/routes/new/${username}`)
    .send({ username })

  return data.body
}

export { getDuck, getDuckById, getCollectionByUserName, newUser }
