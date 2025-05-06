abstract class BaseFormHandler<T extends FormSheet> implements FormHandler {   
  private columnMapping: ColumnMapping<T>

  private spreadsheetId: string

  private sheetName: string

  constructor(spreadSheetId: string, sheetName: string, columnMapping: ColumnMapping<T>) {
    this.spreadsheetId = spreadSheetId
    this.sheetName = sheetName
    this.columnMapping = columnMapping
  }

  processFormData() {
    const data = getLastRow(this.spreadsheetId, this.sheetName, this.columnMapping) as T
    const snapshot = getLastSnapshot()
    const newSnapshot = this.handleData(snapshot, data)
    saveSnapshot(newSnapshot)
  }

  /**
   * Process the data using information in the current snapshot and return a new snapshot. 
   * @param currentSnapshot represents the current information or status of the system condensed into one object
   * @param data data that comes from a Google Form
   */
  abstract handleData(currentSnapshot: Snapshot, data: T): Snapshot

}