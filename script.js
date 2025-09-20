const Numbers = [23, 87, 15, 42, 3, 76, 54, 90, 12, 38, 61, 47, 5, 99, 0, 28, 66, 71, 44, 36, 17, 9, 93, 1, 70, 59, 34, 2, 81, 25];
srotDesc=false;

function SortArr()
{
  if (srotDesc)
    Numbers.sort((a, b) => a - b)
  else
    Numbers.sort((a, b) => b - a);
  srotDesc = !srotDesc;
  
  document.getElementById("arrDiv").innerHTML = Numbers;
  document.getElementById("arrBtn").innerHTML =  srotDesc ? "Desc-Sort" : "Asc-Sort";
}
