function renderChart() {
   if (entries.length === 0) {
        if (incomeExpenseChart !== null) {
            incomeExpenseChart.destroy()
            incomeExpenseChart = null
        }
        return   // nothing to draw
    }
  // Build data arrays from entries
  let labels = entries.map(function (entry) {
    return entry.description;
  });

  let amounts = entries.map(function (entry) {
    return entry.amount;
  });

  let colours = entries.map(function (entry) {
    return entry.type === "income" ? "#22c55e" : "#ef4444";
  });

  // Get the canvas element and context
  let canvas = document.getElementById("incomeExpenseChart");
  let ctx = canvas.getContext("2d");

  // Destroy existing chart before creating a new one
  if (incomeExpenseChart !== null) {
    incomeExpenseChart.destroy();
  }

  // Create and save the new chart
  incomeExpenseChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Amount (₦)",
          data: amounts,
          backgroundColor: colours,
          borderRadius: 6,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#71717a",
          },
          grid: {
            color: "#27272a",
          },
        },
        x: {
          ticks: {
            color: "#71717a",
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
}