abstract class BaseFormHandler<T extends Form.Data> implements Form.Handler {   
  private _mapping: Form.ColumnMapping<T>

  constructor(mapping: Form.ColumnMapping<T>) {
    this._mapping = mapping
  }

  run() {
    const data = readLastInsertedRow(this._mapping) as T
    this.processData(data)
  }

  abstract processData(data: T): void

}