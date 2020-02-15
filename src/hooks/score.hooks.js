import { useState } from 'react';

export default function useScore() {
  const [score, setScore] = useState(0);

  return [score, setScore];
}
