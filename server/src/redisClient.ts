import { createClient } from 'redis';

const client = createClient();
(async () => {
    await client.connect();
    client.on('error', (err) => console.log('Redis Client Error', err));
    client.on('connect', function () {
        console.log('Connected!');
    });
    return client;
})();

export default client;
