(function initializeEMICalculator() {
  function getEl(id) {
    return typeof document !== "undefined" ? document.getElementById(id) : null;
  }

  let isYear = true;

  const elements = {
    loanAmountEl: getEl('loanAmount'),
    interestRateEl: getEl('interestRate'),
    interestSlider: getEl('interestRateSlider'),
    loanTenureEl: getEl('loanTenure'),
    startDateEl: getEl('startDate'),
    emiOutput: getEl('emiOutput'),
    interestOutput: getEl('interestOutput'),
    paymentOutput: getEl('paymentOutput'),
    yearBtn: getEl('yearBtn'),
    monthBtn: getEl('monthBtn'),
    lightBtn: getEl('lightBtn'),
    darkBtn: getEl('darkBtn'),
    calculateBtn: getEl('calculateBtn'),
    clearBtn: getEl('clearBtn')
  };

  function calculateEMI() {
  }

  function clearFields() {
  }

  function toggleTheme(mode) {
  }

  function setupEvents() {
    elements.calculateBtn.addEventListener('click', calculateEMI);
    elements.clearBtn.addEventListener('click', clearFields);

    elements.yearBtn.addEventListener('click', () => {
      isYear = true;
      elements.yearBtn.classList.add('active');
      elements.monthBtn.classList.remove('active');
    });

    elements.monthBtn.addEventListener('click', () => {
      isYear = false;
      elements.monthBtn.classList.add('active');
      elements.yearBtn.classList.remove('active');
    });

    elements.lightBtn.addEventListener('click', () => toggleTheme('light'));
    elements.darkBtn.addEventListener('click', () => toggleTheme('dark'));

    elements.interestSlider.addEventListener('input', () => {
      elements.interestRateEl.value = elements.interestSlider.value;
    });

    elements.interestRateEl.addEventListener('input', () => {
      elements.interestSlider.value = elements.interestRateEl.value;
    });

    Array.from(elements.loanTypeRadios).forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'home') {
          elements.loanAmountEl.value = 5000000;
          elements.interestRateEl.value = 9;
          elements.interestSlider.value = 9;
          elements.loanTenureEl.value = 20;
        } else {
          elements.loanAmountEl.value = 200000;
          elements.interestRateEl.value = 12;
          elements.interestSlider.value = 12;
          elements.loanTenureEl.value = 3;
        }
      });
    });
  }

  function init() {
    setupEvents();
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  if (typeof window !== "undefined") {
    window.calculateEMI = calculateEMI;
    window.clearFields = clearFields;
    window.toggleTheme = toggleTheme;
  }
})();
