const App = {
    data() {
        return {
            inputValue1: 0,
            inputValue2: 0,
            inputValue3: 0,
            strings: []
        }
    },
    methods: {
        inputChangeHandler1(event) {
            this.inputValue1 = event.target.value
        },
        inputChangeHandler2(event) {
            this.inputValue2 = event.target.value
        },
        inputChangeHandler3(event) {
            this.inputValue3 = event.target.value
        },
        addNew() {
            for (let i = 0; i < this.strings.length; i++) {
                this.strings[i].push(this.inputValue1)
                this.strings[i].push(this.inputValue2)
                this.strings[i].push(this.inputValue3)
                this.inputValue1 = 0
                this.inputValue2 = 0
                this.inputValue3 = 0
                console.log(this.strings)
            }
        }
    }
}
Vue.createApp(App).mount('#app')