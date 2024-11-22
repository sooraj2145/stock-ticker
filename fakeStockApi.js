export function getData(){
    return {
        name: 'Reliance',
        sym: 'Ril',
        price : (Math.random()*3).toFixed(2),
        time : new Date().toLocaleTimeString()
    }
}