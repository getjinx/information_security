module.exports = app => {
    const Router = require("koa-router")
    const router = new Router()
    const bodyParser = require("koa-bodyparser")
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods())
    const Applied = require("../db/appliedModel.js")
    router.get('/applied/:objectId', async ctx => {
        const { params } = ctx;
        const data = await Applied.find(params);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data
        }
    })
    router.post('/applied', async ctx => {
        const { body } = ctx.request;
        const data = await Applied.create(body);
        ctx.body = {
            message: "添加成功",
            status: 200,
            data
        }
    })
    router.post('/applied/:_id', async ctx => {
        const { body } = ctx.request;
        const { params } = ctx;
        const data = await Applied.findOneAndUpdate(params, body);
        ctx.body = { 
            message: "修改成功",
            status: 200,
            data
        }
    })
    router.post('/removeApplied', async ctx => {
        const { body } = ctx.request;
        const data = await Applied.findOneAndDelete(body);
        ctx.body = {
            message: "删除成功",
            status: 200,
            data
        }
    })
}