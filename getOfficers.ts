import * as dotenv from 'dotenv';
import { google } from 'googleapis';

// .env config
dotenv.config();
const SPREADSHEET_ID = process.env.OFFICERS_SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '{}';

async function getOfficerData(): Promise<Map<string, Map<string, string>[]>>{
    const sheets = google.sheets({version: 'v4'});

    // Get JWT Token to access sheet
    const service_account = JSON.parse(SERVICE_ACCOUNT);
    const jwtClient = new google.auth.JWT(
        service_account.client_email,
        '',
        service_account.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    jwtClient.authorize(function(err) {
        if (err) {
            throw err;
        }
    });

    // Get officer data from google spreadsheets
    const res = await sheets.spreadsheets.values.get({
        auth: jwtClient,
        spreadsheetId: SPREADSHEET_ID,
        range: 'Officers'
    });
    const rows = res?.data.values;
    if(!rows || rows.length == 0) {
        throw new Error('Error: no data found');
    }

    // Map committee names in the spreadsheet to more concise names
    // Ignore board as it's not a committee
    const committees = new Map<string, string>([
        ['AI', 'ai'],
        ['Cyber', 'cyber'],
        ['Design', 'design'],
        ['Game Studio', 'studio'],
        ['Hack', 'hack'],
        ['ICPC', 'icpc'],
        ['Teach LA', 'teachla'],
        ['W', 'w']
    ]);


    // Store officer data
    const officerData = new Map<string, Map<string, string>[]>(); // map committees to list of officers

    let currCommittee = '';
    let officerID = 1;
    rows.forEach(row => {
        if (row.length == 0) // empty row
            return;
        if (row.length == 1) { // row with only committee name
            const committee = row[0];
            currCommittee = committees.get(committee) ?? ''; // empty string means ACM Board
            return;
        }
        if (!currCommittee) // skip all rows for ACM Board
            return;

        const officer = new Map<string, string>([
            ['id', officerID],
            ['position', row[0]],
            ['name', row[1]],
            ['pronouns', row[2]],
            ['email', row[3]],
            ['github', row[9]],
        ]);
        if (officerData.has(currCommittee))
            officerData.get(currCommittee)?.push(officer);
        else
            officerData.set(currCommittee, [officer]);
        officerID++;
    });

    return officerData;
}

export default getOfficerData;