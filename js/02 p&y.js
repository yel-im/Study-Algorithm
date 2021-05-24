function solution(s){
    var answer = true;
    s.toUpperCase();
    
    let num = 0;
    for(let i = 0; i<=s.length; i++){
        if (s[i] === "P"){
            num++;
        }
        else if(s[i] === "Y"){
            num--;
        }
    }
    if(num==0){
            return true;
        }
    else return false;

    return answer;
}