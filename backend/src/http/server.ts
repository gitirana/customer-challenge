import { main } from '../database'
import { app } from './app'

app
  .listen({
    port: 3333,
  })
  .then(async () => {
    console.log('🔥 Server running')

    await main()
  })
