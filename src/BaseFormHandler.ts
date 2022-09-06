abstract class BaseFormHandler<T extends object> implements Main.Form.Handler {   
  protected rowDef: Main.Sheets.RowDef

  run() {
    const data = readLastInsertedRow(this.rowDef) as T
    this.processData(data)
  }

  abstract processData(data: T): void
}