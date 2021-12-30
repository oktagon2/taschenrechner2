class MainViewModel {
    constructor() {
        this.displayValue= 0;
    }
    updateDisplay() {
        this.mainView.display.innerText= this.displayValue.toString();
    }
}