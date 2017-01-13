//javascript

var styles = ["Prep","Classic","Contemporoary","Urban","Surfer","Hipster"];
var events = ["Chinese Water Torture","Liam Neeson's birthday party"];
var seasons = ["Fall","Spring","Summer","Winter"];
var pickedStyle;
var pickedSeason;
var pickedEvent;

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
	textArea.value = textArea.value + '\n' + "Great!  Now select the type of event you will be attending.";
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

function getSeasonOptions()
{
	var table = document.getElementById('buttonTable');
	var textArea = document.getElementById('chatArea');
	textArea.value = textArea.value + '\n' + "Perfect!  Which season would you like to wear these new clothes in?";
	while(table.rows.length > 0)
	{
		table.deleteRow(0);
	}
	for (var i = 0; i < seasons.length; i++)
	{
		var row = table.insertRow(i);
		var buttonCell = row.insertCell(0);
		var button_ele = document.createElement("button");
		button_ele.innerHTML = seasons[i];
		button_ele.id = seasons[i] + "button";
		button_ele.value = seasons[i];
		button_ele.onclick = function(){seasonClick(this.value);};
		buttonCell.appendChild(button_ele);
	}
}

function styleClick(eleValue)
{
	var textArea = document.getElementById('chatArea');
	textArea.value = textArea.value + '\n' + "User:  Style - " + eleValue;
	pickedStyle = eleValue;
	getSeasonOptions();
}

function seasonClick(eleValue)
{
	var textArea = document.getElementById('chatArea');
	textArea.value = textArea.value + '\n' + "User:  Season - " + eleValue;
	pickedSeason = eleValue;
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
	textArea.value = textArea.value + '\n' + "Hold on while I find your new outfit."
}

function dbQuery(season, style, event_)
{}