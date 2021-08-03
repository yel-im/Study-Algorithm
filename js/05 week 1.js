function solution(price, money, count) {
    let total = 0, sum = 0;
    // 가우스공식 : count * {(1+count)/2}
    for(let i = 1; i <= count; i++) {
        sum = price * i;
        total += sum;
    }
    return total <= money ? 0 : total - money;
}