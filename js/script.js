// このfileはindex.htmlが表示されるたびに、 読み込まれる
  // <script src="js/script.js"></script>の記述

// uranaiメソッド　function 関数宣言で関数を定義する
// function uranai(){

uranai = function(){
// Math.random / 0-1未満の数値をプログラムで作成
// Math.floor / 小数点以下の数値を全て切り捨て
  let num = Math.floor(Math.random()*6);

  // id="result"をquerySelectorで指定
  // setAttribute 指定の要素に新しい属性を追加 / または指定の要素に存在する属性の値を変更
  if(num===0){
    // console.log("大吉です");
    document.querySelector("#result").src = "images/daikichi.svg";
    //document.querySelector("#result").setAttribute("src","images/daikichi.svg"); // 大吉
  }else if(num===1){
    document.querySelector("#result").src = "images/suekichi.svg";
    // document.querySelector("#result").setAttribute("src","images/suekichi.svg"); // 末吉
  }else if(num===2){
    document.querySelector("#result").src = "images/kichi.svg";
    // document.querySelector("#result").setAttribute("src","images/kichi.svg"); // 吉
  }else{
    document.querySelector("#result").src = "images/kyou.svg";
    // document.querySelector("#result").setAttribute("src","images/kyou.svg"); // 凶
  }

  // htmlのoverlayに、showを加えて、htmlのセレクターを.overlay.showにする
  document.querySelector("#overlay").classList.add("show");
  // htmlのresultに、fadeを加えて、htmlのセレクターを.result.fadeにする
  document.querySelector("#result").classList.add("fade"); 
  // document.querySelector("#result").setAttribute("id","result fade");
}

// クリックした時に、uranaiメソッドが発動 // addEventListener
document.querySelector("#start").addEventListener("click",uranai);
