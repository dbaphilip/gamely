interface Props {
  score: number
}

export default function ({ score }: Props) {
  const skin = score > 89 ? "success" : score > 79 ? "warning" : "danger"
  return <span className={`badge text-bg-${skin}`}>{score}</span>
}
