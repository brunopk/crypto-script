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

declare let SNAPSHOTS_SPREADSHEET_ID: string

declare let SNAPSHOTS_SPREADSHEET_NAME: string

declare enum Coin {
  ADA = "ADA",
  BUSD = "BUSD",
  ETH = "ETH"
}

type FormSheet = RowDefinition

type RowDefinition = {
  [name: string]: number | string | Date
}

type ColumnMapping<T> = {
  [Property in keyof T]: number
}

type Snapshot = {
  createdAt: Date
  scriptVersion: string
  lastEvent: {
    eventDate: Date,
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