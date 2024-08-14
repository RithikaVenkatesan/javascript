const num=[3,4,5,7];
let sum=0;
for(let i=0;i<num.length;i++)
{
  if(num[i] % 2 != 0)
  {
    sum=sum+num[i]*num[i];
  }
}
console.log(sum);
