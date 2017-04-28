```


 browser                                                                 server
        request /greeting?name=Leon                  发送给template {name: "Leon"}
        ------------------------------------>    ---------------------------------->    
                                                                                      <div> hello ${name} </div>
                                                 <----------------------------------

                                              <div>hello Leon</div>
        <-----------------------------------
        <div>hello Leon</div>        
```


```


 browser                                                                 server
        request /greeting?name=Leon                 forward: index.html
        ------------------------------------>    ---------------------------------->    

                                              <body><script src="index.js"></body>
        <-----------------------------------

        <body><script src="index.js"></body>

        js运行，route到greeting
        <body><div> hello ${name} </div><script src="index.js"></body>

        ajax   /api/greeting?name=Leon
        ------------------------------------->   

        <-------------------------------------
        {name: "Leon", age: "32"}

        <body><div> hello Leon </div><script src="index.js"></body>
```
