/**
 * Represent a exchange between two cryptocurrencies. 
 */

// TODO: define a type for Exchange (similar to BuyFormData in src/Buy.ts)
// TODO: define a const for configurations (similar to BuyHandlerConfig in src/Buy.ts)

// Exchange should allow pass price through the form or obtain from Coin API

type ExchangeData = {
  date: string,
  sourceAsset: string,
  targetAsset: string,
  priceSource: string,
  price: number,
}

const EXCHANGE_HANDLER_CONFIG: FormHandlerConfiguration<Data> = {
  sheetName: "",
  sheetId: "X",
  eventSummaryTemplate: "",
  mapping: { 
    date: 1,
    sourceAsset: 2,
    targetAsset: 3,
    priceSource: 4,
    price: 5,
  }
}

type Data = {}


class ExchangeHandler extends BaseFormHandler<ExchangeData> {

  constructor() {
    super(EXCHANGE_HANDLER_CONFIG.sheetId, EXCHANGE_HANDLER_CONFIG.sheetName, EXCHANGE_HANDLER_CONFIG.mapping)
  }

  // TODO: define processData as in src/Buy.ts
  
  handleData(currentSnapshot: Snapshot, data: ExchangeData): Snapshot {
    throw new Error("Method not implemented.")
  }
}

FORM_HANDLERS[EXCHANGE_HANDLER_CONFIG.sheetName] = new ExchangeHandler()