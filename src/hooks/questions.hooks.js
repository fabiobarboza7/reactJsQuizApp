import { useState } from 'react';

export default function useQuestions(data) {
  const [questions, setQuestions] = useState(data);

  return [questions, setQuestions];
}
