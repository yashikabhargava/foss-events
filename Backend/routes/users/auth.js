const auth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401).send({
            msg: "Not authorised"
        });
    }
}

module.exports = auth