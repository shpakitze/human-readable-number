module.exports = function toReadable (number) {
    let a=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
    let b=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let c=[' ',' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    function a10(n) {
        let s=' ';
        if ((n===0)&&(number!==0)) return '';
        if (n<10) return a[n];
    if (n<20) return b[n%10];    
    if (n%10===0) return c[n/10];
    return c[(n-n%10)/10]+ ' '+ a[n%10];
    }
    if (number <100) return a10(number);
    
    return (a[(number-number%100)/100]+' hundred '+ a10(number%100)).trim();

}
