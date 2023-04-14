// 封装一个ajax 请求函数
function ajax(options) {
    // 创建XMLHTTPRequest 对象
    const xhr = new XMLHttpRequest();

    // 初始化参数的内容
    options = options || {}  // 如果options 未定义，则设置为空对象
    options.type = (options.type || 'GET').toUpperCase() // 请求类型，默认为GET
    options.dataType = options.dataType || 'json' // 数据类型，默认为JSON
    const params = options.data   // 请求参数

    // 发起请求
    if(options.type === 'GET') {
        xhr.open('GET',options.url + '?' + params,true) //GET 请求将URL添加到末尾
        xhr.send(null) // 发送请求
    } else if(options.type === 'POST') {
        xhr.open('POST',options.url,true) //POST 请求将参数放在请求体中
        xhr.send(params) // 发送请求体
    }

    // 接收请求
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){    // XMLHttpRequest 对象的状态为4，表示请求完成
            let status = xhr.status
            if(status >=200 && status <300) {  // 请求成功
                options.success && options.success(xhr.responseText,xhr.responseXML) //成功回调
            }else { // 请求失败
                options.fail && options.fail(status) // 失败回调
            }
        }  
    }


}









// 使用方法
ajax({
    type: 'post',
    dataType: 'json',
    data: {},
    url: 'https://xxxx',
    success: function(text,xml){//请求成功后的回调函数
        console.log(text)
    },
    fail: function(status){////请求失败后的回调函数
        console.log(status)
    }
})