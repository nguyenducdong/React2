const article = require('./articleRouter');
const user = require('./userRouter')

module.exports = (router) => {
    user(router)
    article(router)
}