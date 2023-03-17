var options = {
    chart: {
        type: 'area'
    },
    series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000],
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: 0,
                fontFamily: 0,
            },
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            //shade: 'dark',
            //type: "horizontal",
            shadeIntensity: 1,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
            colorStops: []
        }

    },


}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();