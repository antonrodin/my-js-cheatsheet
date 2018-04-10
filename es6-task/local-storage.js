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

    // The ID of records is the TITLE
    // Search for element.title and if found, remove from array
    static removeRecord(key, value) {
    
        const records = LStorage.getAll(key);
        records.forEach(function (element, index) {
            if(element.title === value) {
                records.splice(index, 1);
            }
        });

        localStorage.setItem(key, JSON.stringify(records));
    }

}