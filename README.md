# linked-list

## Overview
This project is a simple implementation of a singly linked list in JavaScript. It was created to practice building a custom data structure from scratch using classes, nodes, and references instead of relying on built-in array methods. The project includes a `linkedList` class, a `Node` class, and a small test file that demonstrates how values can be added to the list and printed. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

## Files
- `script.js` – contains the `linkedList` class and the `Node` class. It includes methods for adding nodes, checking the size of the list, accessing values, searching the list, and generating a string representation. :contentReference[oaicite:2]{index=2}
- `main.js` – creates a linked list, appends several animal names, and prints the result to the console. :contentReference[oaicite:3]{index=3}
- `quene.rb` – a separate Ruby file that shows a simple queue example using `push` and `shift`. It is not part of the linked list implementation itself. :contentReference[oaicite:4]{index=4}

## Features
The linked list implementation currently includes the following methods:
- `append(value)` – adds a node to the end of the list
- `prepend(value)` – adds a node to the beginning of the list
- `size()` – returns the size of the list
- `head()` – returns the first value in the list
- `tail()` – returns the last value in the list
- `at(index)` – returns the value at a given index
- `pip()` – removes the first node by moving the head forward
- `contains(value)` – checks whether a value exists in the list
- `findIndex(value)` – returns the index of a value in the list
- `tostring()` – returns the linked list as a string :contentReference[oaicite:5]{index=5}

## Example
In `main.js`, the program creates a linked list and appends the following values:
- dog
- cat
- parrot
- hamster
- snake
- turtle

It then prints the list using:

```js
console.log(list.tostring());
