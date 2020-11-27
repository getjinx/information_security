import hardwareAsset from "../views/index/threaten-manage/hardware-asset/hardware-asset.vue";
import appliedAsset from "../views/index/threaten-manage/applied-asset/applied-asset.vue";
import assetManage from "../views/index/threaten-manage/threaten-manageIndex/threaten-manageIndex.vue";

export default {
    path: "threaten-manage",
    name: "threaten-manage",
    meta: { title:"威胁扫描与管理" },
    component: assetManage,
    children: [
        {
            path: "hardware-asset",
            name: "hardware-asset",
            meta: { title:"威胁管理-硬件资产" },
            component: hardwareAsset
        },
        {
            path: "applied-asset",
            name: "applied-asset",
            meta: { title:"威胁管理-文档和数据" },
            component: appliedAsset
        },
    ]
}