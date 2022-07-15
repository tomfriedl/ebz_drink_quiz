import quiz_funcs

while True:
	question, correct_answer, generated_drink = quiz_funcs.get_drink()
	prompt = quiz_funcs.get_question(question, generated_drink)
	print(prompt)
	user_answer = input()
	response = quiz_funcs.check_answer(correct_answer, user_answer)
	print(response)

