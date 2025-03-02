import { updatedWordsA1 } from "../../pages/Game/gameA1";
import { updatedWordsA2 } from "../../pages/Game/gameA2"
import { updatedWordsB1 } from "../../pages/Game/gameB1"

export const allWords = [...updatedWordsA1, ...updatedWordsA2, ...updatedWordsB1];

 export const allWordsUniqe = allWords.map((item, index) => ({ unique: index + 1, ...item }));

 export const sortedWords = allWordsUniqe.sort((a, b) => a.word.localeCompare(b.word));