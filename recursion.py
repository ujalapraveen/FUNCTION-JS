def even(num):
    if num>9:
        i=0
        s=0
        while i<num:
            rem=num%10
            s=s+rem
            num=num//10
        return even(s)
    else:
        if num%2==0:
            print("very even",num)
        else:
            print("not even",num)
even(num=int(input("enter a num =")))

