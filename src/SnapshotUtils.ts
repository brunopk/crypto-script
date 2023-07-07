function getLastSnapshot(): Snapshot {
  // TODO
  throw new Error('Not implemented')
}

// TODO: event type could be a link to the form sheet which represent the event

function saveSnapshot(snapshot: Snapshot) {
  const stringifiedJson = JSON.stringify(snapshot)
  const blob = Utilities.newBlob(stringifiedJson)
  const compressedBlob = Utilities.gzip(blob)

  console.log(`Saving snapshot to sheet '${SNAPSHOTS_SPREADSHEET_NAME}' of spreadsheet '${SNAPSHOTS_SPREADSHEET_ID}' ...`)
  
  // this is used only log size snapshot size (as base 64) before compressing and it may be removed in future
  const blobAsBase64 = Utilities.base64Encode(blob.getBytes())
  console.log(`Base 64 size before compression (string length): ${blobAsBase64.length}`)

  const compressedBlobAsBase64 = Utilities.base64Encode(compressedBlob.getBytes())
  console.log(`Base 64 size after compression: ${compressedBlobAsBase64.length}`)

  const row = [snapshot.createdAt, snapshot.lastEvent.eventDate, snapshot.lastEvent.type, compressedBlobAsBase64]
  const rowNumber = addRow(SNAPSHOTS_SPREADSHEET_ID, SNAPSHOTS_SPREADSHEET_NAME, row)
  console.log(`Snapshot correctly saved to row ${rowNumber}.`)
}