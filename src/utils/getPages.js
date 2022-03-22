import _ from 'lodash';

/**
 * Получить все страницы, расположенные по указанному `urlPath`, 
 * не включая индексную страницу. 
 * Т.е: Все страницы, URL которых начинается с `urlPath`, 
 * исключая страницу, URL которой равен `urlPath`.
 *
 * @example
 * pages => [
 *   {'__metadata.urlPath': '/'},
 *   {'__metadata.urlPath': '/about'},
 *   {'__metadata.urlPath': '/posts'},
 *   {'__metadata.urlPath': '/posts/hello'},
 *   {'__metadata.urlPath': '/posts/world'}
 * ]
 *
 * getPages(pages, /posts')
 * => [
 *   {'__metadata.urlPath': '/posts/hello'},
 *   {'__metadata.urlPath': '/posts/world'}
 * ]
 *
 *
 * @param {Array} pages Массив объектов страниц. Все страницы должны иметь поле '__metadata.urlPath'.
 * @param {string} urlPath url-путь для фильтрации страниц по
 * @return {Array}
 */
export default function getPages(pages, urlPath) {
    urlPath = _.trim(urlPath, '/');
    const urlPathParts = _.split(urlPath, '/');
    return _.filter(pages, (page) => {
        const pageUrlPath = _.trim(_.get(page, '__metadata.urlPath'), '/');
        const pageUrlParts = _.split(pageUrlPath, '/');
        return pageUrlParts.length > urlPathParts.length && _.isEqual(pageUrlParts.slice(0, urlPathParts.length), urlPathParts);
    });
}
