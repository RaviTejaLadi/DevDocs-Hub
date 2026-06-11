import type { InterviewQA } from '../types';

export const pythonQuestions: InterviewQA[] = [
  {
    id: 'python-01',
    topicId: 'python',
    level: 'entry',
    questionType: 'theory',
    question: 'What is Python?',
    answer:
      'Python is a high-level, interpreted, general-purpose programming language. It is known for its readability and simple syntax, which emphasizes code clarity and reduces the cost of program maintenance.',
  },
  {
    id: 'python-02',
    topicId: 'python',
    level: 'entry',
    questionType: 'theory',
    question: 'What are the key features of Python?',
    answer: [
      '- **Interpreted**: Code is executed line by line.',
      '- **Dynamically Typed**: No need to declare variable types.',
      '- **Object-Oriented**: Supports classes and objects.',
      '- **Extensive Standard Library**: "Batteries included" philosophy.',
      '- **Cross-platform**: Runs on Windows, macOS, Linux, etc.',
    ].join('\n'),
  },
  {
    id: 'python-03',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between list and tuple?',
    answer:
      '**Lists** are mutable, meaning their elements can be changed after creation. They are defined using square brackets `[]`. **Tuples** are immutable, meaning they cannot be changed once created. They are defined using parentheses `()`.',
  },
  {
    id: 'python-04',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is a dictionary in Python?',
    answer:
      'A dictionary is an unordered collection of data values used to store data like a map. Unlike other data types that hold only a single value as an element, a dictionary holds a key-value pair.',
  },
  {
    id: 'python-05',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is PEP 8?',
    answer:
      'PEP 8 (Python Enhancement Proposal 8) is the official style guide for Python code. It provides guidelines on how to format code for maximum readability, covering naming conventions, indentation, and spacing.',
  },
  {
    id: 'python-06',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a decorator in Python?',
    answer:
      'A decorator is a function that takes another function and extends its behavior without explicitly modifying it. It is a powerful tool for concerns like logging, access control, and memoization. It uses the `@decorator` syntax.',
  },
  {
    id: 'python-07',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'Explain List Comprehension.',
    answer:
      'List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list. Example: `newlist = [x for x in fruits if "a" in x]`.',
  },
  {
    id: 'python-08',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'How is memory managed in Python?',
    answer:
      'Memory management in Python is handled by the Python Memory Manager. It includes a private heap containing all Python objects and data structures. The management of this heap is performed by the interpreter, and Python has a built-in garbage collector to recycle unused memory.',
  },
  {
    id: 'python-09',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the Global Interpreter Lock (GIL)?',
    answer:
      'The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once in a single process. This makes CPython (the standard implementation) thread-safe but limits its ability to use multiple CPU cores for CPU-bound tasks.',
  },
  {
    id: 'python-10',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'Difference between `__init__` and `__new__`?',
    answer:
      "`__new__` is the first step of instance creation. It's a static method responsible for returning a new instance of your class. `__init__` is the second step, responsible for initializing the instance once it has been created.",
  },
  {
    id: 'python-11',
    topicId: 'python',
    level: 'junior',
    questionType: 'coding',
    question: 'How do you reverse a string in Python?',
    answer: ['Using slicing:', '```python', 's = "hello"', 'reversed_s = s[::-1]', '```'].join('\n'),
  },
  {
    id: 'python-12',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are `*args` and `**kwargs`?',
    answer:
      '`*args` allows a function to accept any number of positional arguments. `**kwargs` allows a function to accept any number of keyword arguments (passed as a dictionary).',
  },
  {
    id: 'python-13',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'What are Generators and how do they differ from Iterators?',
    answer:
      'All generators are iterators, but not all iterators are generators. Generators are functions that use the `yield` keyword to produce a sequence of values lazily. They are more memory-efficient as they generate values one at a time on demand.',
  },
  {
    id: 'python-14',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `is` and `==`?',
    answer:
      '`==` checks for equality of values (do they have the same content?). `is` checks for identity (do they point to the same object in memory?).',
  },
  {
    id: 'python-15',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "dunder" (double underscore) methods?',
    answer:
      'Dunder methods (like `__init__`, `__str__`, `__add__`) are special methods that allow you to define how your objects behave with respect to built-in Python operations, such as printing, addition, or length checking.',
  },
  {
    id: 'python-16',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the difference between deep copy and shallow copy.',
    answer:
      'A **shallow copy** creates a new object but fills it with references to the items in the original object. A **deep copy** creates a new object and recursively creates copies of all objects found in the original.',
  },
  {
    id: 'python-17',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a Lambda function?',
    answer:
      'A lambda function is a small anonymous function. It can take any number of arguments but can only have one expression. Syntax: `lambda arguments : expression`.',
  },
  {
    id: 'python-18',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you handle exceptions in Python?',
    answer:
      'Exceptions are handled using `try`, `except`, `else`, and `finally` blocks. `try` contains the code that might fail, `except` catches errors, `else` runs if no error occurred, and `finally` always runs.',
  },
  {
    id: 'python-19',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'What is Method Resolution Order (MRO)?',
    answer:
      'MRO is the order in which Python looks for a method in a hierarchy of classes. In Python 3, it uses the C3 Linearization algorithm to determine this order, especially important in multiple inheritance.',
  },
  {
    id: 'python-20',
    topicId: 'python',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you merge two dictionaries in Python 3.9+?',
    answer: [
      'Using the merge operator `|`:',
      '```python',
      'dict1 = {"a": 1, "b": 2}',
      'dict2 = {"b": 3, "c": 4}',
      'merged = dict1 | dict2  # {"a": 1, "b": 3, "c": 4}',
      '```',
    ].join('\n'),
  },
  {
    id: 'python-21',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of the `pass` statement?',
    answer:
      'The `pass` statement is a null operation. It is used as a placeholder when a statement is syntactically required but no action is needed (e.g., in an empty function or class).',
  },
  {
    id: 'python-22',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Closures?',
    answer:
      'A closure is a function object that remembers values in enclosing scopes even if they are not present in memory. It allows a function to access variables from an outer function even after the outer function has finished executing.',
  },
  {
    id: 'python-23',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'What is Monkey Patching?',
    answer:
      'Monkey patching refers to dynamic modifications of a class or module at runtime. It is often used to replace a method or function with a different implementation during testing or to fix bugs in third-party code.',
  },
  {
    id: 'python-24',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you read a file in Python?',
    answer: [
      'The recommended way is using the `with` statement:',
      '```python',
      'with open("file.txt", "r") as f:',
      '    content = f.read()',
      '```',
      'This ensures the file is properly closed after use.',
    ].join('\n'),
  },
  {
    id: 'python-25',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Context Managers?',
    answer:
      'Context managers allow you to allocate and release resources precisely when you want to. The most common use is the `with` statement. They are implemented using `__enter__` and `__exit__` methods.',
  },
  {
    id: 'python-26',
    topicId: 'python',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain the difference between `@classmethod` and `@staticmethod`.',
    answer:
      "`@classmethod` takes the class (`cls`) as the first argument and can access class-level state. `@staticmethod` doesn't take any special first argument and behaves like a regular function defined inside a class, used for grouping logic.",
  },
  {
    id: 'python-27',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'What is Metaprogramming in Python?',
    answer:
      'Metaprogramming refers to the ability of a program to treat itself as data. In Python, this often involves using metaclasses (classes that create classes) or decorators to modify code behavior dynamically.',
  },
  {
    id: 'python-28',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `enumerate()` function used for?',
    answer:
      '`enumerate()` adds a counter to an iterable and returns it as an enumerate object. It is useful for getting both the index and value during a loop.',
  },
  {
    id: 'python-29',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `zip()` function?',
    answer:
      '`zip()` takes multiple iterables and aggregates them into a single iterator of tuples, where each tuple contains elements from each iterable at the same index.',
  },
  {
    id: 'python-30',
    topicId: 'python',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you remove duplicates from a list?',
    answer: [
      'The most efficient way is converting to a set:',
      '```python',
      'my_list = [1, 2, 2, 3, 4, 4]',
      'unique_list = list(set(my_list))',
      '```',
      'Note: This does not preserve order. Use `dict.fromkeys()` to preserve order.',
    ].join('\n'),
  },
  {
    id: 'python-31',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: "How does Python's garbage collection work?",
    answer:
      "Python primarily uses Reference Counting. When an object's reference count reaches zero, it is deleted. It also has a cyclic garbage collector (in the `gc` module) that detects and fixes reference cycles (where objects point to each other).",
  },
  {
    id: 'python-32',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Set" in Python?',
    answer:
      'A set is an unordered collection of unique elements. It is defined using curly braces `{}` or the `set()` function. Sets are useful for mathematical operations like union, intersection, and difference.',
  },
  {
    id: 'python-33',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of `__name__ == "__main__"`?',
    answer:
      'It allows you to run code only when the script is executed directly, and not when it is imported as a module in another script.',
  },
  {
    id: 'python-34',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the `super()` function.',
    answer:
      '`super()` returns a temporary object of the superclass, allowing you to call its methods. It is commonly used in `__init__` to ensure the parent class is correctly initialized.',
  },
  {
    id: 'python-35',
    topicId: 'python',
    level: 'expert',
    questionType: 'theory',
    question: 'What are "Slots" (`__slots__`) used for?',
    answer:
      '`__slots__` is a way to explicitly define the attributes a class can have. It prevents the creation of `__dict__` for each instance, which can save a significant amount of memory when dealing with millions of objects.',
  },
  {
    id: 'python-36',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `range` and `xrange`?',
    answer:
      'In Python 2, `range` created a list while `xrange` was a generator. In Python 3, `xrange` was removed and `range` now behaves like `xrange` (it returns an immutable sequence object).',
  },
  {
    id: 'python-37',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you check the type of an object?',
    answer:
      'Use `type(obj)` to get the type, or `isinstance(obj, type)` to check if an object is an instance of a specific type (recommended for inheritance checks).',
  },
  {
    id: 'python-38',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "Properties" in Python?',
    answer:
      'The `@property` decorator allows you to define methods that can be accessed like attributes. This is useful for implementing getters, setters, and deleters with logic.',
  },
  {
    id: 'python-39',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the "Walrus Operator"?',
    answer:
      'Introduced in Python 3.8, the assignment expression operator `:=` (walrus) allows you to assign a value to a variable as part of an expression. Example: `if (n := len(data)) > 10: print(n)`.',
  },
  {
    id: 'python-40',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `self` keyword?',
    answer:
      '`self` represents the instance of the class. By using `self`, we can access the attributes and methods of the class in Python. It must be the first argument of any instance method.',
  },
  {
    id: 'python-41',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "Abstract Base Classes" (ABC)?',
    answer:
      'ABCs define a set of methods that a subclass must implement. They cannot be instantiated themselves. They are provided by the `abc` module and use the `@abstractmethod` decorator.',
  },
  {
    id: 'python-42',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you perform unit testing in Python?',
    answer:
      'The standard library includes the `unittest` module. Other popular third-party frameworks include `pytest` (widely used for its simple syntax) and `nose2`.',
  },
  {
    id: 'python-43',
    topicId: 'python',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you sort a list of dictionaries by a specific key?',
    answer: [
      'Using `sort()` or `sorted()` with a lambda:',
      '```python',
      'data = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 20}]',
      'sorted_data = sorted(data, key=lambda x: x["age"])',
      '```',
    ].join('\n'),
  },
  {
    id: 'python-44',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `any()` and `all()`?',
    answer:
      '`any()` returns `True` if at least one element in an iterable is true. `all()` returns `True` only if all elements in an iterable are true.',
  },
  {
    id: 'python-45',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "Type Hints"?',
    answer:
      'Type hints (introduced in Python 3.5) allow you to specify the expected types of variables, function arguments, and return values. They are not enforced at runtime but are used by static analysis tools like `mypy`.',
  },
  {
    id: 'python-46',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the `yield from` statement.',
    answer:
      '`yield from` is used to delegate to a sub-generator. it simplifies the process of yielding all values from another iterable or generator.',
  },
  {
    id: 'python-47',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `collections` module?',
    answer:
      'The `collections` module provides specialized container datatypes like `namedtuple`, `deque`, `Counter`, `OrderedDict`, and `defaultdict`.',
  },
  {
    id: 'python-48',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you install third-party packages?',
    answer:
      'Most Python packages are installed using `pip`, the package installer for Python, from the Python Package Index (PyPI).',
  },
  {
    id: 'python-49',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Virtual Environment"?',
    answer:
      'A virtual environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages. Tools like `venv` or `virtualenv` are used to create them.',
  },
  {
    id: 'python-50',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'How does the `asyncio` module work?',
    answer:
      '`asyncio` is a library to write concurrent code using the `async/await` syntax. It uses an event loop to handle multiple tasks concurrently without needing multiple threads.',
  },
  {
    id: 'python-51',
    topicId: 'python',
    level: 'expert',
    questionType: 'theory',
    question: 'What is the Python Data Model?',
    answer:
      'The Python Data Model is the API that you use to make your own objects play well with the rest of the language. It consists of the special (dunder) methods that the Python interpreter calls to perform basic operations.',
  },
  {
    id: 'python-52',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `python` and `ipython`?',
    answer:
      '`python` is the standard interpreter. `ipython` (Interactive Python) is an enhanced interactive shell that provides features like tab completion, magic commands, and better debugging.',
  },
  {
    id: 'python-53',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `itertools` module?',
    answer:
      '`itertools` provides a set of fast, memory-efficient tools for creating iterators for efficient looping (e.g., `count`, `cycle`, `chain`, `permutations`).',
  },
  {
    id: 'python-54',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain "Pickling" and "Unpickling".',
    answer:
      'Pickling is the process of converting a Python object hierarchy into a byte stream. Unpickling is the inverse operation. It is handled by the `pickle` module.',
  },
  {
    id: 'python-55',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Namespace"?',
    answer:
      'A namespace is a system that has a unique name for every object in Python. Namespaces ensure that names in a program are unique and can be used without any conflict.',
  },
  {
    id: 'python-56',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you check for the existence of a key in a dictionary?',
    answer: 'Use the `in` operator: `if "key" in my_dict: ...`.',
  },
  {
    id: 'python-57',
    topicId: 'python',
    level: 'senior',
    questionType: 'theory',
    question: 'What are "Descriptors"?',
    answer:
      'Descriptors are a low-level mechanism behind properties, methods, static methods, class methods, and `super()`. A descriptor is an object attribute with "binding behavior", whose attribute access is overridden by methods in the descriptor protocol.',
  },
  {
    id: 'python-58',
    topicId: 'python',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `str()` and `repr()`?',
    answer:
      '`str()` is meant to be readable and return a user-friendly string representation. `repr()` is meant to be unambiguous and ideally return a string that could be used to recreate the object.',
  },
  {
    id: 'python-59',
    topicId: 'python',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `map()` function?',
    answer:
      '`map(function, iterable)` applies a given function to each item of an iterable and returns a list (in Python 2) or an iterator (in Python 3) of the results.',
  },
  {
    id: 'python-60',
    topicId: 'python',
    level: 'expert',
    questionType: 'theory',
    question: 'How can you optimize Python code performance?',
    answer: [
      '- Use built-in functions and libraries (often implemented in C).',
      '- Use list comprehensions instead of manual loops.',
      '- Avoid global variables.',
      '- Use `generator` expressions for large datasets.',
      '- Use profiling tools like `cProfile` to find bottlenecks.',
      '- Consider using PyPy or C extensions for CPU-intensive tasks.',
    ].join('\n'),
  },
];
