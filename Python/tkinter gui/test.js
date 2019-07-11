


// If input is the raw data from a question in a single array
let input = [1, 2, 3, 4, 5, 3, 4, 5];
let dict = {};

//turn array into dictionary to get value array
for(let i=0, len=input.length; i<len; ++i) {
    if(dict[input[i]]) dict[input[i]] += 1;
    else dict[input[i]] = 1;
}
// in this example dict should now == { '1': 1, '2': 1, '3': 2, '4': 2, '5': 2 } 

let vals = Object.entries(dict);
// vals == [ [ '1', 1 ], [ '2', 1 ], [ '3', 2 ], [ '4', 2 ], [ '5', 2 ] ]

let score = 0
for(let i=0, len=vals.length; i<len; ++i) {
    score += parseInt(vals[i][0])*parseInt(vals[i][1]);
}

score = score/input.length;