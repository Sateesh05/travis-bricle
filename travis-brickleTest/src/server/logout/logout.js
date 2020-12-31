let server_token = require("../config/token");
let auth = require("../config/aouth");
let logout = require("express").Router().get("/",[auth],(req,res)=>{
    console.log('logoutserver')
    server_token.token = "";
    res.send({"logout":"success"});
});
module.exports = logout;