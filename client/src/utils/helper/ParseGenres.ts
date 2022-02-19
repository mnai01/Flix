import { Genres } from '../../apollo/generated/Genres';

export function removeGenres(str: string[], data: Genres | undefined) {
    const obj = {
        tv: data?.Genres.tv.filter((i) => {
            return str.find((j) => j === i.name) ? !str.find((j) => j === i.name) : true;
        }),
        movies: data?.Genres.movies.filter((i) => {
            return str.find((j) => j === i.name) ? !str.find((j) => j === i.name) : true;
        }),
    };

    return { Genres: obj };
}
