 
    // Location Bar Chart
 
 new Chart(document.getElementById('lineChart1'), {
      type: 'line',
      data: {
        labels: ['Feb 2025', 'Jun 2025', 'Oct 2025', 'Feb 2026'],
        datasets: [{
          label: 'Appointments',
          data: [25, 40, 55, 45],
          borderColor: '#007bff',
          fill: false,
          tension: 0.3
        }]
      },
      options: { responsive: true }
    });
    
   // Location Bar Chart
   


  
