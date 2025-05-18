/*1st gen*/
const romance=[
        {image:"https://i.pinimg.com/236x/84/13/ab/8413abee1454165f91d361fd25f3e98a.jpg"},
        {image:"https://i.pinimg.com/236x/48/18/8e/48188e5f4d6969175cce1b35d485c083.jpg"},
        {image:"https://i.pinimg.com/236x/65/4e/fc/654efc2544b8576ac91112693bc29aaa.jpg"},
        {image:"https://i.pinimg.com/736x/6e/01/f2/6e01f255387ba139252ea2b6b7491843.jpg"},
        {image:"https://i.pinimg.com/236x/1f/8a/c0/1f8ac08ff58aad5a639796222c679cc1.jpg"},
        {image:"https://i.pinimg.com/236x/a7/05/e9/a705e9aa4b81b2a9cc795bbd28ae52aa.jpg"},
        {image:"https://i.pinimg.com/236x/64/41/db/6441db0abcd39d03831660c737636762.jpg"},
        {image:"https://i.pinimg.com/236x/08/ad/af/08adaf87ecd144f835edd4b3a6d0d832.jpg"},
  
{image:"https://i.pinimg.com/236x/18/54/aa/1854aaa7d4f86065e3a2873bf4065912.jpg"},
{image:"https://i.pinimg.com/236x/ce/72/99/ce72998edcf94b7f9332ae0d92e1a853.jpg"},
    {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667842973l/63248916.jpg"},
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541887843i/40495957.jpg"},
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566742512i/41150487._SX300_.jpg"},
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1494333138i/33385229.jpg"},
    {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1674065405l/79979208._SY475_.jpg"},
    {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667138448l/61884987.jpg"},
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1467138679i/25883848.jpg"},
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610590051i/49291330.jpg"},
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610867348i/56692357._SX300_.jpg"},
    {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573648325i/44286258._SY180_.jpg"},
  
  ];
const bookCoverElement1 = document.getElementById("book-rom");
const generateButton1 = document.getElementById("generateBtn1");

generateButton1.addEventListener("click", generateRomanceBook);

function generateRomanceBook() {
  
    const randomIndex1 = Math.floor(Math.random() * romance.length);
    const randomBook1 = romance[randomIndex1];

    bookCoverElement1.src = randomBook1.image;
}

generateRomanceBook();

/*2nd gen*/
const fantasy=[
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553624975l/26032912._SY475_.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651710803l/23437156.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1665320073l/62039217.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667514727l/63076974.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574698353i/43900612.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505930101i/35796008.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518109125i/34433755.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1476744953i/28678119.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1606845550i/43473602.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598382979i/50892338.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1592493557i/39897752.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608137538i/54860241._SX300_.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594222283i/53375824.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580958058i/50892212._SY180_.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446829335i/24934065.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549476128i/40024139.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585598504i/52831200._SX300_.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614089954i/48691825.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603387427i/53457092.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612195866i/56645963.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506803153i/36329818.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477740245i/18584855.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1542674036i/42815556.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585578175i/40024121.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610493390i/50531218.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570635620i/41954467.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1469265712i/28374007.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1592844096i/53287234.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570454006i/46223364.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1561485441i/42133479.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615490053i/56623541.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597214105i/54304072.jpg"},
];

const bookCoverElement2 = document.getElementById("book-fan");
const generateButton2 = document.getElementById("generateBtn2");

generateButton2.addEventListener("click", generateFantasyBook);

function generateFantasyBook() {
  
    const randomIndex2 = Math.floor(Math.random() * fantasy.length);
    const randomBook2 = fantasy[randomIndex2];

    bookCoverElement2.src = randomBook2.image;
}

generateFantasyBook();


/*3rd gen*/
const mystery=[
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667412226l/61255301.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1402749479i/16143347.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545494980i/40916679.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686092508l/62334530._SY475_.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615237524i/56200366.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1503002906i/35356380.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1538302455i/40680043.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609412214i/52778487.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603731530i/48896122.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347656787i/11011877.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603748345i/55479332.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633617804i/51260761.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628264264i/58367727.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656447748i/60813624.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649031132i/60316881.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654481748i/61030592.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1665839080i/62098446.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677748975i/63139964.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666714487i/62919174.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666011323i/60757861.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671477934i/63933651._SY180_.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1508532886i/30969755.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1507338175i/35068534.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579764388i/49397758.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484944531i/33956433.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599044636i/48424478.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659757856i/61675933.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1498501619i/29589074.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1526969458i/37859646.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556559178i/34810320.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588497246i/51260845.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607008002i/42603984.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599852132i/49471138.jpg"},
];

const bookCoverElement3 = document.getElementById("book-my");
const generateButton3 = document.getElementById("generateBtn3");

generateButton3.addEventListener("click", generateMysteryBook);

function generateMysteryBook() {
  
    const randomIndex3 = Math.floor(Math.random() * mystery.length);
    const randomBook3 = mystery[randomIndex3];

    bookCoverElement3.src = randomBook3.image;
}

generateMysteryBook();


/*4th gen*/
const historical=[
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636977442i/58733683.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593457992i/35224992.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549121768i/43220998.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565710970i/49934666.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1542719671l/33224061.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1530135391i/39993884.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645458637i/55082799.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1606581757i/41961933.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551892183i/43568394.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590886552i/52857330.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596691040i/52277788.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663963523i/57750279.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618548667i/57752416.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327873479i/7824322.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1507949537i/35883428.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630107564i/56970272.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632836379i/51591653.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624717624i/50201740.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1499452966i/35618351.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1604364370i/55835466.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1412530488i/22822839.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1625498441i/54886974.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1379594717i/110391.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682363376l/63053942.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1445094966i/25902198.jpg"},
];

const bookCoverElement4 = document.getElementById("book-his");
const generateButton4 = document.getElementById("generateBtn4");

generateButton4.addEventListener("click", generateHistoryBook);

function generateHistoryBook() {
  
    const randomIndex4 = Math.floor(Math.random() * historical.length);
    const randomBook4 = historical[randomIndex4];

    bookCoverElement4.src = randomBook4.image;
}

generateHistoryBook();


/*5th gen*/
const horror=[
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544204706i/42505366.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586014657i/51210722.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1670915834i/61492433.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662500006i/62315614.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667474259i/61387989.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685351743i/66087040.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664285565l/61884782.jpg"},
  {image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1674777381l/61884783.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1576001554i/49183687.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1166254258i/10592.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493650191i/15797848.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590166168i/48560025.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1613592358i/52295479.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591526547i/50891838.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1455557048i/28218948.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367312471i/12813630.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1604706650i/49024800.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608739524i/39085455.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403198824i/20757532.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617209945i/56304423.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630498579i/57911600.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624896668i/58447437.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398637405i/9378297.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645106444i/60114406.jpg"},
  {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653086275i/58756502.jpg"},
];

const bookCoverElement5 = document.getElementById("book-hor");
const generateButton5 = document.getElementById("generateBtn5");

generateButton5.addEventListener("click", generateHorrorBook);

function generateHorrorBook() {
  
    const randomIndex5 = Math.floor(Math.random() * horror.length);
    const randomBook5 = horror[randomIndex5];

    bookCoverElement5.src = randomBook5.image;
}

generateHorrorBook();
