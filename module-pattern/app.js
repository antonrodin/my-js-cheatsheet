const ItemController = (function () {

    // Private variable data
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log('Item added');
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        });
    }

    // Public functions and variables
    return {

        add: add,
        get: get

    }

})();

ItemController.add({id: 1, name: "John"});
console.log(ItemController.get(1));