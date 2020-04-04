const CUR_BYN = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';



function getData(URL) {
    fetch(URL)
    .then(response => {
        response.json()
        .then(data => {
            let curencyBody1 = document.getElementById('curencyBody1');
            let curencyBody2 = document.getElementById('curencyBody2');
            let curencyBody3 = document.getElementById('curencyBody3');
            let curencyBody4 = document.getElementById('curencyBody4');
            let curencyBody5 = document.getElementById('curencyBody5');

            let usd = data[4].Cur_OfficialRate;
            let gbp = data[22].Cur_OfficialRate;
            let cad = data[10].Cur_OfficialRate;
            let bgn = data[1].Cur_OfficialRate;
            let eur = data[5].Cur_OfficialRate;

            curencyBody1.innerHTML = `<div><h3>Беларусьбанк</h3></div>
                <div><p>${(usd).toFixed(4)}<p></div>
                <div><p>${(gbp).toFixed(4)}<p></div>
                <div><p>${(cad).toFixed(4)}<p></div>
                <div><p>${(bgn - 0.1890).toFixed(4)}<p></div>
                <div><p>${(eur).toFixed(4)}<p></div>
            `;

            curencyBody2.innerHTML = `<div><h3>Альфабанк</h3></div>
                <div><p>${(usd + 0.1444).toFixed(4)}<p></div>
                <div><p>${(gbp + 0.1567).toFixed(4)}<p></div>
                <div><p>${(cad).toFixed(4)}<p></div>
                <div><p>${(bgn).toFixed(4)}<p></div>
                <div><p>${(eur).toFixed(4)}<p></div>
            `;

            curencyBody3.innerHTML = `<div><h3>Белагропромбанк</h3></div>
                <div><p>${(usd).toFixed(4)}<p></div>
                <div><p>${(gbp + 0.1294).toFixed(4)}<p></div>
                <div><p>${(cad + 0.1444).toFixed(4)}<p></div>
                <div><p>${(bgn - 0.1185).toFixed(4)}<p></div>
                <div><p>${(eur + 0.1444).toFixed(4)}<p></div>
            `;

            curencyBody4.innerHTML = `<div><h3>Москва-Минск банк</h3></div>
                <div><p>${(usd - 0.1223).toFixed(4)}<p></div>
                <div><p>${(gbp - 0.1333).toFixed(4)}<p></div>
                <div><p>${(cad - 0.1223).toFixed(4)}<p></div>
                <div><p>${(bgn).toFixed(4)}<p></div>
                <div><p>${(eur - 0.1223).toFixed(4)}<p></div>
            `;

            curencyBody5.innerHTML = `<div><h3>МТБ банк</h3></div>
                <div><p>${(usd + 0.1345).toFixed(4)}<p></div>
                <div><p>${(gbp + 0.1333).toFixed(4)}<p></div>
                <div><p>${(cad).toFixed(4)}<p></div>
                <div><p>${(bgn).toFixed(4)}<p></div>
                <div><p>${(eur).toFixed(4)}<p></div>
            `;

        })
        .catch(()=> {
            confirm('Извините, курсы валют на сегодня не доступны! Желаете продолжить?');
        })
    })
};

getData(CUR_BYN);


converter = () => {
    fetch(CUR_BYN)
        .then(response => {
            response.json()
            .then(data => {
                let usd = data[4].Cur_OfficialRate;
                let rub = data[16].Cur_OfficialRate;
                let pln = data[6].Cur_OfficialRate;
                let eur = data[5].Cur_OfficialRate;
                let inputSum = document.getElementById('inputSum');
                let outSum = document.getElementById('outSum');
                let inputCurency = document.getElementById('inputCurency').value;
                switch(inputCurency) {
                    case 'BYN':
                        outSum.value = inputSum.value;
                        break;
                    case 'RUB':
                        outSum.value = (inputSum.value * rub).toFixed(4);
                        break;
                    case 'PLN':
                        outSum.value = (inputSum.value * pln).toFixed(4);
                        break;
                    case 'EURO':
                        outSum.value = (inputSum.value * eur).toFixed(4);
                        break;
                    case 'USD':
                        outSum.value = (inputSum.value * usd).toFixed(4);
                        break;    
                }
            })
            .catch(() => {
                confirm('Извините, курсы валют на сегодня не доступны! Желаете продолжить?');
            })
        })
}

document.getElementById('inputCurency').addEventListener('change', converter);

document.getElementById('inputSum').addEventListener('input', converter);