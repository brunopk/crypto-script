function testOpenSpreadSheetUrl() {
  const spreadSheet = SpreadsheetApp.openById("1Y6qy6BGG52oWgFhTmqo59DhXnrPuLmZuDWiRsTzUJiI")
  console.log(spreadSheet.getDataRange().getValues())
}

function testCompression() {
  const blob = Utilities.newBlob("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  const compressedBlob = Utilities.gzip(blob)
  const blobAsBase64 = Utilities.base64Encode(blob.getBytes())
  const compressedBlobAsbase64 = Utilities.base64Encode(compressedBlob.getBytes())
  console.log(`Size before compression: ${blob.getBytes().length} bytes.`)
  console.log(`Size afeter compression: ${compressedBlob.getBytes().length} bytes.`)
  console.log(`Base 64 encoded version of raw string: ${blobAsBase64}`)
  console.log(`Base 64 encoded version of compressed string: ${compressedBlobAsbase64}`)
}

// TODO: try adding coins (from enum) and reading them correctly as Snapshot object
function testSaveSnapshot() {
  const snapshot: Snapshot = {
    createdAt: new Date(), 
    lastEvent: {
      date: new Date(),
      summary: 'Buying ADA',
      formData: {}
    },
    totalInvestmentInDollars: 100,
    coins: {}
  }
  saveSnapshot(snapshot)
}

function testGetLastSnapshot() {
  const snapshot = getLastSnapshot()
  console.info(snapshot)
}


function testGetPrice() {
  const srcAsset = "ADA"
  const targetAsset = "BUSD"
  const date = new Date()
  const price = getPrice(date, "ADA", "USD")
  console.log(`The price for ${srcAsset}-${targetAsset} at ${date.toISOString()} is ${price}`)
}