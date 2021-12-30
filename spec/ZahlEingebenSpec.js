function testKey1Pressed( displayValue, newDisplayValue) {
    var zahlEingeben= new ZahlEingeben();
    var mainViewModel= jasmine.createSpyObj( "mainViewModel", {
        updateDisplay: undefined
    });
    zahlEingeben.mainViewModel= mainViewModel;
    mainViewModel.displayValue= displayValue;
    zahlEingeben.key1Pressed();
    expect( mainViewModel.displayValue).toEqual( newDisplayValue);
    expect( mainViewModel.updateDisplay).toHaveBeenCalled();

}

describe( "ZahlEingeben", function() {
    it( "should be able to be created", function() {
        var zahlEingeben= new ZahlEingeben();
        expect( zahlEingeben).toBeDefined();
    });

    it( "should be able to process key1Pressed()", function() {
        testKey1Pressed( 0, 1);
        testKey1Pressed( 1, 11);
        testKey1Pressed( 1111, 11111);
        testKey1Pressed( 1234, 12341);
        testKey1Pressed( 111111, 111111);
    });
});