export interface TableDetailsProps {
  title: string
  value: string
}
export const TableDetails = ({ title, value }: TableDetailsProps) => {
  return (
    <p>
      <span className="font-semibold">{title}</span> - {value}
    </p>
  )
}
