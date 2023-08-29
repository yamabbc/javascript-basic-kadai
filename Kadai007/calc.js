// 変数numに0～45までのランダムな整数を代入する
num = Math.floor(Math.random() * 46);

//変数numの値を出力する　(確認用)
console.log(num);


// 変数numの値が0であれば、任意の数値「20」を出力する
if (num===0){
  console.log('20');
}
// 変数numの値が15の倍数であれば、「15の倍数です」という文字列を出力する
else if (num%15===0){
  console.log('3と5の倍数です');
}
// 変数numの値が３の倍数であれば、「3の倍数です」という文字列を出力する
else if (num%3===0) {
  console.log('3の倍数です');
}
// 変数numの値が5の倍数であれば、「5の倍数です」という文字列を出力する
else if (num%5===0){
   console.log('5の倍数です');
 }
// それ以外のときは、任意の数値「20」を出力する
else {
  console.log(20);
}
