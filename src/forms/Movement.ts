type Movement = {
  crypto1: string
}

class MovementHandler extends BaseFormHandler<Movement> {
  processData(data: Movement): void {
    throw new Error("Method not implemented.")
  }
}

if (typeof formHandler === 'undefined')
formHandler = {}

formHandler["Movimiento"] = new MovementHandler()
