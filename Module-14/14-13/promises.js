function doTask(name) {
    const p = new Promise((resolve, reject) => {
        console.log(`${name} has started.`);
        const duration = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve(`${name} has ended after ${duration} milliseconds`);
        }, duration);
    });
    return p;
}


Promise.all([
    doTask('A'),
    doTask('B'),
    doTask('C')
])
.then(results => {
    results.forEach(result => console.log(result));
    return doTask('D');
}).then(result => {
    console.log(result);
});
doTask('E')
    .then(result => {
        console.log(result);
    });
doTask('F')
    .then(result => {
        console.log(result);
    });

const p1 = new Promise((resolve, reject) => {
    console.log('Running the asynchronous code here');
    const duration = Math.floor(Math.random() * 5000);
    setTimeout(() => {
        console.log('About to resolve');
        resolve(42); //fail
    }, duration);
});

p1.then(value => {
    console.log('The promise completed successfully with the following value:');
    console.log(value);
    return doTask('ddd');
}).catch(err => {
    console.log('The promise has failed with the following message: ');
    console.log(err);
});

doTask('eieiei').then(result => {
    console.log('hola');
    return doTask('ihihihihih');
}).then(result => { console.log(result) })