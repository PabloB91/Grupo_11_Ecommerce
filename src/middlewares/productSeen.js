function productSeen(req, res, next) {
    if (!req.session.lastSeen) {
        req.session.lastSeen = [];
    } 
    next();
}
module.exports = productSeen ;