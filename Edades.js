const edades=[5,16,9,52,17,23,11,69,27,40,16,18]
var cuadraNon=[]
sumaPar=0
for(i=0;i<edades.length;i++){
    if(edades[i]%2==0){
        sumaPar=sumaPar+edades[i]
    }
    else{
        cuadraNon[i]=edades[i]
        console.log(cuadraNon[i])
    }
}
console.log(sumaPar)
