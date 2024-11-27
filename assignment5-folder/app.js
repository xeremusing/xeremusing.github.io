async function getData(selectedMajor) {
		var response = await fetch('cit5students.json');
		if(response.ok) {
			var data = await response.json();
			stuMajor = data.filter( (item) => student.major == selectedMajor );
			var templateText = document.getElementById('classTemplate').innerHTML;
			var compiledTemplateText = Handlebars.compile(templateText);
			compiledHtml = compiledTemplateText({ rows: stuMajor })
			document.getElementById('classTable').innerHTML = compiledHtml;
		}
		else {
			document.querySelector('#classTable').innerHTML = "There was either an error or a student's data could not be found";
		}
}
