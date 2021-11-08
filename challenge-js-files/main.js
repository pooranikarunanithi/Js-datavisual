//table1 chart placement

document
    .getElementById("table1")
    .insertAdjacentHTML(
        "beforebegin",
        '<canvas id="canvas1" height="500" width="800"></canvas>'
    );


// First Chart (line chart)
var tableData1 = [],
    objTmpl,
    objMap = [];

//removing the Thead to extract data easily
document.getElementById("table1").deleteTHead();

$("table#table1 tr").each(function() {
      
  var $row = $(this),
        key = '';
    
    //console.log($row.children().filter('th'));
    //check if heading
    var $headings = !objTmpl ? $row.children().filter('th'): []; // do this test only if objTmpl is undefined!
    console.log($headings);
    if ( $headings.length > 0 ) {
        objTmpl = {};
        $headings.each(function(index) {
            key = $(this).text().replace(' ', '_'); 
            objTmpl[key] = '';
            objMap[index] = key;
        });
        console.log('heading found', objTmpl, objMap);
    } else {
        // not heading --> data row
        var curRowDataObj = JSON.parse(JSON.stringify(objTmpl)); // copy tmpl.
        
        $row.children().each(function(index) {
            curRowDataObj[objMap[index]] = $(this).text();
        });
        
        tableData1.push(curRowDataObj);
        
        
    }

});


    
let ctx = document.getElementById("canvas1");
let myChart = new Chart(ctx, {

    type: 'line',
    data: {
        labels:tableData1.map(a => a[""]),
        datasets: [
            {
                label: "2002",
                lineTension: 0,
                data:tableData1.map(a => a["2002"].replace(/,/g,".")),
                borderColor: "#998888",
                fill: false
            },
            {
                label: "2003",
                lineTension: 0,
                data:tableData1.map(a => a["2003"].replace(/,/g,".")),
                borderColor: "#754043",
                fill: false
            },
            {
                label: "2004",
                lineTension: 0,
                data:tableData1.map(a => a["2004"].replace(/,/g,".")),
                borderColor: "#9FFFF5",
                fill: false
            },
            {
                label: "2005",
                lineTension: 0,
                data:tableData1.map(a => a["2005"].replace(/,/g,".")),
                borderColor: "#291F1E",
                fill: false
            },
            {
                label: "2006",
                lineTension: 0,
                data:tableData1.map(a => a["2006"].replace(/,/g,".")),
                borderColor: "#F5F749",
                fill: false
            },
            {
                label: "2007",
                lineTension: 0,
                data:tableData1.map(a => a["2007"].replace(/,/g,".")),
                borderColor: "#40376E",
                fill: false
            },
            {
                label: "2008",
                lineTension: 0,
                data:tableData1.map(a => a["2008"].replace(/,/g,".")),
                borderColor: "#104911",
                fill: false
            },
            {
                label: "2009",
                lineTension: 0,
                data:tableData1.map(a => a["2009"].replace(/,/g,".")),
                borderColor: "#AFCBFF",
                fill: false
            },
            {
                label: "2010",
                lineTension: 0,
                data:tableData1.map(a => a["2010"].replace(/,/g,".")),
                borderColor: "#272727",
                fill: false
            },
            {
                label: "2011",
                lineTension: 0,
                data:tableData1.map(a => a["2011"].replace(/,/g,".")),
                borderColor: "#FF858D",
                fill: false
            },
            {
                label: "2012",
                lineTension: 0,
                data:tableData1.map(a => a["2012"].replace(/,/g,".")),
                borderColor: "#3E8914",
                fill: false
            }
            
        ]
    },
    options: {
        indexAxis: 'y',
        bezierCurve: false,
        title: {
          display: true,
          text: 'Offences recorded by the police, 2002-12'
        }
      },
      scales: {
        xAxes: [{
            stacked: false,
            beginAtZero: true,
            scaleLabel: {
                labelString: 'Country'
            },
            ticks: {
                autoSkip: false
            }
        }]
    }

});


//table2 chart placement

document
    .getElementById("table2")
    .insertAdjacentHTML(
        "beforebegin",
        '<canvas id="canvas2" height="500" width="800"></canvas>'
    );

    var tableData2 = [],
    objTmpl2,
    objMap2 = [];

    $("table#table2 tr").each(function() {
        var $row = $(this),
            key = '';
        
        //console.log($row.children().filter('th'));
        //check if heading
        var $headings = !objTmpl2 ? $row.children().filter('th'): []; // do this test only if objTmpl is undefined!
        //console.log($headings);
        if ( $headings.length > 0 ) {
            objTmpl2 = {};
            $headings.each(function(index) {
                key = $(this).text().replace(' ', '_'); 
                objTmpl2[key] = '';
                objMap2[index] = key;
            });
            //console.log('heading found', objTmpl, objMap);
        } else {
            // not heading --> data row
            var curRowDataObj = JSON.parse(JSON.stringify(objTmpl2)); // copy tmpl.
            
            $row.children().each(function(index) {
                curRowDataObj[objMap2[index]] = $(this).text();
            });
            
            tableData2.push(curRowDataObj);
            
            
        }
        
    
    });
    
    let ctx2 = document.getElementById("canvas2");
    let myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: tableData2.map(a => a.Country),
          datasets: [
            {
              label: "2007-2009",
              backgroundColor: "#3e95cd",
              data: tableData2.map(a => a["2007–09"])
            },
            {
              label: "2010–12",
              backgroundColor: "#ffce56",
              data: tableData2.map(a=> a["2010–12"])
            }
    
           
          ]
          
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Homicide'
          },
    
          scales: {
            xAxes: [{
                stacked: false,
                beginAtZero: true,
                scaleLabel: {
                    labelString: 'Country'
                },
                ticks: {
                    stepSize: 1,
                    min: 0,
                    autoSkip: false
                }
            }]
        }
           }
    
    });