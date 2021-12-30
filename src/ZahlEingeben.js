class ZahlEingeben {
    key1Pressed() {
        var displayValue= this.mainViewModel.displayValue;
        if( displayValue< 100000) {
            displayValue= displayValue* 10+ 1;
        }
        this.mainViewModel.displayValue= displayValue;
        this.mainViewModel.updateDisplay();
    }
}