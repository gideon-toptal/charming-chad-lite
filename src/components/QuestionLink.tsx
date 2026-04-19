import { Link as RouterLink } from "react-router";
import type { Link } from "../utils/links";

interface QuestionLinkProps {
  question: string;
  link: Link;
}
export default function QuestionLink(props: QuestionLinkProps) {
  const { question, link } = props;
  return (
    <p>
      {question}{" "}
      <RouterLink to={link.value}>{link.label}</RouterLink>
    </p>
  );
}
