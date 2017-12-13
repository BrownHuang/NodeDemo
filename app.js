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
    let arrayData = [];
    let name = "黃柏融"
    let email = "b9602104@gmail.com"
    arrayData.push(name);
    arrayData.push(email);

    res.send(JSON.stringify(arrayData));
})

//Web 監聽的 Port 
app.listen(PORT, function(){
    console.log('Example app listening on port 3000!')
})