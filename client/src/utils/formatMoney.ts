export function formatCurrency(value: string) {
  const formattedValue = parseFloat(value).toFixed(2).replace('.', ',')
  return `R$ ${formattedValue}`
}
