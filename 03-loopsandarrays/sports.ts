let sports : string[] = ["Golf", "Cricket","Tennis","Swimming"];

// for(let i=0;i< sports.length;i++){
//     console.log(sports[i]);
// }


//Let's use the simplified for loop 

for(let tempSport of sports){

    if(tempSport == 'Cricket'){
        console.log(tempSport + "<< My Favorite");
    }else{
        console.log(tempSport);
    }
}