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
  var sheetCZC = ss.getSheetByName("CZC denní akce");
  var obchodCZC = sheetCZC.getRange('CZC denní akce!A1').getValue();
  var urlProduktCZC = sheetCZC.getRange('CZC denní akce!B1').getValue();
  var puvodniCenaCZC = sheetCZC.getRange('CZC denní akce!C1').getValue();
  var akcniCenaCZC = sheetCZC.getRange('CZC denní akce!D1').getValue();
  var datumCZC = sheetCZC.getRange('CZC denní akce!E1').getValue();
  sheetCZC.appendRow([obchodCZC,urlProduktCZC,puvodniCenaCZC,akcniCenaCZC,datumCZC]);
  
  var sheetAlza = ss.getSheetByName("Alza denní akce");
  var obchodAlza = sheetAlza.getRange('Alza denní akce!A1').getValue();
  var urlProduktAlza = sheetAlza.getRange('Alza denní akce!B1').getValue();
  var puvodniCenaAlza = sheetAlza.getRange('Alza denní akce!C1').getValue();
  var akcniCenaAlza = sheetAlza.getRange('Alza denní akce!D1').getValue();
  var datumAlza = sheetAlza.getRange('Alza denní akce!E1').getValue();
  sheetAlza.appendRow([obchodAlza,"https://www.alza.cz"+urlProduktAlza,puvodniCenaAlza,akcniCenaAlza,datumAlza]);
}

//funkce denního zasílání
function notification() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetEmaily = ss.getSheetByName("Emaily");
  var sheetCZC = ss.getSheetByName("CZC denní akce");
  var sheetAlza = ss.getSheetByName("Alza denní akce");
  var lastRowEmaily = sheetEmaily.getLastRow();
  var lastRowCZC = sheetCZC.getLastRow();
  var lastRowAlza = sheetAlza.getLastRow();
  var urlProduktCZC = sheetCZC.getRange(lastRowCZC, 2).getValue();
  var puvodniCenaCZC = sheetCZC.getRange(lastRowCZC, 3).getValue();
  var akcniCenaCZC = sheetCZC.getRange(lastRowCZC, 4).getValue();
  
  var urlProduktAlza = sheetAlza.getRange(lastRowAlza, 2).getValue();
  var puvodniCenaAlza = sheetAlza.getRange(lastRowAlza, 3).getValue();
  var akcniCenaAlza = sheetAlza.getRange(lastRowAlza, 4).getValue();

  var emaily = sheetEmaily.getRange(1, 1, lastRowEmaily, 1).getValues();
  var predmet = "Dnešní akční nabídka e-shopů";
  var body = "<strong>Odkaz na zboží: </strong> "+ urlProduktCZC +"<br /> \
<strong>Původní cena: </strong>"+ puvodniCenaCZC +"<br /> \
<h3>Akční cena: "+ akcniCenaCZC +"</h3><br /> \
<p></p> \
<strong>Odkaz na zboží: </strong>"+ urlProduktAlza +"<br /> \
<strong>Původní cena: </strong>"+ puvodniCenaAlza +"<br /> \
<h3>Akční cena: "+ akcniCenaAlza +"</h3><br /> \
";
  GmailApp.sendEmail(emaily,predmet,body, {htmlBody: body});
}