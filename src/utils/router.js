export const goToScripturesPage = props => () => {
  props.history.push("/");
};

export const goToTypingPage = props => (
  testament,
  book,
  chapter,
  verse,
  text
) => {
  props.history.push(
    `/typing/${testament}/${book}/${chapter}/${verse}/${text}`
  );
};
