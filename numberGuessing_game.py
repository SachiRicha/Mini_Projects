import random as r 
import time as t      #we can take any name according to user, random is in-built function
# n = r.randrange(10)
# user_input = int(input("Guess the number: "))
# print("Computer's choice was:",n)
# if(user_input == n):
#     print("You guessed it correctly.")
# else:
#     print("Oops!!You guessed it wrong.")

countdown=True
time=60
while countdown == True:
    time = time-1
    time.sleep(1.0)
    print (time)
    countdown=True
    if time == 0:
        print ("You've ran out of time!")
