/**
 * shallow equals between objects
 *
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export let equals = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
/**
 * Ritorna l'età a partire dalla data di nascita
 * @param {string} date
 * @return {number}
 */
export let getAge = (date) => {
    if (date === '') {
        return 0;
    }
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
/**
 * Aggiunge uno o più zeri davanti ad un numero
 * @param {number | string} value
 * @param {number} digits
 * @return {string}
 */
export let getZeroNumber = (value, digits = 2) => {
    let s = value + '';
    while (s.length < digits) {
        s = '0' + s;
    }
    return s;
};
/**
 *
 * @param s
 * @returns {string}
 */
export let cleanHTML = (s) => {
    return (s) ? s.replace(/<[^>]*>/g, '') : '';
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
/**
 *
 * @param min
 * @param max
 * @returns {number}
 */
export let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
/**
 * restituisce un array di chiavi da un oggetto, if_value serve a testare il valore della proprietà corrente,
 * se c'è match la chiave viene restituita
 *
 * @param obj
 * @param if_value
 * @returns {Array<string>}
 */
export let keysFromObj = (obj, if_value) => {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if ((if_value === undefined) || (if_value && (if_value === obj[key]))) {
                keys.push(key);
            }
        }
    }
    return keys;
};
/**
 *
 * @param array
 * @returns {Array<any>}
 */
export let deepCloneArray = (array) => {
    return array.map(a => Object.assign({}, a));
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let isNullOrUndefined = (obj) => {
    return isUndefined(obj) || isNull(obj);
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let notNullOrUndefined = (obj) => {
    return !isNullOrUndefined(obj);
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let isNull = (obj) => {
    return obj === null;
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let notNull = (obj) => {
    return !isNull(obj);
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let isUndefined = (obj) => {
    return obj === undefined;
};
/**
 *
 * @param obj
 * @returns {boolean}
 */
export let notUndefined = (obj) => {
    return !isUndefined(obj);
};
/**
 *
 * @param str
 * @returns {string}
 */
export let capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 *
 * @param obj
 * @returns {Array}
 */
export let objToArray = (obj) => {
    let array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push({
                key: key,
                obj: obj[key]
            });
        }
    }
    return array;
};
//ref: https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Generatore_di_sequenze_(range)
/**
 *
 * @param init_value
 * @param length
 * @returns {Array<T>}
 */
export let createArrWith = (init_value, length) => {
    return Array.from({ length: length }, () => init_value);
};
/**
 *
 * @param start
 * @param stop
 * @param step
 * @returns {Array<number>}
 */
export let range = (start, stop, step) => {
    return Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
};
