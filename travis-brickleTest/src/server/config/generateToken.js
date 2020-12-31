//it is used to generate the token based on successful authentication.
//in general,we will generate tokens by using "jwt-simple" module.
//converting readable data to unreadable data with custom password called as token.

let jwt = require("jwt-simple");

let create_token = (data,password)=>{
    return jwt.encode(data,password);
};

module.exports = create_token;


