export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex: number

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomizeQuestions(amount: number) {
  if (import.meta.env.PROD) {
    return shuffle(Array.from({ length: amount }, (_, i) => i))
  }
  return Array.from({ length: amount }, (_, i) => i)
}

export function clamp(number: number, min: number, max: number) {
  return Math.max(min, Math.min(number, max))
}
