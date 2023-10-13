export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
get size(){
  if(typeof(this._size)==='number'){
    return this._size;
  }
    
    else if(typeof(this.location)==='number'){
    return this._location;
    }
}
  get location(){
    if(typeof(this._location)==='string'){
      return this._location;
    }
      else if( typeof(this._size)==='string'){
      return this._size
      }
    }
}

 
