import json
import random

'''
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
'''
with open('ebz_drinks_dict.json', 'r') as f:
  dictionary = json.load(f)

def get_drink():
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
                return question, correct_answer, generated_drink
            else:
                question = z
                correct_answer = index_three
                generated_drink = f'{y} {drink}'
                # print(generated_drink)
                # print('question:',question)
                # print('answer:',correct_answer)
                return question, correct_answer, generated_drink
        else:
            question = y
            correct_answer = index_two
            generated_drink = drink
            # print(generated_drink)
            # print('question:',question)
            # print('answer:',correct_answer)
            return question, correct_answer, generated_drink
    else:
        question = random.choice(list(attributes))
        correct_answer = attributes[question]
        generated_drink = drink
        # print('question:',question)
        # print('answer:',correct_answer)
        return question, correct_answer, generated_drink
        
def get_question(question, generated_drink):

    if question == 'prep cup':
        prompt = f'Do you use a prep cup when preparing a {generated_drink}? '
    if question == 'shots':
        prompt = f'How many espresso shots are in a {generated_drink}? '
    if question == 'syrup' or question == 'sauce' or question == 'honey' or question == 'chai concentrate' or question == 'orange dream syrup':
        prompt = f'How many pumps of {question} are in a {generated_drink}? '
    if question == 'matcha powder':
        prompt = f'How many scoops of matcha powder are in a {generated_drink}? '
    if question == 'coffee powder' or question == 'HC powder':
        prompt = f'How many clicks of {question} are in a {generated_drink}? '
    if question == 'ice':
        prompt = f'How much ice should be used in a {generated_drink}? '
    if question == 'coffee' or question == 'milk':
        prompt = f'How much {question} is used in a {generated_drink}? '
    return prompt

def check_answer(correct_answer, user_input):
    if user_input == correct_answer:
        response = 'Correct!'
    else:
        response = f"Incorrect. The answer is {correct_answer}."
    return response

if __name__ == 'main':
    get_drink()
    get_question()
    check_answer()