declare namespace Movement {
  type Data = {
    a: string
  }
  let mapping: Form.ColumnMapping<Data>
  let ASSOCIATED_SHEET: string
}

namespace Movement {
  ASSOCIATED_SHEET = "Movimiento"
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

if (typeof formHandler === 'undefined')
  formHandler = {}

formHandler[Movement.ASSOCIATED_SHEET] = new MovementHandler()
