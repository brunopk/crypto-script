declare type FormSheet = RowDefinition

type FormHandlerConfiguration<T> = {
  mapping: ColumnMapping<T>
  sheetName: string
  sheetId: string
  eventSummaryTemplate: string
}

type RowDefinition = {
  [name: string]: number | string | Date
}

type ColumnMapping<T> = {
  [Property in keyof T]: number
}

/**
 * Event types are defined as constant (see src/Constants.ts)
 * Investments could be for instance a farming pool (together with another coin)
 */
type Snapshot = {
  createdAt: Date
  lastEvent?: {
    date: Date,
    summary: string
    formData: object,
    link?: string
  },
  totalInvestmentInDollars: number,
  coins: {
    [crypto: string]: {
      total: number,
      currentValueInDollars: number,
      perWallet: {[walletName: string]: number}
      invested: [{
        site: string,
        amount: number
      }]
    }
  },
}

interface FormHandler {
  /**
   * Process data submitted from a Google Form into its corresponding sheet.
   * Each Google Form is associated with a unique FormHandler class.
   */
  processFormData: () => void
}