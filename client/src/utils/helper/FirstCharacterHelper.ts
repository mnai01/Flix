/** First Character uppercase */
export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/** First Character lowercase */
export function uncapitalize(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
