// Bar chart
var tableData = [],
    objTmpl,
    objMap = [];

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
        
        tableData.push(curRowDataObj);
        
        
    }

});


const datatable1=tableData;


new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels:datatable1.map(a => a[""]),
        datasets: [
            {
                label: "2002",
                lineTension: 0,
                data:datatable1.map(a => a["2002"].replace(/,/g,".")),
                borderColor: "#998888",
                fill: false
            },
            {
                label: "2003",
                lineTension: 0,
                data:datatable1.map(a => a["2003"].replace(/,/g,".")),
                borderColor: "#754043",
                fill: false
            },
            {
                label: "2004",
                lineTension: 0,
                data:datatable1.map(a => a["2004"].replace(/,/g,".")),
                borderColor: "#9FFFF5",
                fill: false
            },
            {
                label: "2005",
                lineTension: 0,
                data:datatable1.map(a => a["2005"].replace(/,/g,".")),
                borderColor: "#291F1E",
                fill: false
            },
            {
                label: "2006",
                lineTension: 0,
                data:datatable1.map(a => a["2006"].replace(/,/g,".")),
                borderColor: "#F5F749",
                fill: false
            },
            {
                label: "2007",
                lineTension: 0,
                data:datatable1.map(a => a["2007"].replace(/,/g,".")),
                borderColor: "#40376E",
                fill: false
            },
            {
                label: "2008",
                lineTension: 0,
                data:datatable1.map(a => a["2008"].replace(/,/g,".")),
                borderColor: "#104911",
                fill: false
            },
            {
                label: "2009",
                lineTension: 0,
                data:datatable1.map(a => a["2009"].replace(/,/g,".")),
                borderColor: "#AFCBFF",
                fill: false
            },
            {
                label: "2010",
                lineTension: 0,
                data:datatable1.map(a => a["2010"].replace(/,/g,".")),
                borderColor: "#272727",
                fill: false
            },
            {
                label: "2011",
                lineTension: 0,
                data:datatable1.map(a => a["2011"].replace(/,/g,".")),
                borderColor: "#FF858D",
                fill: false
            },
            {
                label: "2012",
                lineTension: 0,
                data:datatable1.map(a => a["2012"].replace(/,/g,".")),
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
          text: 'World population per region (in millions)'
        }
      }
    


});


