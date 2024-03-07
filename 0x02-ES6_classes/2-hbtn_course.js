export default class HolbertonCourse{
    constructor(name, length, students){
        if (typeof this._name !== 'string'){
            throw new TypeError('Name must be a string')
        }
        this._name = name;
        if (typeof this._length !== 'number'){
            throw new TypeError('Length must be a number')
        }
        this._length = length;
        if (!Array.isArray(this._students)){
            throw new TypeError('Students must be an array')
        }
        this._students = students;
    }
    get name(){
        if (typeof this.Name !== 'number'){
            throw new TypeError('Name must be a string')
        }
        return this._name;
    }
    get length(){
        if (typeof this.length !== 'number'){
            throw new TypeError('Length must be a number')
        }
        return this._length; 
    }
    get students(){
        if (!Array.isArray(this._students)){
            throw new TypeError('Students must be an array')
        }
        return this._students;
    }
    set name(name){
        if (typeof name !== 'string'){
            throw new TypeError('Name must be a string')
        }
        this._name = name; 
    }
    set length(length){
        if (typeof length !== 'number'){
            throw new TypeError('Length must be a number')
        }
        this._length = length;
    }
    set students(students){
        if (!Array.isArray(students)){
            throw new TypeError('Students must be an array')
        }
        this._students = students;
    }
}
