function getLastSnapshot(): Snapshot {
  if (isSheetEmpty(SNAPSHOTS_SPREADSHEET_ID, SNAPSHOTS_SHEET_NAME))
    return {
      createdAt: new Date(),
      totalInvestmentInDollars: 0,
      coins: {}
    }
  
  const lastRow = getLastRow(SNAPSHOTS_SPREADSHEET_ID, SNAPSHOTS_SHEET_NAME)
  const base64String = lastRow[lastRow.length - 1];
  const decodedString = Utilities.base64Decode(base64String);
  const blob = Utilities.newBlob(decodedString, "application/x-gzip")
  const snapshot = JSON.parse(Utilities.ungzip(blob).getDataAsString()) as Snapshot;

  snapshot.createdAt = new Date(snapshot.createdAt)
  if (typeof snapshot.lastEvent !== 'undefined')
    snapshot.lastEvent.date = new Date(snapshot.lastEvent.date)

  return snapshot
}

// TODO: event type could be a link to the form sheet which represent the event

function saveSnapshot(snapshot: Snapshot) {
  const snapshotStringified = JSON.stringify(snapshot)
  if (typeof snapshot.lastEvent === 'undefined')
    throw new Error(`Last event is undefined in the following snapshot: ${snapshotStringified}`)

  const now = new Date()
  const blob = Utilities.newBlob(snapshotStringified)
  const compressedBlob = Utilities.gzip(blob)

  console.log('Saving snapshot to sheet ...')
  const blobAsBase64 = Utilities.base64Encode(blob.getBytes())
  console.log(`Base 64 size before compression): ${blobAsBase64.length} bytes`)
  const compressedBlobAsBase64 = Utilities.base64Encode(compressedBlob.getBytes())
  console.log(`Base 64 size after compression: ${compressedBlobAsBase64.length} bytes`)
  console.log(`Content type: ${compressedBlob.getContentType()}`)

  const lastEventLink = typeof snapshot.lastEvent.link === 'undefined' ? 'No link' : snapshot.lastEvent.link
  const row = [now, snapshot.lastEvent.date, snapshot.lastEvent.summary, lastEventLink, compressedBlobAsBase64]
  const rowNumber = addRow(SNAPSHOTS_SPREADSHEET_ID, SNAPSHOTS_SHEET_NAME, row)
  
  console.log(`Snapshot correctly saved to row ${rowNumber}.`)
}
