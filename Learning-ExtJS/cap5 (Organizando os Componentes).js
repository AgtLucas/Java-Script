/*Exemplo 14 Exemplo simples de border layout com algumas configurações comuns

Ext.onReady(function() {
	new Ext.Viewport({
		layout : 'border',
		defaults : {
			frame : true,
			split : true
		},
		items : [{
			title : 'North Panel',
			region : 'north',
			height : 100,
			minHeight : 100,
			maxHeight : 150,
			collapsible : true
		},{
			title : 'South Panel',
			region : 'south',
			height : 75,
			split : false,
			margins : {
				top : 5
			}
		},{
			title : 'East Panel',
			region : 'east',
			width : 100,
			minWidth : 75,
			maxWidth : 150,
			collapsible : true
		},{
			xtype : 'panel',
			region : 'west',
			width : 100,
			title : 'West Panel',
			collapsible : true,
			collapseMode : 'mini'
		},{
			xtype : 'container',
			region : 'center',
			layout : 'fit',
			id : 'centerRegion',
			autoEl : {},
			items : [{
				xtype : 'panel',
				title : 'Center Region',
				id : 'centerPanel',
				html : 'I am diposable',
				frame : true
			}]
		}]
	});
	
	
	//Digitar no firebug para modificar dinamicamente
	//var centerPanel = Ext.getCmp('centerPanel');
	//var centerRegion = Ext.getCmp('centerRegion');
	//
	//centerRegion.remove(centerPanel,true);
	//centerRegion.add({
	//	xtype : 'form',
	//	frame : true,
	//	bodyStyle : 'padding: 5px',
	//	defaultType : 'field',
	//	title : 'Please enter some information',
	//	defaults : {
	//		anchor : '-10'
	//	},
	//	items : [{
	//		fieldLabel : 'First Name'
	//	},{
	//		fieldLabel : 'Last Name'
	//	},{
	//		xtype : 'textarea',
	//		fieldLabel : 'Bio',
	//		value : 'Enter here'
	//	}]
	//});
});
*/


/*Exemplo 13 TableLayout com algumas modificações de row e colspan

Ext.onReady(function() {
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		border : false,
		autoScroll : true,
		title : 'A window with a Table layout',
		layout : {
			type : 'table', //Definimos como layout table (Ext4 é nesse formato)
			columns : 3 //Definimos quantas colunas terá nossa tabela
		},
		defaults : {
			height : 50,
			width : 50
		},
		items : [{ //Vamos adicionando objetos as nossas células
			html : '1',
			colspan : 3,
			width : 150
		},{
			html : '2',
			colspan : 2,
			height : 100
		},{
			html : '3'
		},{
			html : '4',
			rowspan : 2,
			height : 100
		},{
			html : '5'
		},{
			html : '6'
		},{
			html : '7'
		},{
			html : '8'
		},{
			html : '9',
			colspan : 3,
			width : 150
		}]
	}).show();
});
*/


/*Exemplo 12 simples exemplo de tabela no Ext

Ext.onReady(function() {
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		border : false,
		autoScroll : true,
		title : 'A window with a Table layout',
		layout : {
			type : 'table', //Definimos como layout table (Ext4 é nesse formato)
			columns : 3 //Definimos quantas colunas terá nossa tabela
		},
		defaults : {
			height : 50,
			width : 50
		},
		items : [{ //Vamos adicionando objetos as nossas células
			html : '1'
		},{
			html : '2'
		},{
			html : '3'
		},{
			html : '4'
		},{
			html : '5'
		},{
			html : '6'
		},{
			html : '7'
		},{
			html : '8'
		},{
			html : '9'
		}]
	}).show();
});
*/

/*Exemplo 11 hbox/vbox layout

Ext.onReady(function() {
	new Ext.Window({
		width: 500,
		height: 300,
		title: "HBoxLayout Panel",
		layout: {  //Definições de layout
			type: 'hbox',
			pack : 'start', //Pode ter start,center,end (esquerda,meio,direita) horizontal
			align: 'stretch' //Pode ser top,middle,stretch (topo,meio,full) vertical
		},
		items: [{
			xtype: 'panel',
			title: 'Inner Panel One',
			flex: 2
		},{
			xtype: 'panel',
			title: 'Inner Panel Two',
			flex: 1
		},{
			xtype: 'panel',
			title: 'Inner Panel Three',
			flex: 1
		}]
	}).show();
});
*/


/*Exemplo 10 layout utilizando colunas

Ext.onReady(function() {

	var myWin = new Ext.Window({
		height : 200,
		width : 400,
		autoScroll : true,
		id : 'myWin',
		title : 'A Window with a Card layout',
		layout : 'column', //Setamos com coluna
		defaults : { frame : true },
		items : [{
			title : 'Col 1',
			id : 'col1',
			columnWidth : .3 //Definimos o tamanho relativo da coluna em relação ao container
		},{
			title : 'Col 2',
			html : '20% relative width',
			columnWidth : .2
		},{
			title : 'Col 3',
			html : '100px fixed width',
			width : 100
		},{
			title : 'Col 4',
			frame : true,
			html : '50% relative width',
			columnWidth : .5
		}]
	}).show();
	
});
*/

/*Exemplo 9 usando cardLayout para criar um wizard

var myWin;

//Função para navegarmos no card
var handleNav = function(btn){
	var activeItem = myWin.layout.activeItem;
	var index = myWin.items.indexOf(activeItem);
	var numItems = myWin.items.getCount();
	var indicatorEl = Ext.getCmp('indicator').el;
	
	if(btn.text == 'Forward' && index < numItems - 1){
		index++;
		myWin.layout.setActiveItem(index);
		index++;
		indicatorEl.update(index + ' of ' + numItems);
	}else if(btn.text == 'Back' && index > 0){
		myWin.layout.setActiveItem(index - 1);
		indicatorEl.update(index + ' of ' + numItems);
	}
}

Ext.onReady(function() {
	myWin = new Ext.Window({
		height : 200,
		width : 300,
		border : false,
		title : 'A window with a card layout',
		layout : 'card', //Definimos o layout como card
		activeItem : 0, //Dizemos qual item deve iniciar ativo
		defaults : { border : false },
		items : [{
			xtype : 'form',
			title : 'General info',
			bodyStyle : 'padding: 5px',
			defaultType : 'field',
			labelWidth : 50,
			items : [{
				fieldLabel : 'Name',
				anchor : '-10'
			},{
				xtype : 'numberfield',
				fieldLabel : 'Age',
				width : 30
			},{
				xtype : 'combo',
				fieldLabel : 'Location',
				anchor : '-10',
				store : ['Here','There','Anywhere']
			}]
		},{
			xtype : 'panel',
			autoEl : {},
			title : 'Bio',
			layout : 'fit',
			items : {
				xtype : 'textarea',
				value : 'Tell us about yourself'
			}
		},{
			title : 'Congratulations',
			html : 'Thank you for filling out our form!'
		}],
		bbar : [{
			text : 'Back',
			handler : handleNav
		}, '-', {
			text : 'Forward',
			handler : handleNav
		},'->',{
			xtype : 'box',
			id : 'indicator',
			style : 'margin-right: 5px',
			autoEl : {
				tag : 'div',
				html : '1 of 3'
			}
		}]
	}).show();
});
*/

/*Exemplo 8 simples accordion layout

Ext.onReady(function() {
	var myWin = new Ext.Window({
		height : 200,
		width : 300,
		border : false,
		title : 'A Window with an accordion layout',
		layout : 'accordion', //Definindo layout
		layoutConfig : {
			animate : true //animacao css para layout
		},
		items : [{
			xtype : 'form',
			title : 'General info',
			bodyStyle : 'padding: 5px',
			defaultType : 'field',
			labelWidth : 50,
			items : [{
				fieldLabel : 'Name',
				anchor : '-10'
			},{
				xtype : 'numberfield',
				fieldLabel : 'Age',
				width : 50
			},{
				xtype : 'combo',
				fieldLabel : 'Location',
				anchor : '-10',
				store : ['Here','There','Anywhere']
			}],
		},{
			xtype : 'panel',
			title : 'Bio',
			layout : 'fit',
			items : {
				xtype : 'textarea',
				value : 'Tell us about yourself'
			}
		},{
			title : 'Instructions',
			html : 'Please enter information',
			tools : [{id : 'gear'}, {id : 'help'}]
		}]
	}).show();
});
*/

/*Exemplo 7 FitLayout faz os componentes se ajustarem no componente pai
o xtype default de window é panel

Ext.onReady(function() {
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		layout : 'fit', //Definindo fit layout
		autoScroll : true,
		border : false,
		items : [{
			title : 'Panel',
			xtype : 'panel',
			html : 'I am a fit layout',
			frame : true
		}]
	}).show();
});
*/

/*Exemplo 6 usando absolute layout para organização chumbada

Ext.onReady(function() {
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		layout : 'absolute', //definimos layout como absolute
		autoScroll : true,
		border : false,
		items : [{
			title : 'Panel',
			xtype : 'panel',
			x : 50, //Definimos a posição de x left em relação ao pai
			y : 50, //Definimos a posiçaõ de y left em relação ao pai
			height : 100,
			width : 100,
			html : 'x : 50, y : 50',
			frame : true
		},{
			title : 'Panel 2',
			xtype : 'panel',
			x : 90,
			y : 120,
			height : 75,
			width : 77,
			html : 'x:90, y:120',
			frame : true
		}]
	}).show();
});
*/


/*Exemplo 5 como formLayout é filho de anchorLayut podemos customizar
as configuaçãoes usando a propriedade anchor

Ext.onReady(function() {

	var myWin = new Ext.Window({
		height : 240,
		width : 200,
		bodyStyle : 'padding : 5px',
		layout : 'form', //Usando form label parente de anchor label
		layoutWidth : 50,
		id : 'myWin',
		title : 'A window with a container layout',
		defaultType : 'textfield', // Elemento padrão que será adicionado ao form se não especificado xtype
		items : [{
			fieldlabel : 'Name',
			anchor : '-4'
		},{
			fieldLabel : 'Age',
			width : 25
		},{
			xtype : 'combo',
			fieldLabel : 'Localtion',
			anchor : '-120',
			store : ['Here','There','Anywhere']
		},{
			xtype : 'textarea',
			fieldLabel : 'Bio',
			anchor : '-4, -134'
		},{
			xtype : 'panel',
			fieldLabel : ' ', //Por ser label devemos usar um fieldLabel vaziu para renderizar
			labelSeparator : '',
			frame : true,
			title : 'Instructions',
			html : 'Please fill in the form',
			anchor : '-4'
		}]
	}).show();
});
*/

/*Exemplo 4 uso simples de formLayout em um form

Ext.onReady(function() {

	var myWin = new Ext.Window({
		height : 240,
		width : 200,
		bodyStyle : 'padding : 5px',
		layout : 'form', //Usando form label parente de anchor label
		layoutWidth : 50,
		id : 'myWin',
		title : 'A window with a container layout',
		defaultType : 'textfield', // Elemento padrão que será adicionado ao form se não especificado xtype
		items : [{
			fieldlabel : 'Name',
			width : 110
		},{
			fieldLabel : 'Age',
			width : 25
		},{
			xtype : 'combo',
			fieldLabel : 'Localtion',
			width : 120,
			store : ['Here','There','Anywhere']
		},{
			xtype : 'textarea',
			fieldLabel : 'Bio'
		},{
			xtype : 'panel',
			fieldLabel : '', //Por ser label devemos usar um fieldLabel vaziu para renderizar
			labelSeparator : '',
			frame : true,
			title : 'Instructions',
			html : 'Please fill in the form',
			height : 55
		}]
	}).show();
});
*/

/*Exemplo 3 anchor usando deslocamentos, a gente usa o inteniro negativo em referência ao
número absoluto do panel, é como dizer quanto você quer tirar do componente que habitara
o Window

Ext.onReady(function() {

	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		layout : 'anchor', //aplicamos anchor layout que adiciona os itens empilhados mais os redimensiona
		border : 'false',
		anchorSize : '400', //propriedade adicional
		id : 'myWin',
		title : 'A window with a container layout',
		autoScroll : true,
		items : [{
			title : 'Panel1',
			anchor : '-50, -150', //Definimos as porcentagens para width e height em relação ao pai
			frame : true
		},{
			title : 'Panel2',
			anchor : '-10, -150', //Zero é considerado com 100%
			frame : true
		}]
	}).show();
});
*/


/*Exemplo 2 : anchor layout usando porcentagens para dimensionamento

Ext.onReady(function() {

	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		layout : 'anchor', //aplicamos anchor layout que adiciona os itens empilhados mais os redimensiona
		border : 'false',
		anchorSize : '400', //propriedade adicional
		id : 'myWin',
		title : 'A window with a container layout',
		autoScroll : true,
		items : [{
			title : 'Panel1',
			anchor : '100%, 25%', //Definimos as porcentagens para width e height em relação ao pai
			frame : true
		},{
			title : 'Panel2',
			anchor : '0, 50%', //Zero é considerado com 100%
			frame : true
		},{
			title : 'Panel3',
			anchor : '50%, 25%',
			frame : true
		}]
	}).show();
});
*/

/*Exemplo 1 treinando layouts : ContainerLayout layout padrão EXT quando não
definimos nenhum

Ext.onReady(function() {
	var childPnl1 = {
		frame : true,
		height : 50,
		html : 'My First Child Panel',
		title : 'First children are fun'
	};
	
	var childPnl2 = {
		width : 150,
		html : 'Second shild',
		title : 'Second children have all the fun!'
	};
	
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		id : 'myWin',
		title : 'A window with a container layout',
		autoScroll : true,
		items : [childPnl1,childPnl2],
		tbar : [{
			text : 'Add child',
			handler : function() {
				var numItems = myWin.items.getCount() + 1;
				myWin.add({
					title : 'Child number ' + numItems,
					height : 60,
					frame : true,
					collapsible : true,
					collaped : true,
					html : 'Yay, another child'
				});
				myWin.doLayout();
			}
		}]
	}).show();
});
*/
