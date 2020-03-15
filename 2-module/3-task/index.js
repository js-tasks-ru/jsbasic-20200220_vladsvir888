let calculator = {
  a: 3,
  
  b: 5,
  
  read() {
    this.a + this.b;  
  },
  
  sum() {
    return this.a + this.b;  
  },
  
  mul() {
    return this.a * this.b;  
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

