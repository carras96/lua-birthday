export const reduceString = (str) => {
    if (!str) {
        return ''
    }
    return str.slice(0, 12) + '...' + str.slice(str.length - 4, str.length);
}