abstract class BaseFormHandler<T extends FormSheet> implements FormHandler {   
  private _mapping: ColumnMapping<T>

  private _snapshot: Snapshot

  constructor(mapping: ColumnMapping<T>) {
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