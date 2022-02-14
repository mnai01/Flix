/* eslint-disable no-unused-vars */
import { ArgsType, Field, Float, Int, ObjectType, registerEnumType } from 'type-graphql';

@ObjectType()
export class Genre {
    // it can infer string but not number so we need to specify
    @Field()
    id: string;
    @Field()
    name: string;
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
export enum SortBy {
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

registerEnumType(Country, {
    name: 'Country', // this one is mandatory
    description: 'List of countries', // this one is optional
});

registerEnumType(SortBy, {
    name: 'SortBy', // this one is mandatory
    description: 'Sort by', // this one is optional
});

@ArgsType()
export class DiscoverMovieParams {
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
    @Field(() => SortBy, { nullable: true })
    'sort_by': SortBy;
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
}

@ObjectType()
export class SearchResults {
    @Field({ nullable: true })
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
    @Field({ nullable: true })
    title: string;
    @Field({ nullable: true })
    name: string;
    @Field(() => [Int], { nullable: true })
    genre_ids: number[];
}

@ObjectType()
export class DiscoverMovieResults {
    @Field({ nullable: true })
    poster_path: string;
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
    @Field({ nullable: true })
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
export class SearchParams {
    @Field({ nullable: false })
    'query': string;
    @Field({ nullable: true })
    'include_adult': boolean = false;
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
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
