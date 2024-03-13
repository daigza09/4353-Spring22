// middleware is just a function that executes during the request cycle

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    res.status(statusCode);

    res.json({
        message: err.message
    })
}

module.exports = {
    errorHandler,
}