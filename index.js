var jsonfile = {
    "jsonarray": [
        {
          "day": "mon",
          "amount": 17.45
        },
        {
          "day": "tue",
          "amount": 34.91
        },
        {
          "day": "wed",
          "amount": 52.36
        },
        {
          "day": "thu",
          "amount": 31.07
        },
        {
          "day": "fri",
          "amount": 23.39
        },
        {
          "day": "sat",
          "amount": 43.28
        },
        {
          "day": "sun",
          "amount": 25.48
        }
      ]
 };

 var labels = jsonfile.jsonarray.map(function(e) {
    return e.day;
 });
 var data = jsonfile.jsonarray.map(function(e) {
    return e.amount;
 });;

var ctx = canvas.getContext('2d');
var config = {
   type: 'bar',
   data: {
      labels: labels,
      datasets: [{
         label: 'Graph Line',
         data: data,
         backgroundColor: ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)',
         'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)',
         'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)']
      }]
   },
   options: {
    legend: { display: false },
    title: {
        display: false,
        text: 'Expenses Data'
    }
}
};

ctx.fillStyle = 'white';

var chart = new Chart(ctx, config);