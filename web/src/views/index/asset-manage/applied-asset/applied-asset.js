export default {
    data() {
        return {
            tableData: [],
            dialogVisible: false,
            deleteVisiable: false,
            id: 0,
            newName: "",
            newDes: "",
            newHint: "",
            newDepart: "",
            newLevel: 1,
            departs: [{
                label:"信息中心",
                value:"信息中心",
            }],
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        checkDataPass() {
            if(this.newName == "")
            {
                return false;
            }
            return true;
        },
        async getData() {
            const id = localStorage.objectId;
            const res = await this.$http.get(`/applied/${id}`);
            this.tableData = res.data.data;
            this.$emit("changeShow");
        },
        async change(row) {  
            this.dialogVisible = true;
            this.id = row._id;
            this.newName = row.assetName;
            this.newDepart = row.depart;
            this.newDes = row.rangeDescription;
            this.newLevel = row.level;
            this.newHint = row.remark;
        },
        check(row) {
            this.id = row._id;
            this.deleteVisiable = true;
        },
        async remove() {
            await this.$http.post("/removeApplied",{ _id: this.id});
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
                id: this.id,
                assetName: this.newName,
                rangeDescription: this.newDes,
                level: this.newLevel,
                remark: this.newHint,
                depart: this.newDepart,
                objectId: localStorage.objectId
            }
            console.log(newObj);
            !this.id ? await this.$http.post("/applied", newObj) : await this.$http.post(`/applied/${this.id}`, newObj); 
            this.dialogVisible = false;
            this.$message({
                type:"success",
                message: this.id ? "修改成功!":"添加成功!",
            });
            this.id = 0;
            this.newName = "";
            this.newDepart = "";
            this.newDes = "";
            this.newLevel = 1;
            this.newHint = "";
            this.getData();
        }
    },
}