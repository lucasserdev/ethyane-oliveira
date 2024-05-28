const ask = document.querySelectorAll('.questions .ask');
ask.forEach((item) => {
    item.addEventListener('click', () => {
        let targetDisplay = item.querySelector('p');
        let arrow = item.querySelector('i');
        if (targetDisplay.style.display == 'none') {
            arrow.classList.remove('fa-caret-right');
            arrow.classList.add('fa-caret-up');

            targetDisplay.style.display = 'block';
            
        } else {
            arrow.classList.remove('fa-caret-up');
            arrow.classList.add('fa-caret-right');

            targetDisplay.style.display = 'none';
        }
    });
});

const numbers = document.querySelectorAll('.statistic .number');

numbers.forEach((number) => {
    let targetValue = parseInt(number.getAttribute('data-target'));
    let currentValue = parseInt(number.innerText);

    if (currentValue < targetValue) {
        let increment = (targetValue - currentValue) / 100;
        let interval = setInterval(() => {
            currentValue += increment;
            number.innerText = Math.ceil(currentValue);

            if (currentValue >= targetValue) {
                clearInterval(interval);
                number.innerText = formatNumber(targetValue);
            }
        }, 100);
    }
});

function formatNumber(n) {
    if(n >= 1000) {
        let str = n.toString();
        let integerPart = str.slice(0, -3);
        let decimalPart = str.slice(-3);
        return '+' + integerPart + '.' + decimalPart;
    }
    return n.toString();
}

console.log(formatNumber(1000))
