const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url: 'http://www.sit.kmutt.ac.th'
        }
    },
    
}
mountedApp = Vue.createApp(app).mount('#app')
