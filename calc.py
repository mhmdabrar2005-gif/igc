import time
import math

amount=0
i=1

initial_investment=float(input("Enter amount:"))
monthly_growth=float(input("Expected Growth(%):"))/12
investment_duration=int(input("Investment Duration (years):"))
step_up=float(input("Yearly Step-up(%):"))

while i<investment_duration*12+1:
    amount=(initial_investment+amount)*((monthly_growth/100)+1)

    if i%12==0:
        initial_investment*=((step_up/100)+1) #Stepping Up
        

    i+=1

print(f"\nAfter {investment_duration} years:{round(amount)}")

option=input("\nDo you want to keep it invested?(Y/n)")
if option in ['Y','y']:
    duration_to_keep_invested=int(input("How Long(years):"))
    growth=float(input("Expected Growth(%):"))
    i=1
    while i<duration_to_keep_invested+1:
        amount*=((growth/100)+1)
        i+=1

print("\nNet money:",round(amount))