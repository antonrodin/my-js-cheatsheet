class LStorage {

    //Get All Records from Local Storage
    static getAll(key) {
        let records = [];
        
        if(localStorage.getItem(key) !== null) {
            records = JSON.parse(localStorage.getItem(key));
        }

        return records;
    }

    //Add new record to Local Storage
    static addRecord(key, value) {
        const records = LStorage.getAll(key);
        records.push(value);
        localStorage.setItem(key, JSON.stringify(records));
    }

    //The ID of records is the TITLE
    static removeRecord(key, value) {
        
        const records = LStorage.getAll(key);
        records.array.forEach(function (element, index) {
            if(element.title === value.title) {
                records.splice(index, 1);
            }
        });

        localStorage.setItem(key, JSON.stringify(records));
    }

}