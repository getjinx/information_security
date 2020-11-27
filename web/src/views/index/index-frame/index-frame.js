export default {
    data() {
        return {
            assetShow: true,
            analysisShow: true,
        }
    },
    methods: {
        changeShow(){
            this.assetShow = localStorage.assetShow == "true" ? true : false;
            this.analysisShow= (localStorage.pass1 == "true" && localStorage.pass2 == "true" && localStorage.pass3 == "true" &&
            localStorage.pass4 == "true" && localStorage.pass5 == "true") ? true : false;
        }
    },
    mounted() {
        this.assetShow = true;
        this.analysisShow = true;
        localStorage.analysisShow = "false";
        localStorage.assetShow = "false";
        localStorage.pass1 = "false";
        localStorage.pass2 = "false";
        localStorage.pass3 = "false";
        localStorage.pass4 = "false";
        localStorage.pass5 = "false";
    }
}