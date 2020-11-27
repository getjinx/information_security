module.exports = app => {
    const Router = require("koa-router")
    const router = new Router()
    const bodyParser = require("koa-bodyparser")
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods())
    const Hardware = require("../db/hardwareModel.js")
    router.get('/hardware/:objectId', async ctx => {
        const { params } = ctx;
        const data = await Hardware.find(params);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data
        }
    })
    router.post('/hardware', async ctx => {
        const { body } = ctx.request;
        const data = await Hardware.create(body);
        ctx.body = {
            message: "添加成功",
            status: 200,
            data
        }
    })
    router.post('/hardware/:_id', async ctx => {
        const { body } = ctx.request;
        const { params } = ctx;
        const data = await Hardware.findOneAndUpdate(params, body);
        ctx.body = { 
            message: "修改成功",
            status: 200,
            data
        }
    })
    router.post('/removeHardware', async ctx => {
        const { body } = ctx.request;
        const data = await Hardware.findOneAndDelete(body);
        ctx.body = {
            message: "删除成功",
            status: 200,
            data
        }
    })
}