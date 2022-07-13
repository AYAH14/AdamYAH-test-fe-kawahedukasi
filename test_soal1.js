let data1 = [1, 1, 1, 2, 2, 4, 1, 1]

const mode = (data1) => {
    let result = {}
    let modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < data1.length; i += 1) {
        number = data1[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    
        result.mode = modes
        result.count = count
    return result;
}
let data = mode(data1)
console.log(`Angka terbanyak yang keluar adalah ${data.mode} dengan jumlah ${data.count}`)