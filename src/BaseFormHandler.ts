abstract class BaseFormHandler<T extends Form.Data> implements Form.Handler {   
  private _mapping: Form.ColumnMapping<T>

  private _snapshot: Snapshot

  constructor(mapping: Form.ColumnMapping<T>) {
    this._mapping = mapping
    this._snapshot = getLastSnapshot()
  }

  protected get snapshot(): Snapshot {
    return this._snapshot;
  }

  protected get lastInsertedRow(): number {
    // TODO:
    throw new Error("Not implemented")
  }
  
  run() {
    const data = getLastRow(this._mapping) as T
    this.processData(data)
  }

  abstract processData(data: T): void

}