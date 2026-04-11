import { useMemo, useState } from 'react'

export default function ROICalculator() {
  const [dealValue, setDealValue] = useState(50000)
  const [dealsLost, setDealsLost] = useState(2)

  const annualRisk = dealValue * dealsLost * 12
  const formattedAnnualRisk = useMemo(
    () => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(annualRisk),
    [annualRisk]
  )

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
        <h3>Revenue Impact Estimator</h3>

        <label style={{ display: 'block', marginBottom: '12px' }}>
          Average deal / contract value ($)
          <input
            type="number"
            value={dealValue}
            onChange={(event) => setDealValue(Number(event.target.value) || 0)}
            style={{ display: 'block', width: '100%', marginTop: '6px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '16px' }}>
          Deals lost per month to negative search
          <input
            type="number"
            value={dealsLost}
            onChange={(event) => setDealsLost(Number(event.target.value) || 0)}
            style={{ display: 'block', width: '100%', marginTop: '6px' }}
          />
        </label>

        <p>Estimated annual revenue at risk</p>
        <p style={{ color: 'var(--gold)', fontSize: '2rem', margin: '8px 0' }}>{formattedAnnualRisk}</p>
        <p>Based on {dealsLost} lost deals × {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(dealValue)} × 12 months</p>
      </div>
    </section>
  )
}
