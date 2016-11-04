jQuery(function($){
	// init function
	var 
	gotoLink = function(link) {
		if(link) { 
			window.location = link;
		}
	}, 

	checkAnswer = function(q, a) {
		return q === a;
	},
	correct = function() {
		console.log('correct');
		initQuestion();
		initAnswer();
	},
	mistake = function() {
		console.log('mistake');
		selectAnswer();
		
	},
	initQuestion = function() {
		var max = 101, min = 1;
		questionText = Math.floor(Math.random() * (max - min) + 1) + min + "";

		question.text(questionText);
	},
	initAnswer = function() {
		answer.val("");	
		answer.width(Math.floor(
			Math.max(question.width() * 1.1, quiz.width() * 0.2)
		));
	},
	selectAnswer = function() {
		answer.select();
	},
	initQuestionLib = function() {
		return [
			window
		]
	}
	
	// init variable
	// var winWidth = $(window).width(),
	// 	winHeight = $(window).height(),
	var 
		quiz = $('#quiz'),	// questionLib.forEach(function(e){
	// 	for (var key in e) {
	// 		console.log("key = ", key, "func = ",  e[key]);
	// 	}
	// })

		question = $('#question'),
		answer = $('#answer'),
		item = $('.item')		
	;

	var 
	questionText = "",
	questionLib = initQuestionLib()
	;	

	

	// 
	// 
	// 
	// $(document.body).height(winHeight);	
	initQuestion();
	initAnswer();
	
	answer.on({
		'focus': function() {
			selectAnswer();
		},
		'keyup': function(e) {			
			if (e.key == "Enter") {
				var result = checkAnswer(questionText, $(this).val());
				if (result) {
					correct();
				} else {
					mistake();
				}
			}
		},
	})

	item.each(function(index, element) {
		$(element).click(function(){
			gotoLink($(this).data('link'));
		})
	})
});