//加载http模块
var http = require("http");
var url = require("url")
http.createServer((req, res) => {
    // console.log(req)
    // //req 请求
    // //res 响应
    // console.log(res)
    // console.log(arguments)
    // //            状态码
    // res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // //结束响应
    // //listen 监听 端口
    if (req.url == "/favicon.ico") {
        return
    }
    // console.log(req.url)
    //           字符串         true 转化为json对象
    // var query = url.parse(req.url,true);
    // console.log(query)
    // console.log(query.name)
    // console.log(query.age)


    var format = url.format({
        host: "http://localhost:5000",
        port: 3000,
        hostname: null,
        hash: null,
        search: '?name=ttt&age=111',
        query: { name: 'ttt', age: '111' },
        pathname: '/',
        path: '/?name=ttt&age=111',
        href: "http://localhost:5000"
    });
    console.log(format)
    res.end("123123")
}).listen(5000, () => {
    console.log('服务端已响应')
})



// 使用fs.read和fs.write读写文件
// 1.fs.read()

// fs.open(path,flags,[mode],callback)方法用于打开文件，以便fs.read()读取。
// 参数说明：
//     path 文件路径
//     flags打开文件的方式
//     [mode] 是文件的权限（可行参数，默认值是0666）
//     callback 回调函数
// flags值及说明如下
// r ：读取文件，文件不存在时报错；
// r+ ：读取并写入文件，文件不存在时报错；
// rs ：以同步方式读取文件，文件不存在时报错；
// rs+ ：以同步方式读取并写入文件，文件不存在时报错；
// w ：写入文件，文件不存在则创建，存在则清空；
// wx ：和w一样，但是文件存在时会报错；
// w+ ：读取并写入文件，文件不存在则创建，存在则清空；
// wx+ ：和w+一样，但是文件存在时会报错；
// a ：以追加方式写入文件，文件不存在则创建；
// ax ：和a一样，但是文件存在时会报错；
// a+ ：读取并追加写入文件，文件不存在则创建；
// ax+ ：和a+一样，但是文件存在时会报错。

// fs.close(fd,[callback])
// 用于关闭文件，fd是所打开文件的文件描述符。
// fs.read(fd,buffer,offset,length,position,callback)接收6个参数。
// 参数说明：
//     fd 文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数。
//     buffer 是存放读取到的数据的Buffer对象。
//     offset 指定 向buffer中存放数据的起始位置。
//     length 指定 读取文件中数据的字节数。
//     position 指定 在文件中读取文件内容的起始位置。
//     callback 回调函数，参数如下
//         err 用于抛出异常
//         bytesRead 从文件中读取内容的实际字节数。
//         buffer 被读取的缓存区对象。



// 2.fs.write()

// fs.read(fd,buffer,offset,length[,position],callback(err,bytesWritten,buffer))接收6个参数。
// 参数说明：
//     fd 文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数。
//     buffer 是存放 将被写入的数据，buffer尺寸的大小设置最好是8的倍数，效率较高。
//     offset  buffer写入的偏移量。
//     length (integer)指定 写入文件中数据的字节数。
//     position (integer) 指定 在写入文件内容的起始位置。
//     callback 回调函数，参数如下
//         err 用于抛出异常
//         bytesWritten从文件中读取内容的实际字节数。
//         buffer 被读取的缓存区对象。



// exports和module.exports的区别——学习笔记
// 一开始，exports和module.exports都指向空对象(同一内存块)，exports是引用 module.exports的值。
// module.exports 被改变的时候，exports不会被改变，而模块导出的时候，真正导出的执行是module.exports，
// 而不是exports

var s = require("./log");
s.log("hello");

exports.log = function (str) {
    console.log(str);
}

module.exports = function (str) {
    console.log(str);
}

// 上述两种用法都没问题，但如果这样使用

exports = function (str) {
    console.log(str);
}

// 前面的例子只是给 exports指向的对象添加属性，只是对 exports 指向的内存做了修改，内存指向并未发生改变。
// 而上例则是对exports指向的内存进行了覆盖，使exports指向了一块新的内存，这样，
// exports和module.exports指向的内存并不是同一块，exports和module.exports并无任何关系。
// exports指向的内存有了变化，而module.exports指向的内存并无变化，仍为空对象{}。
