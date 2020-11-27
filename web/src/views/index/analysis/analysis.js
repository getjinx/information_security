export default {
    data() {
        return {
            chartData:[],
            rjzc:[],
            yjzc:[],
            myChart1:null,
            myChart2:null,
            option1:null,
            option2:null,
        }
    },
    watch: {
        chartData: {
            deep:true,
            handler(){
                if(this.myChart2){
                    this.option2 = {
                        title: {
                            text: '风险评估指数',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['资产风险等级', '威胁风险等级', '脆弱性风险等级', '综合风险等级']
                        },
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    {value: 1, name: '资产风险等级'},
                                    {value: 2, name: '威胁风险等级'},
                                    {value: 3, name: '脆弱性风险等级'},
                                    {value: 4, name: '综合风险等级'}
                                ],
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    this.myChart2.setOption(this.option2);
                }
            },
        }
    },
    mounted() {
        this.myChart1 = this.$echarts.init(document.getElementById('myChart1'));
        this.myChart2 = this.$echarts.init(document.getElementById('myChart2'));
        this.option1 = {
            title: {
                text: '近7次评估平均指数',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [1.3, 2.7, 2.2, 3, 3.2, 2.5, 4.4],
                type: 'line'
            }]
        };
        this.option2 = {
            title: {
                text: '风险评估指数',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['资产风险等级', '威胁风险等级', '脆弱性风险等级', '综合风险等级']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 2, name: '资产风险等级'},
                        {value: 3, name: '威胁风险等级'},
                        {value: 4, name: '脆弱性风险等级'},
                        {value: 3, name: '综合风险等级'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.myChart1.setOption(this.option1);
        this.myChart2.setOption(this.option2);
        this.getData();
    },
    methods: {
        compose() {
            window.print();
        },
        async getData(){
            const id = localStorage.objectId;
            const rjres = await this.$http.get(`/applied/${id}`);
            this.rjzc = rjres.data.data;
            const yjres = await this.$http.get(`/hardware/${id}`);
            this.yjzc = yjres.data.data;
            
        },
    },
}