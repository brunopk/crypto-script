declare namespace Buy {
  enum Method {
    BINANCE, 
    BINANCE_P2P
  }
  type Data = {
    date: Date,
    method: string,
    coin: string
    quantity: number,
    fees: number 
  }
  let mapping: Form.ColumnMapping<Data>
  let SHEET_NAME: string
  let SHEET_ID: string
  let EVENT_SUMMARY_TEMPLATE: string
}

namespace Buy {
  SHEET_NAME = "Compra"
  SHEET_ID = "X"
  EVENT_SUMMARY_TEMPLATE = "Compra de %COIN%"
  mapping = { 
    date: 1,
    method: 2,
    coin: 3,
    quantity: 4,
    fees: 5
  }
}



class BuyHandler extends BaseFormHandler<Buy.Data> {

  constructor() {
    super(Buy.mapping)
  }

  processData(data: Buy.Data): void {
    this.snapshot.createdAt = new Date()
    this.snapshot.lastEvent = {
      eventDate: data.date,
      summary: Buy.EVENT_SUMMARY_TEMPLATE.replace("%COIN%", data.coin),
      url: getLinkToLastRow()
    }
  }
}

if (typeof FormHandler === 'undefined')
  FormHandler = {}

FormHandler[Buy.SHEET_NAME] = new BuyHandler()