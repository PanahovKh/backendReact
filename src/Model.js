class Model{
    constructor() {
        this.storage = [];        
    }

    getStorage = () => this.storage;

    setStorage = array => {
        this.storage = array;
        console.log(this.storage, 'story');
        
    }
}

module.exports = Model;