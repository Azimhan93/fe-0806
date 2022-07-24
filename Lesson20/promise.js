function change() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
    }).then(function () {
        alert('Surprise');
    });
}

change();