if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb+srv://ashish123:ashish123@vidjot-prod-4av2i.mongodb.net/test?retryWrites=true'}
} else {
    module.exports = {mongoURI: 'mongodb://admin:password@localhost:27017/vidjot-dev'}
}