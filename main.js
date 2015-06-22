function AppViewModel(){
	this.firstName = ko.observable("Astemir");
	this.lastName = ko.observable("Shereuzhev");
};

ko.applyBindings(new AppViewModel());