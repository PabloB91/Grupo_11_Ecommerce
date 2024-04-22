function productSeen(req, res, next) {
    if (!req.session.lastSeens) {
        req.session.lastSeens = [];
    } 
    next();
}
module.exports = productSeen ;