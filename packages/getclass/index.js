
/**
 * Gets the class.
 *
 * @param      {<type>}  object  The object
 * @return     {<type>}  The class.
 * getClass(5); // => "Number"
 * getClass({}); // => "Object"
 * getClass(/foo/); // => "RegExp"
 * getClass(''); // => "String"
 * getClass(true); // => "Boolean"
 * getClass([]); // => "Array"
 * getClass(undefined); // => "Window"
 * getClass(Element); // => "Constructor"
 * getClass(()=>); // => "Function"
 */

export const getClass = function(object){
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1]?.toLowerCase();
}