var http = require("http");
var fs = require("fs");

// 读写
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//     fs.writeFile("1111.txt","我是content","utf-8",(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("写入成功")
//         fs.readFile("1111.txt","utf-8",(err,data)=>{
//             if(err){
//                 throw err
//             }
//             console.log(data.toString())
//             res.end(data);
//         })
//     })
// }).listen(3000)

//目录
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
    // 创建
    // fs.mkdir("./ccc",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log("创建成功")
    //     res.end();
    // })

    //删除
    // fs.rmdir("./ccc",(err)=>{
    //     if(err) throw err
    //     console.log("删除成功")
    //     res.end();
    // })

    // 修改文件名称
    // fs.rename("1111.txt","1234.txt",(err)=>{
    //     if(err) throw err;
    //     console.log("改名成功");
    //     res.end();
    // })

    //删除文件
    // fs.unlink("1234.txt",(err)=>{
    //     if(err) throw err;
    //     console.log("删除成功");
    //     res.end();
    // })

    //判断某个文件是否存在，如若存在没有操作，不存在则创建一个
    // fs.exists("./xxx", (exists) => {
    //     if (exists) {
    //         console.log("该文件已存在")
    //     } else {
    //         fs.mkdir("./xxx", (err) => {
    //             if (err)  throw err
    //             console.log("创建成功")
    //         })
    //     }
    //     res.end();
    // })

    //读取文件夹信息
    // fs.readdir("./xxx",(err,data)=>{
    //     if(err) throw err
    //     console.log(data);
    //     res.end()
    // })

    //判断是文件还是文件夹
    fs.stat("./xxx/a",(err,stats)=>{
        if(err) throw err
        if(stats.isDirectory()) console.log('文件夹')
        if(stats.isFile()) console.log("文件")
        // console.log(stats.isDirectory()) //文件夹
        // console.log(stats.isFile())      //文件
        res.end();
    })

}).listen(3000)