class MyHashMap {
    private map: Array<number[]> = [];
    constructor() {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let index = 0;
        while (index < this.map.length) {
            if (this.map[index][0] === key) {
                this.map[index][1] = value;
                return;
            }
            index += 1;
        }
        this.map.push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        let index = 0;
        while (index < this.map.length) {
            if (this.map[index][0] === key) {
                return this.map[index][1];
            }
            index += 1;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let index = 0;
        while (index < this.map.length) {
            if (this.map[index][0] === key) {
                this.map.splice(index, 1);
                return;
            }
            index += 1;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
