function getPalindrome(str){
    if(str < 0) return true;
    else{
        return false;
    }
    return str.split('').sort().join('');
}
console.log(getPalindrome="racecar");