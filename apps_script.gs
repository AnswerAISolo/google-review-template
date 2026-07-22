/**
 * 收評論表單 — 資料收集後端（Google Apps Script）
 * 作用：把表單送來的每一筆回饋，自動寫進這份 Google 試算表。
 * 部署方式見 SETUP_數據後台.md。
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var d = JSON.parse(e.postData.contents);
    // 第一次先寫標題列
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['時間', '教練/服務人員', '評分', '滿意項目', '留言', '去向(google/內部)']);
    }
    sheet.appendRow([
      new Date(),
      d.staff || '',
      d.score || '',
      (d.tags || []).join('、'),
      d.note || '',
      d.route || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, err: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
