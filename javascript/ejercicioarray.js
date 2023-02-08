var array  = [5,10,25,58,12,80,90,100,1000,8,6,20];
var maximo = 0;

for(var i=0,len=array .length;i<len;i++){
    console.log(array[i]);
    if(maximo < array [i]){
        maximo = array [i];
    }
}
document.write('el numero mayor es '+maximo);
