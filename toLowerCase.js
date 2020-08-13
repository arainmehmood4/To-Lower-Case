/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) 
{
    str=str.split("");
    for(var i=0; i<str.length; i++)
        {
            var abc=97 ;
            for(var ABC=65;  ABC<=90; ABC++, abc++)
                {
                    if(str[i]==String.fromCharCode(ABC))
                    {
                        str[i]=String.fromCharCode(abc);
                        break;
                    }     
                }
        }
    return str.join("");
    
};
