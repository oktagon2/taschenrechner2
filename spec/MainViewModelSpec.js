describe( "MainViewModel", function() {
    it( "should be able to be created", function() {
        var mainViewModel= new MainViewModel();
        expect( mainViewModel).toBeDefined();
    });
    
    it( "should be able to process updateDisplay()", function(){
        var mainViewModel= new MainViewModel();
        mainViewModel.mainView= jasmine.createSpyObj( "mainView", {
            dummy: 0
        });
        mainViewModel.mainView.display= jasmine.createSpyObj( "display", {
            dummy: 0
        });
        
        mainViewModel.displayValue= 0;
        mainViewModel.updateDisplay();  
        expect( mainViewModel.mainView.display.innerText).toEqual( "0");    

        mainViewModel.displayValue= 1;
        mainViewModel.updateDisplay();      
        expect( mainViewModel.mainView.display.innerText).toEqual( "1");    

        mainViewModel.displayValue= 100;
        mainViewModel.updateDisplay();      
        expect( mainViewModel.mainView.display.innerText).toEqual( "100");    

        mainViewModel.displayValue= 9999;
        mainViewModel.updateDisplay();      
        expect( mainViewModel.mainView.display.innerText).toEqual( "9999");    

        mainViewModel.displayValue= 999999;
        mainViewModel.updateDisplay();      
        expect( mainViewModel.mainView.display.innerText).toEqual( "999999");    
    });
});
