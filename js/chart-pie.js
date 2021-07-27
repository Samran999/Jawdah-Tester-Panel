$(function(){
    Chart.defaults.global.defaultFontFamily = "Roboto";
	
	// Pie Chart
	
	var ctx = document.getElementById('pieChart').getContext('2d');
	var pieChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Medium Effectiveness', 'Low Effectiveness', 'Critical Effectiveness'],
			datasets: [{
				label: '# of Votes',
				data: [50, 25, 25],
				backgroundColor: [
					'#FF5E7D',
					'#C23FCD',
					'#54B916'
					
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			}
		}
	});
	
});