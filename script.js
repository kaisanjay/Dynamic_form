let outputJson = {};

$(document).ready(function () {
	// Add input
	$("#add-input").click(function () {
		// Get label value
		let inputLabel = $("#input-label").val();

		// Check label already exists or not.
		for (let index in outputJson) {
			if (outputJson[index].label === inputLabel) {
				alert("Label already exists.");
				return;
			}
		}
		
		$("#dynamic-form").append('<div class="tab"><div class="left_tab"><div class="name_label"><span class="label">' + inputLabel + '</div></div><div class="right_tab"><input type="text" id="input_box" /></div></div>');
		$('#input_box').attr('id', inputLabel);

		outputJson[inputLabel] = {
			label: inputLabel,
			value: ""
		};
	});

	// Get json
	$("#submit").click(function () {
		for (let index in outputJson) {
			outputJson[index].value = $("#" + outputJson[index].label).val();
		}
		$("#output").text(JSON.stringify(outputJson));
	});
});