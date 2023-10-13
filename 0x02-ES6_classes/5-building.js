export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building && typeof this.evacuationWarningMessage === 'undefined'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }
}
