console.log('----------関数----------');
// 関数の書き方
// function 関数名(){
// 		処理
// }
function myalert() {
	alert('自作関数からhello');
// }
// alert("自作関数からhello!")
// アラートを表示した後にも自由に処理を追加できる
// confirm("このボタンを押してもいいですか？");
// confirmはokとキャンセルが出る
// alertはokだけ

let hantei = confirm('このボタンを押してもいいですか？');
console.log(hantei);


// 問題
// okボタンが押されたら「大丈夫」
// キャンセルボタンが押されたら「やり直し」
// とconsoleに表示しましょう
// if (hantei === true) {
	// console.log('大丈夫');
// } else {
	// console.log('やり直し');
// }

// 文字の変え方
let messageSpan = document.getElementById('message');
// messageSpan.textContent = '変わりました';
// messageSpan.style.color = 'blue';


// 今日の宿題
// okボタンが押されたら「大丈夫」
// キャンセルボタンが押されたら「やり直し」
// とid="message"のspanタグの部分に表示しましょう
if (hantei === true) {
	messageSpan.textContent = '大丈夫';
	messageSpan.style.color = 'green';
	messageSpan.style.fontSize = '28px';
	console.log('大丈夫');
} else {
	messageSpan.textContent = 'やり直し';
	messageSpan.style.color = 'red';
	messageSpan.style.fontSize = '24px';
	console.log('やり直し');
}

}



console.log('----------関数(引数付き)----------');
// 関数の書き方
// function 関数名(引数1,引数2,....){
// 	処理
// }
// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字) この場合、表示したい文字が引数に当たる

function myalert2(displayMessage){
	alert(displayMessage);
}

// 以下の関数を作成して、作成した関数を実行してください
// 関数名：printHoge
// 処理内容：「Hoge」とconsoleに表示する

function printHoge(){
	console.log('Hoge');
}
printHoge();		// 作った関数を実行

// 別のやり方：こちらの方が使い勝手がいい
	function printHoge(msg){
		console.log(msg);
	}
	printHoge('Hoge');


// 以下の関数を作成して、作成した関数を実行してください
// 関数名：printNum
// 引数：1つの数値
// 処理内容：引数で受け取った数値をconsoleに表示する

function printNum(num){
		console.log(num);
}
printNum(1);
printNum(2);


// 以下の関数を作成して、作成した関数を実行してください
// 関数名：printKuku
// 引数：1つの数値
// 処理内容：引数で受け取った数値の九九(1から9まで欠けた数)をconsoleに表示する
// 引数に1を指定したら、1の段の計算結果がconsoleに表示されるようにする
// 引数に2を指定したら、2の段の計算結果がconsoleに表示されるようにする
// for文は1個で大丈夫(使わなくてもok)
function printKuku(num){
	for(let i = 1; i <= 9; i++) {
		console.log(i * num);
	}
}
	// 別の方法
	// function printKuku(num){
	// 	let answer = num * 1;
	// 	console.log(answer);
	// 	answer = num * 2;
	// 	console.log(answer);
	// 	answer = num * 3;
	// 	console.log(answer);
	// 	answer = num * 4;
	// 	console.log(answer);
	// 	answer = num * 5;
	// 	console.log(answer);
	// 	answer = num * 6;
	// 	console.log(answer);
	// 	answer = num * 7;
	// 	console.log(answer);
	// 	answer = num * 8;
	// 	console.log(answer);
	// 	answer = num * 9;
	// 	console.log(answer);
	// }
console.log('1の段');
printKuku(1);
console.log('2の段');
printKuku(2);
console.log('3の段');
printKuku(3);
console.log('4の段');
printKuku(4);
console.log('5の段');
printKuku(5);
console.log('6の段');
printKuku(6);
console.log('7の段');
printKuku(7);
console.log('8の段');
printKuku(8);
console.log('9の段');
printKuku(9);


// 以下の関数を作成して、作成した関数を実行してください
// 関数名：printKakezan
// 引数：2つの数値
// 処理内容：引数で受け取った2つの数値の掛け算の答えをconsoleに表示する
function printKakezan(num1,num2){
	console.log(num1 * num2);
}
printKakezan(200,4);


// 以下の関数を作成して、作成した関数を実行してください
// 関数名：printIsEven
// 引数：1つの数値
// 処理内容：引数で受け取った数値が偶数の場合は「偶数です」と出力し、
// 奇数の場合は「奇数です」と出力する
function printIsEven(num){
	if (num % 2 === 0){
		console.log(`${num}は偶数です`);
	} else {
		console.log(`${num}は奇数です`);
	}
}
printIsEven(201);


// 以下の関数を作成して、作成した関数を実行してください
// 関数名：printMessage
// 引数1：1つの文字列
// 引数2：1つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する
// ドラえもん,3を指定したら、以下が正解
// ドラえもん
// ドラえもん
// ドラえもん
function printMessage(moji,num){
	for (let i = 1; i <= num; i++){
		console.log(moji);
	}
}
printMessage('ドラえもん',3);




// ---------------------------------------------------------------------------------------
// ----------宿題----------

// -----56-----
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：printMaxNum
// 引数1：1つの数値
// 引数2：1つの数値
// 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。
function printMaxNum(num1,num2){
	if (num1 > num2){
		console.log(num1);
	} else if (num1 < num2){
		console.log(num2);
	} else {
		console.log('同じ');
	}
}
printMaxNum(50,100);


// -----57-----
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す
// 例
// var result = getSquared(4);
// console.log(result);
// // 実行結果
// 16
function getSquared(num){
	return num * num
}
var result = getSquared(4);
console.log(result);


// -----58-----
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：createSelfIntroductionText
// 引数1：1つの文字列
// 処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す
// 例
// var message = createSelfIntroductionText("NexSeed");
// console.log(message);
// // 実行結果
// 私の名前はNexSeedです
function createSelfIntroductionText(name){
	var msg = '私の名前は' + name + 'です';
	return msg;
}
var message = createSelfIntroductionText('平田');
console.log(message);


// -----59-----
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：isEvenNumber
// 引数1：1つの数値
// 処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。
// 例
// var result = isEvenNumber(3);
// console.log(result);
// // 実行結果
// false
function isEvenNumber(num){
	if (num % 2 === 0){
		return true;
	} else {
		return false;
	}
}
var result = isEvenNumber(3);
console.log(result);


// -----60-----
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：isSeedKun
// 引数1：任意の文字列
// 処理内容：引数で渡された文字列が「SeedKun」の場合は true、そうでない場合は false を返す。


function isSeedKun(msg){
	if (msg === 'SeedKun'){
		return true;
	} else {
		return false;
	}
}
var result = isSeedKun('SeedKun');
console.log(result);












// ---------------------------------------------------
// function 関数名(引数) { 処理 } という記法で関数を定義します。

// ②関数の呼び出し(おじさんを使う)
// 関数名()として呼び出す
// alert(sayHello());
// // ①関数の宣言(おじさんの用意)
// // function 関数名(){
// // 	ここに処理を書く
// // }
// function sayHello(){
// // ③関数の中で以下のように
// // return XXX(返事したいこと)を書くと
// // 呼び出した人に返事ができる
// 	return "こんにちは"
// }


// alert(judgeMinor(19));	// 19歳がタバコを買えるかチェック
// alert(judgeMinor(20));	// 20歳がタバコを買えるかチェック
// function judgeMinor(age){
// 	if (age >= 20){
// 		return 'あなたは' + age + '歳ですね。タバコを購入できます'
// 	} else {
// 		return 'あなたは' + age + '歳ですね。未成年は購入できません'
// 	}
// }

















