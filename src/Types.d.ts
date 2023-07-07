declare namespace ExternalAPIs {
  namespace CoinAPI {
    namespace ExchangeRate {
      type GetSpecificRateResponse = {
        time: string,
        asset_id_base: string,
        asset_id_quote: string,
        rate: number
      }
    }
  }
}

declare let FormHandler: { [associatedSheetName: string]: FormHandler }

declare let CHARS: string

declare type FormSheet = RowDefinition

type RowDefinition = {
  [name: string]: number | string | Date
}

type ColumnMapping<T> = {
  [Property in keyof T]: number
}

// TODO: it should contain where is the coin (example: metamask, binance, etc, data.coins['ADA'] could be an array)
type Snapshot = {
  createdAt: Date
  lastEvent: {
    eventDate: Date,
    type: EventType,
    summary: string,
    url?: string
  },
  data: {
    totalInvestment: number
    prices: {
      [crypto: string]: {
        value: number,
        obtainedFrom: string
      }
    }
    coins: {
      [crypto: string]: {
        total: number,
        totalInvested: number
      }
    }
  }
}

interface FormHandler {
  run: () => void
}