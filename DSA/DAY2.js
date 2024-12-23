class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  linerProbing(key, value) {
    let index = this.hash(key);
    let startIndex = index;

    while (this.table[index] && this.table[0] !== key) {
      index = (index + 1) % this.size; 
      if (startIndex === index) {
        return "there is no space";
      }
    }

    this.table[index] = [key, value];
  }

qudricProbing(key,value){
    const index = this.hash(key)
    let i =1
    while(this.table[index] && this.table[index][0!==key]){
        index=((index)+i*i)%this.size
        i++
        if(index>=this.size){
            return "there is no space";
        }
    }

    this.table[index] = [key, value];
}

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, "=", this.table[i]);
      }
    }
  }
}

const table = new HashTable(100);
table.linerProbing("name", "YASEER"); 
table.linerProbing("place", "HARIHARAN");
table.set("age", 22);
table.print();
