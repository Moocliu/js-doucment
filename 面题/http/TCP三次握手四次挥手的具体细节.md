# tcp 三次握手四次挥手

## 面试应该怎么让面试官懂你说的

### 三次握手

第一次握手：客户端给服务器发送一个 SYN 报文 ，此时客户处于 SYN_Send 状态；

第二次握手：服务器收到 SYN 报文后，会答应一个自己的 SYN+ACK(客户端的初始化序列号+1)，此时服务器处于 SYN_REVD 的状态，；

第三次握手：客户端收到 SYN+ACK 报文之后，客户端处于 establised,会回应一个 ACK 报文，服务器收到 ACK 后，也处于 establised 状态



### 四次挥手

第一次挥手：客户端发送一个 FIN 报文，报文会指定一个序列号，此时客户端处于 FIN_WAIT1 状态。

第二次挥手：服务器收到 FIN 之后，会发送一个 ACK 报文，并且把客户端的序列号值+1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务器处于 CLOSE_WAIT 的状态

第三次挥手：如果服务器也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号值，此时服务器处于 LAST_ACK 的状态

第四次挥手：客户端收到 FIN 报文，一样发送一个 ACK 报文作为应答，且把服务端的序列号值+1 作为自己的 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态，需要过一阵服务端收到自己的 ACK 报文后进入 CLOSED 状态

#### 注意 这里的 TIME_WAIT

为什么客户端发送 ACKs 报文后不直接关闭，而是要等一阵才关闭，值是确保服务器是否已经收到了我们的 ACK 报文， 如果没有收到，付钱会重新发送 FIN 报文给客户端，客户端再次收到 FIN 报文之后，就知道之前的 ACK 报文丢失了,再次发送 ACK 报文

 ![](http://user-gold-cdn.xitu.io/2019/3/28/169c39cc18e7592a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 为什么是3次握手 4次挥手？

##### 为啥是进行4次挥手而不是3次挥手

原因 ：是tcp要支持半关闭连接

一开始建立的连接是全双工， A<==>B 双方都可以读写，支持半关闭意味着，tcp 支持A和B 双方独立关闭通道，因此会有两次独立的关闭写通道的请求，一次关闭请求（FIN） ，对应一个（ACK）



![](http://upload-images.jianshu.io/upload_images/1814354-ccb3572694a6e96a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/637/format/webp)



### 参考文档：（必看）

https://juejin.im/post/5ccd0dfc6fb9a0324a08bb73

https://juejin.im/post/5b29d2c4e51d4558b80b1d8c

https://www.jianshu.com/p/7d0f91345483