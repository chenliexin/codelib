
var dataBound = container.selectAll('.classed')
    .data(data);
dataBound
  .exit()
  .remove();
var enterSelection = dataBound
  .enter()
  .append('g')
  .classed('classed', true);


d3.csv('filename.csv',
(error, data) => {
   if (error) {
       console.error(error);
   } else {
       ${console.log(data);}
   }
});
d3.select('')