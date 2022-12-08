function myEach(collection, callback) {
    // creating a replica of array
    let newCollection = [...collection]

    // check if it's an object and create array with the object's values
    if (collection instanceof Array === false) {
        newCollection = Object.values(collection)

    }

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }

    return collection;

}