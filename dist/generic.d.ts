/**
 * shallow equals between objects
 *
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export declare let equals: (obj1: any, obj2: any) => boolean;
/**
 * Ritorna l'età a partire dalla data di nascita
 * @param {string} date
 * @return {number}
 */
export declare let getAge: (date: string) => number;
/**
 * Aggiunge uno o più zeri davanti ad un numero
 * @param {number | string} value
 * @param {number} digits
 * @return {string}
 */
export declare let getZeroNumber: (value: string | number, digits?: number) => string;
/**
 *
 * @param s
 * @returns {string}
 */
export declare let cleanHTML: (s: string) => string;
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let isEmpty: (obj: any) => boolean;
/**
 *
 * @param min
 * @param max
 * @returns {number}
 */
export declare let randomIntFromInterval: (min: number, max: number) => number;
/**
 * restituisce un array di chiavi da un oggetto, if_value serve a testare il valore della proprietà corrente,
 * se c'è match la chiave viene restituita
 *
 * @param obj
 * @param if_value
 * @returns {Array<string>}
 */
export declare let keysFromObj: (obj: any, if_value?: any) => string[];
/**
 *
 * @param array
 * @returns {Array<any>}
 */
export declare let deepCloneArray: (array: any[]) => any[];
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let isNullOrUndefined: (obj: any) => boolean;
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let notNullOrUndefined: (obj: any) => boolean;
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let isNull: (obj: any) => boolean;
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let notNull: (obj: any) => boolean;
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let isUndefined: (obj: any) => boolean;
/**
 *
 * @param obj
 * @returns {boolean}
 */
export declare let notUndefined: (obj: any) => boolean;
/**
 *
 * @param str
 * @returns {string}
 */
export declare let capitalizeFirstLetter: (str: string) => string;
/**
 *
 * @param obj
 * @returns {Array}
 */
export declare let objToArray: (obj: any) => any[];
/**
 *
 * @param init_value
 * @param length
 * @returns {Array<T>}
 */
export declare let createArrWith: <T extends {}>(init_value: T, length: number) => T[];
/**
 *
 * @param start
 * @param stop
 * @param step
 * @returns {Array<number>}
 */
export declare let range: (start: number, stop: number, step: number) => number[];
