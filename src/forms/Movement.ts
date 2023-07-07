declare namespace Movement {
  type Data = {
    a: string
  }
  let mapping: Form.ColumnMapping<Data>
  let SHEET_NAME: string
}

namespace Movement {
  SHEET_NAME = "Movimiento"
  mapping = {a: 3}
}



class MovementHandler extends BaseFormHandler<Movement.Data> {

  constructor() {
    super(Movement.mapping)
  }

  processData(data: Movement.Data): void {
    throw new Error("Method not implemented.")
  }
}

if (typeof FormHandler === 'undefined')
  FormHandler = {}

FormHandler[Movement.SHEET_NAME] = new MovementHandler()