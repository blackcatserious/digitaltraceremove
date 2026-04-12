import { useState } from 'react'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function ROICalculator() {
  const [dealValue, setDealValue] = useState(50000)
  const [dealsLostPerMonth, setDealsLostPerMonth] = useState(2)

  const annualRisk = dealValue * dealsLostPerMonth * 12

  return (
    <section className="home-production" aria-labelledby="roi-heading">
      <header className="home-production__header">
        <h2 id="roi-heading">What Is Data Exposure Costing Your Business?</h2>
        <p>Estimate the annual revenue impact of unresolved online exposure.</p>
      </header>

      <div
        style={{
          background: 'var(--navy)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid var(--gold)',
        }}
      >
        <h3 style={{ marginTop: 0, color: 'var(--white)' }}>Revenue Impact Estimator</h3>

        <label style={{ display: 'block', marginBottom: '12px', color: 'var(--white)' }}>
          Average deal or contract value ($)
          <input
            type="number"
            value={dealValue}
            onChange={(event) => setDealValue(Number(event.target.value) || 0)}
            style={{ display: 'block', width: '100%', marginTop: '6px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '16px', color: 'var(--white)' }}>
          Deals lost per month to negative search
          <input
            type="number"
            value={dealsLostPerMonth}
            onChange={(event) => setDealsLostPerMonth(Number(event.target.value) || 0)}
            style={{ display: 'block', width: '100%', marginTop: '6px' }}
          />
        </label>

        <p style={{ marginBottom: '6px', color: 'rgba(255,255,255,0.9)' }}>Estimated annual revenue at risk</p>
        <p style={{ color: 'var(--gold)', fontSize: '2rem', margin: '8px 0' }}>{currencyFormatter.format(annualRisk)}</p>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>
          Based on {dealsLostPerMonth} lost deals × {currencyFormatter.format(dealValue)} × 12 months
        </p>
      </div>
    </section>
  )
}
