# Crypto script

Project to manage personal crypto information using Google App Script, Google Spread Sheets and Google Forms

## Requirements

- Node version: v 16.17.0 LTS
- [Clasp](https://developers.google.com/apps-script/guides/clasp)

## Basic usage

1. Clone repository with `git clone`.
2. Modify the code as needed.
3. Set the corresponding `scriptId` on *.clasp.json*.
4. Login with Clasp: `clasp login`.
5. Push with Clasp: `clasp push`.
6. Configure the activator to run the script when forms are completed.
7. Create spreadsheets (see [Spreadsheets](#spreadsheets)).
8. Configure credentials for [COIN API](https://www.coinapi.io/) (see [COIN API](#coin-api)).
9. Configure constants (see [Configuring constants](#configuring-constants)).
10. Configure form handlers (see [Configuring form handlers](#configuring-form-handlers)).
11. Complete the form.
12. See results on Google Spread Sheets.

This is just for testing or personal use. For more advanced usage, read [this](https://github.com/brunopk/crypto-app-script/blob/main/doc/deployments.md) documentation. Configuration of activators to fire Google Scripts can be done as explained [here](https://user-images.githubusercontent.com/6526093/186764687-1fdcf48b-7691-4872-8a0a-4b557e8c95c9.png).

## Configuring constants

In order to use the script some constants needs to be defined. Some constants are declared in the [Constants.ts](src/Constants.ts) file.

> Avoid uploading constants that points to Google Spread Sheet files to public repositories like GitHub, in order to prevent unwanted access to your Google Drive account.

## Configuring form handlers

Each Google Form is associated with a unique `FormHandler` class, along with constants, all contained in a single file. These files are located in the [src/forms](src/forms/) folder. For each `FormHandler`, there's a constant named with like <HANDLER_NAME>_CONFIG which **must be** edited.

## Spreadsheets

### Snapshots

Snapshots can be thought as the database of the script. Whenever a crypto is moved from one wallet to another bought from a platform like Binance, or any other action which can be done through the forms (Google Forms), a new row will be generated into an specific spread sheet called the **snapshot spread sheet** and the snapshot itself will be saved into an specific column. In order to make this database mechanism work, **two constants must be defined**:

- `SNAPSHOTS_SPREADSHEET_ID`: Google specific ID that points to the spread sheet.
- `SNAPSHOTS_SPREADSHEET_NAME`: Sheet name within the snapshots spread sheet.

Headers for this sheet must be (spanish version) : 

| Marca temporal | Fecha evento | Evento | Link evento | Snapshot |
|--------------|:------------:|:------:|:-----------:|----------|

## Obtaining Google Spread Sheet IDs

Spread sheet IDs can be obtained after opening the spread sheet through Google Drive as indicated in [this](https://github.com/brunopk/crypto-script/blob/draft/doc/screenshot_1.png) image.

## COIN API

[COIN API](https://www.coinapi.io/) is used to obtain cryptocurrency prices. To enable the script to work, you must create API keys. This can be done at: https://customerportal.coinapi.io/apikeys.

Once you have obtained the API key, set the value of `COIN_API_API_KEY` in [Constants.ts](src/Constants.ts) to the previously obtained key.

> It is important to note that prices may fluctuate rapidly depending on the time of consultation..

## Useful links

- [Develop Apps Script using TypeScript](https://developers.google.com/apps-script/guides/typescript)
- [Typescript & Google App Script](https://medium.com/analytics-vidhya/typescript-in-google-app-script-f0f10c7225de)
