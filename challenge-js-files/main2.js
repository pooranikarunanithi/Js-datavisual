// Bar chart
var tableData = [],
    objTmpl,
    objMap = [];

$("table#table2 tr").each(function() {
    var $row = $(this),
        key = '';
    
    //console.log($row.children().filter('th'));
    //check if heading
    var $headings = !objTmpl ? $row.children().filter('th'): []; // do this test only if objTmpl is undefined!
    //console.log($headings);
    if ( $headings.length > 0 ) {
        objTmpl = {};
        $headings.each(function(index) {
            key = $(this).text().replace(' ', '_'); 
            objTmpl[key] = '';
            objMap[index] = key;
        });
        //console.log('heading found', objTmpl, objMap);
    } else {
        // not heading --> data row
        var curRowDataObj = JSON.parse(JSON.stringify(objTmpl)); // copy tmpl.
        
        $row.children().each(function(index) {
            curRowDataObj[objMap[index]] = $(this).text();
        });
        
        tableData.push(curRowDataObj);
        
        
    }
    console.log(tableData);

});

const datatable2=tableData;

//console.log(datatable2.map(a => a.Country));

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: datatable2.map(a => a.Country),
      datasets: [
        {
          label: "2007-2009",
          backgroundColor: "#3e95cd",
          data: datatable2.map(a => a["2007–09"])
        },
        {
          label: "2010–12",
          backgroundColor: "#ffce56",
          data: datatable2.map(a=> a["2010–12"])
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