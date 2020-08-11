var vm = new Vue ({
	el: "#app",
	data: {
        products: [
            {
                id: '1',
                name: '文創書刊',
                price: 250,
                content: "手做物品獨一無二，在近年來工業機械化的高度發展下，大家反而開始喜歡手工做的東西，但現實總與理想不同，往往無法實現心目中的樣子，本書帶你一步一步創造出屬於自己的產品。",
                thumb: "img/product1.jpg",
                amount: 0,
                amountShow: 1,
                process: "img/process.png",
                className: 'tab1',
            },
            {
                id: '2',
                name: '打字機造型鍵盤',
                price: 2300,
                content: "外觀以打字機做為參考設計的機械鍵盤，黑色與金色的搭配呈現出一種低調的奢華，具有段落感及優秀的回饋手感，適合打字喜歡聽清脆聲響的使用者。",
                thumb: "img/product2.jpg",
                amount: 0,
                amountShow: 1,
                process: "img/process.png",
                className: 'tab2',
            },
            {
                id: '3',
                name: '乾燥花',
                price: 300,
                content: "清新優雅的乾燥花總是令人賞心悅目，簡潔的配色，淡淡的清香，進口乾燥葉材，可長期保存。適用於母親節、情人節等節日，用最真誠的心意送上最美的花。",
                thumb: "img/product3.jpg",
                amount: 0,
                amountShow: 1,
                process: "img/process.png",
                className: 'tab3',
            },
            {
                id: '4',
                name: '簡易木製餐具組',
                price: 350,
                content: "優質原木材質，精心打磨細膩觸感，木色淡雅好看，野餐居家裝點用餐氣氛，方便攜帶不占位，贈送質感花布外層，質感生活從這裡開始。",
                thumb: "img/product4.jpg",
                amount: 0,
                amountShow: 1,
                process: "img/process.png",
                className: 'tab4',
            },
            {
                id: '5',
                name: '經典手工飾品',
                price: 7500,
                content: "經典手工原創飾品，優質的原料，搭配設計師的巧思，簡單又精緻，整套含有項鍊及戒指，客製化服務，為您的愛人打造專屬回憶。",
                thumb: "img/product5.jpg",
                amount: 0,
                amountShow: 1,
                process: "img/process.png",
                className: 'tab5',
            },
            {
                id: '6',
                name: '質感木製家具組',
                price: 9000,
                content: "造訪木工製作工房，傳遞製作著家具工藝品工匠們的滿滿心意。容易感覺冰冷的工作空間，以木的溫柔充滿、讓空間重生。",
                thumb: "img/product6.jpg",
                amount: 0,
                amountShow: 1,
                process: "img/process.png",
                className: 'tab6',
            },
        ]
    },
    methods: {
        minusOne (product) {
            product.amountShow--
            product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
        },
        addOne (product) {
            product.amountShow++
            product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
        },
        addToCart (product) {
            product.amount += product.amountShow
        },
        remove (product) {
            product.amount = 0
        },
    },
    computed: {
        productsInCart () {
            return this.products
                .filter(p => p.amount)
                .map(p => {
                    p.sum = p.amount * p.price
                    return p
                })
        },
        total () {
            return this.productsInCart
                .reduce((sum, p) => (sum + p.sum), 0)
        }
    },
})