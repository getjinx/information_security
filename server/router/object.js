module.exports = app => {
    const Router = require("koa-router")
    const router = new Router()
    const bodyParser = require("koa-bodyparser")
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods())
    const objectModel = require("../db/objectModel.js")
    router.get('/object', async ctx => {
        const data = await objectModel.find();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data
        }
    })
    router.post('/object', async ctx => {
        const { body } = ctx.request;
        const data = await objectModel.create(body);
        ctx.body = {
            message: "添加成功",
            status: 200,
            data
        }
    })
    router.post('/object/:_id', async ctx => {
        const { body } = ctx.request;
        const { params } = ctx;
        const data = await objectModel.findOneAndUpdate(params, body);
        ctx.body = { 
            message: "修改成功",
            status: 200,
            data
        }
    })
    router.post('/removeObject', async ctx => {
        const { body } = ctx.request;
        const data = await objectModel.findOneAndDelete(body);
        ctx.body = {
            message: "删除成功",
            status: 200,
            data
        }
    })
}