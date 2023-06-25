let reviews: number[] = [5,4,3,5.4,6,7]

let total = 0;

for( let i =0;i<reviews.length;i++){
    console.log(reviews[i])
    total += reviews[i]
}

let average : number =  total/reviews.length;
console.log("Average Number = " + average);