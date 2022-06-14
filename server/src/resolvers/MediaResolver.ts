import { Args, Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';
import axios from 'axios';
import { GenreResult } from '../typeDefs/TMDB/Genres';
import { DiscoverMovie, DiscoverMovieParams } from '../typeDefs/TMDB/DiscoverMovie';
import { DiscoverTV, DiscoverTVParams } from '../typeDefs/TMDB/DiscoverTV';
import { Search, SearchParams, SearchResults } from '../typeDefs/TMDB/MultiSearch';
import { VidsrcLastesVideosParams, VidsrcMovies, VidsrcTV } from '../typeDefs/TMDB';
import { FindMediaByIMDB, FindMediaByIMDBParams } from '../typeDefs/TMDB/MediaByIMDB';
import { FindMovieByTMDB, FindMovieByTMDBParams } from '../typeDefs/TMDB/MovieByTMDB';
import { TVByTMDB, TVByTMDBParams } from '../typeDefs/TMDB/TVByTMDB';
import { isAuthContext } from '../middleware/isAuthContext';
import { SeasonByTMDB, SeasonByTMDBParams } from '../typeDefs/TMDB/SeasonByTMDB';
import { TrendingParams, Trending, TrendingResults } from '../typeDefs/TMDB/Trending';
import { MyContext } from '../typeDefs/MyContext';
import { WatchedMovies } from '../entity/User';
// import { TopRatedMovies, TopRatedMoviesParams } from '../typeDefs/TMDB/TopRatedMovies';
// import { MovieListResultObject } from '../typeDefs/TMDB/Reusable/MovieListResultObject';
// import { PopularMovies, PopularMoviesParams } from '../typeDefs/TMDB/PopularMovies';

@Resolver()
export class MediaResolver {
    @Query(() => GenreResult)
    @UseMiddleware(isAuthContext)
    async Genres() {
        const tvGenres = axios(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY_TMDB}&language=en-US`);
        const movieGenres = axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY_TMDB}&language=en-US`);
        const allPromise = Promise.all([tvGenres, movieGenres]);
        try {
            const values = await allPromise;
            return { tv: values[0].data.genres, movies: values[1].data.genres };
        } catch (err) {
            throw new Error(err);
        }
    }

    @Query(() => DiscoverMovie)
    @UseMiddleware(isAuthContext)
    async DiscoverMovies(
        @Args()
        {
            region,
            sort_by,
            certification_country,
            certification,
            certificationLte,
            certificationGte,
            include_adult,
            include_video,
            page,
            primary_release_year,
            primary_release_dateGte,
            primary_release_dateLte,
            year,
            with_genres,
            with_release_type,
            with_original_language,
            vote_countGte,
            vote_averageGte,
        }: DiscoverMovieParams,
    ) {
        const { data } = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY_TMDB}`, {
            params: {
                region,
                sort_by,
                certification_country,
                certification,
                'certification.lte': certificationLte,
                'certification.gte': certificationGte,
                include_adult,
                include_video,
                page,
                primary_release_year,
                'primary_release_date.gte': primary_release_dateGte,
                'primary_release_date.lte': primary_release_dateLte,
                year,
                with_genres,
                'with_release_type': with_release_type.join('|'),
                with_original_language,
                'vote_count.gte': vote_countGte ? vote_countGte : 10,
                'vote_average.gte': vote_averageGte,
            },
        });
        return data;
    }

    @Query(() => DiscoverTV)
    @UseMiddleware(isAuthContext)
    async DiscoverTV(
        @Args()
        { sort_by, page, with_genres, watch_region, with_status, with_original_language, vote_countGte, vote_averageGte }: DiscoverTVParams,
    ) {
        const test = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY_TMDB}`, {
            params: {
                sort_by,
                page,
                with_genres,
                watch_region,
                with_status,
                with_original_language,
                'vote_count.gte': vote_countGte ? vote_countGte : 10,
                'vote_average.gte': vote_averageGte,
            },
        });
        return test.data;
    }

    @Query(() => Search)
    @UseMiddleware(isAuthContext)
    async SearchVideos(
        @Args()
        { region, query, include_adult }: SearchParams,
    ) {
        const { data } = await axios(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY_TMDB}`, {
            params: {
                region,
                query,
                include_adult,
            },
        });

        return {
            ...data,
            results: data.results.filter((i: SearchResults) => i.media_type !== 'person' && i.poster_path !== null && i.popularity > 3 && i.vote_count > 10),
        };
    }

    @Query(() => VidsrcMovies)
    @UseMiddleware(isAuthContext)
    async GetLatestMovies(
        @Args()
        { page }: VidsrcLastesVideosParams,
    ) {
        const { data } = await axios(`https://vidsrc.me/movies/latest/page-${page}.json`);
        return data;
    }

    @Query(() => VidsrcTV)
    @UseMiddleware(isAuthContext)
    async GetLatestTV(
        @Args()
        { page }: VidsrcLastesVideosParams,
    ) {
        const { data } = await axios(`https://vidsrc.me/episodes/latest/page-${page}.json`);
        return data;
    }

    @Query(() => FindMediaByIMDB)
    @UseMiddleware(isAuthContext)
    async FindByIMDB_ID(
        @Args()
        { imdb_id }: FindMediaByIMDBParams,
    ) {
        const { data } = await axios(`https://api.themoviedb.org/3/find/${imdb_id}?api_key=${process.env.API_KEY_TMDB}`, {
            params: {
                external_source: 'imdb_id',
            },
        });
        return data;
    }

    @Query(() => FindMovieByTMDB)
    @UseMiddleware(isAuthContext)
    async FindMovieByTMDB(
        @Args()
        { movie_id }: FindMovieByTMDBParams,
    ) {
        const { data } = await axios(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY_TMDB}&append_to_response=videos,external_ids,similar`,
        );
        return data;
    }

    @Query(() => TVByTMDB)
    @UseMiddleware(isAuthContext)
    async FindTVByTMDB(
        @Args()
        { tv_show_id }: TVByTMDBParams,
    ) {
        const { data } = await axios(
            `https://api.themoviedb.org/3/tv/${tv_show_id}?api_key=${process.env.API_KEY_TMDB}&append_to_response=videos,external_ids,similar`,
        );
        return data;
    }

    @Query(() => SeasonByTMDB)
    @UseMiddleware(isAuthContext)
    async FindEpisodeByTMDB(
        @Args()
        { tv_show_id, season_number }: SeasonByTMDBParams,
    ) {
        const { data } = await axios(
            `https://api.themoviedb.org/3/tv/${tv_show_id}/season/${season_number}?api_key=${process.env.API_KEY_TMDB}&append_to_response=videos,external_ids,similar`,
        );
        return data;
    }

    @Query(() => Trending)
    @UseMiddleware(isAuthContext)
    async GetTrending(
        @Args()
        { region, include_adult, media_type, time, page }: TrendingParams,
    ) {
        const { data } = await axios(`https://api.themoviedb.org/3/trending/${media_type}/${time}?api_key=${process.env.API_KEY_TMDB}`, {
            params: {
                region,
                include_adult,
                page,
            },
        });

        // Checks is media is 2 weeks old from release date. This can help prevent media being shown that has
        // not been released on dvd/streaming yet since "trending" api doesnt have that option to tell
        const tv = data.results.filter((i: TrendingResults) => {
            const tvDate = new Date(i.first_air_date);
            const today = new Date();
            tvDate.setDate(tvDate.getDate() + 7);
            return i.name && i.first_air_date && tvDate < today;
        });
        const movies = data.results.filter((i: TrendingResults) => {
            const movieDate = new Date(i.release_date);
            const today = new Date();
            movieDate.setDate(movieDate.getDate() + 7);
            return i.title && i.release_date && movieDate < today;
        });
        return { ...data, results: [...movies, ...tv] };
    }

    @UseMiddleware(isAuthContext)
    @Query(() => [WatchedMovies])
    async WatchedMovies(@Ctx() { payload }: MyContext) {
        const watchedMovies = await WatchedMovies.find({ where: { user: payload?.userId }, order: { created_at: 'DESC' } });
        // adds without saving
        // const watched = await WatchedMovies.create({ tmdb, user, type });
        return watchedMovies;
    }
}

//     @Query(() => TopRatedMovies)
//     @UseMiddleware(isAuthContext)
//     async TopRatedMovies(
//         @Args()
//         { page }: TopRatedMoviesParams,
//     ) {
//         const { data } = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY_TMDB}`, {
//             params: {
//                 region: 'US',
//                 page,
//             },
//         });
//         return {
//             ...data,
//             results: data.results.filter((i: MovieListResultObject) => i.adult !== true && i.poster_path !== null && i.backdrop_path !== null),
//         };
//     }

//     @Query(() => PopularMovies)
//     @UseMiddleware(isAuthContext)
//     async PopularMovies(
//         @Args()
//         { page }: PopularMoviesParams,
//     ) {
//         const { data } = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY_TMDB}`, {
//             params: {
//                 region: 'US',
//                 page,
//             },
//         });
//         return {
//             ...data,
//             results: data.results.filter((i: MovieListResultObject) => i.adult !== true && i.poster_path !== null && i.backdrop_path !== null),
//         };
//     }
