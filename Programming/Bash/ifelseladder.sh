#!/bin/bash

# if [[ ${1,,} = hi ]]; then
#     echo They are equal
# else
#     echo They are not
# fi







# echo Enter one string
# read str1
# echo Enter another string
# read str2
# if [[ $str1 = $str2 ]]; then
#     echo Both Strings are equal
# else
#     echo Strings are not
# fi

# echo Enter
# read num1
# echo Enter
# read num2
# if [[ $num1 -eq $num2 ]]; then
#     echo Numbers are equal
# else
#     echo Numbers are not
# fi

read -p "Type yes to execute commands: " var
if [[ $var=y ]]; then
    echo Executing Commands...
else    
    echo Process Aborted!
fi