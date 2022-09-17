declare let FormHandler: { [associatedSheetName: string]: Form.Handler }

declare let snapshot: Snapshot

declare enum Coin {
  ADA = "ADA",
  BUSD = "BUSD",
  ETH = "ETH"
}

declare namespace Form {

  type ColumnMapping<T> = {
    [Property in keyof T]: number
  }

  type Data = {
    [field: string]: number | string | Date
  }

  interface Handler {
    run: () => void
  }
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

declare namespace Main {
  
  namespace Sheets {
    type RowDef = {
      [column: string]: {
        columnName: string
        columnIndex: number
      }
    }
  }
  namespace ExternalAPIs {
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
}