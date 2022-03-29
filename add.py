a=[1,2,3,[5,7,8,3],4,1,2,1]

sum=0
i=0
while i <len(a):
    if type(a[i])==int:
        sum+=a[i]
    else:
        j=0
        while j<len(a[i]):
            sum+=a[i][j]
            j+=1
    i+=1
print(sum)



# i=1
# sum=1
# while i<5:
#     j=1
#     while j<i+1:
#         print(sum,end="")
#         sum+=1
#         j+=2
#     print()
#     i+=2




# l=[1,3,5,8,9,18,25]
# i=1
# a=[]
# while i<=l[-1]:
#     if i!=i:
#         a.append(i)
#     else:
#         a.append(i)
#     i+=1
# print(a)

# num=[1,3,5,8,9,18,25]
# i=1
# while i<=num[-1]:
#     j=0
#     while j <len(num):
#         if i not in num:
#             num.append(i)
#             num.sort()
#         j+=1
#     i+=1
# print(num)































