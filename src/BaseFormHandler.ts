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

  run() {
    const data = getLastRow(this._mapping) as T
    this.process(data)
  }

  abstract process(data: T): void

}