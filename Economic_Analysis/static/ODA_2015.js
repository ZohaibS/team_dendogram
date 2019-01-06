function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    var data = google.visualization.arrayToDataTable([
  ['Location','Parent', '2015 Estimated ODA Receival (in Millions of USD)'],
  ['Global', null, 0],
  ['East Asia & Pacific','Global',8493.16],
  ['Europe & Central Asia','Global',8538.88],
  ['Latin America & Caribbean','Global',9067],
  ['Middle East & North Africa','Global',24292.85],
  ['South Asia','Global',15610.59],
  ['Sub-Saharan Africa','Global',45786.29],
  ['Korea  Dem. People’s Rep.','East Asia & Pacific',131.52],
  ['Cambodia','East Asia & Pacific',679.05],
  ['China','East Asia & Pacific',-329.09],
  ['Fiji','East Asia & Pacific',102.48],
  ['Indonesia','East Asia & Pacific',-33.56],
  ['Kiribati','East Asia & Pacific',64.95],
  ['Lao PDR','East Asia & Pacific',471.08],
  ['Malaysia','East Asia & Pacific',-0.61],
  ['Marshall Islands','East Asia & Pacific',57.06],
  ['Micronesia  Fed. Sts.','East Asia & Pacific',81.39],
  ['Mongolia','East Asia & Pacific',236.33],
  ['Myanmar','East Asia & Pacific',1168.6],
  ['Nauru','East Asia & Pacific',31.25],
  ['Palau','East Asia & Pacific',13.93],
  ['Papua New Guinea','East Asia & Pacific',591.37],
  ['Philippines','East Asia & Pacific',515.7],
  ['Samoa','East Asia & Pacific',93.72],
  ['Solomon Islands','East Asia & Pacific',190.03],
  ['Thailand','East Asia & Pacific',58.36],
  ['Timor-Leste','East Asia & Pacific',212.29],
  ['Tonga','East Asia & Pacific',68.4],
  ['Tuvalu','East Asia & Pacific',49.65],
  ['Vanuatu','East Asia & Pacific',186.56],
  ['Vietnam','East Asia & Pacific',3157.1],
  ['Albania','Europe & Central Asia',333.59],
  ['Armenia','Europe & Central Asia',347.47],
  ['Azerbaijan','Europe & Central Asia',69.67],
  ['Belarus','Europe & Central Asia',104.58],
  ['Bosnia and Herzegovina','Europe & Central Asia',355.05],
  ['Georgia','Europe & Central Asia',448.91],
  ['Kazakhstan','Europe & Central Asia',82.45],
  ['Kosovo','Europe & Central Asia',437.8],
  ['Kyrgyz Republic','Europe & Central Asia',769.99],
  ['Macedonia','Europe & Central Asia',214.31],
  ['Moldova','Europe & Central Asia',312.58],
  ['Montenegro','Europe & Central Asia',99.96],
  ['Serbia','Europe & Central Asia',312.48],
  ['Tajikistan','Europe & Central Asia',426.32],
  ['Turkey','Europe & Central Asia',2145.42],
  ['Turkmenistan','Europe & Central Asia',23.6],
  ['Ukraine','Europe & Central Asia',1449.44],
  ['Uzbekistan','Europe & Central Asia',447.89],
  ['Antigua and Barbuda','Latin America & Caribbean',1.49],
  ['Argentina','Latin America & Caribbean',-18.67],
  ['Belize','Latin America & Caribbean',28.27],
  ['Bolivia','Latin America & Caribbean',791.27],
  ['Brazil','Latin America & Caribbean',1003.04],
  ['Chile','Latin America & Caribbean',54.35],
  ['Colombia','Latin America & Caribbean',1355.71],
  ['Costa Rica','Latin America & Caribbean',111.3],
  ['Cuba','Latin America & Caribbean',552.78],
  ['Dominica','Latin America & Caribbean',11.71],
  ['Dominican Republic','Latin America & Caribbean',279.95],
  ['Ecuador','Latin America & Caribbean',318.21],
  ['El Salvador','Latin America & Caribbean',89.7],
  ['Grenada','Latin America & Caribbean',24.1],
  ['Guatemala','Latin America & Caribbean',411.35],
  ['Guyana','Latin America & Caribbean',32.14],
  ['Haiti','Latin America & Caribbean',1045.83],
  ['Honduras','Latin America & Caribbean',540.52],
  ['Jamaica','Latin America & Caribbean',59.08],
  ['Mexico','Latin America & Caribbean',321.02],
  ['Nicaragua','Latin America & Caribbean',457.92],
  ['Panama','Latin America & Caribbean',10.24],
  ['Paraguay','Latin America & Caribbean',60.15],
  ['Peru','Latin America & Caribbean',334.79],
  ['St. Lucia','Latin America & Caribbean',13.76],
  ['St. Vincent and the Grenadines','Latin America & Caribbean',13.5],
  ['Suriname','Latin America & Caribbean',15.98],
  ['Uruguay','Latin America & Caribbean',23.16],
  ['Venezuela  RB','Latin America & Caribbean',36.45],
  ['Algeria','Middle East & North Africa',87.32],
  ['Djibouti','Middle East & North Africa',169.56],
  ['Egypt  Arab Rep.','Middle East & North Africa',2499.19],
  ['Iran  Islamic Rep.','Middle East & North Africa',111.1],
  ['Iraq','Middle East & North Africa',1482.91],
  ['Jordan','Middle East & North Africa',2151.89],
  ['Lebanon','Middle East & North Africa',974.91],
  ['Libya','Middle East & North Africa',157.37],
  ['Morocco','Middle East & North Africa',1481.58],
  ['Syrian Arab Republic','Middle East & North Africa',4889.83],
  ['Tunisia','Middle East & North Africa',474.51],
  ['West Bank and Gaza','Middle East & North Africa',1871.23],
  ['Yemen  Rep.','Middle East & North Africa',1531.26],
  ['Afghanistan','South Asia',4237.3],
  ['Bangladesh','South Asia',2569.54],
  ['Bhutan','South Asia',97.28],
  ['India','South Asia',3167.91],
  ['Maldives','South Asia',26.83],
  ['Nepal','South Asia',1224.77],
  ['Pakistan','South Asia',3747.84],
  ['Sri Lanka','South Asia',427.29],
  ['Angola','Sub-Saharan Africa',380.01],
  ['Benin','Sub-Saharan Africa',430.12],
  ['Botswana','Sub-Saharan Africa',65.55],
  ['Burkina Faso','Sub-Saharan Africa',996.99],
  ['Burundi','Sub-Saharan Africa',366.56],
  ['Cabo Verde','Sub-Saharan Africa',152.82],
  ['Cameroon','Sub-Saharan Africa',663.11],
  ['Central African Republic','Sub-Saharan Africa',486.75],
  ['Chad','Sub-Saharan Africa',606.61],
  ['Comoros','Sub-Saharan Africa',65.78],
  ['Congo Dem. Rep.','Sub-Saharan Africa',2599.07],
  ['Congo  Rep.','Sub-Saharan Africa',88.82],
  ['Cote dIvoire','Sub-Saharan Africa',653.05],
  ['Equatorial Guinea','Sub-Saharan Africa',7.49],
  ['Eswatini','Sub-Saharan Africa',92.63],
  ['Ethiopia','Sub-Saharan Africa',3233.89],
  ['Gabon','Sub-Saharan Africa',98.79],
  ['Gambia','Sub-Saharan Africa',107.68],
  ['Ghana','Sub-Saharan Africa',1768.61],
  ['Guinea','Sub-Saharan Africa',538.07],
  ['Guinea-Bissau','Sub-Saharan Africa',95.04],
  ['Kenya','Sub-Saharan Africa',2464.32],
  ['Lesotho','Sub-Saharan Africa',83.14],
  ['Liberia','Sub-Saharan Africa',1094.44],
  ['Madagascar','Sub-Saharan Africa',676.86],
  ['Malawi','Sub-Saharan Africa',1049.32],
  ['Mali','Sub-Saharan Africa',1204.06],
  ['Mauritania','Sub-Saharan Africa',317.98],
  ['Mauritius','Sub-Saharan Africa',78.42],
  ['Mozambique','Sub-Saharan Africa',1814.81],
  ['Namibia','Sub-Saharan Africa',142.38],
  ['Niger','Sub-Saharan Africa',867.91],
  ['Nigeria','Sub-Saharan Africa',2431.46],
  ['Rwanda','Sub-Saharan Africa',1085.39],
  ['Sao Tome and Principe','Sub-Saharan Africa',48.95],
  ['Senegal','Sub-Saharan Africa',879.15],
  ['Seychelles','Sub-Saharan Africa',6.78],
  ['Sierra Leone','Sub-Saharan Africa',946.31],
  ['Somalia','Sub-Saharan Africa',1253.4],
  ['South Africa','Sub-Saharan Africa',1420.43],
  ['South Sudan','Sub-Saharan Africa',1674.79],
  ['Sudan','Sub-Saharan Africa',864.55],
  ['Tanzania','Sub-Saharan Africa',2582.47],
  ['Togo','Sub-Saharan Africa',199.59],
  ['Uganda','Sub-Saharan Africa',1628.28],
  ['Zambia','Sub-Saharan Africa',797.14],
  ['Zimbabwe','Sub-Saharan Africa',788.24]
    ]);
    var options = {
  highlightOnMouseOver: true,
  maxDepth: 1,
  maxPostDepth: 2,
  minHighlightColor: '#ffcccc',
  midHighlightColor: '#ff9999',
  maxHighlightColor: '#ff4d4d',
  minColor: '#ffc6b3',
  midColor: '#ff794d',
  maxColor: '#b32d00',
  minColorValue: '5',
  midColorValue: '1250',
  maxColorValue: '5500',
  headerHeight: 15,
  showScale: true,
  generateTooltip: showFullTooltip,
  height: 400,
  width: 400,
  useWeightedAverageForAggregation: true,
  };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.TreeMap(document.getElementById('2015_Total'));
    chart.draw(data, options);
  
    function showFullTooltip(row, size, value) {
  return '<div style="background:#fd9; padding:10px; border-style:solid">' +
   '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
   '</b> <br>Official Development Assistance Recieved (in millions of USD):' + data.getValue(row, 2) + '</span><br>' +
  ' </div>';
  }
  
  
  }
  google.charts.setOnLoadCallback(drawChart);