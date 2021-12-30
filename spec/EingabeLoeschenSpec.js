function testKeyCPressed( displayValue) {
    var eingabeLoeschen= new EingabeLoeschen();
    var mainViewModel= jasmine.createSpyObj( "mainViewModel", {
        updateDisplay: undefined
    });
    eingabeLoeschen.mainViewModel= mainViewModel;
    mainViewModel.displayValue= displayValue;
    eingabeLoeschen.keyCPressed();
    expect( mainViewModel.displayValue).toEqual( 0);
    expect( mainViewModel.updateDisplay).toHaveBeenCalled();

}

describe( "EingabeLoeschen", function() {
    it( "should be able to be created", function() {
        var eingabeLoeschen= new EingabeLoeschen();
        expect( eingabeLoeschen).toBeDefined();
    });

    it( "should be able to process keyCPressed()", function() {
        testKeyCPressed( 0);
        testKeyCPressed( 1);
        testKeyCPressed( 1111);
        testKeyCPressed( 1234);
        testKeyCPressed( 111111);
    });
});