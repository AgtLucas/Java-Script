/*Exemplo 9 gerenciando tabs

Ext.onReady(function() {
	var disabledTab = {
		title : 'Disable Tab',
		id : 'disabledTab',
		html : 'Peekaboo!',
		disabled : true,
		closable : true
	}
	var closableTab = {
		title : 'I am closable',
		html : 'Please chosen when done reading',
		closable : true
	}
	
	var simpleTab = {
		title : 'I am simple tab',
		html : 'Hey i am very simple tab'
	}
	
	var tabPanel = new Ext.TabPanel({
		activeTab : 0,
		id : 'myTabPanel',
		enableTabScroll : true,
		items : [disabledTab,closableTab,simpleTab]
	});
	
	Ext.QuickTips.init();
	new Ext.Viewport({
		layout : 'fit',
		title : 'Exercising scrollable tabs',
		resizeTabs : true,
		minTabWidth : 75,
		items : {
			xtype : 'tabpanel',
			activeTab : 0,
			id : 'myTPanel',
			enableTabScroll : true,
			items : [{
				title : 'Your first tab'
			}]
		}
	});
	
	//for(var i = 1; i <= 30; i++){
	//	var title = 'Long Title Tab # ' + i;
	//	Ext.getCmp('myTPanel').add({
	//		title : title,
	//		html : 'Hi, i am tab ' +i,
	//		tabTip : title,
	//		closable : true
	//	});
	//}
});
*/

/*Exemplo 8 tab panel em window

Ext.onReady(function() {

	var disabledTab = {
		title : 'Disable Tab',
		id : 'disabledTab',
		html : 'Peekaboo!',
		disabled : true,
		closable : true
	}
	var closableTab = {
		title : 'I am closable',
		html : 'Please chosen when done reading',
		closable : true
	}
	
	var simpleTab = {
		title : 'I am simple tab',
		html : 'Hey i am very simple tab'
	}
	
	var tabPanel = new Ext.TabPanel({
		activeTab : 0,
		id : 'myTabPanel',
		enableTabScroll : true,
		items : [disabledTab,closableTab,simpleTab]
	});
	
	new Ext.Window({
		height : 300,
		width : 400,
		layout : 'fit',
		items : tabPanel
	}).show();
	
	//Add new tab firebug
	//var tPanel = Ext.getCmp('myTabPanel');
	//tPanel.add({
	//	title : 'New Tab',
	//	id : 'myNewTab'
	//});
	//tPanel.setActiveTab('myNewTab');
	
	//Enable tab
	//Ext.getCmp('disabledTab').enable();
	
	
});
*/

/*Exemplo 7 controller loading box

Ext.onReady(function() {
	Ext.MessageBox.show({
		title : 'Hold on there cowboy',
		msg : 'Were doing something...',
		progressText : 'Initializing...',
		width : 300,
		progress : true,
		closable : false
	});
	
	var updateFn = function(num) {
		return function() {
			if(num == 6){
				Ext.MessageBox.updateProgress(100,'All items saved');
				Ext.MessageBox.hide();
			}else{
				var i = num/6;
				var pct = Math.round(100 * i);
				Ext.MessageBox.updateProgress(i,pct + '%completed');
			}
		};
	};
	
	for(var i = 1; i < 7; i++){
		setTimeout(updateFn(i), i * 500);
	}
});
*/

/*Exemplo 6 simples loading box

Ext.onReady(function(){
	Ext.MessageBox.wait('We"re doing something...','Hold on...',{ text : 'Loading...'});
});
*/


/*Exemplo 5 MessageBox com varios buttons

Ext.onReady(function() {
	var myCallBack = function(btn,text) {
		console.info('You pressed ' + btn);
		if(text){
			console.info('You entered: ' + text);
		}
	}
	//Message box sample
	//var msg = 'Your document was saved successfully';
	//var title = 'Save status';
	//Ext.MessageBox.alert(title,msg);
	
	//Message box medium
	//var nmsg = 'Please enter your email address';
	//var ntitle = 'Input Required';
	//Ext.MessageBox.prompt(nmsg,ntitle,myCallBack);
	
	//Message box advanced 1 com textArea
	//Ext.Msg.show({
	//	title : 'Input required',
	//	msg : 'Please tell us a little about yourself',
	//	width : 300,
	//	buttons : Ext.MessageBox.OKCANCEL, //Class singleton
	//	multiline : true,
	//	fn : myCallBack,
	//	icon : Ext.MessageBox.INFO
	//});
	
	//Message box advanced 2 com buttons
	Ext.Msg.show({
		title : 'Hold on there cowboy!',
		msg : 'Are you sure you want to reboot the internet?',
		width : 300,
		buttons : Ext.MessageBox.YESNOCANCEL,
		fn : myCallBack,
		icon : Ext.MessageBox.ERROR
	});
});
*/


/*Exemplo 4 Window Solid

Ext.onReady(function() {
	var win;
	var newWindow = function(btn){
		win = new Ext.Window({
			height : 75,
			width : 200,
			modal : true,
			title : 'This is one rigid window',
			html : 'Try to move or resize me. I dare you',
			plain : true,
			border : false,
			resizable : false,
			draggable : false,
			closable : false,
			buttonAlign : 'center',
			buttons : [{
				text : 'I give up',
				handler : function(){
					win.close();
				}
			}]
		}).show();
	}
	
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Open My Window',
		style : 'margin : 100px',
		handler : newWindow
	});
});
*/



/*Exemplo 3 simples exemplo de window

Ext.onReady(function() {
	var win;
	var newWindow = function(btn){
		if(!win){
			win = new Ext.Window({
				animateTarget : btn.el,
				html : 'My first vanilla Window',
				closeAction : 'hide',
				id : 'myWin',
				height : 200,
				width : 300,
				constrain : true
			});
		}
		win.show();
	}
	
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Open My Window',
		style : 'margin : 100px',
		handler : newWindow
	});
});
*/

/*Exemplo 2 usando matrizes de itens para panel e definind toolbars

var myBtnHandler = function(btn) {
	Ext.MessageBox.alert('You clicked', btn.text);
};

var fileBtn = new Ext.Button({
	text : 'File',
	handler : myBtnHandler
});

var editBtn = new Ext.Button({
	text : 'Edit',
	handler : myBtnHandler
});

var myTopToolbar = new Ext.Toolbar({
	items : [fileBtn,editBtn]
});

var myBottonToolbar = [{
	text : 'Save',
	handler : myBtnHandler
},'|',{
	text : 'Cancel',
	handler : myBtnHandler
},'->','<b>Itens open: 1</b>'];

Ext.onReady(function() {
	var myPanel = new Ext.Panel({
		width : 200,
		height : 150,
		title : 'Ext Panels rock!',
		collapsible : true,
		renderTo : Ext.getBody(),
		tbar : myTopToolbar,
		bbar : myBottonToolbar,
		html : 'My First Toolbar Panel!',
		buttons : [{
			text : 'Press Me!',
			handler : myBtnHandler
		}],
		tools : [{
			id : 'gear',
			handler : function(evt, toolEl, panel){
				var toolClassNames = toolEl.dom.className.split(' ');
				var toolClass = toolClassNames[1];
				var toolId = toolClass.split('-')[2];
				
				Ext.MessageBox.alert('You Clicked Tool ' + toolId, 'ok');
			}
		},{
			id : 'help',
			handler : function(){
				Ext.MessageBox.alert('You clicked','The help tool');
			}
		}]
	});
});
*/


/*Exemplo 1 de renderização sem xtypes

var myBtnHandler = function(btn) {
	Ext.MessageBox.alert('You clicked', btn.text);
};

var fileBtn = new Ext.Button({
	text : 'File',
	handler : myBtnHandler
});

var editBtn = new Ext.Button({
	text : 'Edit',
	handler : myBtnHandler
});

	//var tbField = new Ext.Toolbar.Fill();

var myTopToolbar = new Ext.Toolbar({
	items : [fileBtn,editBtn]
});

var myBottonToolbar = [{
	text : 'Save',
	handler : myBtnHandler
},'|',{
	text : 'Cancel',
	handler : myBtnHandler
},'->','<b>Itens open: 1</b>'];

Ext.onReady(function() {
	
	//Poderia declarar fora de onready mas para renderizar teria de usar
	//myPanel.render(elemento)
	var myPanel = new Ext.Panel({
		width : 200,
		height : 150,
		title : 'Ext Panels rock!',
		collapsible : true,
		renderTo : Ext.getBody(),
		tbar : myTopToolbar,
		bbar : myBottonToolbar,
		html : 'My First Toolbar Panel!'
	});
	
});
*/
