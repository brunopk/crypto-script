declare let formHandler: { [associatedSheetName: string]: Main.Form.Handler }

declare namespace Main {
  namespace Form {
    interface Handler {
      run: () => void
    }
  }
  namespace Sheets {
    type RowDef = {
      [column: string]: {
        columnName: string
        columnIndex: number
      }
    }
  }
  namespace Snapshot {
    type Snapshot = {
      createdAt: Date
      scriptVersion: string
      totalInvestment: number
      lastEvent: {
        eventDate: Date,
        summary: string,
        description: string
        note?: string 
      },
      prices: {
        [crypto: string]: {
          value: number,
          obtainedFrom: string
        }
      }
      data: {
        [crypto: string]: {
          total: number,
          totalInvested: number
        }
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