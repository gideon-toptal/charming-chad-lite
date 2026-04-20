const questions: Question[] = [
  { question: "What is Charming Chad, really?", answer: "" },
  { question: "What do I actually do here?", answer: "" },
  { question: "Do I have to talk to anyone?", answer: "" },
  { question: "Is my identity private?", answer: "" },
];
type Question = {
  question: string;
  answer: string;
};
interface QuestionComponentProps {
  question: Question;
}
function QuestionComponent(props: QuestionComponentProps) {
  const { question } = props;
  return (
    <div>
      <p>{question.question}</p>
      <p>{question.answer}</p>
    </div>
  );
}
export default function FAQs() {
  return (
    <div>
      <h1>Frequently asked questions</h1>
      {questions.map((question) => (
        <QuestionComponent question={question} />
      ))}
    </div>
  );
}
