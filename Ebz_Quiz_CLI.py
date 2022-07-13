import random

dictionary = {
    'latte': {
        'hot': {
            '12oz':{'prep cup':'no','shots':'1','syrup':'3', 'sauce':'1','honey':'0.5'},
            '16oz':{'prep cup':'no','shots':'2','syrup':'4','sauce':'1.5','honey':'1'}},
         'cold':{
            '12oz':{'prep cup':'yes','shots':'1','syrup':'3', 'sauce':'1','honey':'0.5'},
            '16oz':{'prep cup':'yes','shots':'2','syrup':'4','sauce':'1.5','honey':'1'}}},
    'chai': {
        'hot': {
            '12oz':{'prep cup':'no', 'chai concentrate':'1'},
            '16oz':{'prep cup':'no', 'chai concentrate':'1.5'}},
         'cold':{
            '12oz':{'prep cup':'no', 'chai concentrate':'1'},
            '16oz':{'prep cup':'no', 'chai concentrate':'1.5'}}},
    'hot chocolate': {
        'hot': {
            '12oz':{'prep cup':'yes','sauce':'1'},
            '16oz':{'prep cup':'yes','sauce':'1.5',}},
         'frozen':{'milk':'8oz','sauce':'2','ice':'full cup'}},
    'americano': {
        'hot': {
            '12oz':{'prep cup':'no','shots':'2'},
            '16oz':{'prep cup':'no','shots':'3'}},
         'cold':{
            '12oz':{'prep cup':'no','shots':'2'},
            '16oz':{'prep cup':'no','shots':'3'}}},
    'freezer': {
        'mocha': {'coffee':'8oz','coffee powder':'4','sauce':'2','ice':'full cup'},
         'chai':{'milk':'8oz','chai concentrate':'1.5','ice':'full cup'},
        'coffee': {'coffee':'8oz','coffee powder':'4','ice':'full cup'},
        'orange dreamsicle': {'milk':'8oz','orange dream syrup':'1.5','ice':'full cup'}},
    'flat white': {'prep cup':'no','shots':'2'},
    'cappucino': {
        '8oz':{'shots':'1'},
        '12oz':{'shots':'2'}},
    'cortado': {'shots':'2'},
    'machiatto': {'shots':'2'},
    'matcha latte': {
        'hot': {
            '12oz':{'prep cup':'no', 'matcha powder':'1'},
            '16oz':{'prep cup':'no', 'matcha powder':'1.5'}},
         'cold':{
            '12oz':{'prep cup':'yes', 'matcha powder':'1'},
            '16oz':{'prep cup':'yes', 'matcha powder':'1.5'}}},
}

def quiz():
    class get_drink:
        drink = random.choice(list(dictionary))
        attributes = dictionary[drink]
        if type(attributes) is dict:
            y = random.choice(list(attributes))
            index_two = attributes[y]
            if type(index_two) is dict:
                z = random.choice(list(index_two))
                index_three = index_two[z]
                if type(index_three) is dict:
                    zz = random.choice(list(index_three))
                    index_four = index_three[zz]
                    question = zz
                    correct_answer = index_four
                    generated_drink = f'{y}, {z} {drink}'
                    # print(generated_drink)
                    # print('question:',question)
                    # print('answer:',correct_answer)
                else:
                    question = z
                    correct_answer = index_three
                    generated_drink = f'{y} {drink}'
                    # print(generated_drink)
                    # print('question:',question)
                    # print('answer:',correct_answer)
            else:
                question = y
                correct_answer = index_two
                generated_drink = drink
                # print(generated_drink)
                # print('question:',question)
                # print('answer:',correct_answer)
        else:
            question = random.choice(list(attributes))
            correct_answer = attributes[question]
            generated_drink = drink
            # print('question:',question)
            # print('answer:',correct_answer)
        
    class quiz_interface:

        if get_drink.question == 'prep cup':
            user_input = input(f'Do you use a prep cup when preparing a {get_drink.generated_drink}? ')
        if get_drink.question == 'shots':
            user_input = input(f'How many espresso shots are in a {get_drink.generated_drink}? ')
        if get_drink.question == 'syrup' or get_drink.question == 'sauce' or get_drink.question == 'honey' or get_drink.question == 'chai concentrate' or get_drink.question == 'orange dream syrup':
            user_input = input(f'How many pumps of {get_drink.question} are in a {get_drink.generated_drink}? ')
        if get_drink.question == 'matcha powder':
            user_input = input(f'How many scoops of matcha powder are in a {get_drink.generated_drink}? ')
        if get_drink.question == 'coffee powder' or get_drink.question == 'HC powder':
            user_input = input(f'How many clicks of {get_drink.question} are in a {get_drink.generated_drink}? ')
        if get_drink.question == 'ice':
            user_input = input(f'How much ice should be used in a {get_drink.generated_drink}? ')
        if get_drink.question == 'coffee' or get_drink.question == 'milk':
            user_input = input(f'How much {get_drink.question} is used in a {get_drink.generated_drink}? ')

        if user_input == get_drink.correct_answer:
            print("Correct!")
        else:
            print(f"INCORRECT - CORRECT ANSWER: {get_drink.correct_answer}")

if __name__ == '__main__':
    while True:
        quiz()