export default {
  calculMonthlyPayment(loan, rate, duration, deposit) {
    const amount = loan - deposit
    const formatedRate = rate / 100 / 12
    const dividend = amount * formatedRate
    const divider = 1 - Math.pow(1 + formatedRate, -Math.abs(duration * 12))
    const result = (dividend / divider).toFixed(2)

    return result
  },
}
