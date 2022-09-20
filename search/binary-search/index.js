// arr expected to be sorted,
// if not - sort it first
function binarySearch(arr, elem) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    while(arr[middleIndex] !== elem && startIndex < endIndex) {
        if(elem < arr[middleIndex]){
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    return arr[middleIndex] === elem ? middleIndex : -1;
}

const arr = [2,5,6,9,13,15,28,30];
const states = [
    'Alabama','Alaska','American Samoa','Arizona','Arkansas',
    'California','Colorado','Connecticut','Delaware','District of Columbia',
    'Federated States of Micronesia','Florida','Georgia','Guam',
    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
    'Kentucky','Louisiana','Maine','Marshall Islands','Maryland',
    'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
    'North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma',
    'Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
    'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
    'Washington','West Virginia','Wisconsin','Wyoming'
];

let result = binarySearch(arr, 9);
console.log(result); // 3

result = binarySearch(arr, 25);
console.log(result); // -1

result = binarySearch(states, 'Virgin Island');
console.log(result); // 53

result = binarySearch(states, 'Barbados');
console.log(result); // -1
