const displayElement = document.getElementById('display');

        function clearDisplay() {
            displayElement.textContent = '0';
        }

        function appendNumber(number) {
            if (displayElement.textContent === '0') {
                displayElement.textContent = number;
            } else {
                displayElement.textContent += number;
            }
        }

        function appendOperator(operator) {
            const lastChar = displayElement.textContent.slice(-1);
            if ('+-*/'.includes(lastChar)) {
                displayElement.textContent = displayElement.textContent.slice(0, -1) + operator;
            } else {
                displayElement.textContent += operator;
            }
        }

        function deleteLast() {
            displayElement.textContent = displayElement.textContent.slice(0, -1) || '0';
        }

        function calculate() {
            try {
                displayElement.textContent = eval(displayElement.textContent) || '0';
            } catch {
                displayElement.textContent = 'Error';
            }
        }