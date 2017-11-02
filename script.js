//Created 10/13/17 by Aiden Le

function firstLast6(x)
{
    if(x[0] == 6)
    {
        return true;
    }
    if(x[x.length - 1] == 6)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function has23(x)
{
    var first = x[0];
    var second = x[1];

    if(first == 2 || first == 3 || second == 2 || second == 3)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function fix23(x)
{
    for(var i = 0; i < 3; i++)
    {
        if(x[i] == 2 && x[i + 1] == 3)
        {
            x[i + 1] = 0;
        }
    }
    return x;
}
function countYZ(x)
{
    var count = 0;
    for(var i = 0; i < x.length; i ++)
    {
        if((x[i] === "y" || x[i] === "Y") && (x[i+1] === " " || i+1 === x.length))
        {
            count += 1;
        }
        if((x[i] === "z" || x[i] === "Z") && (x[i+1] === " " || i+1 === x.length))
        {
            count += 1;
        }
    }
    return count;
}
function endOther(x, y)
{
    var stone = x.toLowerCase();
    var stwo = y.toLowerCase();

    if(stone.endsWith(stwo))
    {
        return true;
    }
    return stwo.endsWith(stone);
}
function starOut(x)
{
    var sansStar = "";
    for(var i = 0; i < x.length; i++)
    {
        if(x[i] != "*" && x[i - 1] != "*" && x[i + 1] != "*")
        {
            sansStar += x[i];
        }
    }
    return sansStar;
}
function getSandwich(sandwich)
{
    var topBread = sandwich.indexOf("bread");
    var bottBread = sandwich.lastIndexOf("bread");
    var inside = "";
    for(var i = topBread + 5; i < bottBread; i++)
    {
        inside += sandwich[i];
    }
    return inside;
}
function canBalance(x)
{
    ultSum = 0;
    for(var i = 0; i < x.length; i++)
    {
        ultSum += x[i];
    }
    divSum = ultSum / 2;
    checkSum = 0;
    for(var f = 0; f < x.length; f++)
    {
        checkSum += x[f];
        if(checkSum == divSum)
        {
            return true;
        }
    }
    return false;
}
function countClumps(x)
{
    var clumps = 0;
    for(var i = 0; i < x.length; i++)
    {
        if(x[i] == x[i+1] && x[i] == x[i+2])
        {
            clumps -= 1;
        }
        if(x[i] == x[i+1])
        {
            clumps += 1;
        }

    }
    return clumps;
}
function evenlySpaced(x, y, z)
{
    var array = [x, y, z];
    array = array.sort();
    var smD = array[1] - array[0];
    var mlD = array[2] - array[1];
    return smD === mlD;
}

function tester()
{

    document.getElementById("output2").innerHTML = countClumps([1, 1, 1, 1, 1]);

}

