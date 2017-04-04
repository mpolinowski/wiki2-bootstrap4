var ctx = document.getElementById('nightvision5905');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-5905 HD', 'IN-6014 HD', 'IN-3011', 'IN-9008 HD', 'IN-7011 HD', 'IN-5907 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Nightvision min. [m]',
                data: [12, 5, 8, 12, 8, 18],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            {
                type: 'bar',
                label: 'Nightvision max. [m]',
                data: [20, 10, 12, 20, 12, 25],
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
