/**
 * Represents the action of purchasing a cryptocurrency with fiat money
 */

type BuyFormData = {
  date: Date,
  asset: string
  quantity: number,
  fees: number,
  method: string // Values defined in BUY_METHOD_* constants
  wallet: string //  Values defined in WALLET_* constants
}


const BUY_HANDLER_CONFIG: FormHandlerConfiguration<BuyFormData> = {
  sheetName: "Compra",
  sheetId: "X",
  eventSummaryTemplate: "Compra de %COIN%",
  mapping: { 
    date: 1,
    asset: 2,
    quantity: 3,
    fees: 4,
    method: 5,
    wallet: 6
  }
}



class BuyHandler extends BaseFormHandler<BuyFormData> {

  constructor() {
    super(BUY_HANDLER_CONFIG.sheetId, BUY_HANDLER_CONFIG.sheetName, BUY_HANDLER_CONFIG.mapping)
  }

  handleData(currentSnapshot: Snapshot, data: BuyFormData): Snapshot {
    // TODO: CONTINUE HERE
    const newSnapshot: Snapshot = {
      createdAt: new Date(),
      lastEvent: {
        type: EVENT_BUY,
        date: data.date,
        link: getLinkToLastRow()
      }
      
    }

    return newSnapshot
  }
}

FORM_HANDLERS[BUY_HANDLER_CONFIG.sheetName] = new BuyHandler()