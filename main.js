function AppViewModel(){
	this.firstName = ko.observable("Astemir");
	this.lastName = ko.observable("Shereuzhev");
	this.sex = ko.observable("");
	this.isAdmin = ko.observable(true);


	this.sexOptions = ['Мужской', 'Женский'];

	this.fullName = ko.computed(function(){
		return this.lastName() + ' ' + this.firstName();
	},this);
	//test
};

ko.applyBindings(new AppViewModel());
