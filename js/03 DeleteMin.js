function solution(arr) {
    if(arr.length === 1) return[-1];
    let i = 0;
    for (let j = 1; j<arr.length; j++){
        if(arr[j]<arr[i]) {
            i=j;
        }
    }

    arr.splice(i,1);

    return arr;
}