var ctx = document.getElementById('nightvision6001');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-6001 HD', 'IN-6012 HD', 'IN-3011', 'IN-9008 HD', 'IN-5907 HD', 'IN-5905 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Nightvision min. [m]',
                data: [5, 5, 8, 12, 18, 12],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            {
                type: 'bar',
                label: 'Nightvision max. [m]',
                data: [7, 10, 12, 20, 25, 20],
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
              max: 30,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
