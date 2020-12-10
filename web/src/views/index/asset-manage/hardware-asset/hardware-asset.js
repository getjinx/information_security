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
            newSecret: 1,
            newUseful: 1,
            newDutyMan: "",
            newNum: "",
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
            if(this.newName == "" || this.newNum == "" || this.newDutyMan =="" || this.newDes =="")
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
            this.newNum = row.assetNumber;
            this.newName = row.assetName;
            this.newDepart = row.depart;
            this.newDes = row.rangeDescription;
            this.newLevel = row.level;
            this.newHint = row.remark;
            this.newUseful = row.usefulLevel;
            this.newSecret = row.secretLevel;
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
                assetNumber: this.newNum,
                assetName: this.newName,
                rangeDescription: this.newDes,
                level: this.newLevel,
                remark: this.newHint,
                depart: this.newDepart,
                secretLevel: this.newSecret,
                usefulLevel: this.newUseful,
                objectId: localStorage.objectId
            };
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
            this.newDutyMan = "";
            this.newLevel = 1;
            this.newUseful = 1;
            this.newSecret = 1;
            this.newHint = "";
            this.getData();
        }
    },
}