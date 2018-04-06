//ES6 Javascript

const object = {
		computed: {

            reversedMessage() {

                return this.message.split('').reverse().join('');

            }

        }
}

// No Es6 JavsScript
const object2 = {
    computed: {

            reversedMessage: function() {

                return this.message.split('').reverse().join('');

            }

        }
    }

//New way of filtering
tasks.filter(task => !task.completed);

//Old way of filtering
tasks.filter(function (task) {
    return !task.completed;
});