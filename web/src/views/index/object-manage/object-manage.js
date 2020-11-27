export default {
    data() {
        return {
            tableData: [],
            dialogVisible: false,
            deleteVisiable: false,
            id:0,
            newName: "",
            newDes: "",
            header:{
                enctype:"multipart/form-data"
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        success(){
            this.$message({
                type:"success",
                message:"上传成功!"
            });
        },
        fail() {
            this.$error("上传失败!");
        },
        download() {
            console.log("download");
            this.$http.get("");
        },
        checkDataPass() {
            if(this.newName == "" || this.newDes =="")
            {
                return false;
            }
            return true;
        },
        async getData() {
            const res = await this.$http.get("object");
            this.tableData = res.data.data;
        },
        async change(row) {  
            this.dialogVisible = true;
            this.newName = row.objectName;
            this.newDes = row.objectDescription;
            this.id = row._id;
        },
        check(row) {
            this.id = row._id;
            this.deleteVisiable = true;
        },
        go(row) {
            localStorage.objectId = row._id;
            this.$router.push("/index/asset-manage/hardware-asset");
            localStorage.assetShow = "true";
            this.$emit("changeShow");
        },
        async remove() {
            await this.$http.post("/removeObject",{_id: this.id});
            this.deleteVisiable = false;
            this.$message({
                type: "success",
                message: "删除成功！"
            });
            this.id = 0;
            this.getData();
        },
        async add(){
            if(!this.checkDataPass())
            {
                this.$message({
                    type: "warning",
                    message: "存在必填项数据为空!"
                });
                return ;
            }
            const newObj = {
                objectName: this.newName,
                objectDescription: this.newDes,
            }
            !this.id ? await this.$http.post("/object",newObj)
            : await this.$http.post(`/object/${this.id}`, newObj); 
            this.dialogVisible = false;
            this.$message({
                type:"success",
                message: this.id ? "修改成功!":"添加成功!",
            });
            this.newName = "";
            this.newDes = "";
            this.getData();
        }
    },
}