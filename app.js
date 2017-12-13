/**
 * @brief 使用 Nodejs 建立簡單 Web 應用程式
 * 
 * ＠author : Brown Huang
 */

//引用 express 套件
const express = require('express')

//取得環境變數的 Port  
const PORT = process.env.PORT || 3000

//建立 express 物件
const app = express()

//路徑 (ex : 127.0.0.1:3000/)
app.get('/', function(req, res){
    let objData = {name:"黃柏融",email:"b9602104@gmail.com"};
    res.send(JSON.stringify(objData));
})

//Web 監聽的 Port 
app.listen(PORT, function(){
    console.log('Example app listening on port 3000!')
})