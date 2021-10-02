def word_count(str):
  counts = dict()
  words = str.split()
  for word in words:
    if word in counts:
      counts[word] += 1
    else:
      counts[word] = 1
  return counts

if __name__ == "__main__":
  str = input(" Output :\n\n Enter a sentence : ")
  print("\n The occurences of each word in the sentence is : \n")
  print(word_count(str))
  
 """
 
Output :
Enter a sentence : Next time there won't be a next time
The occurences of each word in the sentence is :
{'Next': 1, 'time': 2, 'there': 1, "won't": 1, 'be': 1, 'a': 1, 'next': 1}

"""
