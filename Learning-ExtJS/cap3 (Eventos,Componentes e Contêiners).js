/*Exemplo 9 simples border layout

Ext.onReady(function() {
	new Ext.Viewport({
		layout : 'border',
		items : [{
			height : 75,
			region : 'north',
			title : 'Does Santa live here?'
		},{
			width : 150,
			region : 'west',
			title : 'The west region rules'
		},{
			region : 'center',
			title : 'No, this region rules'
		}]
	});
});
*/

/*Exemplo 8 introdução a containers e manipulação

Ext.onReady(function() {
	var panel1 = {
		xtype: 'panel',
		html : 'I am panel',
		id : 'panel1',
		frame : true,
		height : 100
	};
	
	var panel2 = {
		xtype: 'panel',
		html : '<b>I am Panel2</b>',
		id : 'panel2',
		frame : true
	};
	
	var myWind = new Ext.Window({
		id : 'myWin',
		height : 400,
		width : 400,
		items : [panel1,panel2]
	});
	
	var otherParent = new Ext.Window({
		id : 'otherParent',
		height : 400,
		width : 400
	}).show();
	
	myWind.show();
	
	//Digitar no firebug
	//Add elements
	//Ext.getCmp('myWin').add({ //kkk pegar id nao variavel
	//	title : 'Append Panel',
	//	id : 'addedPanel',
	//	html : 'Hello there'
	//});
	
	//Insert elements position
	//Ext.getCmp('myWin').insert(1,{
	//	title : 'Inserted Panel',
	//	id : 'insertedPanel',
	//	html : 'Is is cool here!'
	//});
	
	//Força renderização
	//Ext.getCmp('myWin').doLayout();
	
	//Removendo componentes
	//var panel = Ext.getCmp('addedPanel');
	//Ext.getCmp('myWin').remove(panel);
	
	//Movendo elementos de container
	//var panel = Ext.getCmp('insertedPanel');
	//Ext.getCmp('myWin').remove(panel,false);
	//Ext.getCmp('otherParent').add(panel).doLayout();
	
	//Procura elementos no EXT
	//Ext.getCmp('myWin').query('panel'); //Compativel com EXT4
	//Ext.getCmp('myWin').findByType('panel');//Compativel com EXT3
	
});
*/


/*Exemplo 7 renderazição tardia

Ext.onReady(function() {
	//Instanciamos um novo panel
	var myPanel = new Ext.Panel({
		height : 50,
		width : 150,
		title : 'Lazy Rendered Panel',
		frame : true
	});
		
	//Teriamos alguma lógica de negócio...
	
	//Renderizando em body
	//myPanel.render(document.body);
	//outro exemplo
	//Renderizando em algum component do DOM
	$('body').append($('<div>').attr('id','dinamic'));
	myPanel.render(Ext.get('dinamic'));
	//Obs: não aparecerá dois panels pois é a mesma instancia só trocamos aonde ele foi renderizado
	//se fizermos em body e dinamic
});
*/

/*Exemplo 6 renderização imediadata com renderTo

Ext.onReady(function() {
	var myPanel = new Ext.Panel({
		renderTo : document.body, //Renderização definindo aonde devemos adicionar o elemento filho
		height : 50,
		width : 150,
		title : 'Lazy rendered panel',
		frame : true
	});
});
*/

/*Exemplo 5 passando diretamento os xtype no objeto
usando xtype temos um aumento de desempenho que podemos ver
quando em grandes escalas

Ext.onReady(function() {
	new Ext.Window({
		width : 200,
		height : 150,
		title : 'Accordion Window',
		layout : 'accordion',
		border : false,
		layoutConfig : {
			animate : true
		},
		items : [{
			xtype : 'panel',
			title : 'Plain Panel',
			html : 'Panel With an xtype specified'
		},{
			title : 'Plain Panel 2',
			html : 'Panel with <b>not</b> xtype specified'
		}]
	}).show();
});
*/

/*Exemplo 4 com xtypes

Ext.onReady(function() {
	
	//xtypes quando definimos um xtype setamos que classe o renderizador EXT
	//irá usar para criar o elemento
	var panel1 = {
		xtype : 'panel', //Definindo xtype nesse caso será um elemento panel
		title : 'Plain Panel',
		html : 'Panel with an xtype specified'
	}
	
	var panel2 = {
		title : 'Plain panel 2',
		html : 'Panel with <b>no</b> xtype specified'
	}
	
	new Ext.Window({
		width : 200,
		height : 200,
		title : 'Accordion window',
		layout : 'accordion',
		border : false,
		layoutConfig : {
			animate : true
		},
		items : [ panel1, panel2] //Adicionando os panel a windows
	}).show();
});
*/

/*Exemplo 3 conhecendo observable

Ext.onReady(function() {
	
	//Criando uma instancia de Observable (gerenciado de eventos EXT)
	var myObservable = new Ext.util.Observable();
		
	//myObservable.addEvent('sayHello');
	//myObservable.addEvent('sayGoodbye');
	//ou
	//myObservable.addEvent('sayHello', 'sayGoodbye');
	//ou
	myObservable.addEvents({
		'sayHello' : true, //o true define o evento como ativo
		'sayGoodbye' : true
	});
	
	//agora estou registrando um manipulador de eventos
	myObservable.on('sayHello', function() {
		console.log('Hello stranger');
	});
	
	var sayGoodbyFn = function(firstName, lastName) {
		console.log('First name: ' + firstName + ' Last name: ' + lastName);
	}
	
	myObservable.on('sayGoodbye', sayGoodbyFn);
	
	//Agora estou disparando os eventos
	myObservable.fireEvent('sayHello');
	myObservable.fireEvent('sayGoodbye','Joao','Pedro');
	
	//Estou desregistrando um evento de observable
	myObservable.un('sayGoodbye',sayGoodbyFn);
});
*/

/* Segundo exemplo contextmenu evento click botão direito

Ext.onReady(function() {
	Ext.get('myDiv').on('contextmenu', function(eventObj, elRef) {
		console.log('myDiv contextMenu Handler, source el ID:' + elRef.id);
	});
	
	Ext.get('myHref').on('contextmenu', function(eventObj, elRef) {
		eventObj.stopEvent();
		console.log('myHref contextMenu Handler, source el ID: ' + elRef.id);
		
		//Caso o navegador tenha um contexto cancelamos ele e atríbuimos nosso próprio contexto
		//contextmenu é ativado quando clicamos com o botão direito para disparar o event
		if(!this.ctxMenu) {
			this.ctxMenu = new Ext.menu.Menu({
				items : [{
					text : 'This is'
				},{
					text : 'our custom'
				},{
					text : 'context menu'
				}]
			});
		}
		this.ctxMenu.show(elRef);
	});
});
*/

/* Primeiro exemplo

Ext.onReady(function() {
	
	//Quando clicar myHref estoura efeito bubblink
	Ext.get('myDiv').on('click', function(eventObj, elRef) {
		console.log('myDiv click Handler, source element ID: '
		+ elRef.id);
	});
	
	Ext.get('myHref').on('click', function(eventObj, elRef) {
	
		//Necessário para evitar efeito bubbling chamando onlick da DIV
		eventObj.stopEvent(); 
		
		console.log('myHref click Handler, source element ID: '
		+ elRef.id);
	});
});
*/
