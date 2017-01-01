export default {

    applicationPort : process.env.PORT || 10010,
    mongoConnection : process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/mailord-api'

}