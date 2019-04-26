/**
 * 
 */
'use strict';

var rootUrl = "/java_s04/api/v1.1/posts";

findAll();

function findAll(){
	console.log('findAll start.')
	$.ajax({
		type: "GET",
		url: rootUrl,
		dataType: "json",
		success: renderTable
	});
}

function renderTable(data) {
	var headerRow = '<tr><th>申請ID</th><th>申請日</th><th>更新日</th><th>申請者</th><th>タイトル</th><th>金額</th><th>ステータス</th></tr>';

	$('#posts').children().remove();

	if (data.length === 0) {
		$('#posts').append('<p>現在データが存在していません。</p>')
	} else {
		var table = $('<table>').attr('border', 1);
		table.append(headerRow);
		$.each(data, function(index, post) {
			var row = $('<tr>');
			row.append($('<td>').text(post.id));
			row.append($('<td>').text(post.name));
			
			row.append($('<td>').append(
					$('<button>').text("編集").attr("type","button").attr("onclick", "findById("+post.id+')')
				));
			table.append(row);
		});

		$('#posts').append(table);
	}

}