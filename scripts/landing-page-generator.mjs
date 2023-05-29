import fs from 'fs';
import { resolve } from 'path';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import {
  getCssStringFromCommittee,
  generateCommittee,
} from './lib.mjs';

// .env config
dotenv.config();
const SPREADSHEET_ID = process.env.LANDING_SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';

// Week one MONDAY of the quarter (y, m (base 0), d)
const FIRST_DAY_OF_QUARTER = new Date(2023, 0, 9);
const DAYS_OF_WEEK = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];
//Grab main information to be displayed
//and write to output.json
async function getCommitteeInfo(name) {
  const committees = await getGoogleSheetData('committee info!A:I');
  const committee = [];
  //get committee
  for (const row of committees) {
    //Skip header rows and example
    if (
      row.length < 5 ||
      row[0] === 'Committee' ||
      row[0].includes('Example:') ||
      row[0] != name
    ) {
      continue;
    }
    try {
      return generateCommittee({
        committee: row[0],
        name: row[1],
        subtitle: row[2],
        description: row[3],
        logoLink: row[4],
        dcLink: row[5],
        igLink: row[6],
        email: row[7],
        color: row[8],
      });
    } catch (err) {
      console.error(`Error ${err} on committee ${row}`);
    }
  }

  return committee;
}

////////////////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////////////////

// Read data from Google sheets
// using sheet range (eg: 'Week 1!A:H)
async function getGoogleSheetData(range) {
  const sheets = google.sheets({ version: 'v4' });

  // Get JWT Token to access sheet
  console.log(SERVICE_ACCOUNT);
  const service_account = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    service_account.client_email,
    '',
    service_account.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
  jwtClient.authorize(function (err) {
    if (err) {
      throw err;
    }
  });

  // Get data from Google spreadsheets
  const res = await sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: SPREADSHEET_ID,
    range: range,
  });
  const rows = res?.data.values;
  if (!rows || rows.length == 0) {
    console.log('Error: no data found');
    return [];
  }

  // // Replacing the new lines with <br/> (doesnt work tho)
  // const formatRows = rows.map((row) => row.map( (r) => r.replace(/\n/g, '<br/>')));
  // return formatRows;

  return rows;
}

// write events (list of event jsons) to output.json
function writeToOutput(events) {
  // Write to output.json
  const out = JSON.stringify(events);
  fs.writeFile('output.json', out, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('Output successfully saved to output.json');
  });
}

export default getCommitteeInfo;
