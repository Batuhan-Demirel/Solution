var arr = [1, 2, 3, 4, 5];
var target = 11;
var arr2 = [];

function solution(dizi, hedef) {
  diziler = dizi.values();
  for (let a of diziler) {
    for (i = 0; i < dizi.length; i++) {
      if (hedef - dizi[i] == a && dizi.indexOf(a) <= i) {
        arr2.push(dizi.indexOf(a), i);
      }
    }
    arr2.splice(2, arr2.length - 2);
  }
  if (arr2.length == 0) {
    v = new Error("yeterli sayı yok");
    console.log(v);
  } else {
    console.log(arr2);
  }
}

solution(arr, target);
