a = []

a.push(1) # enqueue the number 1 in the queue
a.push(2) # enqueue the number 2 in the queue
a.push(3) # enqueue the number 3 in the queue

# dequeue the first element, 1 has been in the queue longest
puts a.shift  # => displays 1

a.push(4) # enqueue the number 4 in the queue

# dequeue the next element.  1 has been tended to
# already, so tend to the element that has been in
# the queue the longest, in this case 2
puts a.shift  # => displays 2