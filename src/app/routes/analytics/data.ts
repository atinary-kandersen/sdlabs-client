export function generateRandomDataPoints(n: number): { date: string; Apples: number; Oranges: number; Tomatoes: number }[] {
  const data: { date: string; Apples: number; Oranges: number; Tomatoes: number }[] = [];
  const startDate = new Date();

  for (let i = 0; i < n; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      Apples: Math.floor(Math.random() * 5000),
      Oranges: Math.floor(Math.random() * 5000),
      Tomatoes: Math.floor(Math.random() * 5000)
    });
  }

  return data;
}
