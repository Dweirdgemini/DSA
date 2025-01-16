const groceries = ['milk','bread','donut','flour','sugar','butter',];

const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++){

    
        if (groceries[i] == item)  {
            console.log(`Found; ${item}`);
        }
    }
};

searchForItem("bread")