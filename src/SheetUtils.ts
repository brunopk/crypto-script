/**
 * Adds a new row on a given sheet within a given spread sheet.
 * @param spreadSheetId spread sheet id (it can be obtained from the spread sheet URL)
 * @param sheetName sheet name within the spread sheet to which the row will be added
 * @param row an array with all cell values in order
 * @returns The number of the added row.
 */
function addRow(spreadSheetId: string, sheetName: string, row: any[]): number {
  const spreadSheet = SpreadsheetApp.openById(spreadSheetId)
  spreadSheet.setActiveSheet(spreadSheet.getSheetByName(sheetName)!)
  spreadSheet.appendRow(row)
  console.log(`New row added on the sheet '${sheetName}' within the spread sheet '${spreadSheetId}'.`)
  return spreadSheet.getDataRange().getLastRow()
}

/**
 * Read the last inserted row in a given sheet within a given spread sheet.
 * @param spreadSheetId spread sheet id (it can be obtained from the spread sheet URL)
 * @param sheetName sheet name within the spread sheet to which the row will be added
 * @param mapping indicates to which column is associated each field 
 * @returns Returns an object `data` for which `data[field]` contains the value for `field` in column `n` (being `mapping[field] = n`).
 */
function getLastRow<T extends RowDefinition>(spreadSheetId: string, sheetName: string, mapping: ColumnMapping<T>): object {
  // TODO: use parameters spreadSheetId: string, sheetName: string
  const data = {}
  const range = SpreadsheetApp.getActiveRange()
  for (let field in mapping) {
    // to string conversion to avoid TypeScript complaining with 'Type 'Extract<keyof T, string>' cannot be used to index type '{}'' 
    const fieldName = field.toString()
    const cell = range.getCell(1, mapping[fieldName]);
    data[fieldName] = cell.getValue()
  }
  return data
}

function getLinkToLastRow(): string {
  const range = SpreadsheetApp.getActiveRange()
  const rowNumber = range.getRow();
  const activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet()
  const spreadSheetId = activeSpreadSheet.getId()
  const sheetId = activeSpreadSheet.getSheetId()
  return `https://docs.google.com/spreadsheets/d/${spreadSheetId}/edit#gid=${sheetId}&range=A${rowNumber}`
}

function setCellColor(spreadSheetId: string, sheetName: string, rowNumber: number, columnNumber: number, color: string) {
  const spreadSheet = SpreadsheetApp.openById(spreadSheetId);
  const sheet = spreadSheet.getSheetByName(sheetName);
  
  if (sheet == null) {
    throw new Error(`Sheet '${sheetName}' not found within the spread sheet '${spreadSheetId}'`)
  }

  const range = sheet.getRange(`${CHARS[columnNumber - 1]}${rowNumber}`)

  sheet.setCurrentCell(range)
  sheet.getCurrentCell()!.setFontColor(color)
}
