/**
 * shallow equals between objects
 *
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export const equals = (obj1: any, obj2: any): boolean => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

/**
 * Ritorna l'età a partire dalla data di nascita
 * @param {string} date
 * @return {number}
 */
export const getAge = (date: string): number => {
    if (date === '') {
        return 0;
    }
    let today: Date = new Date();
    let birthDate: Date = new Date(date);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    let m: number = today.getMonth() - birthDate.getMonth();
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
export const getZeroNumber = (value: number | string, digits: number = 2): string => {
    let s: string = value + '';
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
export const cleanHTML = (s: string): string => {
    return (s) ? s.replace(/<[^>]*>/g, '') : '';
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = (obj: any) => {
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
export const randomIntFromInterval = (min: number, max: number) => {
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
export const keysFromObj = (obj: any, if_value?: any): Array<string> => {

    let keys: Array<string> = [];

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
export const deepCloneArray = (array: Array<any>): Array<any> => {
    return array.map(a => Object.assign({}, a));
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const isNullOrUndefined = (obj: any): boolean => {
    return isUndefined(obj) || isNull(obj);
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const notNullOrUndefined = (obj: any): boolean => {
    return !isNullOrUndefined(obj);
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const isNull = (obj: any): boolean => {
    return obj === null;
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const notNull = (obj: any): boolean => {
    return !isNull(obj);
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const isUndefined = (obj: any): boolean => {
    return obj === undefined;
};

/**
 *
 * @param obj
 * @returns {boolean}
 */
export const notUndefined = (obj: any): boolean => {
    return !isUndefined(obj);
};

/**
 *
 * @param str
 * @returns {string}
 */
export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 *
 * @param obj
 * @returns {Array}
 */
export const objToArray = (obj: any) => {

    let array = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push({
                key: key,
                obj: obj[key]
            })
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
export const createArrWith = <T extends {}>(init_value: T, length: number): Array<T> => {
    return Array.from({length: length}, () => init_value);
};

/**
 *
 * @param start
 * @param stop
 * @param step
 * @returns {Array<number>}
 */
export const range = (start: number, stop: number, step: number): Array<number> => {
    return Array.from({length: (stop - start) / step}, (_, i) => start + (i * step));
};

export const pascalCase = (s:string):string => {
    return s.replace(/(\w)(\w*)/g, (g0,g1,g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/[\s_-]/g, '')
}

/**
 * Split an array into multiple sub array
 * @param arr
 * @param n
 * @returns {*}
 */
export const splitArr = <T = any>(arr: Array<T>, n): Array<Array<T>> => {
    return arr.reduce(function (a: Array<Array<T>>, i: T) {
        if (a[a.length - 1].length >= arr.length / n) {
            a.push([])
        }
        a[a.length - 1].push(i);
        return a;
    }, [[]])
}

/**
 * Generate unique ID ()
 * @param length
 * @returns {string}
 */
export const uniqueID = (length = 0): string => {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
    const _length = length || 8;
    for (let i = 0; i < _length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param timestamp
 * @param separator
 */
export const dateFromTimestamp = (timestamp, separator = '/') => {
    const date = new Date(parseInt(timestamp) * 1000);
    const month = date.getMonth().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}${separator}${month}${separator}${date.getFullYear()}`;
}

/**
 *
 * @param obj
 */
export const getProps = (obj) => {
    return Object.keys(obj);
}

/**
 * Ref.: https://github.com/sindresorhus/escape-string-regexp/blob/main/index.js
 *
 * @param str
 */
export const escapeStringRegexp = (str: string): string => {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return str
      .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      .replace(/-/g, '\\x2d');
}

/**
 *
 * @param text
 * @param spaces
 */
export const tokenize = (text: string, spaces?: true): Array<string> => {
    if (!text) { throw new Error('No text to speak') }

    const punc = `¡!()[]¿?.,;:—«»\n${spaces && ' '}`
    const puncList = punc.split('').map(function (char) {
        return escapeStringRegexp(char)
    })

    const pattern = puncList.join('|')
    let parts = text.split(new RegExp(pattern));

    return parts.filter(p => p.length > 0)
}
