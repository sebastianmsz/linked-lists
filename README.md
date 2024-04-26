# Linked-Lists 🔗

This project focuses on building a functional Linked List data structure in JavaScript using ES6 modules, creating a LinkedList class/factory to manage the overall list and a Node class/factory to represent individual nodes containing a value and a reference (nextNode) to the next node, enabling various operations like adding, removing, and accessing elements within the list.

## Functionality

The LinkedList class/factory will offer several methods to manipulate and access the list:

-   `append(value)`: Adds a new node with the provided value to the end of the list.
-   `prepend(value)`: Adds a new node with the provided value to the beginning of the list.
-   `size()`: Returns the total number of nodes present in the list.
-   `getHead()`: Returns the first node (head) of the list.
-   `getTail()`: Returns the last node (tail) of the list.
-   `at(index)`: Returns the node located at the specified index within the list.
-   `pop()`: Removes the last node from the list.
-   `contains(value)`: Checks if a node with the given value exists within the list, returning true if found and false otherwise.
-   `find(value)`: Returns the index of the first node containing the specified value, or null if not found.
-   `toString()`: Provides a string representation of the entire list in the format: ( value ) -> ( value ) -> ( value ) -> null

## Extra Functionality

-   `insertAt(value, index)`: Inserts a new node with the given value at the specified index within the list.
-   `removeAt(index)`: Removes the node located at the specified index from the list.

## Project Goals

-   Understanding Linked Lists: Gain practical experience in building and manipulating linked lists, a fundamental data structure in computer science.
-   ES6 Syntax: Reinforce your understanding of ES6 modules and class/factory syntax in JavaScript.
-   Problem-Solving Skills: Develop your problem-solving and algorithmic thinking skills through the implementation of various list operations.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
