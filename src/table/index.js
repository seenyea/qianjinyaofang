import { clone } from '../util/index'
/** Class representing a table. */
export default class Table{
    /**
     * Create a table.
     * @date 2020-03-14
     * @param {any} config
     * @returns {any}
     */
    constructor(config){
        const {
            data = null
        } = config;

        if(!data && !url){
            throw Error('Table constructor failed');
        }

        this.data = data ? data : [];
    }

    /**
     * insert data into table
     * @date 2020-03-14
     * @param {any} d
     * @param {number} position
     * @returns {any}
     */
    insert(d, position = 0){
        this.data.splice(position, 0, d);
        return this.data;
    }

    /**
     * get the table item by the position
     * @date 2020-03-14
     * @param {number} position
     * @returns {any}
     */
    get(position = 0){
        return this.data[position] ? this.data[position] : null;
    }

    /**
     * get the table items from start position to end position
     * @date 2020-03-14
     * @param {number} start=0
     * @param {number} end
     * @returns {[]}
     */
    ranges(start = 0, end){
        const e = end ? end : this.length;
        return this.data.filter((el, i) => i >= start && i <= e);
    }

    /**
     * filter the numbrical field.
     * eg.
     * 1. '01001', '01020', '02002'
     * 2. 1, 3, 4
     * @date 2020-03-14
     * @param {string} prop
     * @param {any} start
     * @param {any} end
     * @returns {[]}
     */
    filterNumberLike(prop, start, end){
        return this.data.filter((e) => {
            const value = e[prop];
            return value >= start && value <= end;
        });
    }

    /**
     * filter the string field
     * @date 2020-03-14
     * @param {string} prop
     * @param {string} val
     * @returns {[]}
     */
    filterStringLike(prop, val){
        return this.data.filter((e) => {
            const value = e[prop];
            return value.indexOf(val) > -1;
        });
    }

    /**
     * push the given data into data
     * eg:
     * 1. [[1,2,3], 3, 5] => [1, 2, 3, 3, 5];
     * @date 2020-03-14
     * @param {any} ...d
     * @returns {any}
     */
    append(...d){
        d.forEach(e => {
            if(Object.prototype.toString.call(e) === '[object Array]'){
                e = [...e];
            }else{
                e = [e];
            }
            this.data.push(...e);
        })
    }

    /**
     * pop the given length elements, 
     * if length is undefined, 0, 1 just like array pop
     * eg:
     * a = [1,2,3,5];
     * a.pop(2) => [3,5];
     * @date 2020-03-14
     * @param {any} lens=0
     * @returns {any}
     */
    pop(lens = 0){
        if(lens < 0) throw('lens can not a negetive number');
        if(lens <= 1) return [this.data.pop()];
        const res = [];
        const { data } = this;
        for(var i = 0;i < lens;i++){
            res.unshift(data.pop());
        }
        return res;
    }

    /**
     * shift the given length elements, 
     * if length is undefined, 0, 1 just like array shift
     * eg:
     * a = [1,2,3,5];
     * a.shift(2) => [1,2];
     * @date 2020-03-14
     * @param {any} lens=0
     * @returns {any}
     */
    shift(lens = 0){
        if(lens < 0) throw('lens can not a negetive number');
        if(lens <= 1) return [this.data.shift()];
        const res = [];
        const { data } = this;
        for(var i = 0;i < lens;i++){
            res.push(data.shift());
        }
        return res;
    }

    /**
     * clone the given length elements, 
     * if length is undefined, 0, it will be empty array
     * eg:
     * a = [1,2,3,5];
     * a.clone(2) => [1,2];
     * a.clone(-2) => [3,5];
     * @date 2020-03-14
     * @param {any} lens=0
     * @returns {any}
     */
    clone(lens = 0){
        if(lens === 0) return [];
        const { data } = this;
        var l = data.length;
        if(Math.abs(lens) >= l) throw('lens need be less than l');
        var s = 0;
        var e = l - lens;
        var res = [];
        if(lens < 0){
            e = l;
            s = l + lens - 1;
        }
        while(s < e){
            res.push(clone(a));
            s++;
        }
        return res;
    }
}