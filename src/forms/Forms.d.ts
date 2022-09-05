// TODO: continue defining types for other forms

declare type SwapForm = {
  name: string,
  fields: {
    crypto1: {
      name: string,
      columnIndex: number
    },
  }
}


declare type SwapData = {

}


/*declare type FormDefinition = {
  MOVEMENTS: {
    NAME: string
  },
  BUYS: {
    NAME: string
  },
  SWAPS: {
    NAME: string
  },
  LOSS: {
    NAME: string
  },
  STAKING: {
    NAME: string
  }
}*/


declare namespace Main {
  type Form = {
    [name: string]: FormDefinition
  }
}
