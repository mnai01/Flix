/* eslint-disable no-unused-vars */
import { ArgsType, Field, Float, Int, ObjectType, registerEnumType } from 'type-graphql';

@ArgsType()
export class GenreParams {
    // it can infer string but not number so we need to specify
    @Field(() => String, { nullable: false })
    type: 'tv' | 'movie';
}

@ObjectType()
export class Genre {
    // it can infer string but not number so we need to specify
    @Field()
    id: string;
    @Field()
    name: string;
}

@ObjectType()
export class GenreResult {
    @Field(() => [Genre])
    tv: Genre[];
    @Field(() => [Genre])
    movies: Genre[];
}

export enum Country {
    Afghanistan = 'AF',
    AlandIslands = 'AX',
    Albania = 'AL',
    Algeria = 'DZ',
    AmericanSamoa = 'AS',
    Andorra = 'AD',
    Angola = 'AO',
    Anguilla = 'AI',
    Antarctica = 'AQ',
    AntiguaAndBarbuda = 'AG',
    Argentina = 'AR',
    Armenia = 'AM',
    Aruba = 'AW',
    Australia = 'AU',
    Austria = 'AT',
    Azerbaijan = 'AZ',
    Bahamas = 'BS',
    Bahrain = 'BH',
    Bangladesh = 'BD',
    Barbados = 'BB',
    Belarus = 'BY',
    Belgium = 'BE',
    Belize = 'BZ',
    Benin = 'BJ',
    Bermuda = 'BM',
    Bhutan = 'BT',
    Bolivia = 'BO',
    BonaireSintEustatiusSaba = 'BQ',
    BosniaAndHerzegovina = 'BA',
    Botswana = 'BW',
    BouvetIsland = 'BV',
    Brazil = 'BR',
    BritishIndianOceanTerritory = 'IO',
    BruneiDarussalam = 'BN',
    Bulgaria = 'BG',
    BurkinaFaso = 'BF',
    Burundi = 'BI',
    Cambodia = 'KH',
    Cameroon = 'CM',
    Canada = 'CA',
    CapeVerde = 'CV',
    CaymanIslands = 'KY',
    CentralAfricanRepublic = 'CF',
    Chad = 'TD',
    Chile = 'CL',
    China = 'CN',
    ChristmasIsland = 'CX',
    CocosKeelingIslands = 'CC',
    Colombia = 'CO',
    Comoros = 'KM',
    Congo = 'CG',
    CongoDemocraticRepublic = 'CD',
    CookIslands = 'CK',
    CostaRica = 'CR',
    CoteDIvoire = 'CI',
    Croatia = 'HR',
    Cuba = 'CU',
    Curacao = 'CW',
    Cyprus = 'CY',
    CzechRepublic = 'CZ',
    Denmark = 'DK',
    Djibouti = 'DJ',
    Dominica = 'DM',
    DominicanRepublic = 'DO',
    Ecuador = 'EC',
    Egypt = 'EG',
    ElSalvador = 'SV',
    EquatorialGuinea = 'GQ',
    Eritrea = 'ER',
    Estonia = 'EE',
    Ethiopia = 'ET',
    FalklandIslands = 'FK',
    FaroeIslands = 'FO',
    Fiji = 'FJ',
    Finland = 'FI',
    France = 'FR',
    FrenchGuiana = 'GF',
    FrenchPolynesia = 'PF',
    FrenchSouthernTerritories = 'TF',
    Gabon = 'GA',
    Gambia = 'GM',
    Georgia = 'GE',
    Germany = 'DE',
    Ghana = 'GH',
    Gibraltar = 'GI',
    Greece = 'GR',
    Greenland = 'GL',
    Grenada = 'GD',
    Guadeloupe = 'GP',
    Guam = 'GU',
    Guatemala = 'GT',
    Guernsey = 'GG',
    Guinea = 'GN',
    GuineaBissau = 'GW',
    Guyana = 'GY',
    Haiti = 'HT',
    HeardIslandMcdonaldIslands = 'HM',
    HolySeeVaticanCityState = 'VA',
    Honduras = 'HN',
    HongKong = 'HK',
    Hungary = 'HU',
    Iceland = 'IS',
    India = 'IN',
    Indonesia = 'ID',
    Iran = 'IR',
    Iraq = 'IQ',
    Ireland = 'IE',
    IsleOfMan = 'IM',
    Israel = 'IL',
    Italy = 'IT',
    Jamaica = 'JM',
    Japan = 'JP',
    Jersey = 'JE',
    Jordan = 'JO',
    Kazakhstan = 'KZ',
    Kenya = 'KE',
    Kiribati = 'KI',
    Korea = 'KR',
    KoreaDemocraticPeoplesRepublic = 'KP',
    Kuwait = 'KW',
    Kyrgyzstan = 'KG',
    LaoPeoplesDemocraticRepublic = 'LA',
    Latvia = 'LV',
    Lebanon = 'LB',
    Lesotho = 'LS',
    Liberia = 'LR',
    LibyanArabJamahiriya = 'LY',
    Liechtenstein = 'LI',
    Lithuania = 'LT',
    Luxembourg = 'LU',
    Macao = 'MO',
    Macedonia = 'MK',
    Madagascar = 'MG',
    Malawi = 'MW',
    Malaysia = 'MY',
    Maldives = 'MV',
    Mali = 'ML',
    Malta = 'MT',
    MarshallIslands = 'MH',
    Martinique = 'MQ',
    Mauritania = 'MR',
    Mauritius = 'MU',
    Mayotte = 'YT',
    Mexico = 'MX',
    Micronesia = 'FM',
    Moldova = 'MD',
    Monaco = 'MC',
    Mongolia = 'MN',
    Montenegro = 'ME',
    Montserrat = 'MS',
    Morocco = 'MA',
    Mozambique = 'MZ',
    Myanmar = 'MM',
    Namibia = 'NA',
    Nauru = 'NR',
    Nepal = 'NP',
    Netherlands = 'NL',
    NewCaledonia = 'NC',
    NewZealand = 'NZ',
    Nicaragua = 'NI',
    Niger = 'NE',
    Nigeria = 'NG',
    Niue = 'NU',
    NorfolkIsland = 'NF',
    NorthernMarianaIslands = 'MP',
    Norway = 'NO',
    Oman = 'OM',
    Pakistan = 'PK',
    Palau = 'PW',
    PalestinianTerritory = 'PS',
    Panama = 'PA',
    PapuaNewGuinea = 'PG',
    Paraguay = 'PY',
    Peru = 'PE',
    Philippines = 'PH',
    Pitcairn = 'PN',
    Poland = 'PL',
    Portugal = 'PT',
    PuertoRico = 'PR',
    Qatar = 'QA',
    Reunion = 'RE',
    Romania = 'RO',
    RussianFederation = 'RU',
    Rwanda = 'RW',
    SaintBarthelemy = 'BL',
    SaintHelena = 'SH',
    SaintKittsAndNevis = 'KN',
    SaintLucia = 'LC',
    SaintMartin = 'MF',
    SaintPierreAndMiquelon = 'PM',
    SaintVincentAndGrenadines = 'VC',
    Samoa = 'WS',
    SanMarino = 'SM',
    SaoTomeAndPrincipe = 'ST',
    SaudiArabia = 'SA',
    Senegal = 'SN',
    Serbia = 'RS',
    Seychelles = 'SC',
    SierraLeone = 'SL',
    Singapore = 'SG',
    SintMaarten = 'SX',
    Slovakia = 'SK',
    Slovenia = 'SI',
    SolomonIslands = 'SB',
    Somalia = 'SO',
    SouthAfrica = 'ZA',
    SouthGeorgiaAndSandwichIsl = 'GS',
    SouthSudan = 'SS',
    Spain = 'ES',
    SriLanka = 'LK',
    Sudan = 'SD',
    Suriname = 'SR',
    SvalbardAndJanMayen = 'SJ',
    Swaziland = 'SZ',
    Sweden = 'SE',
    Switzerland = 'CH',
    SyrianArabRepublic = 'SY',
    Taiwan = 'TW',
    Tajikistan = 'TJ',
    Tanzania = 'TZ',
    Thailand = 'TH',
    TimorLeste = 'TL',
    Togo = 'TG',
    Tokelau = 'TK',
    Tonga = 'TO',
    TrinidadAndTobago = 'TT',
    Tunisia = 'TN',
    Turkey = 'TR',
    Turkmenistan = 'TM',
    TurksAndCaicosIslands = 'TC',
    Tuvalu = 'TV',
    Uganda = 'UG',
    Ukraine = 'UA',
    UnitedArabEmirates = 'AE',
    UnitedKingdom = 'GB',
    UnitedStates = 'US',
    UnitedStatesOutlyingIslands = 'UM',
    Uruguay = 'UY',
    Uzbekistan = 'UZ',
    Vanuatu = 'VU',
    Venezuela = 'VE',
    Vietnam = 'VN',
    VirginIslandsBritish = 'VG',
    VirginIslandsUS = 'VI',
    WallisAndFutuna = 'WF',
    WesternSahara = 'EH',
    Yemen = 'YE',
    Zambia = 'ZM',
    Zimbabwe = 'ZW',
}
export enum DiscoverMovieSortBy {
    popularityAsc = 'popularity.asc',
    popularityDesc = 'popularity.desc',
    release_dateAsc = 'release_date.asc',
    release_dateDesc = 'release_date.desc',
    revenueAsc = 'revenue.asc',
    revenueSesc = 'revenue.desc',
    primary_release_dateAsc = 'primary_release_date.asc',
    primary_release_dateDesc = 'primary_release_date.desc',
    original_titleAsc = 'original_title.asc',
    original_titleDesc = 'original_title.desc',
    vote_averageAsc = 'vote_average.asc',
    vote_averageDesc = 'vote_average.desc',
    vote_countAsc = 'vote_count.asc',
    vote_countDesc = 'vote_count.desc',
}

export enum DiscoverTVSortBy {
    popularityAsc = 'popularity.asc',
    popularityDesc = 'popularity.desc',
    vote_averageAsc = 'vote_average.asc',
    vote_averageDesc = 'vote_average.desc',
}

registerEnumType(Country, {
    name: 'Country', // this one is mandatory
    description: 'List of countries', // this one is optional
});

registerEnumType(DiscoverMovieSortBy, {
    name: 'DiscoverMovieSortBy', // this one is mandatory
    description: 'Sort by', // this one is optional
});

registerEnumType(DiscoverTVSortBy, {
    name: 'DiscoverTVSortBy', // this one is mandatory
    description: 'Sort by', // this one is optional
});

@ArgsType()
export class DiscoverMovieParams {
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
    @Field(() => DiscoverMovieSortBy, { nullable: true })
    'sort_by': DiscoverMovieSortBy;
    @Field(() => Country, { nullable: true })
    'certification_country': Country;
    @Field({ nullable: true })
    'certification': string;
    @Field({ nullable: true })
    'certificationLte': string;
    @Field({ nullable: true })
    'certificationGte': string;
    @Field({ nullable: true })
    'include_adult': boolean;
    @Field({ nullable: true })
    'include_video': boolean;
    @Field(() => Int, { nullable: true })
    'page': number;
    @Field(() => Int, { nullable: true })
    'primary_release_year': number;
    @Field(() => Int, { nullable: true })
    'primary_release_dateGte': string;
    @Field(() => Int, { nullable: true })
    'primary_release_dateLte': string;
    @Field(() => Int, { nullable: true })
    'year': string;
    @Field({ nullable: true })
    'with_genres': string;
    @Field(() => [Int], { nullable: true })
    // 'Premiere';
    // 'Theatrical'(limited);
    // 'Theatrical';
    // 'Digital';
    // 'Physical';
    // 'TV';
    'with_release_type': number[] = [4, 5, 6];
}
@ObjectType()
export class DiscoverMovieResults {
    @Field(() => String, { nullable: true })
    poster_path: string | null;
    @Field({ nullable: true })
    adult: boolean;
    @Field({ nullable: true })
    overview: string;
    @Field({ nullable: true })
    release_date: string;
    @Field(() => [Int], { nullable: true })
    genre_ids: number[];
    @Field(() => Int, { nullable: false })
    id: number;
    @Field({ nullable: true })
    original_title: string;
    @Field({ nullable: true })
    original_language: string;
    @Field({ nullable: true })
    title: string;
    @Field(() => String, { nullable: true })
    backdrop_path: string;
    @Field(() => Float, { nullable: true })
    popularity: number;
    @Field(() => Int, { nullable: true })
    vote_count: number;
    @Field({ nullable: true })
    video: boolean;
    @Field({ nullable: true })
    vote_average: string;
}
@ObjectType()
export class DiscoverMovie {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    page: number;
    @Field(() => [DiscoverMovieResults])
    results: DiscoverMovieResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}

@ArgsType()
export class DiscoverTVParams {
    @Field(() => DiscoverTVSortBy, { nullable: true })
    'sort_by': DiscoverTVSortBy;
    @Field(() => Int, { nullable: true })
    'page': number;
    @Field({ nullable: true })
    'with_genres': string;
    @Field(() => String, { nullable: true })
    'watch_region': string = 'USA';
    @Field(() => [String], { nullable: true })
    'with_status': string[] = ['2', '5'];
}
@ObjectType()
export class DiscoverTV {
    @Field(() => Int)
    page: number;
    @Field(() => [DiscoverTVResults])
    results?: DiscoverTVResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
@ObjectType()
export class DiscoverTVResults {
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => Int)
    id: number;
    @Field(() => String, { nullable: true })
    backdrop_path?: string;
    @Field(() => Int)
    vote_average: number;
    @Field()
    overview: string;
    @Field()
    first_air_date: string;
    @Field(() => String, { nullable: true })
    origin_country?: string[] | null;
    @Field(() => Int)
    genre_ids?: number[] | null;
    @Field()
    original_language: string;
    @Field(() => Int)
    vote_count: number;
    @Field()
    name: string;
    @Field()
    original_name: string;
}

@ArgsType()
export class SearchParams {
    @Field({ nullable: false })
    'query': string;
    @Field(() => Boolean, { nullable: true })
    'include_adult': boolean = false;
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
}
@ObjectType()
export class SearchResults {
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Int, { nullable: false })
    id: number;
    @Field({ nullable: false })
    media_type: string;
    @Field({ nullable: true })
    vote_average: string;
    @Field(() => Float, { nullable: true })
    popularity: number;
    @Field(() => Int, { nullable: true })
    vote_count: number;
    @Field(() => String, { nullable: true })
    title: string | null;
    @Field(() => String, { nullable: true })
    name: string | null;
    @Field(() => [Int], { nullable: true })
    genre_ids: number[];
}
@ObjectType()
export class Search {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    page: number;
    @Field(() => [SearchResults])
    results: SearchResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}

@ObjectType()
export class VidsrcMovies {
    @Field(() => [VidsrcMovieResult], { nullable: true })
    result?: VidsrcMovieResult[] | null;
    @Field(() => Int)
    pages: number;
}
@ObjectType()
export class VidsrcMovieResult {
    @Field()
    imdb_id: string;
    @Field()
    title: string;
    @Field()
    quality: string;
    @Field()
    embed_url: string;
}
@ArgsType()
export class VidsrcLastesVideosParams {
    @Field(() => Int, { nullable: true })
    page: number = 1;
}

@ObjectType()
export class VidsrcTV {
    @Field(() => [VidsrcTVResult], { nullable: true })
    result?: VidsrcTVResult[] | null;
    @Field(() => Int)
    pages: number;
}
@ObjectType()
export class VidsrcTVResult {
    @Field()
    show_imdb_id: string;
    @Field()
    show_title: string;
    @Field()
    season: string;
    @Field()
    episode: string;
    @Field()
    embed_url: string;
}
@ArgsType()
export class FindMediaByIMDBParams {
    @Field()
    imdb_id: string;
}

@ObjectType()
export class FindMediaByIMDB {
    @Field(() => [FindByIMDBMovieResults], { nullable: true })
    movie_results?: FindByIMDBMovieResults[] | null;
    @Field(() => [FindByIMDBTVResults], { nullable: true })
    tv_results?: FindByIMDBTVResults[] | null;
    // Dont need type since I am not returning them
    tv_episode_results?: null[] | null;
    tv_season_results?: null[] | null;
    person_results?: null[] | null;
}
@ObjectType()
export class FindByIMDBMovieResults {
    @Field(() => Float)
    vote_average: number;
    @Field(() => [Int], { nullable: true })
    genre_ids?: number[] | null;
    @Field(() => Int)
    vote_count: number;
    @Field()
    original_language: string;
    @Field()
    original_title: string;
    @Field(() => String, { nullable: true })
    poster_path: string | null;
    @Field(() => Boolean)
    video: boolean;
    @Field()
    overview: string;
    @Field()
    release_date: string;
    @Field()
    title: string;
    @Field()
    id: number;
    @Field(() => Boolean)
    adult: boolean;
    @Field(() => String, { nullable: true })
    backdrop_path: string;
    @Field(() => Float)
    popularity: number;
}
@ObjectType()
export class FindByIMDBTVResults {
    @Field()
    original_language: string;
    @Field()
    first_air_date: string;
    @Field(() => String, { nullable: true })
    poster_path: string | null;
    @Field(() => Float)
    vote_average: number;
    @Field()
    overview: string;
    @Field(() => Int)
    vote_count: number;
    @Field()
    name: string;
    @Field()
    original_name: string;
    @Field(() => String, { nullable: true })
    backdrop_path: string;
    @Field(() => [String], { nullable: true })
    origin_country?: string[] | null;
    @Field(() => [Int], { nullable: true })
    genre_ids?: number[] | null;
    @Field(() => Int)
    id: number;
    @Field(() => Float)
    popularity: number;
}

@ArgsType()
export class FindMovieByTMDBParams {
    @Field()
    movie_id: string;
}
@ObjectType()
export class FindMovieByTMDB {
    @Field(() => Boolean)
    adult: boolean;
    @Field()
    backdrop_path: string;
    belongs_to_collection?: null;
    @Field(() => Int)
    budget: number;
    @Field(() => [GenresEntity], { nullable: true })
    genres?: GenresEntity[] | null;
    @Field()
    homepage: string;
    @Field(() => Int)
    id: number;
    @Field()
    imdb_id: string;
    @Field()
    original_language: string;
    @Field()
    original_title: string;
    @Field()
    overview: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => String, { nullable: true })
    poster_path?: string;
    @Field(() => [ProductionCompaniesEntity], { nullable: true })
    production_companies?: ProductionCompaniesEntity[] | null;
    @Field(() => [ProductionCountriesEntity], { nullable: true })
    production_countries?: ProductionCountriesEntity[] | null;
    @Field()
    release_date: string;
    @Field(() => Int)
    revenue: number;
    @Field(() => Int)
    runtime: number;
    spoken_languages?: SpokenLanguagesEntity[] | null;
    @Field()
    status: string;
    @Field()
    tagline: string;
    @Field()
    title: string;
    video: boolean;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
}
@ObjectType()
export class GenresEntity {
    @Field(() => Int)
    id: number;
    @Field()
    name: string;
}
@ObjectType()
export class ProductionCompaniesEntity {
    @Field(() => Int)
    id: number;
    @Field(() => String, { nullable: true })
    logo_path?: string | null;
    @Field()
    name: string;
    @Field()
    origin_country: string;
}
@ObjectType()
export class ProductionCountriesEntity {
    @Field()
    iso_3166_1: string;
    @Field()
    name: string;
}
@ObjectType()
export class SpokenLanguagesEntity {
    @Field()
    iso_639_1: string;
    @Field()
    name: string;
}
