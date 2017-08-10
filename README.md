# Czech Computer CZC.cz hlídač cen denní akce na hlavní stránce

## Postup

### 1. Vytvořit Google Tabulku

### 2. List pojmenovat "CZC denní akce"

### 3. Do polí přidat toto vždy následující

**A1** https://www.czc.cz/

**B1** =importxml(A1;"//a[@class='daily-offer-link']/@href")

**C1** =importxml(A1;"//span[@class='price-before']")

**D1** =importxml(A1;"//span[@class='price action']")

**E1** =NOW()

### 4. Do třetího řádku vložte postupně nadpisy třeba takto:
Obchod | URL | akčního zboží |	Původní cena |	Nová cena |	Datum zápisu

<img src="http://jpeg.cz/images/2017/08/09/QHJzC.png">

### 5. Přes Nástroje > Editor skriptů vložit skript

### 6. Nastavit spouštěč přes ikonu "hodin" na:
aktualizace - Řízený časem - Počítadlo dní - 8:00-9:00

### 7. Vytvořit v Tabulce list "Emaily"
Do sloupce A pod sebe vypsat emaily, kam se mají notifikace zasílat

### 8. Nastavit spouštěč přes ikonu "hodin" na:
notification - Řízený časem - Počítadlo dní - 9:00-10:00
