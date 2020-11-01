const printHoge = () => {
    console.log('Hoge')
}

const sleep = (waitSeconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, waitSeconds * 1000)
    })
}

sleep(2)
    .then(() => {
        printHoge()
    })
    .then(()=>console.log("next"))
    .catch((error) => {
        console.log(error)
    })