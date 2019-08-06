Nginx 是一种反方向代理的服务器



#### 解决跨域

  在众多的解决跨域方式中， 都不可避免的都需要服务端进行支持， 使用Nginx可以纯前端解决请求跨域问题。 特别是在前后端分离调试时， 经常需要在本地起前端工程， 接口希望拉取服务端的实际数据而不是本地的mock。 而如果本地程序直接访问远程接口， 肯定会遇到跨域问题。现在前端成熟的做法，一般是把node proxy server集成进来。事实上，用Nginx同样可以解决问题，甚至可以应用于线上 .
###### 请求跨域，这里约定代理请求url path是以/apis/开头

    location ^~/apis/ {
        # 这里重写了请求，将正则匹配中的第一个()中$1的path，拼接到真正的请求后面，并用break停止后续匹配
        rewrite ^/apis/(.*)$ /$1 break;
        proxy_pass https://www.kaola.com/;
    }  

---------------------
 

#### 适配PC与移动环境

现在很多网站都存在PC站和H5站两个站点，因此根据用户的浏览环境自动切换站点是很常见的需求。Nginx可以通过内置变量$http_user_agent，获取到请求客户端的userAgent，从而知道用户处于移动端还是PC，进而控制重定向到H5站还是PC站, pc端Nginx配置如下：

    location / {
        # 移动、pc设备适配
        if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
            set $mobile_request '1';
        }
        if ($mobile_request = '1') {
            rewrite ^.+ http://mysite-base-H5.com;
        }
    }  
 

#### 合并请求

#### 图片处理

####  
 