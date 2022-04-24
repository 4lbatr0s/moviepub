const fs = require('fs') //file management.
const flatted = require('flatted') //to provice circled json 

module.exports = class BaseService{
    constructor(model, dbPath){ //with this model, on this database we are going to make manipulations.
        this.model = model;
        this.dbPath = dbPath;
    }


    async findAll(){ //our promise: we will read the file, 
        return new Promise((resolve, reject) => {
            fs.readFile(this.dbPath, 'utf8', async (err, file)=>{
                if(err){
                    if(err.code == 'ENOENT')//FIXME: if no such file.
                    {
                        await this.saveAll([]) // do not save anything.
                        return resolve([]) //return nothing.
                    }
                    return reject(err) //if we cannot keep our promise, then it's rejected.
                }
                //we need to do object mapping in order to fetch all items from a json file.
                const items = flatted.parse(file).map(this.model.create)
                resolve(items) //if promise resolved, return items.
            })
        })
    }

    //we dont need to design add function as to return a promise, for we created our promises inside of findAll and saveAll.
    async add(item){
            const allItems = await this.findAll(); //bring all the items.
            const lastItem = allItems[allItems.length - 1] //bring last item
            const lastItemsId =  lastItem && lastItem.id || 0  //if item  exists, assign it's id to lastItemId variable.
            item.id = lastItemsId + 1 
            allItems.push(item)
            await this.saveAll(allItems);
        }

    async delete(id = 1) {
        const allItems = await this.findAll(); 
        const itemIndex = allItems.findIndex(item => item.id === id);
        if(itemIndex<0) return 
        allItems.splite(itemIndex, 1); // split 1 item starting from the index.
        await this.saveAll(allItems);
    }

    async find(itemId = 1) {
        const allItems = await this.findAll()
    
        return allItems.find(p => p.id == itemId)
    }

    async saveAll(items) {
        return new Promise((resolve, reject) => {
          fs.writeFile(this.dbPath, flatted.stringify(items), async (err, file) => {
            if (err) return reject(err)
            resolve()
          })
        })
      }
    
    
}