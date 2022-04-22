import { createClient } from 'redis';

// Add { socket: { host: 'redis', port: 6379 }, password: process.env.REDIS_PASSWORD } for docker
// Remove { socket: { host: 'redis', port: 6379 }, password: process.env.REDIS_PASSWORD } for docker and start server with WSL see readme
const client = createClient({ socket: { host: 'redis', port: 6379 }, password: process.env.REDIS_PASSWORD });
(async () => {
    await client.connect();
    client.on('error', (err: any) => console.log('Redis Client Error', err));
    client.on('connect', function () {
        console.log('Connected!');
    });
    return client;
})();

export default client;
