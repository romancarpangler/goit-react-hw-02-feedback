export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1>gggggggggg</h1>

      {options.map((option, i) => (
        <button key={i} name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};
