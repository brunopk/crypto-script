declare namespace Movement {
  type Type = {
    a: string,
  }

  let mapping: Form.ColumnMapping<Type>
}



Movement.mapping = { a: 1}


class MovementHandler extends BaseFormHandler<Movement.Type> {

  constructor() {
    super(Movement.mapping)
  }

  processData(data: Movement.Type): void {
    throw new Error("Method not implemented.")
  }
}

if (typeof formHandler === 'undefined')
  formHandler = {}

formHandler["Movimiento"] = new MovementHandler()
