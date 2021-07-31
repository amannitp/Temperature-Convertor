let faren=document.getElementById('btn1');
let ranki=document.getElementById('btn2');
let cel=document.getElementById('btn3');
let centi=document.getElementById('btn4');
let kel=document.getElementById('btn5');
let tempFaren=document.getElementById('Faren');
let tempranki=document.getElementById('Ranki');
let tempCel=document.getElementById('Cel');
let tempCenti=document.getElementById('Centi');
let tempKel=document.getElementById('Kel');

faren.addEventListener('click',function(){
    let f=tempFaren.value;
    let r=Number(f)+459.67;
    if(!Number.isInteger(r)){
        r=r.toFixed(2)
    }
    tempranki.value=r;

    let c=(f-32) *5/9;
    if(!Number.isInteger(c)){
       c= c.toFixed(2);
    }
    tempCel.value=c;
    let cg=(f-32) *5/9;

    if(!Number.isInteger(cg)){
       cg= cg.toFixed(2);
    }
    tempCenti.value=cg;

    let k=(f- 32)* 5/9 + 273.15;
    if(!Number.isInteger(k)){
       k= k.toFixed(2);
    }
    tempKel.value=k;

})
ranki.addEventListener('click',function(){
    let r=tempranki.value;
    let f=r-459.67;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    tempFaren.value=f;

    let c=(r - 491.67) * 5/9;
    if(!Number.isInteger(c)) {
        c=c.toFixed(2);
    }
    tempCel.value=c;

    let cg=(r - 491.67) * 5/9;
    if(!Number.isInteger(cg)) {
        cg=cg.toFixed(2);
    }
    tempCenti.value=cg;

    let k=r * 5/9;
    ;
    if(!Number.isInteger(k)) {
        k=k.toFixed(2);
    }
    tempKel.value=k;

})

cel.addEventListener('click',function(){
    let c=tempCel.value;
    let f=(c * 9/5) + 32;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    tempFaren.value=f;

    let r=c * 9/5 + 491.67 ;
    if(!Number.isInteger(r)){
        r=r.toFixed(2);
    }
    tempranki.value=r;
    tempFaren.value=f;

    let cg=c;
    tempCenti.value=cg;

    let k=Number(c) + 273.15 ;
    if(!Number.isInteger(k)){
        k=k.toFixed(2);
    }
    tempKel.value=k;
})

centi.addEventListener('click',function(){
    let cg=tempCenti.value;
    let f=(cg * 9/5) + 32;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    tempFaren.value=f;

    let r=cg * 9/5 + 491.67 ;
    if(!Number.isInteger(r)){
        r=r.toFixed(2);
    }
    tempranki.value=r;
    tempFaren.value=f;

    let c=cg;
    tempCel.value=cg;

    let k=Number(cg) + 273.15 ;
    if(!Number.isInteger(k)){
        k=k.toFixed(2);
    }
    tempKel.value=k;
})

kel.addEventListener('click',function(){
    let k=tempKel.value;
    let f=(k - 273.15) *9/5 + 32;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    tempFaren.value=f;

    let r=k*1.8;
    if(!Number.isInteger(r)){
        r=r.toFixed(2);
    }
    tempranki.value=r;

    let c=k - 273.15;
    if(!Number.isInteger(c)){
        c=c.toFixed(2);
    }
    tempCel.value=c;

    let cg=k - 273.15;
    if(!Number.isInteger(cg)){
        cg=cg.toFixed(2);
    }
    tempCenti.value=cg;
})

let reset=document.getElementById('btn6');
    reset.addEventListener('click',function(){
        window.location.reload();
    })