import calculs from '~/components/Outils/Calculettes/payment'
test('loan 100k with 4% of rate in 20 year no deposit', () => {
  const loan = 100000
  const rate = 4
  const duration = 20
  const deposit = 0
  expect(calculs.calculMonthlyPayment(loan, rate, duration, deposit)).toBe(
    '605.98'
  )
})

test('loan 595k with 0.5% of rate in 30 year no deposit', () => {
  const loan = 595000
  const rate = 0.5
  const duration = 30
  const deposit = 0
  expect(calculs.calculMonthlyPayment(loan, rate, duration, deposit)).toBe(
    '1780.18'
  )
})

test('loan 100k with 2% of rate in 20 year 20k deposit', () => {
  const loan = 100000
  const rate = 2
  const duration = 20
  const deposit = 20000
  expect(calculs.calculMonthlyPayment(loan, rate, duration, deposit)).toBe(
    '404.71'
  )
})

test('loan 100k with 2.7% of rate in 20 year 20k deposit', () => {
  const loan = 100000
  const rate = 2.7
  const duration = 20
  const deposit = 20000
  expect(calculs.calculMonthlyPayment(loan, rate, duration, deposit)).toBe(
    '431.76'
  )
})
