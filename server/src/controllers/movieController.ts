import axios from 'axios';

export const getGenres = async (req: any, res: any) => {
    try {
        const genres = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY_TMDB}&language=en-US`);
        res.send(genres.data);
    } catch (err) {
        res.send({ ok: false });
        console.log({ ok: false });
    }
};
