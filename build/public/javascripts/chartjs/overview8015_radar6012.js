var ctx = document.getElementById('radar8015_6012');
var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Nightvision [m]', 'Megapixel', 'Power Consumptions [W]', 'IR LEDs', 'Focal Length [mm]'],
        datasets: [{
          label: 'IN-8015 HD',
          backgroundColor: 'rgba(2, 117, 216, 0.5)',
          borderColor: 'rgba(2, 117, 216, 1)',
          data: [10, 2, 8, 10, 4.2],
        }, {
          label: 'IN-6012 HD',
          backgroundColor: 'rgba(240, 173, 78, 0.5)',
          borderColor: 'rgba(240, 173, 78, 1)',
          data: [10, 1, 8, 12, 8],
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
