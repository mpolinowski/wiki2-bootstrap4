var ctx = document.getElementById('radar6001_8015');
var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Nightvision [m]', 'Megapixel', 'Power Consumptions [W]', 'IR LEDs', 'Focal Length [mm]'],
        datasets: [{
          label: 'IN-6001 HD',
          backgroundColor: 'rgba(2, 117, 216, 0.5)',
          borderColor: 'rgba(2, 117, 216, 1)',
          data: [7, 1, 7, 4, 4.2],
        }, {
          label: 'IN-8015 HD',
          backgroundColor: 'rgba(240, 173, 78, 0.5)',
          borderColor: 'rgba(240, 173, 78, 1)',
          data: [10, 2, 10, 12, 4.2],
        },],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          },],
        },
      },
    });
