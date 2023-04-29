const convertToArr = (collection) => {
    if (collection instanceof Array) {
        return collection
    }
    else {
        return Object.values(collection)
    }
}

const myEach = (collection, callback) => {
    const newArr = convertToArr(collection)
    for (let i=0; i < newArr.length; i++) {
        callback(newArr[i])
    }
    return collection
}

const myMap = (collection, callback) => {
    const newArr = convertToArr(collection)
    const resultArr = []
    for (let i=0; i < newArr.length; i++) {
        resultArr.push(callback(newArr[i]))
    }
    return resultArr
}

const myReduce = (collection, callback, acc) => {
    let newArr = convertToArr(collection)
    if (!acc) {
        acc = newArr[0]
        newArr = newArr.slice(1)
    }
    for (let i =0; i < newArr.length; i++) {
        acc = callback(acc, newArr[i], newArr)
    }
    return acc
}

const myFind = (collection, predicate) => {
    const newArr = convertToArr(collection)
    for (let i=0; i<newArr.length; i ++) {
        if (predicate(newArr[i])) {
            return newArr[i]
        }
    }
}

const myFilter = (collection, predicate) => {
    const newArr = convertToArr(collection)
    const resultArr = []
    for (let i=0; i < newArr.length; i ++) {
        if (predicate(newArr[i])) {
            resultArr.push(newArr[i])
        }
    }
    return resultArr
}

const mySize = (collection) => {
    const newArr = convertToArr(collection)
    return newArr.length
}

const myFirst = (array, n) => {
    if (!n) {
        return array[0]
    }
    else {
        return array.slice(0, n)
    }
}

const myLast = (array, n) => {
    if (!n) {
        return array[array.length -1]
    }
    else {
        return array.slice(-n)
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

const myKeys = (object) => {
    const newArr = []
    for (let key in object) {
        newArr.push(key)
    }
    return newArr
} 

const myValues = (object) => {
    const newArr = []
    for (let key in object) {
        newArr.push(object[key])
    }
    return newArr
}