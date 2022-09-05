/**
 * Adds a new row on a given sheet within a given spread sheet.
 * Returns the number of the added row.
 * @param spreadSheetId spread sheet id that can be found on the spread sheet URL
 * @param sheetName sheet name within the spread sheet to which the row will be added
 * @param row row data with all columns (some columns could be just empty strings "")
 */
function addRow(spreadSheetId: string, sheetName: string, row: any[]): number {
  const spreadSheet = SpreadsheetApp.openById(spreadSheetId)
  spreadSheet.setActiveSheet(spreadSheet.getSheetByName(sheetName)!)
  spreadSheet.appendRow(row)
  console.log(`New row added on the sheet '${sheetName}' within the spread sheet with ID '${spreadSheetId}'.`)
  return spreadSheet.getDataRange().getLastRow()
}

/**
 * Read the last inserted row in the active sheet and for each column at index `rowDefinition[<columnX>].columnIndex`, 
 * extract its data and puts it in `data[rowDefinition[<columnX>].columnName]`
 * @param def 
 * @returns `data`
 */
function readLastInsertedRow(rowDef: Main.Sheets.RowDef): object {
  // TODO: seguir ACA
  return {}
}

