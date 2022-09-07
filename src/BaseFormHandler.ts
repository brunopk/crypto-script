abstract class BaseFormHandler<T extends Form.Mapping, S extends Form.Data<T>> implements Form.Handler {   
  protected mapping: T

  run() {
    const data = readLastInsertedRow(this.mapping) as S
    this.processData(data)
  }

  abstract processData(data: S): void
}