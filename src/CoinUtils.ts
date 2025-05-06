/**
 * Returns the price of a crypto valued into another one at the given date.
 * For instance, for `srcAsset` as `ADA` and `targetAsset` as USD, if the result is 
 * 0.5275808712353446572598034102 it means :
 * 
 *   1 ADA = 0.5275808712353446572598034102 USD
 * 
 * **It is important to note that prices may fluctuate rapidly depending on the time (`date` parameter) of consultation.**
 * 
 * @param date The date for which the price is to be obtained.
 * @param srcAsset A three-letter identifier of the cryptocurrency whose price is to be obtained.
 * @param targetAsset A three-letter identifier of the cryptocurrency or currency in which the result is expressed.
 */
function getPrice(date: Date, srcAsset: string, targetAsset: string): number {
  const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method : "get",
    headers: {
      'X-CoinAPI-Key': COIN_API_API_KEY
    }
  } 
  const response = 
    UrlFetchApp.fetch(`https://rest.coinapi.io/v1/exchangerate/${srcAsset}/${targetAsset}?time=${date.toISOString()}`, params)
  const jsonResponse = JSON.parse(response.getContentText())
  
  return jsonResponse.rate
}