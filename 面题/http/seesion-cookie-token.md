https://segmentfault.com/a/1190000017831088

session:

session 存储于服务器，可以理解为一个状态列表，拥有一个唯一识别符号 sessionId，通常存放于 cookie 中。服务器收到 cookie 后解析出 sessionId，再去 session 列表中查找，才能找到相应 session。依赖 cookie

cookie :
cookie 就是浏览器储存在用户电脑上的一小段文本文件。cookie 是纯文本格式，不包含任何可执行的代码
cookie 类似一个令牌，装有 sessionId，存储在客户端，浏览器通常会自动添加



### Token与session的区别

\1. **使用Token,服务端不需要保存状态.** 在session中sessionid 是一个唯一标识的字符串，服务端是根据这个字符串，来查询在服务器端保持的session，这里面才保存着用户的登陆状态。但是token本身就是一种登陆成功凭证，他是在登陆成功后根据某种规则生成的一种信息凭证，他里面本身就保存着用户的登陆状态。服务器端只需要根据定义的规则校验这个token是否合法就行。

\2. **Token不需要借助cookie的.** session-cookie是需要cookie配合的，那么在http代理客户端的选择上就只有浏览器了，因为只有浏览器才会去解析请求响应头里面的cookie,然后每次请求再默认带上该域名下的cookie。但是我们知道http代理客户端不只有浏览器，还有原生APP等等，这个时候cookie是不起作用的，或者浏览器端是可以禁止cookie的(虽然可以，但是这基本上是属于吃饱没事干的人干的事)，但是token 就不一样，他是登陆请求在登陆成功后再请求响应体中返回的信息，客户端在收到响应的时候，可以把他存在本地的cookie,storage，或者内存中，然后再下一次请求的请求头重带上这个token就行了。简单点来说cookie-session机制他限制了客户端的类型，而token验证机制丰富了客户端类型。

\3. 时效性。session-cookie的sessionid实在登陆的时候生成的而且在登出事时一直不变的，在一定程度上安全就会低，而token是可以在一段时间内动态改变的。

\4. 可扩展性。token验证本身是比较灵活的，一是token的解决方案有许多，常用的是JWT,二来我们可以基于token验证机制，专门做一个鉴权服务，用它向多个服务的请求进行统一鉴权


作者：shotCat链接：https://juejin.im/post/5c6e6063f265da2da53ec8f3来源 