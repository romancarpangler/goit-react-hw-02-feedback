export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, i) => (
        <button
          key={i}
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};
