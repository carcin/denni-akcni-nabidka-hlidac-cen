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
  var sheet = ss.getSheetByName("CZC denní akce");
  var obchod = sheet.getRange('CZC denní akce!A1').getValue();
  var urlProdukt = sheet.getRange('CZC denní akce!B1').getValue();
  var puvodniCena = sheet.getRange('CZC denní akce!C1').getValue();
  var akcniCena = sheet.getRange('CZC denní akce!D1').getValue();
  var datum = sheet.getRange('CZC denní akce!E1').getValue();
  sheet.appendRow([obchod,urlProdukt,puvodniCena,akcniCena,datum]);
}

//funkce denního zasílání
function notification() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetEmaily = ss.getSheetByName("Emaily");
  var sheet = ss.getSheetByName("CZC denní akce");
  var lastRow = sheetEmaily.getLastRow();
  var urlProdukt = sheet.getRange(lastRow, 2).getValue();
  var puvodniCena = sheet.getRange(lastRow, 3).getValue();
  var akcniCena = sheet.getRange(lastRow, 4).getValue();

  var emaily = sheetEmaily.getRange(1, 1, lastRow, 1).getValues();
  var predmet = "Dnešní akční nabídka CZC";
  var body = "<strong>Odkaz na zboží: </strong> "+ urlProdukt +"<br /> \
<strong>Původní cena: </strong>"+ puvodniCena +"<br /> \
<h3>Akční cena: "+ akcniCena +"</h3><br /> \
";
  GmailApp.sendEmail(emaily,predmet,body, {htmlBody: body});
}