// Given an array of iterables, yield their elements in interleaved order.
function* zip(...iterables) {
    // Get an iterator for each iterable
    //console.log(iterables);
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while(iterators.length > 0) {       // While there are still some iterators
        if (index >= iterators.length) {    // If we reached the last iterator
            index = 0;                      // go back to the first one.
        }
        let item = iterators[index].next(); // Get next item from next iterator.
        if (item.done) {                    // If that iterator is done
            iterators.splice(index, 1);     // then remove it from the array.
        }
        else {                              // Otherwise,
            yield item.value;               // yield the iterated value
            index++;                        // and move on to the next iterator.
        }
    }
}


console.log(...zip([1,3],[5,6],'abc'));


