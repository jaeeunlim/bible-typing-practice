export const Testament = {
  NEW: "new",
  OLD: "old"
};

export const oldTestamentChapters = {
  Genesis: 50,
  Exodus: 40,
  Leviticus: 27,
  Numbers: 36,
  Deuteronomy: 34,
  Joshua: 24,
  Judges: 21,
  Ruth: 4,
  "1 Samuel": 31,
  "2 Samuel": 24,
  "1 Kings": 22,
  "2 Kings": 25,
  "1 Chronicles": 29,
  "2 Chronicles": 36,
  Ezra: 10,
  Nehemiah: 13,
  Esther: 10,
  Job: 42,
  Psalms: 150,
  Proverbs: 31,
  Ecclesiastes: 12,
  "Song of Songs": 8,
  Isaiah: 66,
  Jeremiah: 52,
  Lamentations: 5,
  Ezekiel: 48,
  Daniel: 12,
  Hosea: 14,
  Joel: 3,
  Amos: 9,
  Obadiah: 1,
  Jonah: 4,
  Micah: 7,
  Nahum: 3,
  Habakkuk: 3,
  Zephaniah: 3,
  Haggai: 2,
  Zechariah: 14,
  Malachi: 4
};

export const newTestamentChapters = {
  Matthew: 28,
  Mark: 16,
  Luke: 24,
  John: 21,
  Acts: 28,
  James: 5,
  "1 Peter": 5,
  "2 Peter": 3,
  "1 John": 5,
  "2 John": 1,
  "3 John": 1,
  Jude: 1,
  Romans: 16,
  "1 Corinthians": 16,
  "2 Corinthians": 13,
  Galatians: 6,
  Ephesians: 6,
  Philippians: 4,
  Colossians: 4,
  "1 Thessalonians": 5,
  "2 Thessalonians": 3,
  "1 Timothy": 6,
  "2 Timothy": 4,
  Titus: 3,
  Philemon: 1,
  Hebrews: 13,
  Revelation: 22
};

const getVerses = verse => verse.text.substr(0, verse.text.length - 1); // remove enter at the end

export const fetchBibleVerses = async (book, chapter) => {
  try {
    var response = await fetch(`https://bible-api.com/${book}%20${chapter}`);
    var { verses } = await response.json();
    return verses.map(getVerses);
  } catch (e) {
    console.log(e);
  }
};

export const getBibleVerse = async (book, chapter, verse) => {
  try {
    var bibleVerses = await fetchBibleVerses(book, chapter);
    return bibleVerses[verse - 1]; // list is zero-indexed
  } catch (e) {
    console.log(e);
  }
};

export const getNextVerseInfo = async (testament, book, chapter, verse) => {
  var nextTestament = testament;
  var nextBook = book;
  var nextChapter = chapter;
  var nextVerse = verse;
  var nextText = "";

  var testamentChapters = newTestamentChapters;
  if (testament === Testament.OLD) {
    testamentChapters = oldTestamentChapters;
  }

  const books = Object.keys(testamentChapters);

  const fetchedVerses = await fetchBibleVerses(book, chapter);
  if (verse in fetchedVerses) {
    // next verse is in same chapter
    nextVerse = parseInt(verse, 10) + 1;
    nextText = fetchedVerses[verse];
  } else if (parseInt(chapter, 10) + 1 <= testamentChapters[book]) {
    // next verse is in next chapter of same book
    nextText = await getBibleVerse(book, parseInt(chapter, 10) + 1, 1);
    nextChapter = parseInt(chapter, 10) + 1;
    nextVerse = 1;
  } else if (books.indexOf(book) < books.length - 1) {
    // next verse is in the next book of same testament
    nextBook = books[books.indexOf(book) + 1];
    nextText = await getBibleVerse(nextBook, 1, 1);
    nextChapter = 1;
    nextVerse = 1;
  } else {
    // next verse is in the next testament
    if (testament === Testament.OLD) {
      testamentChapters = newTestamentChapters;
      const newTestamentBooks = Object.keys(testamentChapters);
      nextBook = newTestamentBooks[0];
      nextText = await getBibleVerse(nextBook, 1, 1);
      nextTestament = Testament.NEW;
      nextChapter = 1;
      nextVerse = 1;
    } else {
      // reached end of Bible!
      return null;
    }
  }

  const nextVerseInfo = {
    testament: nextTestament,
    book: nextBook,
    chapter: nextChapter,
    verse: nextVerse,
    text: nextText
  };

  return nextVerseInfo;
};
