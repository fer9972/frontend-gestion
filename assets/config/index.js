let url = "http://127.0.0.1:3001/"

if(process.env.NODE_ENV=="production"){
    url = "https://gestion-publicacion-web.herokuapp.com/"
}else{
    url = "http://127.0.0.1:3001/"
}

const config = {
    url_api: url
}

module.exports = config;


