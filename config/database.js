if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb+srv://ashish:ashish123@cluster0-t585v.mongodb.net/test?retryWrites=true'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}