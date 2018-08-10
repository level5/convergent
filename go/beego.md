# beego

## 工具

## Router

#### 基本用法

```go

beego.Get('/', func(ctx *context.Context) {
   ctx.Output.Body([]byte("hello world"))
})

beego.Post("/alice",func(ctx *context.Context){
     ctx.Output.Body([]byte("bob"))
})

beego.Any("/foo",func(ctx *context.Context){
     ctx.Output.Body([]byte("bar"))
})


// router
beego.Router("/", &controllers.MainController{})
beego.Router("/admin", &admin.UserController{})
beego.Router("/admin/index", &admin.ArticleController{})
beego.Router("/admin/addpkg", &admin.AddController{})


// regex router

beego.Router("/api/?:id", &controllers.RController{})

beego.Router("/api/:id", &controllers.RController{})


// custom method
beego.Router("/api/list",&RestController{},"*:ListFood")
beego.Router("/api/create",&RestController{},"post:CreateFood")
beego.Router("/api/update",&RestController{},"put:UpdateFood")
beego.Router("/api/delete",&RestController{},"delete:DeleteFood")


```

#### namespace 我要找的，对应koa的router

```go

// namespace 这个貌似有点用，但是怎么方便的使用呢？

//初始化 namespace
ns :=
beego.NewNamespace("/v1",
    beego.NSCond(func(ctx *context.Context) bool {
        if ctx.Input.Domain() == "api.beego.me" {
            return true
        }
        return false
    }),
    beego.NSBefore(auth),
    beego.NSGet("/notallowed", func(ctx *context.Context) {
        ctx.Output.Body([]byte("notAllowed"))
    }),
    // 这里是我们可以使用的地方
    beego.NSRouter("/version", &AdminController{}, "get:ShowAPIVersion"),
    beego.NSRouter("/changepassword", &UserController{}),
    beego.NSNamespace("/shop",
        beego.NSBefore(sentry),
        beego.NSGet("/:id", func(ctx *context.Context) {
            ctx.Output.Body([]byte("notAllowed"))
        }),
    ),
    beego.NSNamespace("/cms",
        beego.NSInclude(
            &controllers.MainController{},
            &controllers.CMSController{},
            &controllers.BlockController{},
        ),
    ),
)
//注册 namespace
beego.AddNamespace(ns)

```


## Controller

* 如果可以设定`this`的话，说明每个reques都是使用自己的实例吗？

测试了一把，是这样的，如果是这样的，这是为啥？
