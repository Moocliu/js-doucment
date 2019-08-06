- **方案一：利用while循环**



```
function factorial(num){
    var result = 1;
    while(num){
        result *= num;
        num--;
    }
    return result;
}复制代码
```



- **方案二：使用递归**



```
function factorial(num){
    if(num <= 0){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
```


 链接：https://juejin.im/post/5c7f5923f265da2dd218f195来源： 