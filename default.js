var quoteIndex = -1;
var quoteObject = null;
var decayRate = 85; // greater the number, the slower it appears
var fadeDirection = -1;
var quoteList = new Array();

function nextQuote()
{
    if (quoteObject == null)
    {
        quoteObject = document.getElementById("quote");
    }
    if (quoteObject.style.MozOpacity < Math.max(fadeDirection * 1, 0)
        || quoteObject.style.MozOpacity > Math.max(fadeDirection * 1, 0))
    {
            quoteObject.innerHTML = parseFloat(quoteObject.style.MozOpacity) ;
//        quoteObject.style.MozOpacity = parseFloat(quoteObject.style.MozOpacity) + (fadeDirection * 0.1);
    }
    else if (quoteObject.filters 
        && (quoteObject.filters.alpha.opacity > Math.max(fadeDirection * 100, 0) 
        || quoteObject.filters.alpha.opacity < Math.max(fadeDirection * 100, 0)))
    {
        quoteObject.filters.alpha.opacity += fadeDirection * 4;
    }
    else 
    {
        if (fadeDirection == -1)
        {
            quoteIndex++;
            if (quoteIndex > quoteList.length)
            {
                quoteIndex = 0;
            }
            quoteObject.innerHTML = quoteList[quoteIndex];
        }
        fadeDirection = -fadeDirection;
    }
}

function addQuote(quote)
{
    quoteList[quoteList.length] = quote;
}

function init()
{
//    setTimeout("setInterval(nextQuote, decayRate);", 2000);
}
