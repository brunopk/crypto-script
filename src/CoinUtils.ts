/**
 * Returns the price of the coin in USD at the given date.
 * @param date
 */
function getPrice(date: Date): number {
  const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method : "get",
    headers: {
      'X-CoinAPI-Key': 'A1F3309D-8057-4C92-BEFD-5E65677D3C37'
    }
  } 
  const response = 
    UrlFetchApp.fetch(`https://rest.coinapi.io/v1/exchangerate/BTC/USD?time=${date.toISOString()}`, params)
  const jsonResponse: ExternalAPIs.CoinAPI.ExchangeRate.GetSpecificRateResponse = 
    JSON.parse(response.getContentText())
  
    return jsonResponse.rate
}