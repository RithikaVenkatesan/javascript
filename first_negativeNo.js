num = [1,2,56,-78,-90];
negative_no= 0;
for(i=0;i<num.length;i++)
{
    if (num[i]<0)
    {
        negative_no = num[i];
        break;
    }
}
console.log(negative_no)
