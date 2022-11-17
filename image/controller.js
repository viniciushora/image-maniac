const { StatusCodes } = require('http-status-codes')

const img = async (req, res) => {
    return res.status(StatusCodes.OK).json({"link": "https://picsum.photos/200/300"})
}

module.exports = {
    img,
}
