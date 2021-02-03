const app = {
    data() {
        return {
            fname: 'Peempat ',
            lname: 'Pinsang',
            carrier: 'Student from SIT ',
            images : '/images/p101.jpg',
            a : "38",
            b : "980",
            c : "8.9",
        }
    },
    
}
mountedApp = Vue.createApp(app).mount('#app')
