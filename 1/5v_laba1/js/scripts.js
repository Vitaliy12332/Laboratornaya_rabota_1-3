// feedback form validation
const form = document.forms['feedback-form'];
const email = form['email'];

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInput()) {
        let modal = document.getElementById('staticBackdrop');
        let modalObj = bootstrap.Modal.getInstance(modal);
        modalObj.hide();
        form.reset();
    }

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    return false;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    return true;
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
    const emailValue = email.value.trim();
    let res;
    if (emailValue === ''){
        res = setError(email, 'Нужно ввести Email.');
    } else if (!isValidEmail(emailValue)) {
        res = setError(email, 'Введите верный email.');
    } else {
        res = setSuccess(email);
    }
    return res;
}


//chart
var myChartElem = document.getElementById("myChart");
if (myChartElem !== null) {
    var ctx = myChartElem.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["html", "css", "scss", "laravel", "vue v3", "node.js"],
            datasets: [{
                label: '%',
                data: [70, 50, 20, 70, 80, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
