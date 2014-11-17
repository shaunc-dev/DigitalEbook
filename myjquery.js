function bprofile() {

	$(document).ready(function() {
		$('#bbooks').hide();
		$('#bupload').hide();
		$('#bactivities').hide();
		$('#bprofile').show();
	});
}

function bbooks() {
	$(document).ready(function() {
		$('#bbooks').show();
		$('#bupload').hide();
		$('#bactivities').hide();
		$('#bprofile').hide();
	});
}

function bupload() {
	$(document).ready(function() {
		$('#bbooks').hide();
		$('#bupload').show();
		$('#bactivities').hide();
		$('#bprofile').hide();
	});
}

function bactivities() {
	$(document).ready(function() {
		$('#bbooks').hide();
		$('#bupload').hide();
		$('#bactivities').show();
		$('#bprofile').hide();
	});
}