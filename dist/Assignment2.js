async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
}

function fetchDataAsPromise() {
    return new Promise(resolve => {
        fetchData().then(data => {
            resolve(data);
        });
    });
}

fetchDataAsPromise().then(data => {
    console.log(data); 
});
