export function formatCurrency(value: string | number) {
  const numberValue = typeof value === 'string' ? parseFloat(value) : value
  const formattedValue = numberValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formattedValue
}
