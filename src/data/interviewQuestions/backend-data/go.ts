import type { InterviewQA } from '../types';

export const goQuestions: InterviewQA[] = [
  {
    id: 'go-01',
    topicId: 'go',
    level: 'entry',
    questionType: 'theory',
    question: 'What is Go (Golang)?',
    answer:
      'Go is an open-source programming language developed by Google. It is statically typed, compiled, and designed for simplicity, efficiency, and strong support for concurrency.',
  },
  {
    id: 'go-02',
    topicId: 'go',
    level: 'entry',
    questionType: 'theory',
    question: 'What are the key features of Go?',
    answer: [
      '- **Simplicity**: Minimalist syntax, easy to learn.',
      '- **Concurrency**: Built-in support via Goroutines and Channels.',
      '- **Performance**: Compiled to native machine code.',
      '- **Garbage Collection**: Automatic memory management.',
      '- **Static Typing**: Type safety at compile time.',
      '- **Fast Compilation**: Designed for large-scale software development.',
    ].join('\n'),
  },
  {
    id: 'go-03',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is a Goroutine?',
    answer:
      'A Goroutine is a lightweight thread of execution managed by the Go runtime. They are much cheaper than OS threads, starting with a very small stack (a few KB) that grows and shrinks as needed. You start one using the `go` keyword.',
  },
  {
    id: 'go-04',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What are Channels in Go?',
    answer:
      'Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine. They provide a way for goroutines to communicate and synchronize without explicit locks.',
  },
  {
    id: 'go-05',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between Buffered and Unbuffered channels?',
    answer:
      'An **unbuffered channel** has no capacity; sends block until a receiver is ready. A **buffered channel** has a capacity; sends only block when the buffer is full, and receives only block when the buffer is empty.',
  },
  {
    id: 'go-06',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you handle errors in Go?',
    answer:
      'Go does not have exceptions. Instead, functions often return an `error` as the last return value. The caller checks if the error is `nil` to determine if the operation was successful.',
  },
  {
    id: 'go-07',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Slice" in Go?',
    answer:
      'A slice is a dynamically-sized, flexible view into the elements of an array. Unlike arrays, which have a fixed size, slices are much more common in Go code. A slice consists of a pointer to an array, a length, and a capacity.',
  },
  {
    id: 'go-08',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `make` and `new`?',
    answer:
      '`new(T)` allocates zeroed storage for a new item of type `T` and returns its address (`*T`). `make(T, args)` is used only for slices, maps, and channels; it returns an initialized (not zeroed) value of type `T` (not `*T`).',
  },
  {
    id: 'go-09',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Struct" in Go?',
    answer:
      'A struct is a sequence of named elements, called fields, each of which has a name and a type. It is used to group related data together. Go is not class-based, but structs are the primary way to define custom data types.',
  },
  {
    id: 'go-10',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain Interfaces in Go.',
    answer:
      'An interface is a set of method signatures. A type implements an interface by implementing its methods. There is no explicit "implements" keyword; implementation is implicit (duck typing). The empty interface `interface{}` can hold values of any type.',
  },
  {
    id: 'go-11',
    topicId: 'go',
    level: 'junior',
    questionType: 'coding',
    question: 'How do you iterate over a slice in Go?',
    answer: [
      'Using the `range` keyword:',
      '```go',
      'nums := []int{2, 3, 4}',
      'for index, value := range nums {',
      '    fmt.Printf("index: %d, value: %d\\n", index, value)',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'go-12',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "defer" statement?',
    answer:
      '`defer` schedules a function call to be run immediately before the surrounding function returns. It is commonly used for cleanup tasks like closing files or unlocking mutexes.',
  },
  {
    id: 'go-13',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the "Select" statement used for?',
    answer:
      'The `select` statement lets a goroutine wait on multiple communication operations. It blocks until one of its cases can run, then executes that case. If multiple are ready, it chooses one at random.',
  },
  {
    id: 'go-14',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What are "Pointers" in Go?',
    answer:
      'A pointer holds the memory address of a value. Go has pointers but no pointer arithmetic (unlike C). You use `&` to get the address and `*` to dereference.',
  },
  {
    id: 'go-15',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Map" in Go?',
    answer:
      'A map is a built-in associative data type (hash table). It maps keys to values. You initialize a map using `make(map[keyType]valueType)`.',
  },
  {
    id: 'go-16',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the difference between Value Receivers and Pointer Receivers.',
    answer:
      'A **Value Receiver** (`(t T)`) operates on a copy of the type; changes are not reflected in the original. A **Pointer Receiver** (`(t *T)`) operates on the original value, allowing modifications and avoiding copies for large structs.',
  },
  {
    id: 'go-17',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Panic" and "Recover"?',
    answer:
      '`panic` stops the ordinary flow of control and starts panicking. `recover` is a built-in function that regains control of a panicking goroutine. It is only useful inside deferred functions.',
  },
  {
    id: 'go-18',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of the `init()` function?',
    answer:
      'The `init()` function runs before the `main()` function. It is used for package-level initialization. Each package can have multiple `init()` functions across different files.',
  },
  {
    id: 'go-19',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'What is "GOPATH" and "Go Modules"?',
    answer:
      'GOPATH was the old way of managing Go workspaces. Go Modules (introduced in 1.11) is the modern dependency management system. It uses a `go.mod` file to track dependencies and versions.',
  },
  {
    id: 'go-20',
    topicId: 'go',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you check if a key exists in a map?',
    answer: [
      'Using the "comma ok" idiom:',
      '```go',
      'value, ok := myMap["key"]',
      'if ok {',
      '    // key exists',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'go-21',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is a "Constant" in Go?',
    answer:
      'Constants are expressions whose value is known at compile time and cannot be changed. They are declared with the `const` keyword.',
  },
  {
    id: 'go-22',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Shadowing" in Go?',
    answer:
      'Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, making the outer variable inaccessible within the inner scope.',
  },
  {
    id: 'go-23',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'How does Go handle Concurrency vs Parallelism?',
    answer:
      "Concurrency is about dealing with lots of things at once (structure), while parallelism is about doing lots of things at once (execution). Go's goroutines and channels facilitate concurrency, which the runtime can then execute in parallel on multiple cores.",
  },
  {
    id: 'go-24',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the "Blank Identifier" (`_`) used for?',
    answer:
      'The blank identifier is a write-only variable that can be used to discard unwanted return values or imports.',
  },
  {
    id: 'go-25',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `array` and `slice`?',
    answer:
      'An array has a fixed size defined at compile time (e.g., `[5]int`). A slice is a descriptor for a contiguous segment of an underlying array and has a dynamic size (e.g., `[]int`).',
  },
  {
    id: 'go-26',
    topicId: 'go',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain the Go Scheduler (G-M-P model).',
    answer:
      'The Go scheduler manages Goroutines (G), OS Threads (M), and Processors (P). It uses work-stealing and hand-off mechanisms to efficiently distribute goroutines across available CPU cores.',
  },
  {
    id: 'go-27',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'What is "Escape Analysis"?',
    answer:
      'Escape analysis is a compiler optimization that determines whether a variable can be allocated on the stack or must "escape" to the heap. Stack allocation is faster and doesn\'t require garbage collection.',
  },
  {
    id: 'go-28',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `sync.WaitGroup` used for?',
    answer:
      'A `WaitGroup` waits for a collection of goroutines to finish. You `Add` the number of goroutines, call `Done` in each goroutine when finished, and `Wait` in the main goroutine.',
  },
  {
    id: 'go-29',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What are "Variadic Functions"?',
    answer:
      'Variadic functions can be called with any number of trailing arguments. They are defined using the `...` prefix before the type of the last parameter.',
  },
  {
    id: 'go-30',
    topicId: 'go',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you concatenate strings efficiently?',
    answer: [
      'Using `strings.Builder` (most efficient for many strings):',
      '```go',
      'var b strings.Builder',
      'b.WriteString("hello")',
      'b.WriteString(" world")',
      'result := b.String()',
      '```',
    ].join('\n'),
  },
  {
    id: 'go-31',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: "How does Go's Garbage Collector work?",
    answer:
      'Go uses a concurrent, tri-color, mark-and-sweep garbage collector. It is designed for low latency, aiming for sub-millisecond pause times by performing most of the work concurrently with the application.',
  },
  {
    id: 'go-32',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `context` package used for?',
    answer:
      'The `context` package is used for carrying deadlines, cancellation signals, and other request-scoped values across API boundaries and between goroutines.',
  },
  {
    id: 'go-33',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `uint` and `int`?',
    answer:
      '`int` is a signed integer, while `uint` is an unsigned integer. Their size (32 or 64 bits) depends on the underlying platform.',
  },
  {
    id: 'go-34',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain "Method Sets" in Go.',
    answer:
      "A type's method set determines the interfaces that the type implements. A type `T` has a method set of all methods with receiver `T`. A pointer type `*T` has a method set of all methods with receiver `T` OR `*T`.",
  },
  {
    id: 'go-35',
    topicId: 'go',
    level: 'expert',
    questionType: 'theory',
    question: 'What are "Generics" in Go (introduced in 1.18)?',
    answer:
      'Generics allow you to write functions and data structures that work with multiple types using type parameters. They use square brackets `[]` for type constraints.',
  },
  {
    id: 'go-36',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is a "Mutex" (`sync.Mutex`) and why is it used?',
    answer:
      'A Mutex (mutual exclusion) is used to protect shared data from concurrent access. You `Lock` it before accessing the data and `Unlock` it when finished to prevent data races.',
  },
  {
    id: 'go-37',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you convert a string to an integer?',
    answer: 'Use the `strconv.Atoi` function from the `strconv` package.',
  },
  {
    id: 'go-38',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "Struct Tags"?',
    answer:
      'Struct tags are metadata strings attached to struct fields. They are often used by encoders/decoders (like `json` or `xml`) to control how the field is processed.',
  },
  {
    id: 'go-39',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the "Memory Model" of Go.',
    answer:
      'The Go memory model specifies the conditions under which reads of a variable in one goroutine can be guaranteed to observe values produced by writes to the same variable in a different goroutine.',
  },
  {
    id: 'go-40',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is a "Rune" in Go?',
    answer:
      'A `rune` is an alias for `int32` and represents a Unicode code point. It is used when iterating over strings to handle multi-byte characters correctly.',
  },
  {
    id: 'go-41',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Embedding" in Go?',
    answer:
      'Embedding is a way to compose types by including one struct or interface inside another. It provides a form of composition that allows for method promotion, but it is not inheritance.',
  },
  {
    id: 'go-42',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you profile a Go application?',
    answer:
      'Go provides the `pprof` tool for profiling CPU usage, memory allocation, goroutine blocking, and more. You can use the `runtime/pprof` or `net/http/pprof` packages.',
  },
  {
    id: 'go-43',
    topicId: 'go',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you handle JSON data in Go?',
    answer: [
      'Using the `encoding/json` package:',
      '```go',
      'type User struct { Name string `json:"name"` }',
      'u := User{Name: "Alice"}',
      'jsonData, _ := json.Marshal(u)',
      '```',
    ].join('\n'),
  },
  {
    id: 'go-44',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of the `iota` identifier?',
    answer:
      '`iota` is used in `const` declarations to simplify the creation of incremental values, typically for enums.',
  },
  {
    id: 'go-45',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Shadowed Error"?',
    answer:
      'A shadowed error occurs when a new error variable is declared in an inner scope (e.g., using `:=`), hiding an error variable from an outer scope, leading to bugs where errors are not correctly handled.',
  },
  {
    id: 'go-46',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the `internal` package convention.',
    answer:
      'A package named `internal` is only importable by the code within the same directory tree. This allows developers to hide implementation details from public API users.',
  },
  {
    id: 'go-47',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `reflect` package used for?',
    answer:
      '`reflect` allows a program to inspect and manipulate its own structure and values at runtime. It should be used sparingly as it is slower and less type-safe than normal Go code.',
  },
  {
    id: 'go-48',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you build a Go binary for a different OS?',
    answer:
      'Use cross-compilation by setting the `GOOS` and `GOARCH` environment variables. Example: `GOOS=linux GOARCH=amd64 go build`.',
  },
  {
    id: 'go-49',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `String()` and `GoString()` methods?',
    answer:
      '`String()` is the method for the `fmt.Stringer` interface, used for `%s` and `%v`. `GoString()` is for the `fmt.GoStringer` interface, used for `%#v` (Go-syntax representation).',
  },
  {
    id: 'go-50',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'What is a "Race Condition" and how do you detect it in Go?',
    answer:
      'A race condition occurs when multiple goroutines access shared data concurrently and at least one access is a write. Go has a built-in race detector that can be enabled with the `-race` flag during tests or builds.',
  },
  {
    id: 'go-51',
    topicId: 'go',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain "Zero-Cost Abstractions" in Go.',
    answer:
      'Go aims for abstractions (like interfaces or generics) that have minimal or no runtime overhead compared to manual implementations, although in practice, interfaces do have a small overhead due to dynamic dispatch.',
  },
  {
    id: 'go-52',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `fmt` package used for?',
    answer:
      "The `fmt` package provides formatted I/O functions, similar to C's `printf` and `scanf`. It is used for printing to the console and formatting strings.",
  },
  {
    id: 'go-53',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the purpose of `runtime.Gosched()`?',
    answer:
      '`Gosched` yields the processor, allowing other goroutines to run. It does not suspend the current goroutine, so it will resume automatically.',
  },
  {
    id: 'go-54',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain "Deep Equality" in Go.',
    answer:
      "Normal equality `==` doesn't work for slices, maps, or functions. The `reflect.DeepEqual` function can be used to recursively check the equality of complex data structures.",
  },
  {
    id: 'go-55',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Dangling Goroutine"?',
    answer:
      'A dangling (or leaked) goroutine is one that is started but never finishes because it is blocked indefinitely (e.g., waiting on a channel that will never be sent to). This can lead to memory leaks.',
  },
  {
    id: 'go-56',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `println` and `fmt.Println`?',
    answer:
      '`println` is a built-in function intended for debugging; its output format is not guaranteed. `fmt.Println` is the standard library function for printing to `stdout`.',
  },
  {
    id: 'go-57',
    topicId: 'go',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you implement a Singleton in Go?',
    answer:
      'The recommended way is using the `sync.Once` type, which ensures that a function is executed exactly once, even when called concurrently from multiple goroutines.',
  },
  {
    id: 'go-58',
    topicId: 'go',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `errors.New` and `fmt.Errorf`?',
    answer:
      '`errors.New` creates a simple error string. `fmt.Errorf` allows for string formatting and can also wrap other errors using the `%w` verb.',
  },
  {
    id: 'go-59',
    topicId: 'go',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you define a constant of a custom type?',
    answer: '```go\ntype Status int\nconst ( OK Status = iota )\n```',
  },
  {
    id: 'go-60',
    topicId: 'go',
    level: 'expert',
    questionType: 'theory',
    question: 'What is "Assembly in Go"?',
    answer:
      'Go allows you to write functions in assembly for specific architectures. This is used for low-level performance optimizations or accessing hardware features not available in Go.',
  },
];
