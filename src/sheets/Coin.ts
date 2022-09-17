declare namespace Movement {
  let SHEET_ID: string
}

class Coin extends BaseSheetWriteHandler {
  processSnapshot(snapshot: Snapshot): void {
    throw new Error("Method not implemented.");
  }
}