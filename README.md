# bionic-reader
A simple bionic-reader algorithm I implemented.

This is solely from what I, the programmer, have thought of with the help of ideas from articles and documentations, and you, the reader of this README file, can use this however you'd like.

## how it's implemented
Based on what I read about the bionic algorithm and AI LLMs, it looks for big words like transition words to highlight more letters in those words, while skipping over small words like articles &#41;i.e. "the", "an", "a"&#40;.

### notes when forking
Please note that I use pnpm as the package manager for this repository.

```bash
  git clone [link-to-your-fork]
```

```bash
  pnpm install
```

```bash
  pnpm run prepare
```