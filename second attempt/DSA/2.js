class HashTable {
  constructor(size) {
    this.value = value(size);
    this.table = new Array(size);
  }

  hash(key) {
    const index = 0;
    for (let i = 0; i < this.key; i++) {
      index += key.charCodeAi();
    }
    return index % this.size;
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.key[i]) {
        console.log(key[i]);
      }
    }
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
}

const hash = new HashTable(100);
hash.set("name", "sanooj");
hash.set("age", 22);
hash.print();
