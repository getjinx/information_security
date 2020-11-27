export default {
    data() {
        return {
            tableData: [],
            dialogVisible: false,
            deleteVisiable: false,
            id: 0,
            assetId: 0,
            newName: "",
            newDes: "",
            newLevel: 1,
            newDepart: "",
            assetInfo:[],
            rjgl:[],
        }
    },
    watch: {
        assetId() {
            this.assetInfo.some( item => {
                if(item.id == this.assetId)
                {
                    this.newName = item.assetName;
                }
            });
        },
        tableData() {
            localStorage.rjwx = JSON.stringify(this.tableData);
            if(this.tableData.length != 0)
            {
                localStorage.pass4 = "true";
            }
            else
            {
                localStorage.pass4 = "false";
            }
        }
    },
    async mounted() {
        this.getData();
    },
    methods: {
        checkDataPass() {
            if(this.newName == "" || this.newDepart == "" || this.newDes == "")
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
        async change(row){  
            this.dialogVisible = true;
            this.id = row._id;
            this.newName = row.assetName;
            this.newDepart = row.depart;
            this.newDes = row.threatenDescription;
            this.newLevel = row.level;
        },
        check(row){
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
                assetName: this.newName,
                threatenDescription: this.newDes,
                depart: this.newDepart,
                level: this.newLevel,
                objectId: localStorage.objectId
            }
            !this.id ? await this.$http.post("/applied", newObj) : await this.$http.post(`/applied/${this.id}`, newObj); 
            this.dialogVisible = false;
            this.$message({
                type:"success",
                message: this.id ? "修改成功!":"添加成功!",
            });
            this.id = 0;
            this.assetId = 0;
            this.newName = "";
            this.newDes = "";
            this.getData();
        }
    },
}