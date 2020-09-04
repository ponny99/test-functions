function getPalindrome(str){
    if(str === 1) return false;
    else{
        return true;
    }
    return str.split('').sort().join('');
}
console.log(getPalindrome("racecar"));