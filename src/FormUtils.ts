function getHandler(associatedSheet: string): Main.Form.FormHandler {
  switch (associatedSheet) {
    case MOVEMENT_ASSOCIATED_SHEET: 
      return handleMovement
    default:
      throw new Error(`No handler defined for the sheet '${associatedSheet}'`)
  }
}

function getFormData(associatedSheet: string) {
  switch (associatedSheet) {
    case MOVEMENT_ASSOCIATED_SHEET: 
      return {}
    default:
      throw new Error(`Cannot obtain data from sheet '${associatedSheet}'`)
  }
}
