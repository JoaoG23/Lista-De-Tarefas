class Item {

    static lastId = 0; // Varivel de class quelquer objeto pode ver ela

    constructor(text) {
        this.id = Item.lastId++ ;
        this.text = text;
        this.done = false;
    }

}

export default Item;