abstract class BaseSheetHandler {  
  private _snapshot: Snapshot

  constructor(snapshot: Snapshot) {
    this._snapshot = snapshot
  }

  run() {
    this.write(this._snapshot)
  }

  abstract write(snapshot: Snapshot): void

}