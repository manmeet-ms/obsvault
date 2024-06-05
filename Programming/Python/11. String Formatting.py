# Day 28 string formatting
# with format method
text = "My name is {}. My age is {}. "
name = "Mosh"
age = 12
print(text.format(name, age))
print(text.format(age, name))
print()

text = "My name is {0}. My age is {1}. "
name = "Mosh"
age = 12
print(text.format(name, age))
# first var as `{0}` Second as `{1}`
print()

text4 = "My name is {0}. My age is {1}. I am from {2}"
name = "Mosh"
age = 12
country = "Israel"
print(text4.format(name, age, country))
# first var as `{0}` Second as `{1}` Third as `{3}`
print()

txt = "for only {Price:.2f}$!"
print(txt.format(Price=49.02153564))

# fstrings
Price = 12
color = "Blue"
Prompt = f"Get the {color} shirts at ${Price} off!"
print(Prompt)

text_decimalprecision = f"Get the shirts at ${Price:.2f} off!"
print(text_decimalprecision)

print(f"Get the {{color}} shirts")


# DOCSTRINGS
def function():
    '''Docstring body e.g. Description
Yet another Hello World printing function '''
    print("Hello World")


function()
print(function.__doc__)
