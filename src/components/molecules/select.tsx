interface Props {
  language: string
}

export default function Select({ language }: Props) {

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => location.href = `${location.origin}/${event.target.value}/`;

  return (
    <select value={language} onChange={handleSelectChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}
