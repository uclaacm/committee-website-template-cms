"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
var dotenv = require("dotenv");
var googleapis_1 = require("googleapis");
// .env config
dotenv.config();
var SPREADSHEET_ID = process.env.OFFICERS_SPREADSHEET_ID;
var SERVICE_ACCOUNT = (_a = process.env.SERVICE_ACCOUNT) !== null && _a !== void 0 ? _a : '{}';
function getOfficerData(committeeName) {
    return __awaiter(this, void 0, void 0, function () {
        var sheets, service_account, jwtClient, res, rows, committees, officers, currCommittee, officerID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sheets = googleapis_1.google.sheets({ version: 'v4' });
                    service_account = JSON.parse(SERVICE_ACCOUNT);
                    jwtClient = new googleapis_1.google.auth.JWT(service_account.client_email, '', service_account.private_key, ['https://www.googleapis.com/auth/spreadsheets']);
                    jwtClient.authorize(function (err) {
                        if (err) {
                            throw err;
                        }
                    });
                    return [4 /*yield*/, sheets.spreadsheets.values.get({
                            auth: jwtClient,
                            spreadsheetId: SPREADSHEET_ID,
                            range: 'Officers'
                        })];
                case 1:
                    res = _a.sent();
                    rows = res === null || res === void 0 ? void 0 : res.data.values;
                    if (!rows || rows.length == 0) {
                        throw new Error('Error: no data found');
                    }
                    committees = new Map([
                        ['AI', 'ai'],
                        ['Cyber', 'cyber'],
                        ['Design', 'design'],
                        ['Game Studio', 'studio'],
                        ['Hack', 'hack'],
                        ['ICPC', 'icpc'],
                        ['Teach LA', 'teachla'],
                        ['W', 'w'],
                    ]);
                    officers = [];
                    currCommittee = '';
                    officerID = 1;
                    rows.forEach(function (row) {
                        var _a, _b, _c, _d, _e, _f;
                        if (row.length == 0)
                            // empty row
                            return;
                        if (row.length == 1) {
                            // row with only committee name
                            var committee = row[0];
                            currCommittee = (_a = committees.get(committee)) !== null && _a !== void 0 ? _a : ''; // empty string means ACM Board
                            return;
                        }
                        if (currCommittee != committeeName)
                            // skip all rows other than desired committee
                            return;
                        // push row data into officers list
                        var image = row[10];
                        if (!image) {
                            image = '/acm-logo-wordmark-extended.png';
                        }
                        else if (image.includes('drive.google.com')) {
                            var fileID = image.match(/\/file\/d\/(.+?)\//)[1];
                            image = "https://drive.google.com/uc?export=download&id=".concat(fileID);
                        }
                        // create officer
                        var officer = {
                            id: officerID,
                            position: (_b = row[0]) !== null && _b !== void 0 ? _b : null,
                            name: (_c = row[1]) !== null && _c !== void 0 ? _c : null,
                            pronouns: (_d = row[2]) !== null && _d !== void 0 ? _d : null,
                            email: (_e = row[3]) !== null && _e !== void 0 ? _e : null,
                            github: (_f = row[9]) !== null && _f !== void 0 ? _f : null,
                            imageURL: image !== null && image !== void 0 ? image : null
                        };
                        officers.push(officer);
                        officerID++;
                    });
                    return [2 /*return*/, officers];
            }
        });
    });
}
exports["default"] = getOfficerData;
