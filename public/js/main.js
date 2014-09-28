$(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var userChoice = {'choice': $('input[name=choice]:checked').val()};
		$.ajax({
			type:'post',
			data:userChoice,
			// URL: '/',
			dataType:'JSON'
		}).done(function(html){
			console.log('successful request');
			console.log('result: ' + html)
			$('.results').html( '<p class="node">' + html.result + '</p>' + 
				'<img src="img/'+html.userChoice+'.png">' + 
				'<img src="img/'+html.computerChoice+'.png">' )
			


		}).fail(function(err){
			alert(JSON.stringify(err))
		});
	});
});