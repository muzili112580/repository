var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if (req.url == "/favicon.ico") {
        return
    }
    fs.readdir("./xxx",(err,data)=>{
        if(err) throw err;

        (function item(i){
            fs.stat("./xxx/"+data[i],(err,stats)=>{
                if(err) throw err
                if(stats.isDirectory()) console.log(data[i])
                if(i<data.length-1){
                    i++;
                    item(i);
                }
                res.end();
            })
            // console.log(i)
        })(0)

        // for(let i=0;i<data.length;i++){
        //     fs.stat("./xxx/"+data[i],(err,stats)=>{
        //         if(err) throw err
        //         if(stats.isDirectory()) console.log(data[i])
        //         res.end();
        //     })
        // }
        res.end()
    })
}).listen(3000)