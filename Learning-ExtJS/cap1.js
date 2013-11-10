function buildWindow() {


	var win =  new Ext.Window({
		id       : 'myWindow',
		title    : 'My first Ext JS Window',
		width    : 300,
		height   : 150,
		layout   : 'fit',
		autoLoad : {
			url     : 'sayHi.html',
			scripts : true
		}
	});
	win.show();
}

Ext.application({
	name : 'HelloExt',
	launch : function() {
		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                }
            ]
        });
	}
});

Ext.onReady(buildWindow);
