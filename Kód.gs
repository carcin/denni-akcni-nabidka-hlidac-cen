// menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Aktualizace')
      .addItem('Aktualizuj','aktualizace')
      .addToUi();
}
 
// funkce na uložení dat z webu
function aktualizace() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var obchod = sheet.getRange('CZC denní akce!A1').getValue();
  var urlProdukt = sheet.getRange('CZC denní akce!B1').getValue();
  var puvodniCena = sheet.getRange('CZC denní akce!C1').getValue();
  var akcniCena = sheet.getRange('CZC denní akce!D1').getValue();
  var datum = sheet.getRange('CZC denní akce!E1').getValue();
  sheet.appendRow([obchod,urlProdukt,puvodniCena,akcniCena,datum]);
}