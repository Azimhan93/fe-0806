let handshake;

function getPeople(handshake) {

    let allWorkers = 0;
    let visitors = 0;
    

    while(allWorkers < handshake) {
        visitors += 1;

        allWorkers += visitors;
    } 

    return visitors;
}


console.log( getPeople(1) );
console.log( getPeople(3) );
console.log( getPeople(6) );
console.log( getPeople(10) );
console.log( getPeople(15) );
console.log( getPeople(120) );