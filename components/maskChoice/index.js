var maskChoiceAnimation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease',
    delay: 0
});

var contentAnimation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease',
    delay: 0
});

Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        // innerText: {
        //     type: String,
        //     value: 'default value',
        // }
    },
    data: {
        current: 1,
        windowHeight: '',
        showTicket: false,
        ticketList: [
            {
                proUrl: "./img/1.png",
                proPrice: "$1",
                selected: false,
                unique: '1'
            },
            {
                proUrl: "./img/2.png",
                proPrice: "$2",
                selected: true,
                unique: '2'
            },
            {
                proUrl: "./img/3.png",
                proPrice: "$3",
                selected: false,
                unique: '3'
            },
            {
                proUrl: "./img/4.png",
                proPrice: "$4",
                selected: false,
                unique: '4'
            }
        ],
        maskChoiceAnimationData: {},
        contentAnimationData: {}
    },
    attached: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                var isIphoneX = false;
                //判断是否为iphoneX
                if (res.model.toLowerCase().replace(/(\s+)|(\s+)/g, "").indexOf("iphonex") == 0) {
                    isIphoneX = true;
                }
                that.setData({
                    windowHeight: res.windowHeight,
                    isIphoneX: isIphoneX
                })
            }
        })
    },
    methods: {
        onSwiperChange: function (e) {
            var current = e.detail.current;
            var { ticketList } = this.data;

            ticketList.map((v, index) => {
                index !== current && (ticketList[index].selected = false);
                index === current && (ticketList[index].selected = true);
            })

            this.setData({
                ticketList: ticketList
            })
        },
        showTickets: function () {
            var that = this;
            maskChoiceAnimation.opacity(.5).step();
            contentAnimation.scale(1).step();

            that.setData({
                showTicket: true
            }, () => {
                that.setData({
                    maskChoiceAnimationData: maskChoiceAnimation.export(),
                    contentAnimationData: contentAnimation.export()
                })
            })
            
        },
        //实战中不用 只作为展示DEMO
        // changeShow: function () {
        //     var that = this;
        //     this.setData({
        //         showTicket: !this.data.showTicket
        //     }, () => {
        //         if(that.data.showTicket === true) {
        //             maskChoiceAnimation.scale(1).step();
        //             that.setData({
        //                 maskChoiceAnimationData: maskChoiceAnimation.export()
        //             })
        //         }else{
                    
        //         }
        //     })
        // },
        confirmChoice: function () {
            this.cancelChoice();
        },
        cancelChoice: function () {
            var that = this;
            that.setData({
                showTicket: false
            }, () => {
                maskChoiceAnimation.opacity(0).step();
                contentAnimation.scale(0).step();
                that.setData({
                    maskChoiceAnimationData: maskChoiceAnimation.export(),
                    contentAnimationData: contentAnimation.export()
                })
            })
        }
    }
})