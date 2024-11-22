export function getData(){
    return {
        name: 'Reliance',
        sym: 'Ril',
        price : (Math.random()*2000).toFixed(2),
        time : new Date().toLocaleTimeString()
    }
}