import hardwareAsset from "../views/index/asset-manage/hardware-asset/hardware-asset.vue";
import appliedAsset from "../views/index/asset-manage/applied-asset/applied-asset.vue";
import assetManage from "../views/index/asset-manage/asset-manageIndex/asset-manageIndex.vue";

export default {
    path: "asset-manage",
    name: "asset-manage",
    meta: { title:"资产管理" },
    component: assetManage,
    children: [
        {
            path: "hardware-asset",
            name: "hardware-asset",
            meta: { title:"资产管理-硬件资产" },
            component: hardwareAsset
        },
        {
            path: "applied-asset",
            name: "applied-asset",
            meta: { title:"资产管理-文档和数据" },
            component: appliedAsset
        },
    ]
}