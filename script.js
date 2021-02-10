window.alert(52 + 6)
document.write(5 + 633);

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(2, 3));

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Значение на координатах (${i},${j})`, '');

        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) break outer; // (*)

        // сделать что-нибудь со значениями...
    }
}

alert('Готово!');