abstract class BaseSheetHandler {  
  private _snapshot: Snapshot

  constructor(snapshot: Snapshot) {
    this._snapshot = snapshot
  }

  writeSnapshot() {
    this.processSnapshot(this._snapshot)
  }

  abstract processSnapshot(snapshot: Snapshot): void

}