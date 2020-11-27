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
            newDepart: "",
            newDutyMan: "",
            newImportantLevel: 1,
            assetInfo:[],
            yjgl:[],
        }
    },
    watch:{
        assetId() {
            this.assetInfo.some( item => {
                if(item.id == this.assetId)
                {
                    this.newName = item.assetName;
                }
            });
        },
        tableData() {
            localStorage.yjwx = JSON.stringify(this.tableData);
            if(this.tableData.length != 0)
            {
                localStorage.pass3 = "true";
            }
            else
            {
                localStorage.pass3 = "false";
            }
        }
    },
    async mounted() {
        this.getData();
    },
    methods: {
        checkDataPass() {
            if(this.newName == "" || this.newDutyMan == "" || this.newDes =="" || this.newDepart == "" )
            {
                return false;
            }
            return true;
        },
        async getData() {
            const id = localStorage.objectId;
            const res = await this.$http.get(`/hardware/${id}`);
            this.tableData = res.data.data;
            this.$emit("changeShow");
        },
        async change(row) {  
            this.dialogVisible = true;
            this.id = row._id;
            this.newDutyMan = row.dutyMan;
            this.newName = row.assetName;
            this.newDepart = row.depart;
            this.newDes = row.threatenDescription;
            this.newImportantLevel = row.level;
            // this.newWholenessLevel = row.wholenessLelel;
            // this.newUsabilityLevel = row.usabilityLevel;
            // this.newSecurityLevel = row.securityLevel;
        },
        check(row) {
            this.id = row._id;
            this.deleteVisiable = true;
        },
        async remove() {
            await this.$http.post("/removeHardware",{_id : this.id});
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
                dutyMan: this.newDutyMan,
                assetName: this.newName,
                threatenDescription: this.newDes,
                level: this.newImportantLevel,
                depart: this.newDepart,
                objectId: localStorage.objectId
            }
            !this.id ? await this.$http.post("/hardware", newObj) : await this.$http.post(`/hardware/${this.id}`, newObj); 
            this.dialogVisible = false;
            this.$message({
                type:"success",
                message: this.id ? "修改成功!":"添加成功!",
            });
            this.id = 0;
            this.newName = "";
            this.newDepart = "";
            this.newDes = "";
            this.newNum = "";
            this.assetId = 0;
            this.newDutyMan = "";
            this.newLevel = 1;
            this.newHint = "";
            this.getData();
        }
    },
}