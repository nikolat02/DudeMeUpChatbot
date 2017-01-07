//javascript

var styles = ["Prep","Classic","Contemporoary","Urban","Surfer","Hipster"];
var events = ["Chinese Water Torture","Liam Neeson's birthday party"]
var pickedStyle;

window.onload = function() {
  getStyleOptions();
};

function getStyleOptions()
{
	var container = document.getElementById('optionContainer');
	var table = document.createElement("table");
	table.id = "buttonTable";
	container.appendChild(table);
	for (var i = 0; i < styles.length; i++)
	{
		var row = table.insertRow(i);
		var buttonCell = row.insertCell(0);
		var button_ele = document.createElement("button");
		button_ele.innerHTML = styles[i];
		button_ele.id = styles[i] + "button";
		button_ele.value = styles[i];
		button_ele.onclick = function(){styleClick(this.value);};
		buttonCell.appendChild(button_ele);
	}

}

function getEventOptions()
{
	var table = document.getElementById('buttonTable');
	var textArea = document.getElementById('chatArea');
	textArea.value = textArea.value + '\n' + "Great!  No select the type of event you would like to wear your new clothes to.";
	while(table.rows.length > 0)
	{
		table.deleteRow(0);
	}
	for (var i = 0; i < events.length; i++)
	{
		var row = table.insertRow(i);
		var buttonCell = row.insertCell(0);
		var button_ele = document.createElement("button");
		button_ele.innerHTML = events[i];
		button_ele.id = events[i] + "button";
		button_ele.value = events[i];
		button_ele.onclick = function(){eventClick(this.value);};
		buttonCell.appendChild(button_ele);
	}
}

function styleClick(eleValue)
{
	var textArea = document.getElementById('chatArea');
	textArea.value = textArea.value + '\n' + "User:  Style - " + eleValue;
	pickedStyle = eleValue;
	getEventOptions();
}

function eventClick(eleValue)
{
	var textArea = document.getElementById('chatArea');
	textArea.value = textArea.value + '\n' + "User:  Event - " + eleValue;
	pickedEvent = eleValue;
	var table = document.getElementById('buttonTable');
	while(table.rows.length > 0)
	{
		table.deleteRow(0);
	}
	textArea.value = textArea.value + "Hold on while I find your new outfit."
}

function dbQuery(season, style, event_)
{
	
}