const _toString = Object.prototype.toString;

const _isArray = (o) => {
    var type = _toString.call(o);
    return type === '[object Array]';
}

const _isObject = (o) => {
    var type = _toString.call(o);
    return type === '[object Object]';
}

const _isFunction = (o) => {
    var type = _toString.call(o);
    return type === '[object Function]';
}

const _isRegExp = (o) => {
    var type = _toString.call(o);
    return type === '[object RegExp]';
}

const _isDate = (o) => {
    var type = _toString.call(o);
    return type === '[object Date]';
}

const PRIMARY_LISTS = {
    '[object String]': 1,
    '[object Number]': 1,
    '[object Undefined]': 1,
    '[object Null]': 1,
    '[object Boolean]': 1,
    '[object Symbol]': 1
};
const _isPrimary = (o) => {
    var type = _toString.call(o);
    return !!PRIMARY_LISTS[type];
}


if(!Object.prototype.clone){
    Object.prototype.clone = function(){
        var res = {};
        for(var p in this){
            var val = this[p];
            if(_isObject(val)){
                val = val.clone();
            }
            res[p] = val;
        }
    }
}

/**
 * clone only primary types and object
 * @param {any} o 
 */
export const clone = (o) => {
    if(_isPrimary(o)){
        return o;
    }
    if(_isObject(o)){
        return o.clone();
    }
}

