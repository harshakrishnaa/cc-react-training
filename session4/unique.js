let values=["green","green","red","red","yellow","pink","pink","yellow"];
function  unique(arr){
    return [...new Set(arr)];
}
unique(values);
