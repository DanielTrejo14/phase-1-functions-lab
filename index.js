function distanceFromHqInBlocks(blocks) {
    if (blocks < 42) {
       return 42 - blocks;
    } else {
       return blocks - 42;
    }
 }

    function distanceFromHqInFeet(x){
        return distanceFromHqInBlocks(x) * 264;
    }

function distanceTravelledInFeet(start, destination) {
    if (start > destination)
        return (start - destination) * 264
    else if (start < destination)
        return (destination - start) * 264
}

function calculatesFarePrice(start, destination) {
     const feet = distanceTravelledInFeet(start, destination);
     if (feet <= 400)
        return 0;
    else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02
    }
    else if (feet > 2000 && feet <= 2500) 
        return 25; 
    else 
        return 'cannot travel that far'
}
