module.exports = {
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://root:1234@mongo:27017/?authSource=admin',
    token_secret: process.env.TOKEN_SECRET || "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff"
};