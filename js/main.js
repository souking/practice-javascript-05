'use strict';

  // console.log('Hello World from main.js!')

  // console.log('It's me!')
  // console.log('It\'s me!')
  // 文字列の中で’を使う場合は”を使うか、\’としてあげる
  // また、\nは改行、\tはタブ


  // const price = 150;
  // console.log(price * 140);
  // price=170;
  // console.log(price * 140);
  // #8、定数(const)と変数(let)
  // これだと値はうまく表示されない、定数には値を再代入できないから変数にするにはletを使う
  // let price = 150;
  // console.log(price * 140);
  // price=170;
  // console.log(price * 140);
  // 変数のルール
  // 使えるのは、英数字、＄、＿のみで数字から始められない、予約語（命令語）は使えない（例、let const; これはダメ）


  // a=a+1 は a+=1 と同じ＋だけではなく-や*もできる
  // また１ずつ足していくのはa++と書く、- もできる



  // console.log(typeof 'hello');
  // console.log(typeof 5);
  // console.log(typeof true);
  // console.log(typeof undefined);
  // console.log(typeof null);
  // #10値の方を調べる方法
// typeofという演算子を使う
// 文字列（string）,数値（number）、真偽値（Boolean）



// console.log('5' * 3);
// console.log('5' - '3');
// console.log('5' + 3);
// console.log(parseInt('5', 10) + 3);
// console.log(parseInt('hello', 10));
//#11、数字からなる文字列
// 文字列でも足し算以外は計算できる
// 足し算の場合は計算されずに表示される
// parseIntで文字列を指定した進数の整数値にすることができる（値にできないものはNaNと表示される）



// const price = 150
// console.log(price > 100);
// #12、比較演算子
// >=は~以上、<=は~以下、===は~と等しい、!==は~と異なる
// #12、真偽値
// console.log(Boolean(0));
// console.log(Boolean('hello'));
// false <- 0,null,undefined, '' , false
// true <- それ以外
// 値をtrue、falseで評価するにはBooleanという命令を使う、文字列だとTRUE？






// const score = 30;
// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good.');
// } else {
//   console.log('OK...');
// }
// #13、ifの条件分岐




// const score = 40;
// score >= 80 ? console.log('Great!') : console.log('Good.')
// #14、条件演算子
// 条件式 ? trueの処理 : falseの処理でかく




// const score = 60;
// const name = 'taguchi';
// ①if (score >= 50) {
//   if (name === 'taguchi') {
//     console.log('Good job!');
//   }
// }
// ②if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }
// #15、論理演算子
// ①と②は同じ結果
// 論理演算子、&&はなおかつ(AND)、｜｜はもしくは(OR)、!は〜ではない(NOT)





// const signal = 'red';
// ①if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'Yellow') {
//   console.log('Coution!');
// } else if (signal === 'blue') {
//   console.log('Go!');
// }
// ②switch (signal) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'Yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong signal!')
//     break;
// }
// #16、seitchによる条件分岐
// ===がいくつかある文を簡単にする
// switch()のなかに比較したいものを書く
// どの値と比較したいかをcaseと:の間に書いていく
// caseは何行でもかける
// breakとすると：からbreak;までの処理をする
// signalの値がどれとも一致しない場合はdefaultで指定できる




// for (let i = 1; i <= 10; i++) {
  // console.log('hello')
  // console.log('hello' + i)
  // console.log(`hello ${i}`);
// }
// #17、forを使ったループ処理
// for構文はこのように書く
// +iを書くことによってhelloの後ろに１〜10の数字が表示される
// ``（バッククオート）で囲った中に文字と${i}（テンプレートリテラルという）をかく
// テンプレートリテラルはconsole.logの中でも変数を使えるようになる



// ①let hp = 100;
// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }
// ②let hp = -50;
// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);
// #18、whileのループ構文
// ①最初HPが100あり１５ずつ減っていき０以下になったら終了というプログラム
// ②最初のHPが−１５でその値を表示したい
// do~while構文で{}のなかを実行してからwhileの処理をする




// for (let i = 1; i<= 10; i++) {
//   ①if (i === 4) {
//   // ②if (i % 3 === 0) {
//     continue;
//   }
//   // ③if (i === 4) {
//   //   break;
//   // }
//   console.log(i);
// }
// #19、continueとbreak
// continueはループを一回スキップ
// breakはループを途中で終了
// ①iが４の時だけスキップ
// ②３の倍数の時だけスキップ
// ③iが４の時にループを終了



// function showAd() {
//   console.log('----------');
//   console.log('--- Ad ---');
//   console.log('----------');
// }
// showAd();
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd();
// #20、関数による処理
// function　関数名　で処理をまとめて、関数名を書くだけで呼び出すことができる





// function showAd(message = 'Ad') {
//   console.log('----------');
//   console.log(`--- ${message} ---`);
//   console.log('----------');
// }
// showAd('Header Ad');
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');
// #21、引数の使い方
// function 関数名（）　の（）のなかに仮引数をかき、console.logの方には（` ${ 仮引数名 } ` とし、下のshowAd()の()のなかに実引数（表示したい文字）をかく
// また、functionの方の仮引数の後に ='表示したい文字' を書くことによって、実引数を何も書かなかった時の表示する文字を指定できる





// function sum(a, b, c) {
// console.log(a + b + c);
//   return a+b+c;
// }
// sum(1, 2, 3);
// sum(3, 4, 5);
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);
// #22、returnについて
// 引数は,で区切れば何個でも渡せる
// sumの下のconsole.logはsumと入力したときに合計値を表示する
// また、sumの数値を合計したいときはこの関数では結果を表示しているだけなので処理結果を値として返すためにはreturnとして返したい値a+b;cとしてあげる、そうすれば関数をそのまま式に入れて計算ができる
// また、returnと書いた時点でその値が返されるのでそれ以降の処理は実行されない





// ①function sum(a, b, c) {
//   return a + b + c;
// ②const sum = function (a, b, c) {
//   return a + b + c;
// };
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);
// #23、関数式
// ①は関数宣言
// ②は関数式、関数を定数や変数の値として代入する





// ①const sum = function (a, b, c) {
//   return a + b + c;
// };
// ②const sum = (a, b, c) => a + b + c;
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);
// #24、アロー関数
// ①は関数式
// ②はアロー関数で①と同じ結果になる
// functionを書かなくていい
// =>の後にreturnしたい値を書くのでreturnがいらない

// ①const double = function(a) {
//   return a*2;
// };
// const double = a => a*2;
// console.log(double(12));
// また引数の値が１つの場合は()をとってもよい





// const x = 2;
// function f() {
//   const x = 1;
//   console.log(x);
// }
// f();
// console.log(x);
// #25、スコープ（有効範囲について）
// 287行(const x = 2;)がないときは292行目(console.log(x);)は実行されない
// ブロック内で宣言された定数や変数はブロック内だけで有効というルールがある
// 293行目(console.log(x);)を実行したい場合はブロック外で宣言（グローバルスコープ）してあげる、これはすべての範囲で有効
// また、ブロック内で宣言したものはブロック内のものが優先される
// functionのなかのxが宣言されていなかった場合はブロック外のものが指定される



{
  const x = 100;
  console.log(x);
}
// #26、コードをブロックで囲う
// 同じ名前のタブ（今回はindex.html内での<script>にあたる）ではタブをを分けて書いたとしても同じ文字（const）で宣言することはできない（const x = 100;が先に宣言されているので100は表示される）
// 両方のタブで{}で囲ってあげれば良い





