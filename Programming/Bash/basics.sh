echo "Hello World"


# VARIBLES
greet="Have a good day"
echo $greet 
# Do not use spaces in declaring defining variables

# USER INPUT
echo "What is your name:"
read name
echo "Hey!" $name

echo "What is your first name:"
read fname
echo "What is your last name:"
read lname
echo "Hey!" $fname $lname

# other way
read -p "Prompting user for input the same time" $1
# echo "You entered: "$var
echo $1