const CHARS = "ABCDEFGHIJKLMNOPQRSTUVYXZ"

const BALANCE_SHEET = "Balance"

const STABLE_COIN_BUSD = "BUSD"
const STABLE_COIN_USDT = "USDT"
const STABLE_COINS = [STABLE_COIN_BUSD, STABLE_COIN_USDT]

const TEMPLATE_ACTION_BUSD_BUY = "Compra de %Q1% BUSD (%F1% USD de fee)."
const TEMPLATE_ACTION_USDT_BUY = "Compra de %Q1% USDT (%F1% USD de fee)."
const TEMPLATE_ACTION_SWAP = "Swap %Q1% %M1% a %Q2% %M2%."


function updateStableCoinSheet(coin, quantity, date, action) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet()
  spreadSheet.setActiveSheet(spreadSheet.getSheetByName(coin))
  
  const range = spreadSheet.getDataRange()
  const totalCell = range.getCell(2, 1)
  const totalUpdated = totalCell.getValue() + quantity
  totalCell.setValue(totalUpdated)
  
  spreadSheet.appendRow(["", date, totalUpdated, action])
  console.log(`New row added on '${coin}' sheet.`)
}

function updateCoinSheet(coin, quantity, date, action, invested) {
  throw new Error('Not implemented.')
}

function updateBalanceSheet(date, action, invested = 0) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet()
  spreadSheet.setActiveSheet(spreadSheet.getSheetByName(BALANCE_SHEET))

  const range = spreadSheet.getDataRange()
  const lastInsertedRow = range.getLastRow()
  const investedCell = range.getCell(lastInsertedRow, 3)
  const newInvestedValue = investedCell.getValue() + invested

  console.log(newInvestedValue)
  
  spreadSheet.appendRow([date, action, newInvestedValue, 0])
  console.log(`New row added on '${BALANCE_SHEET}' sheet.`)

  throw new Error('Continue implementation, calculate balance')
}

/****************************************/

function processInsertedRowOnBuySheet() {
  /* const range = SpreadsheetApp.getActiveRange()
  const date = range.getCell(1, 2).getValue()
  const method = range.getCell(1, 3).getValue()
  const coin = range.getCell(1, 4).getValue()
  const quantity = range.getCell(1, 5).getValue()
  const fees = range.getCell(1, 6).getValue() */

  const fees = 1
  const method = "lala"
  const coin = "BUSD"
  const quantity = 890
  const date = new Date()

  console.log(`Fields: date: ${date}, method: ${method}, coin: ${coin}, quantity: ${quantity}, fees: ${fees}`)

  if(typeof STABLE_COINS.find(s => s === coin) === 'undefined')
    throw new Error(`Wrong stable coin '${coin}', available coins are ${stableCoins}.`)

  const actionTemplate = coin === STABLE_COIN_BUSD ? TEMPLATE_ACTION_BUSD_BUY : TEMPLATE_ACTION_USDT_BUY
  const action = actionTemplate.replace("%Q1%", quantity)
    .replace("%F1%", fees)
  updateStableCoinSheet(coin, quantity, date, action, true)
  
  // update balance sheet
  updateBalanceSheet(date, action, fees + quantity)

  throw new Error('Continue implementation')
}

function processInsertedRowOnMovementsSheet() {
  throw new Error('Not implemented')
}

function processInsertedRowOnSwapSheet() {
  const range = SpreadsheetApp.getActiveRange()
  /*const date = range.getCell(1, 2).getValue()
  const coin1 = range.getCell(1, 3).getValue()
  const quantity1 = range.getCell(1, 4).getValue()
  const coin2 = range.getCell(1, 5).getValue()
  const quantity2 = range.getCell(1, 6).getValue()*/

  const coin1 = "BUSD"
  const quantity1 = 100
  const coin2 = "ADA"
  const quantity2 = 50
  const date = new Date()

  console.log(`Fields: date: ${date}, coin1: ${coin1}, quantity1: ${quantity1}, coin2: ${coin2}, quantity2: ${quantity2}`)

  if(typeof AVAILABLE_COINS.find(s => s === coin1) === 'undefined')
    throw new Error(`Wrong coin1 '${coin1}', available coins are ${AVAILABLE_COINS}.`)
  if(typeof AVAILABLE_COINS.find(s => s === coin2) === 'undefined')
    throw new Error(`Wrong coin1 '${coin2}', available coins are ${AVAILABLE_COINS}.`)
  
  const action = TEMPLATE_ACTION_SWAP.replace("%M1%", coin1)
    .replace("%M2%", coin2)
    .replace("%Q1%", quantity1)
    .replace("%Q2%", quantity2)


  let coin2SheetUpdated = false
  if (typeof STABLE_COINS.find(s => s === coin1) !== 'undefined')
    updateStableCoinSheet(coin1, -quantity1, 0, date, action)
  else if (typeof STABLE_COINS.find(s => s === coin2) !== 'undefined') {
    updateStableCoinSheet(coin2, quantity2, 0, date, action)  
    coin2SheetUpdated = true
  }

  const coin1USDPrice = getPrice(coin1, date)
  if (typeof STABLE_COINS.find(s => s === coin2) === 'undefined') {
    updateCoinSheet(coin2, quantity2, date, action, coin1USDPrice * quantity2)
  } else if (!coin2SheetUpdated) {
    updateStableCoinSheet(coin2, quantity2, 0, date, action) 
  }

  throw new Error('Continue implementation , implement updateStableCoinSheet method, implement updateBalanceSheet method ')
}

/********************************/


// test 


function main() {
  const sheet = SpreadsheetApp.getActiveSheet()
  const sheetName = sheet.getName()

  if (!(sheetName in Object.keys(FORM_HANDLERS)))
    throw new Error(`There's no handler defined to process inserted rows on sheet '${sheetName}'`)

  FORM_HANDLERS[sheetName].processFormData()
}