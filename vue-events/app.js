Vue.component('offer', {
    template: `
        <input name='offer' @blur='emitEvent'>
    `,
    methods: {

        emitEvent() {
            console.log('Emit Event');
            this.$emit('applied');
        }

    }
});

const app = new Vue({
    el: "#app",
    data: {
        message: "Hello There",
        applied: false
    },
    methods: {

        onOfferApplied() {
            this.applied = true;
            console.log('Offer is applied');
        }

    }
});