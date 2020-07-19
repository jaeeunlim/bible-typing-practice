import * as Hangul from "hangul-js";

export const Language = {
  ENGLISH: "English",
  KOREAN: "한글"
};

export const BibleVersion = {
  English: "web",
  한글: "korean"
};

export const Testament = {
  English: { OLD: "Old Testament", NEW: "New Testament" },
  한글: { OLD: "구약성경", NEW: "신약성경" }
};

export const OldTestamentBooks = {
  English: {
    Genesis: "Genesis",
    Exodus: "Exodus",
    Leviticus: "Leviticus",
    Numbers: "Numbers",
    Deuteronomy: "Deuteronomy",
    Joshua: "Joshua",
    Judges: "Judges",
    Ruth: "Ruth",
    "1 Samuel": "1 Samuel",
    "2 Samuel": "2 Samuel",
    "1 Kings": "1 Kings",
    "2 Kings": "2 Kings",
    "1 Chronicles": "1 Chronicles",
    "2 Chronicles": "2 Chronicles",
    Ezra: "Ezra",
    Nehemiah: "Nehemiah",
    Esther: "Esther",
    Job: "Job",
    Psalms: "Psalms",
    Proverbs: "Proverbs",
    Ecclesiastes: "Ecclesiastes",
    "Song of Songs": "Song of Songs",
    Isaiah: "Isaiah",
    Jeremiah: "Jeremiah",
    Lamentations: "Lamentations",
    Ezekiel: "Ezekiel",
    Daniel: "Daniel",
    Hosea: "Hosea",
    Joel: "Joel",
    Amos: "Amos",
    Obadiah: "Obadiah",
    Jonah: "Jonah",
    Micah: "Micah",
    Nahum: "Nahum",
    Habakkuk: "Habakkuk",
    Zephaniah: "Zephaniah",
    Haggai: "Haggai",
    Zechariah: "Zechariah",
    Malachi: "Malachi"
  },
  한글: {
    Genesis: "창세기",
    Exodus: "출애굽기",
    Leviticus: "레위기",
    Numbers: "민수기",
    Deuteronomy: "신명기",
    Joshua: "여호수아",
    Judges: "사사기",
    Ruth: "룻기",
    "1 Samuel": "사무엘상",
    "2 Samuel": "사무엘하",
    "1 Kings": "열왕기상",
    "2 Kings": "열왕기하",
    "1 Chronicles": "역대상",
    "2 Chronicles": "역대하",
    Ezra: "에스라",
    Nehemiah: "느헤미아",
    Esther: "에스더",
    Job: "욥기",
    Psalms: "시편",
    Proverbs: "잠언",
    Ecclesiastes: "전도서",
    "Song of Songs": "아가",
    Isaiah: "이사야",
    Jeremiah: "예레미야",
    Lamentations: "예레미야애가",
    Ezekiel: "에스겔",
    Daniel: "다니엘",
    Hosea: "호세아",
    Joel: "요엘",
    Amos: "아모스",
    Obadiah: "오바댜",
    Jonah: "요나",
    Micah: "미가",
    Nahum: "나훔",
    Habakkuk: "하박국",
    Zephaniah: "스바냐",
    Haggai: "학개",
    Zechariah: "스가랴",
    Malachi: "말라기"
  }
};

export const NewTestamentBooks = {
  English: {
    Matthew: "Matthew",
    Mark: "Mark",
    Luke: "Luke",
    John: "John",
    Acts: "Acts",
    Romans: "Romans",
    "1 Corinthians": "1 Corinthians",
    "2 Corinthians": "2 Corinthians",
    Galatians: "Galatians",
    Ephesians: "Ephesians",
    Philippians: "Philippians",
    Colossians: "Colossians",
    "1 Thessalonians": "1 Thessalonians",
    "2 Thessalonians": "2 Thessalonians",
    "1 Timothy": "1 Timothy",
    "2 Timothy": "2 Timothy",
    Titus: "Titus",
    Philemon: "Philemon",
    Hebrews: "Hebrews",
    James: "James",
    "1 Peter": "1 Peter",
    "2 Peter": "2 Peter",
    "1 John": "1 John",
    "2 John": "2 John",
    "3 John": "3 John",
    Jude: "Jude",
    Revelation: "Revelation"
  },
  한글: {
    Matthew: "마태복음",
    Mark: "마가복음",
    Luke: "누가복음",
    John: "요한복음",
    Acts: "사도행전",
    Romans: "로마서",
    "1 Corinthians": "고린도전서",
    "2 Corinthians": "고린도후서",
    Galatians: "갈라디아서",
    Ephesians: "에베소서",
    Philippians: "빌립보서",
    Colossians: "골로새서",
    "1 Thessalonians": "데살로니가전서",
    "2 Thessalonians": "데살로니가후서",
    "1 Timothy": "디모데전서",
    "2 Timothy": "디모데후서",
    Titus: "디도서",
    Philemon: "빌레몬서",
    Hebrews: "히브리서",
    James: "야고보서",
    "1 Peter": "베드로전서",
    "2 Peter": "베드로후서",
    "1 John": "요한1서",
    "2 John": "요한2서",
    "3 John": "요한3서",
    Jude: "유다서",
    Revelation: "요한계시록"
  }
};

export const ShowType = {
  English: {
    TESTAMENTS: "testaments",
    BOOKS: "books",
    CHAPTERS: "chapters",
    VERSES: "verses"
  },
  한글: {
    TESTAMENTS: "성경",
    BOOKS: "책",
    CHAPTERS: "장",
    VERSES: "절"
  }
};

export const Type = {
  English: "Type",
  한글: "타자연습"
};

export const KeyboardLayout = {
  English: {
    Q: "Q",
    W: "W",
    E: "E",
    R: "R",
    T: "T",
    Y: "Y",
    U: "U",
    I: "I",
    O: "O",
    P: "P",
    A: "A",
    S: "S",
    D: "D",
    F: "F",
    G: "G",
    H: "H",
    J: "J",
    K: "K",
    L: "L",
    Z: "Z",
    X: "X",
    C: "C",
    V: "V",
    B: "B",
    N: "N",
    M: "M"
  },
  한글: {
    Q: "ㅃ ㅂ",
    W: "ㅉ ㅈ",
    E: "ㄸ ㄷ",
    R: "ㄲ ㄱ",
    T: "ㅆ ㅅ",
    Y: "ㅛ",
    U: "ㅕ",
    I: "ㅑ",
    O: "ㅒ ㅐ",
    P: "ㅖ ㅔ",
    A: "ㅁ",
    S: "ㄴ",
    D: "ㅇ",
    F: "ㄹ",
    G: "ㅎ",
    H: "ㅗ",
    J: "ㅓ",
    K: "ㅏ",
    L: "ㅣ",
    Z: "ㅋ",
    X: "ㅌ",
    C: "ㅊ",
    V: "ㅍ",
    B: "ㅠ",
    N: "ㅜ",
    M: "ㅡ"
  }
};

export const KeyMap = {
  English: {
    "~": [0, 52],
    "`": [0],
    "!": [1, 52],
    "1": [1],
    "@": [2, 52],
    "2": [2],
    "#": [3, 52],
    "3": [3],
    $: [4, 52],
    "4": [4],
    "%": [5, 52],
    "5": [5],
    "^": [6, 41],
    "6": [6],
    "&": [7, 41],
    "7": [7],
    "*": [8, 41],
    "8": [8],
    "(": [9, 41],
    "9": [9],
    ")": [10, 41],
    "0": [10],
    _: [11, 41],
    "-": [11],
    "+": [12, 41],
    "=": [12],
    Q: [15, 52],
    q: [15],
    W: [16, 52],
    w: [16],
    E: [17, 52],
    e: [17],
    R: [18, 52],
    r: [18],
    T: [19, 52],
    t: [19],
    Y: [20, 41],
    y: [20],
    U: [21, 41],
    u: [21],
    I: [22, 41],
    i: [22],
    O: [23, 41],
    o: [23],
    P: [24, 41],
    p: [24],
    "{": [25, 41],
    "[": [25],
    "}": [26, 41],
    "]": [26],
    "|": [27, 41],
    "\\": [27],
    A: [29, 52],
    a: [29],
    S: [30, 52],
    s: [30],
    D: [31, 52],
    d: [31],
    F: [32, 52],
    f: [32],
    G: [33, 52],
    g: [33],
    H: [34, 41],
    h: [34],
    J: [35, 41],
    j: [35],
    K: [36, 41],
    k: [36],
    L: [37, 41],
    l: [37],
    ":": [38, 41],
    ";": [38],
    '"': [39, 41],
    "'": [39],
    Z: [42, 52],
    z: [42],
    X: [43, 52],
    x: [43],
    C: [44, 52],
    c: [44],
    V: [45, 52],
    v: [45],
    B: [46, 52],
    b: [46],
    N: [47, 41],
    n: [47],
    M: [48, 41],
    m: [48],
    "<": [49, 41],
    ",": [49],
    ">": [50, 41],
    ".": [50],
    "?": [51, 41],
    "/": [51],
    " ": [57],
    del: [13]
  },
  한글: {
    "~": [0, 52],
    "`": [0],
    "!": [1, 52],
    "1": [1],
    "@": [2, 52],
    "2": [2],
    "#": [3, 52],
    "3": [3],
    $: [4, 52],
    "4": [4],
    "%": [5, 52],
    "5": [5],
    "^": [6, 41],
    "6": [6],
    "&": [7, 41],
    "7": [7],
    "*": [8, 41],
    "8": [8],
    "(": [9, 41],
    "9": [9],
    ")": [10, 41],
    "0": [10],
    _: [11, 41],
    "-": [11],
    "+": [12, 41],
    "=": [12],
    ㅃ: [15, 52],
    ㅂ: [15],
    ㅉ: [16, 52],
    ㅈ: [16],
    ㄸ: [17, 52],
    ㄷ: [17],
    ㄲ: [18, 52],
    ㄱ: [18],
    ㅆ: [19, 52],
    ㅅ: [19],
    ㅛ: [20],
    ㅕ: [21],
    ㅑ: [22],
    ㅒ: [23, 41],
    ㅐ: [23],
    ㅖ: [24, 41],
    ㅔ: [24],
    "{": [25, 41],
    "[": [25],
    "}": [26, 41],
    "]": [26],
    "|": [27, 41],
    "\\": [27],
    ㅁ: [29],
    ㄴ: [30],
    ㅇ: [31],
    ㄹ: [32],
    ㅎ: [33],
    ㅗ: [34],
    ㅓ: [35],
    ㅏ: [36],
    ㅣ: [37],
    ":": [38, 41],
    ";": [38],
    '"': [39, 41],
    "'": [39],
    ㅋ: [42],
    ㅌ: [43],
    ㅊ: [44],
    ㅍ: [45],
    ㅠ: [46],
    ㅜ: [47],
    ㅡ: [48],
    "<": [49, 41],
    ",": [49],
    ">": [50, 41],
    ".": [50],
    "?": [51, 41],
    "/": [51],
    " ": [57],
    del: [13]
  }
};

export const Scriptures = {
  English: "Scriptures",
  한글: "성경말씀"
};

export const Labels = {
  English: {
    scriptures: "Scriptures",
    fingercode: "Finger Color Code",
    begin:
      "Click to begin timer with a countdown. Or type first character to begin timer automatically.",
    textarea:
      "This is an optional textarea to visualize the content of what you type. You can turn off this feature from settings.",
    settings: "Settings",
    highlightKeys: "HIGHLIGHT KEYS",
    showTextarea: "SHOW TEXTAREA",
    exit: "Exit",
    reset: "Reset",
    go: "GO!",
    endOfBible: "You have reached the end of the Bible!",
    retry: "Retry",
    nextVerse: "Next Verse",
    language: "Language"
  },
  한글: {
    scriptures: "성경말씀",
    fingercode: "손가락 칼러 코드",
    begin:
      "클릭하면 카운트 다운으로 시작됩니다. 아니면 첫 타를 정확히 치시면 자동으로 시작됩니다.",
    textarea:
      "위에 연습용 텍스트 영역은 시간과 타자평가 없이 자유롭게 연습 할 수 있는 공간입니다. 설정에서 이 옵션을 끌 수 있습니다.",
    settings: "설정",
    highlightKeys: "키보드 하이라이트",
    showTextarea: "연습용 텍스트 영역 보기",
    exit: "나가기",
    reset: "다시시작",
    go: "시작!",
    endOfBible: "성경 마지막 절입니다!",
    retry: "다시시도",
    nextVerse: "다음 절",
    language: "언어"
  }
};

export const getSpeedMessage = (language, speed) => {
  switch (language) {
    case Language.KOREAN:
      return `당신의 타자속도는 ${speed} 타/분`;
    default:
      return `Your speed is ${speed} WPM`;
  }
};

export const getAccuracyMessage = (language, accuracy) => {
  switch (language) {
    case Language.KOREAN:
      return `당신의 정확도는 ${accuracy} %`;
    default:
      return `Your accuracy is ${accuracy} %`;
  }
};

export const getDurationMessage = (language, minutes, seconds) => {
  switch (language) {
    case Language.KOREAN:
      return `${minutes} 분 ${seconds} 초 걸렸습니다`;
    default:
      return `Your typed for ${minutes} minutes and ${seconds} seconds`;
  }
};

export const decomposeChar = (language, char) => {
  switch (language) {
    case Language.KOREAN:
      return Hangul.disassemble(char);
    default:
      return [char];
  }
};

export const composeChar = (language, decomposedChar) => {
  switch (language) {
    case Language.KOREAN:
      return Hangul.assemble(decomposedChar);
    default:
      return decomposedChar[0];
  }
};

export const getTotalLetterCount = (language, str) => {
  var total = 0;
  for (var i = 0; i < str.length; ++i) {
    total += decomposeChar(language, str[i]).length;
  }
  return total;
};
