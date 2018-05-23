//Create window VUE class, to handle any event.
window.Event = new Vue();

Vue.component('bottle', {
    template: `<input placeholder="Bottle, gime some text" @click="fireEvent">`,
    methods: {

        // The Bottle component listening for "click" event and execute this function
        fireEvent() {
            Event.$emit('fired');
            console.log('Text given, give some water...');
        }

    }
});

Vue.component('cup', {
    template: `<p>Im a Cup. <span v-if="empty">Im full off water</span></p>`,
    data: function () {
        return {
          empty: false
        }
    },
    created() {

        // The Cup component is listening for Bottle event
        Event.$on('fired', () =>  {
            console.log('Im cup, reciving water');
            this.empty = true;
        });
    }
})

//The main APP, do nothing...
const app = new Vue({
    el: "#app",
    data: {
        message: "Hello there",
        description: "Example off communication between two diferent component. The Bootle (input) emit event, and the cup (p) is listening."
    }
});