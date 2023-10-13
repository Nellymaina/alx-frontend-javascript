export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  
   toString(code){
    return `[object ${this._code}]`;
  } 
}


