function mean(nums){
    let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let value = sum / nums.length;
    return value;
}

function median(nums){
    const sortedNums= nums.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedNums.length / 2);

    if (sortedNums.length % 2 === 0) {
        return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
    } else{
        return sortedNums[middle];
    }
}

function mode(nums){
    const frequencyMap = new Map();

    // Count the frequency of each element in the array
    nums.forEach(element => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });

    let mode;
    let maxFrequency = 0;

    // Find the element with the highest frequency
    frequencyMap.forEach((frequency, element) => {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mode = element;
        }
    });

    return mode;
}

module.exports = {mean, median, mode};


