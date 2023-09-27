import { isShortWord } from "@bionic-reader/utils";

interface BionifiedText {
  highlightedText: string;
  unhighlightedText: string;
}

class Bionify {
  private length: number;
  public ratio: number;

  constructor(ratio: number = 0.5) {
    this.ratio = ratio;
    this.length = 0;
  }

  transform(paragraph: string): BionifiedText[] {
    const sentences = paragraph.split(" ");

    this.length = sentences.length;

    return this.transformRecursive(sentences, sentences[0], [], 0);
  }

  private transformRecursive(
    sentences: string[],
    currentSentence: string,
    currentBionifiedSentences: BionifiedText[],
    idx: number,
  ): BionifiedText[] {
    if (idx >= this.length) {
      this.length = 0;

      return currentBionifiedSentences;
    }

    idx += 1;
    const wordLength = currentSentence.length;
    let highlightedText: string;
    let unhighlightedText: string;

    if (isShortWord(currentSentence)) {
      if (wordLength <= 2) {
        highlightedText = currentSentence[0];
        unhighlightedText = currentSentence.slice(1, currentSentence.length);
      } else {
        const randomNum = Math.floor((wordLength - 1) * this.ratio);

        highlightedText = currentSentence.slice(0, randomNum);
        unhighlightedText = currentSentence.slice(randomNum, wordLength);
      }
    } else {
      let randomNum = Math.floor((wordLength - 1) * this.ratio);

      if (wordLength >= 4 && randomNum < Math.floor(wordLength / 2)) {
        randomNum = Math.floor(wordLength / 2);
      }

      if (randomNum === 0) {
        randomNum = Math.floor(Math.random() * 2);
      }

      highlightedText = currentSentence.slice(0, randomNum);
      unhighlightedText = currentSentence.slice(randomNum, wordLength);
    }

    currentBionifiedSentences.push({
      highlightedText,
      unhighlightedText,
    });

    return this.transformRecursive(
      sentences,
      sentences[idx],
      currentBionifiedSentences,
      idx,
    );
  }
}

export default Bionify;
