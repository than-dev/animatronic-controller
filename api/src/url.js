function getUrlParams(url) {
    return url.split('?')[1].split('&').reduce((acc, param) => {
        const paramKeyAndValue = param.split('=')
        acc[paramKeyAndValue[0]] = paramKeyAndValue[1]
        
        return acc
    }, {})
}

function getRawUrl(url) {
    return url.split('?')[0]
}

module.exports = {
    getUrlParams,
    getRawUrl
}