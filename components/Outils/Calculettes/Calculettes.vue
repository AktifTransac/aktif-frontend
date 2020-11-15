<template>
  <article id="calculette">
    <form v-if="!calculated" @submit.prevent="calculLoan">
      <p v-if="error" id="error">{{ error }}</p>
      <div>
        <label>{{ $t('tools.credit.amount') }}*</label>
        <input
          v-model="loan"
          v-currency="{
            allowNegative: false,
            autoDecimalMode: true,
            precision: 0,
          }"
          placeholder="150 000 €"
        />
      </div>
      <div>
        <label>{{ $t('tools.credit.deposit') }}</label>
        <input
          v-model="deposit"
          v-currency="{
            allowNegative: false,
            autoDecimalMode: true,
            precision: 0,
          }"
          placeholder="20 000 €"
        />
      </div>
      <div>
        <label>{{ $t('tools.credit.duration') }}*</label>
        <input v-model="duration" type="number" step="any" placeholder="30" />
      </div>
      <div>
        <label>{{ $t('tools.credit.rate') }}*</label>
        <input v-model="rate" type="number" step="any" placeholder="1.7" />
      </div>
      <p>{{ $t('tools.credit.required') }}</p>
      <input type="submit" :value="$t('tools.credit.btn1')" />
    </form>
    <div v-else>
      <div>
        <h3>{{ $t('tools.credit.amount2') }}</h3>
        <h4>{{ loan }}</h4>
      </div>
      <div>
        <h3>{{ $t('tools.credit.deposit') }}</h3>
        <h4>{{ deposit ? deposit : '0 €' }}</h4>
      </div>
      <div>
        <h3>{{ $t('tools.credit.rate') }}</h3>
        <h4>{{ rate }}</h4>
      </div>
      <div>
        <h3>{{ $t('tools.credit.duration') }}</h3>
        <h4>{{ duration }}</h4>
      </div>
      <div>
        <h3>{{ $t('tools.credit.estimation') }}</h3>
        <h4>{{ monthlyPay }} €</h4>
      </div>
      <div>
        <h3>{{ $t('tools.credit.total') }}</h3>
        <h4>{{ totalLoan }} €</h4>
      </div>
      <div>
        <h3>{{ $t('tools.credit.price') }}</h3>
        <h4>{{ priceOfLoan }} €</h4>
      </div>
      <p @click="calculated = !calculated">{{ $t('tools.credit.btn2') }}</p>
      <nuxt-link :to="$i18n.path('biens')">
        {{ $t('tools.credit.btn3') }}
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import calculs from '~/components/Outils/Calculettes/payment'
export default {
  data() {
    return {
      calculated: false,
      loan: '',
      deposit: '',
      duration: '',
      rate: '',
      error: '',
    }
  },
  computed: {
    monthlyPay() {
      const deposit = this.deposit
        ? parseFloat(this.deposit.replace(/\s+/g, ''))
        : 0
      const result = calculs.calculMonthlyPayment(
        parseFloat(this.loan.replace(/\s+/g, '')),
        parseFloat(this.rate),
        parseFloat(this.duration),
        deposit
      )
      // const amount = parseFloat(this.loan.replace(/\s+/g, '')) - deposit
      // const formatedRate = parseFloat(this.rate) / 100 / 12
      // const dividend = amount * formatedRate
      // const divider =
      //   1 -
      //   Math.pow(1 + formatedRate, -Math.abs(parseFloat(this.duration) * 12))
      // const result = (dividend / divider).toFixed(2)

      return result
    },
    totalLoan() {
      const total = (this.monthlyPay * 12 * 25).toFixed()
      return total
    },
    priceOfLoan() {
      const deposit = this.deposit
        ? parseFloat(this.deposit.replace(/\s+/g, ''))
        : 0
      const price = (
        parseFloat(this.totalLoan) -
        (parseFloat(this.loan.replace(/\s+/g, '')) - deposit)
      ).toFixed()
      return price
    },
  },
  methods: {
    calculLoan() {
      if (this.loan && this.duration && this.rate) {
        this.calculated = !this.calculated
        this.error = ''
      } else {
        this.error = this.$t('tools.credit.error')
      }
    },
  },
}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/styles/components/Calculettes.scss"
></style>
