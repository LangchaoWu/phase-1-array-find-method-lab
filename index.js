// code your solution here
function superbowlWin(record){
    let found=record.find(function (obj){
            return obj.result=="W";  
    });
    
    if(found !=undefined) return found.year;
    
}