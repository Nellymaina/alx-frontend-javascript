export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}

Aiport.prototype.toString=()=>{
    return `[object ${this._code}]`;
}
