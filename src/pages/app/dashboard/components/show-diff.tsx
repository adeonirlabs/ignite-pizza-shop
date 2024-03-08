interface ShowDiffProps {
  value: number
}

export const ShowDiff = ({ value }: ShowDiffProps) => {
  if (value === 0) return <span className="font-semibold text-muted-foreground">{value}</span>

  return value >= 0 ? (
    <span className="font-semibold text-emerald-500 dark:text-emerald-400">+{value}%</span>
  ) : (
    <span className="font-semibold text-rose-500 dark:text-rose-400">{value}%</span>
  )
}
