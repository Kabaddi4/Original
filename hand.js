let user_hand = prompt('pls select hand'); //入力画面

let js_hand = getHand(); //サブルーチンの呼び出しは、変数定義してその中に入れる


let judge_hand = winLose(user_hand, js_hand); //入力した変数とランダム変数を引数に入れて呼び出し

alert('Your hand is' + user_hand + 'enemy is' + js_hand + 'you are' + judge_hand);

//ランダムでジャンケンの手を作成する関数
function getHand(){
    let hand_num = Math.floor( Math.random() * 3 ); //Mathオブジェクトのrandomメソッドで乱数作成
    let hand_name;

    if(hand_num == 0){
        hand_name = "グー";
    } else if(hand_num == 1){
        hand_name = "チョキ";
    } else if(hand_num == 2){
        hand_name = "パー";
    }

    return hand_name;
}

//入力した手と乱数の手を比べる関数

function winLose(user, js){
    let judge;

    if(user == "グー"){
        if(js == "グー"){
            judge = "あいこ";
        } else if(js == "チョキ"){
            judge = "勝ち";
        } else if (js == "パー"){
            judge = "負け";
        }

    }else if(user == "チョキ"){
        if(js == "グー"){
            judge = "負け";
        } else if(js == "チョキ"){
            judge = "あいこ";
        } else if (js == "パー"){
            judge = "勝ち";
        }

    }else if(user == "パー"){
        if(js == "グー"){
            judge = "勝ち";
        } else if(js == "チョキ"){
            judge = "負け";
        } else if (js == "パー"){
            judge = "あいこ";
        }

    }else{
        put('pls select グー/チョキ/パー');
    }   
    
    return judge;
}
