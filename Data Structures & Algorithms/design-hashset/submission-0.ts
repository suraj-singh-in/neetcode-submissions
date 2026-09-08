class MyHashSet {
    private nums: number[] = []
    constructor() {
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        if(this.contains(key)) { 
            return;
        } else {
            this.nums.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let index = 0;
        while(index < this.nums.length) {
            if(this.nums[index] === key) {
                break;
            }
            index += 1;
        }

        if(index < this.nums.length) {
            this.nums.splice(index, 1)
        }

    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        let index = 0;
        while(index < this.nums.length) {
            if(this.nums[index] === key) {
                return true;
            }
            index += 1;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
