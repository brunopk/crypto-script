declare namespace Movement {
  let SHEET_ID: string
}

class CoinSheet extends BaseSheetHandler {
  processSnapshot(snapshot: Snapshot): void {
    throw new Error("Method not implemented.");
  }
}