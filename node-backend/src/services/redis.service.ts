import { createClient } from "redis";

export const redisClient = createClient({
  url: 'redis://redis:6379'
})
redisClient.on('error', err => console.log(err))

export const initRedis = async () => {
  await redisClient.connect()
}

export async function resetRedis() {
  await redisClient.flushDb()
  console.log('Redis DB flushed')
}