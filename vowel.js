const strArr=["a","b","c","d","i"];
var count=0;
for(var i=0;i<strArr.length;i++)
    {
        if(strArr[i]=="a"|| strArr[i]=="e" ||strArr[i]=="i" || strArr[i]=="o" ||strArr[i]=="u")
            {
                count+=1;
            }
    }
    console.log(count)
