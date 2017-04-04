var ctx = document.getElementById('angleofview7011');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-7011 HD', 'IN-6014 HD', 'IN-3011', 'IN-9008 HD', 'IN-5907 HD', 'IN-5905 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Diagonal Angle [°]',
                data: [56.8, 75.3, 45.9, 72.3, 44.1, 78.1],
                backgroundColor: '#373a3c',
              },
							{
                type: 'bar',
                label: 'Horizontal Angle [°]',
                data: [48.2, 64.0, 36.8, 61.4, 37.5, 66.3],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            	{
                type: 'bar',
                label: 'Vertical Angle [°]',
                data: [29.9, 39.7, 28.4, 38.1, 23.3, 41.2],
                backgroundColor: 'rgba(240, 173, 78, 1)',
              },
        ],
      },
		  options: {
      legend: {
        display: false,
      },
		    scales: {
		      yAxes: [{
		        ticks: {
              max: 100,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
