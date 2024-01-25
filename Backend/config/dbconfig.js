module.exports = {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "pict123",
    DB : "olx_clone",
    dialect : "mysql",
    pool:{
        max:5,  //maximum devices
        min:0,
        acquire : 30000, //time in second for which database required
        idle : 10000
    }
}