// Create a function that returns a Promise that has a 50% chance of resolving, and 50% chance of rejecting, on resolve it should return “Now I work” and on reject “Now I don’t’.

function shouldNotReject() {
    const randomBoolean = Math.round(Math.random());
    return !!randomBoolean;
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        shouldNotReject() ? resolve("Now I work") : reject("Now I don't")
    }, 1000);
});

myPromise
    .then(( res) => {
        console.log(res);
    })
    .catch((res) => {
        console.error(res);
    });