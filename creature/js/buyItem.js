
//現在の増量
var work = 1;
//自分の持っている金額
var haveCoin = 10000000000000000;
//配列名 =["買った回数","work増量分","金額"]
var knk = [0,1,15];
var mnknk = [0,2,100];
var tbyt = [0,3,500];
var ff = [0,4,3000];
var ifr = [0,5,10000];
var pngn = [0,6,40000];
var mnkp = [0,7,2000000];
var kp = [0,8,1666666];
var st = [0,9,3999999999];


function knkcounter(){
  if(knk[2] <= haveCoin){
    haveCoin -= knk[2];
    knk[0]++;
    work += knk[1];
    knk[2] += knk[2];
    document.getElementById('knkcnt').innerHTML="×"+knk[0];
    document.getElementById('knkprice').innerHTML="￥"+knk[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('knkprice').style.color = "lightgreen";
  }else{
    document.getElementById('knkprice').style.color = "red";

  }
}

function mnknkcounter(){
  if(mnknk[2] <= haveCoin){
    haveCoin -= mnknk[2];
    mnknk[0]++;
    work += mnknk[1];
    mnknk[2] += mnknk[2];
    document.getElementById('mnknkcnt').innerHTML="×"+mnknk[0];
    document.getElementById('mnknkprice').innerHTML="￥"+mnknk[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('mnknkprice').style.color = "lightgreen";
  }else{
    document.getElementById('mnknkprice').style.color = "red";
  }
}

function tbytcounter(){
  if(tbyt[2] <= haveCoin){
    haveCoin -= tbyt[2];
    tbyt[0]++;
    work += tbyt[1];
    tbyt[2] += tbyt[2];
    document.getElementById('tbytcnt').innerHTML="×"+tbyt[0];
    document.getElementById('tbytprice').innerHTML="￥"+tbyt[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('tbytprice').style.color = "lightgreen";
  }else{
    document.getElementById('tbytprice').style.color = "red";
  }
}

function ffcounter(){
  if(ff[2] <= haveCoin){
    haveCoin -= ff[2];
    ff[0]++;
    work += ff[1];
    ff[2] += ff[2];
    document.getElementById('ffcnt').innerHTML="×"+ff[0];
    document.getElementById('ffprice').innerHTML="￥"+ff[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('ffprice').style.color = "lightgreen";
  }else{
    document.getElementById('ffprice').style.color = "red";
  }
}

function ifcounter(){
  if(ifr[2] <= haveCoin){
    haveCoin -= ifr[2];
    ifr[0]++;
    work += ifr[1];
    ifr[2] += ifr[2];
    document.getElementById('ifcnt').innerHTML="×"+ifr[0];
    document.getElementById('ifrprice').innerHTML="￥"+ifr[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('ifrprice').style.color = "lightgreen";
  }else{
    document.getElementById('ifrprice').style.color = "red";
  }
}

function pngncounter(){
  if(pngn[2] <= haveCoin){
    haveCoin -= pngn[2];
    pngn[0]++;
    work += pngn[1];
    pngn[2] += pngn[2];
    document.getElementById('pngncnt').innerHTML="×"+pngn[0];
    document.getElementById('pngnprice').innerHTML="￥"+pngn[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('pngnprice').style.color = "lightgreen";
  }else{
    document.getElementById('pngnprice').style.color = "red";
  }
}

function mnkpcounter(){
  if(mnkp[2] <= haveCoin){
    haveCoin -= mnkp[2];
    mnkp[0]++;
    work += mnkp[1];
    mnkp[2] += mnkp[2];
    document.getElementById('mnkpcnt').innerHTML="×"+mnkp[0];
    document.getElementById('mnkpprice').innerHTML="￥"+mnkp[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('mnkpprice').style.color = "lightgreen";
  }else{
    document.getElementById('mnkpprice').style.color = "red";
  }
}

function kpcounter(){
  if(kp[2] <= haveCoin){
    haveCoin -= kp[2];
    kp[0]++;
    work += kp[1];
    kp[2] += kp[2];
    document.getElementById('kpcnt').innerHTML="×"+kp[0];
    document.getElementById('kpprice').innerHTML="￥"+kp[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('kpprice').style.color = "lightgreen";
  }else{
    document.getElementById('kpprice').style.color = "red";
  }
}

function stcounter(){
  if(st[2] <= haveCoin){
    haveCoin -= st[2];
    st[0]++;
    work += st[1];
    st[2] += st[2];
    document.getElementById('stcnt').innerHTML="×"+st[0];
    document.getElementById('stprice').innerHTML="￥"+st[2];
    document.getElementById('total').innerHTML=work;
    document.getElementById('coin').innerHTML=haveCoin;
    document.getElementById('stprice').style.color = "lightgreen";
  }else{
    document.getElementById('stprice').style.color = "red";
  }
}
