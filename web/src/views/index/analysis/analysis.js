export default {
    data() {
        return {
            chartData: [],
            rjzc: [],
            yjzc: [],
            rjdata: [],
            yjdata: [],
            yjAverage: 0,
            rjAverage: 0,
            rjThreaten: [],
            yjThreaten: [],
            myChart1: null,
            myChart2: null,
            option1: null,
            option2: null,
        }
    },
    watch: {
        chartData: {
            deep: true,
            handler() {
                if (this.myChart2) {
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
                                    { value: this.generate(), name: '资产风险等级' },
                                    { value: this.generate(), name: '威胁风险等级' },
                                    { value: this.generate(), name: '脆弱性风险等级' },
                                    { value: this.generate(), name: '综合风险等级' }
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
                data: [this.generate(), this.generate(), this.generate(), this.generate(), this.generate(), this.generate(), this.generate()],
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
                data: ['保密性等级', '可用性等级', '脆弱性等级', '重要性等级']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: this.generate(), name: '保密性等级' },
                        { value: this.generate(), name: '可用性等级' },
                        { value: this.generate(), name: '脆弱性等级' },
                        { value: this.generate(), name: '重要性等级' }
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
        async getData() {
            const id = localStorage.objectId;
            const rjres = await this.$http.get(`/applied/${id}`);
            this.rjdata = rjres.data.data;
            const yjres = await this.$http.get(`/hardware/${id}`);
            this.yjdata = yjres.data.data;
            console.log(this.yjdata);
            this.rjzc = this.rjdata.map(v => {
                return { ...v, averageLevel: (v.level || 0 + v.secretLevel || 0 + v.usefulLevel || 0 + v.fragileLevel || 0) / 4 }
            });
            this.yjzc = this.yjdata.map(v => {
                return {...v, averageLevel: (v.level||0 + v.secretLevel||0 + v.usefulLevel||0 + v.fragileLevel||0) / 4}
            });
            this.rjThreaten = this.rjdata.filter(v => v.threatenDescription)
        },
        generate() {
            return (Math.floor(Math.random() * 1000) / 10) % 5;
        }
    },
}