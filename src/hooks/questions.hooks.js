import { useState } from 'react';

import data from '../components/QuestionsList/data';

export default function useQuestions() {
  const [questions, setQuestions] = useState([
    ...data.map(_data => ({
      ..._data,
    })),
  ]);

  return [questions, setQuestions];
}
