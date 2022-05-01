import { createClient } from 'redis';

// Add { socket: { host: 'redis', port: 6379 }, password: process.env.REDIS_PASSWORD } for docker
// Remove { socket: { host: 'redis', port: 6379 }, password: process.env.REDIS_PASSWORD } for docker and start server with WSL see readme

const config = process.env.REDIS_PASSWORD ? { socket: { host: process.env.REDIS_HOST, port: 6379 }, password: process.env.REDIS_PASSWORD } : undefined;

const client = createClient(config);
(async () => {
    await client.connect();
    client.on('error', (err: any) => console.log('Redis Client Error', err));
    client.on('connect', function () {
        console.log('Connected!');
    });
    return client;
})();

export default client;
