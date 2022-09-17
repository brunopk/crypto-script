/**
 * Adds a new row on a given sheet within a given spread sheet.
 * @param spreadSheetId spread sheet id that can be found on the spread sheet URL
 * @param sheetName sheet name within the spread sheet to which the row will be added
 * @param row row data with all columns (some columns could be just empty strings "")
 * @returns The number of the added row.
 */
function addRow(spreadSheetId: string, sheetName: string, row: any[]): number {
  const spreadSheet = SpreadsheetApp.openById(spreadSheetId)
  spreadSheet.setActiveSheet(spreadSheet.getSheetByName(sheetName)!)
  spreadSheet.appendRow(row)
  console.log(`New row added on the sheet '${sheetName}' within the spread sheet with ID '${spreadSheetId}'.`)
  return spreadSheet.getDataRange().getLastRow()
}

/**
 * Read the last inserted row in the active sheet.
 * @param mapping
 * @returns Returns an object `data` for which `data[mapping[x]]` contains the value at column `x` for the last inserted row.
 */
function getLastRow<T extends Form.Data>(mapping: Form.ColumnMapping<T>): object {
  const result = {}
  const range = SpreadsheetApp.getActiveRange()
  for (let field in mapping) {
    // to string conversion to avoid TypeScript complaining with 'Type 'Extract<keyof T, string>' cannot be used to index type '{}'' 
    const fieldName = field.toString()
    const cell = range.getCell(1, mapping[fieldName]);
    result[fieldName] = cell.getValue()
  }
  return result
}

function getLink(spreadSheetId: string, rowNumber: number): string {
  // TODO:
  throw new Error("Not implemented")
}
