type MovementMapping = {
  a: number
}

type Movement = {
  a: string,
}

class MovementHandler extends BaseFormHandler<MovementMapping, Movement> {
  processData(data: Movement): void {
    throw new Error("Method not implemented.")
  }
}

if (typeof formHandler === 'undefined')
  formHandler = {}

formHandler["Movimiento"] = new MovementHandler()
