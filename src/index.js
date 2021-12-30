
var mainViewModel= new MainViewModel();
var zahlEingeben= new ZahlEingeben();
var eingabeLoeschen= new EingabeLoeschen();
var mainView= new MainView();

mainView.display= document.getElementById( "display");
mainView.button1= document.getElementById( "button-1");
mainView.buttonC= document.getElementById( "button-c");

zahlEingeben.mainViewModel= mainViewModel;
eingabeLoeschen.mainViewModel= mainViewModel;
mainViewModel.mainView= mainView;

mainView.button1.onclick= function() {
    zahlEingeben.key1Pressed();
}
mainView.buttonC.onclick= function() {
    eingabeLoeschen.keyCPressed();
}

