
      //pie
      var ctxP = document.getElementById("pieChart").getContext('2d');
      var all=parseInt(document.getElementById("count").textContent)
      var pending=parseInt(document.getElementById("pending").textContent)
      var placed=parseInt(document.getElementById("placed").textContent)
     
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["Pending", "Placed", "Total"],
          datasets: [{
            data: [pending,placed,all],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
          }]
        },
        options: {
          responsive: true
        }
      });
      