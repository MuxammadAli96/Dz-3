let num = prompt('Введите число')    
let deg = +prompt('Введиет степень')  
let res=num
num= (!isNaN(num) || num!==0 ? num:'')
deg= (!isNaN(deg) && deg!==0 ? deg:2)


for(i=1; i<deg; i++ ){
   
    res=res*num

}

alert (res)