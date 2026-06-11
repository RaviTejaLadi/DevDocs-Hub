import type { InterviewQA } from '..';

export const reactNativeQuestions: InterviewQA[] = [
  {
    id: 'react-native-01',
    question: 'What is React Native?',
    answer:
      'React Native is an open-source framework created by Meta (formerly Facebook) that allows developers to build mobile applications for iOS and Android using JavaScript and React. Unlike hybrid apps, React Native apps use native UI components, providing a performance and feel similar to native apps.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-02',
    question: 'How does React Native work internally? Explain the Bridge.',
    answer:
      'React Native uses a "Bridge" to facilitate communication between the JavaScript thread (where your React code runs) and the Native thread (where UI rendering and native modules exist). The bridge serializes data into JSON and sends it asynchronously between the two worlds.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-03',
    question: 'What is the "New Architecture" in React Native?',
    answer:
      "The New Architecture is a major overhaul of React Native's internals, replacing the Bridge with **JSI (JavaScript Interface)**. It includes:\n- **Fabric:** A new concurrent rendering system.\n- **TurboModules:** Efficient native module loading.\n- **CodeGen:** Static type checking for better communication between JS and Native code.",
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-04',
    question: 'What is JSI (JavaScript Interface)?',
    answer:
      'JSI is a lightweight, general-purpose layer that allows the JavaScript engine to call methods directly on the C++ host objects. This eliminates the need for JSON serialization and the asynchronous Bridge, leading to much faster communication between JS and Native code.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-05',
    question: 'Explain the difference between React and React Native.',
    answer:
      '- **React:** A JavaScript library for building web interfaces using HTML elements (`<div>`, `<span>`, etc.).\n- **React Native:** A framework for building mobile apps using native components (`<View>`, `<Text>`, etc.) that are mapped to iOS/Android equivalents.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-06',
    question: 'What are the core components in React Native?',
    answer:
      '- `<View>`: Like a `<div>`, used for layout.\n- `<Text>`: For displaying text.\n- `<Image>`: For displaying images.\n- `<ScrollView>`: For scrollable content.\n- `<FlatList>`: For efficient rendering of large lists.\n- `<TextInput>`: For user input.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-07',
    question: 'How do you handle styling in React Native?',
    answer:
      'Styling is done using JavaScript objects, similar to CSS but with camelCase names (e.g., `backgroundColor`). The `StyleSheet.create()` method is used for performance and better organization. Layout is primarily handled using **Flexbox**.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-08',
    question: 'Show an example of using `StyleSheet`.',
    answer:
      '```javascript\nimport { StyleSheet, View, Text } from "react-native";\n\nconst App = () => (\n  <View style={styles.container}>\n    <Text style={styles.title}>Hello World</Text>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "center",\n    alignItems: "center",\n    backgroundColor: "#f5fcff",\n  },\n  title: {\n    fontSize: 20,\n    fontWeight: "bold",\n  },\n});\n```',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'coding',
  },
  {
    id: 'react-native-09',
    question: 'What is the purpose of `flex: 1` in React Native?',
    answer:
      '`flex: 1` tells a component to expand and fill all available space within its parent container. If multiple siblings have `flex: 1`, they will share the space equally.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-10',
    question: 'How is Flexbox different in React Native compared to the Web?',
    answer:
      "- **flexDirection:** Default is `column` in React Native (it's `row` on Web).\n- **flex:** Only accepts a single number in React Native.\n- **Support:** Not all CSS Flexbox properties are supported in React Native (e.g., `flex-basis` has limited support).",
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-11',
    question: 'What is the difference between `ScrollView` and `FlatList`?',
    answer:
      '- **`ScrollView`:** Renders all its children at once. Simple but can cause performance issues with large lists.\n- **`FlatList`:** Uses "lazy loading" (windowing). It only renders the items currently visible on the screen and recycles views as the user scrolls. Much better for long lists.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-12',
    question: 'What are the essential props for a `FlatList`?',
    answer:
      '1.  **data:** The array of items to render.\n2.  **renderItem:** A function that takes an item and returns a component.\n3.  **keyExtractor:** A function to extract a unique key for each item.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-13',
    question: 'How do you handle user input in React Native?',
    answer:
      'Using the `<TextInput>` component. It uses props like `value` for the current text and `onChangeText` to handle updates.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-14',
    question: 'What is the "State" in React Native?',
    answer:
      'State is a built-in React object that stores data that can change over time. When the state changes, the component re-renders. In functional components, `useState` hook is used.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-15',
    question: 'What are "Props" in React Native?',
    answer:
      'Props (short for properties) are read-only inputs passed from a parent component to a child component. They allow components to be dynamic and reusable.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-16',
    question: 'Explain the lifecycle of a React Native component.',
    answer:
      'Modern React Native (Functional Components) uses hooks:\n- **Mounting:** `useEffect(() => { ... }, [])` runs once after the initial render.\n- **Updating:** `useEffect(() => { ... }, [dependencies])` runs whenever a dependency changes.\n- **Unmounting:** The return function inside `useEffect` runs before the component is removed.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-17',
    question: 'What is "Prop Drilling" and how do you avoid it?',
    answer:
      "Prop drilling occurs when you pass data through many layers of components that don't need it, just to reach a deep child. \n\n**Solutions:**\n- **React Context API**\n- **State Management Libraries** (Zustand, Redux, MobX)\n- **Component Composition**",
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-18',
    question: 'How do you navigate between screens in React Native?',
    answer:
      'React Native does not have a built-in navigation system. The industry standard is **React Navigation**. Another popular option for high-performance apps is **React Native Navigation** (by Wix), which uses native primitives.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-19',
    question: 'What is a "Stack Navigator"?',
    answer:
      'A Stack Navigator provides a way for your app to transition between screens and manage navigation history. When a new screen is opened, it is "pushed" onto the stack, and when the user goes back, it is "popped".',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-20',
    question: 'How do you handle platform-specific code?',
    answer:
      '1.  **Platform module:** `Platform.OS === "ios" ? ... : ...`\n2.  **Platform-specific extensions:** Naming files as `MyComponent.ios.js` and `MyComponent.android.js`. React Native will automatically pick the correct one.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-21',
    question: 'What is "Fast Refresh"?',
    answer:
      'Fast Refresh is a React Native feature that allows you to see the results of your code changes almost instantly while keeping the application state intact. It combines the benefits of "Hot Reloading" and "Live Reloading".',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-22',
    question: 'Explain "Native Modules" in React Native.',
    answer:
      "Native Modules allow you to write custom Java/Kotlin (Android) or Objective-C/Swift (iOS) code and call it from JavaScript. This is used when a feature isn't available in React Native's core or for performance-critical tasks.",
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-23',
    question: 'What is "Native UI Components"?',
    answer:
      'Similar to Native Modules, but for UI. You can create a custom native view and use it in your React Native app like any other component.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-24',
    question: 'How do you debug React Native apps?',
    answer:
      '- **React Native Debugger** (standalone app)\n- **Chrome DevTools**\n- **Flipper** (Official Meta debugger)\n- **Console logs**\n- **Inspector** (built-in UI inspector)',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-25',
    question: 'What is "Redux" and do you always need it?',
    answer:
      "Redux is a predictable state container for JavaScript apps. You don't always need it; for many apps, React Context or simpler libraries like **Zustand** are sufficient. Use Redux for large-scale apps with complex state logic shared across many screens.",
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-26',
    question: 'What is "AsyncStorage"?',
    answer:
      'AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used for simple data (like user preferences or session tokens). For sensitive data, use **Keychain** (iOS) or **Keystore** (Android).',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-27',
    question: 'How do you optimize images in React Native?',
    answer:
      '- Use the correct image format (WebP is efficient).\n- Resize images before loading.\n- Use `react-native-fast-image` for better caching.\n- Only load images that are on the screen.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-28',
    question: 'What is the "Animated" API?',
    answer:
      'The Animated API is a powerful built-in library for creating fluid animations in React Native. It allows you to define declarative relationships between inputs and outputs, with configurable transforms.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-29',
    question: 'What is "React Native Reanimated"?',
    answer:
      'Reanimated is a popular third-party library that provides a more flexible and performant way to handle animations. It allows animations to run on the **UI thread**, avoiding the Bridge bottlenecks.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-30',
    question: 'How do you improve performance in a React Native app?',
    answer:
      '- Use `FlatList` instead of `ScrollView` for large lists.\n- Avoid anonymous functions in `render` or `renderItem` (to prevent unnecessary re-renders).\n- Use `useMemo` and `useCallback` hooks.\n- Use `React.memo()` for pure components.\n- Enable Hermes engine.\n- Offload heavy tasks to the native thread using Native Modules.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-31',
    question: 'What is the "Hermes" engine?',
    answer:
      'Hermes is an open-source JavaScript engine optimized for running React Native. It improves app startup time, decreases memory usage, and reduces the app size by pre-compiling JavaScript into bytecode.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-32',
    question: 'Explain "Shadow Nodes" and "Shadow Tree".',
    answer:
      'In the old architecture, the Shadow Tree is a C++ representation of the React component tree. The Shadow Nodes store the layout information (calculated by the **Yoga** engine) before it is sent to the native UI thread.',
    topicId: 'react-native',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'react-native-33',
    question: 'What is "Yoga"?',
    answer:
      'Yoga is a cross-platform layout engine used by React Native. It implements Flexbox and calculates the exact coordinates and dimensions for all UI elements.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-34',
    question: 'How do you handle deep linking in React Native?',
    answer:
      'Deep linking allows your app to be opened via a URL. You configure the native iOS/Android manifests and then use the `Linking` module in React Native to listen for incoming URLs and navigate accordingly.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-35',
    question: 'What is "Expo" and how is it different from "React Native CLI"?',
    answer:
      '- **Expo:** A suite of tools and services built around React Native. It simplifies the development process by handling native builds and providing many pre-installed libraries. Good for beginners and rapid prototyping.\n- **RN CLI:** The "bare" way to build apps. You have full control over the native code, but you must manage native dependencies and builds yourself.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-36',
    question: 'When should you "Eject" from Expo?',
    answer:
      'You eject (now called "Prebuild") when you need to add custom native modules that are not supported by the Expo Go app or when you need full control over the iOS/Android project directories.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-37',
    question: 'How do you manage environmental variables in React Native?',
    answer:
      'Using libraries like `react-native-dotenv` or `react-native-config`. For Expo apps, you can use `extra` in `app.json`. Never store sensitive secrets in these files as they are bundled with the app.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-38',
    question: 'What is "Codepush"?',
    answer:
      "Codepush (by Microsoft AppCenter) allows developers to push JavaScript and asset updates directly to users' devices without going through the App Store or Google Play Store. It cannot be used for native code changes.",
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-39',
    question: 'Explain the "Thread Model" of React Native.',
    answer:
      '1.  **Main Thread (UI Thread):** Handles UI rendering and user interactions.\n2.  **JS Thread:** Where the JavaScript code is executed.\n3.  **Shadow Thread:** Calculates the layout (Yoga).\n4.  **Native Modules Thread:** Where custom native modules run.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-40',
    question: 'What is the "InteractionManager"?',
    answer:
      '`InteractionManager` allows you to schedule long-running tasks to run after any animations or interactions have finished. This keeps the UI responsive and avoids dropped frames.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-41',
    question: 'How do you handle large images in React Native to avoid OOM (Out of Memory) crashes?',
    answer:
      'Use the `resizeMethod="auto"` (or `"resize"`) prop on the `<Image>` component on Android, and ensure images are sized appropriately before being bundled or fetched.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-42',
    question: 'What is "React Native Gesture Handler"?',
    answer:
      'It is a library that provides a more robust and performant way to handle gestures (pan, pinch, swipe) by offloading the gesture logic to the **native thread** instead of the JS thread.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-43',
    question: 'Explain "HOC" (Higher-Order Components) in React Native.',
    answer:
      'An HOC is a function that takes a component and returns a new component with enhanced functionality. Example: `withNavigation(MyComponent)`. While hooks are now preferred, HOCs are still common in older codebases.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-44',
    question: 'How do you test React Native apps?',
    answer:
      '- **Unit/Integration Testing:** Jest + React Native Testing Library.\n- **Static Testing:** TypeScript / ESLint.\n- **E2E Testing:** Detox or Appium.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-45',
    question: 'What is "Detox"?',
    answer:
      'Detox is a "gray box" end-to-end testing framework for mobile apps. It is designed to be fast and stable by synchronizing with the app\'s internal state, reducing flakiness compared to black-box tools like Appium.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-46',
    question: 'How do you achieve a "60 FPS" animation in React Native?',
    answer:
      'By using the `useNativeDriver: true` prop in the Animated API. This sends the animation definition to the UI thread once, allowing the native side to handle the frame-by-frame updates without crossing the Bridge.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-47',
    question: 'What can be animated with `useNativeDriver: true`?',
    answer:
      'Only non-layout properties can be animated natively, such as `opacity`, `transform` (scale, rotate, translate). You cannot animate `width`, `height`, or `margin` natively.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-48',
    question: 'What is "Metro Bundler"?',
    answer:
      'Metro is the JavaScript bundler for React Native. It takes your JS code and its dependencies and combines them into a single file (bundle) that the mobile app can execute.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-49',
    question: 'How do you handle push notifications?',
    answer:
      'Using libraries like `react-native-push-notification` or `expo-notifications`. You usually need a service like **Firebase Cloud Messaging (FCM)** for Android and **Apple Push Notification service (APNs)** for iOS.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-50',
    question: 'What is the purpose of `key` prop in a list?',
    answer:
      'The `key` helps React identify which items have changed, been added, or been removed. This is crucial for efficient re-renders and maintaining component state in lists.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-51',
    question: 'What is "Lottie" in React Native?',
    answer:
      'Lottie is a library (by Airbnb) that allows you to use complex Adobe After Effects animations in your app as JSON files. They are vector-based, lightweight, and very performant.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-52',
    question: 'Explain the "Virtual DOM" vs. "Native UI".',
    answer:
      "React Native still uses a Virtual DOM to determine what has changed in the UI. However, instead of updating a browser's DOM, it sends commands over the Bridge (or JSI) to create or update actual native views on the device.",
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-53',
    question: 'How do you handle accessibility in React Native?',
    answer:
      'Using props like `accessible`, `accessibilityLabel`, `accessibilityHint`, and `accessibilityRole`. This ensures screen readers (VoiceOver/TalkBack) can correctly interpret the UI.',
    topicId: 'react-native',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'react-native-54',
    question: 'What is "Automatic Batching" in React 18?',
    answer:
      'Automatic batching is when React groups multiple state updates into a single re-render for better performance. In React 18, this happens automatically even inside promises, timeouts, and native event handlers.',
    topicId: 'react-native',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'react-native-55',
    question: 'What is a "Safe Area View"?',
    answer:
      'The `<SafeAreaView>` component automatically adds padding to avoid overlapping with "safe" areas of the device, like the notch, status bar, or home indicator on modern iPhones.',
    topicId: 'react-native',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'react-native-56',
    question: 'How do you handle keyboard overlapping with input fields?',
    answer:
      'Using the `<KeyboardAvoidingView>` component or libraries like `react-native-keyboard-aware-scroll-view`. They automatically adjust the position of inputs when the software keyboard appears.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-57',
    question: 'What is "Shadow" in React Native?',
    answer:
      'Shadows are handled differently on platforms:\n- **iOS:** Use `shadowColor`, `shadowOffset`, `shadowOpacity`, and `shadowRadius`.\n- **Android:** Use the `elevation` property. For complex shadows on Android, you often need third-party libraries.',
    topicId: 'react-native',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'react-native-58',
    question: 'What is "TurboModules"?',
    answer:
      'TurboModules is the next generation of Native Modules in the New Architecture. They are lazy-loaded (loaded only when needed) and provide direct synchronous access to native methods via JSI.',
    topicId: 'react-native',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'react-native-59',
    question: 'Explain "Concurrent React" in React Native.',
    answer:
      'Concurrent React allows React to work on multiple versions of your UI at the same time. It can pause a long-running render to handle a high-priority event (like a user tap), making the app feel much more responsive.',
    topicId: 'react-native',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'react-native-60',
    question: 'What is "Bridgeless Mode"?',
    answer:
      'Bridgeless Mode is the final stage of the New Architecture where the legacy Bridge is completely removed. All communication happens via JSI, and any legacy native modules are handled by a compatibility layer.',
    topicId: 'react-native',
    level: 'expert',
    questionType: 'theory',
  },
];
