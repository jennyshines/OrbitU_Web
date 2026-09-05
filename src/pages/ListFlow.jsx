import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brand, NavBar, Btn, Field, InputDisplay, Tag, Icon, PhotoBlock } from '../components/ui';

const STEPS = [
  { n: 1, label: 'Place & address' },
  { n: 2, label: 'Dates you\'re away' },
  { n: 3, label: 'Lease & landlord' },
  { n: 4, label: 'Photos & description' },
  { n: 5, label: 'Price & deposit' },
];

function StepList({ current }) {
  return (
    <div style={{ padding: '26px 22px', borderRight: '1px solid var(--color-divider)', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="k">List your sublease</div>
      {STEPS.map((s) => (
        <div className={`step${s.n === current ? ' step-on' : ''}`} key={s.n}>
          <b>{s.n < current ? <Icon name="check" size={11} /> : s.n}</b>{s.label}
        </div>
      ))}
      <div style={{ marginTop: 'auto' }}>
        <div className="bar" style={{ marginBottom: 7 }}><span style={{ width: `${current * 20}%` }} /></div>
        <div style={{ fontSize: 11.5, color: '#75798c' }}>About {5 - current} minute{5 - current === 1 ? '' : 's'} left</div>
      </div>
    </div>
  );
}

function PlaceStep() {
  return (
    <div style={{ padding: '30px 34px' }}>
      <div className="k" style={{ marginBottom: 10 }}>Step 1 of 5</div>
      <h2 style={{ margin: '0 0 6px', fontSize: 28 }}>Where's the place?</h2>
      <p style={{ fontSize: 13.5, color: '#9397ab', maxWidth: 520, marginBottom: 24 }}>Tell us the address — we'll pull walk time to campus automatically.</p>
      <Field label="Street address"><InputDisplay>1204 E Marion St</InputDisplay></Field>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 16 }}>
        <Field label="Unit type"><InputDisplay>Private room in 3-bed</InputDisplay></Field>
        <Field label="Neighborhood"><InputDisplay>12th &amp; E Marion</InputDisplay></Field>
      </div>
    </div>
  );
}

function DatesStep() {
  return (
    <div style={{ padding: '30px 34px' }}>
      <div className="k" style={{ marginBottom: 10 }}>Step 2 of 5</div>
      <h2 style={{ margin: '0 0 6px', fontSize: 28 }}>When are you away?</h2>
      <p style={{ fontSize: 13.5, color: '#9397ab', maxWidth: 520, marginBottom: 24 }}>We'll only surface your listing to students whose window fits inside these dates.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Field label="Away from"><InputDisplay>Jun 10, 2027</InputDisplay></Field>
        <Field label="Back on"><InputDisplay>Sep 5, 2027</InputDisplay></Field>
      </div>
    </div>
  );
}

function LeaseStep() {
  return (
    <div style={{ padding: '30px 34px' }}>
      <div className="k" style={{ marginBottom: 10 }}>Step 3 of 5</div>
      <h2 style={{ margin: '0 0 6px', fontSize: 28 }}>Can you legally sublet this place?</h2>
      <p style={{ fontSize: 13.5, color: '#9397ab', maxWidth: 520, marginBottom: 24 }}>Upload your lease and we'll find the sublet clause for you. Nothing goes live until this clears — it's why renters trust OrbitU listings.</p>

      <Field label="Your lease (PDF)">
        <div style={{ border: '1px dashed rgba(233,233,237,.22)', borderRadius: 10, padding: 18, display: 'flex', alignItems: 'center', gap: 14, background: '#1c1e2b' }}>
          <Icon name="file-text" size={26} color="var(--color-accent)" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13.5 }}>lease-1204-marion.pdf</div>
            <div style={{ fontSize: 11.5, color: '#75798c' }}>2.1 MB · clause found on page 6</div>
          </div>
          <Tag kind="accent">Clause 14b · subletting allowed</Tag>
        </div>
      </Field>

      <div style={{ background: '#1c1e2b', borderRadius: 10, padding: '15px 16px', margin: '22px 0', boxShadow: 'var(--shadow-sm)' }}>
        <div className="row" style={{ gap: 9, alignItems: 'flex-start' }}>
          <Icon name="sparkle" style={{ color: 'var(--color-accent)', fontSize: 17, marginTop: 1 }} />
          <div>
            <div style={{ fontSize: 13, marginBottom: 4 }}>
              We read: <span style={{ color: '#d2cefd' }}>"Tenant may sublet with prior written consent of Landlord, not to be unreasonably withheld."</span>
            </div>
            <div style={{ fontSize: 12, color: '#9397ab' }}>So you'll need written consent. We can request it for you — takes most Seattle landlords 2–4 days.</div>
          </div>
        </div>
      </div>

      <Field label="Landlord or property manager"><InputDisplay>Madison Park Management</InputDisplay></Field>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, margin: '16px 0 22px' }}>
        <Field label="Contact email"><InputDisplay>leasing@madisonparkmgmt.com</InputDisplay></Field>
        <Field label="Phone (optional)"><InputDisplay style={{ color: '#75798c' }}>(206) 555-0142</InputDisplay></Field>
      </div>

      <Field label="How should we get consent?">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 8 }}>
          <label className="radio"><input type="radio" name="consent" defaultChecked /><span className="dot" />Send the request for me — OrbitU emails a WA-compliant consent form and tracks it</label>
          <label className="radio"><input type="radio" name="consent" /><span className="dot" />I already have written consent — upload it</label>
          <label className="radio"><input type="radio" name="consent" /><span className="dot" />My lease doesn't require consent</label>
        </div>
      </Field>
    </div>
  );
}

function PhotosStep() {
  return (
    <div style={{ padding: '30px 34px' }}>
      <div className="k" style={{ marginBottom: 10 }}>Step 4 of 5</div>
      <h2 style={{ margin: '0 0 6px', fontSize: 28 }}>Add photos &amp; a description</h2>
      <p style={{ fontSize: 13.5, color: '#9397ab', maxWidth: 520, marginBottom: 24 }}>Listings with 5+ photos and a real description get more requests.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
        <PhotoBlock label="+ add photo" style={{ height: 100 }} />
        <PhotoBlock label="+ add photo" style={{ height: 100 }} />
        <PhotoBlock label="+ add photo" style={{ height: 100 }} />
      </div>
      <Field label="Description"><div className="input" style={{ minHeight: 96, padding: '11px 12px', fontSize: 13.5, color: '#75798c' }}>Tell students what the summer would be like…</div></Field>
    </div>
  );
}

function PriceStep() {
  return (
    <div style={{ padding: '30px 34px' }}>
      <div className="k" style={{ marginBottom: 10 }}>Step 5 of 5</div>
      <h2 style={{ margin: '0 0 6px', fontSize: 28 }}>Set your price &amp; deposit</h2>
      <p style={{ fontSize: 13.5, color: '#9397ab', maxWidth: 520, marginBottom: 24 }}>Similar rooms within 0.5 mi are asking $980–$1,150.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Field label="Monthly rent"><InputDisplay>$940</InputDisplay></Field>
        <Field label="Refundable deposit"><InputDisplay>$500</InputDisplay></Field>
      </div>
    </div>
  );
}

export default function ListFlow() {
  const [step, setStep] = useState(3);
  const navigate = useNavigate();

  const stepView = { 1: <PlaceStep />, 2: <DatesStep />, 3: <LeaseStep />, 4: <PhotosStep />, 5: <PriceStep /> }[step];

  return (
    <div className="page">
      <NavBar>
        <Brand />
        <span style={{ fontSize: 13, color: '#9397ab', marginRight: 'auto' }}>New listing · draft saved</span>
        <Btn to="/dashboard" kind="ghost">Save &amp; exit</Btn>
      </NavBar>
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr 300px' }}>
        <StepList current={step} />
        <div>
          {stepView}
          <div className="row" style={{ gap: 10, padding: '0 34px 30px' }}>
            <Btn kind="secondary" icon="arrow-left" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>Back</Btn>
            {step < 5 ? (
              <Btn kind="primary" iconRight="arrow-right" onClick={() => setStep((s) => Math.min(5, s + 1))}>
                {step === 3 ? 'Send consent request & continue' : 'Continue'}
              </Btn>
            ) : (
              <Btn kind="primary" iconRight="arrow-right" onClick={() => navigate('/dashboard')}>Publish listing</Btn>
            )}
          </div>
        </div>
        <div style={{ padding: '30px 26px', borderLeft: '1px solid var(--color-divider)', background: '#1a1c2a' }}>
          <div className="k" style={{ marginBottom: 12 }}>Live preview</div>
          <div className="card elev-sm" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
            <PhotoBlock label={<>your photos<br />add in step 4</>} style={{ height: 112, borderRadius: 0 }} />
            <div style={{ padding: '12px 13px' }}>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div style={{ font: '500 15px Inter' }}>$—<span style={{ fontSize: 11, color: '#9397ab', fontWeight: 400 }}> /mo</span></div>
                <Tag kind="neutral">Draft</Tag>
              </div>
              <div style={{ fontSize: 12.5, color: '#b2b6ca', marginTop: 3 }}>Private room · 12th &amp; E Marion</div>
              <div style={{ fontSize: 11.5, color: '#75798c' }}>6 min walk · Jun 10 – Sep 5</div>
            </div>
          </div>
          <div className="k" style={{ marginBottom: 10 }}>Why this step matters</div>
          <div style={{ fontSize: 12.5, color: '#9397ab', lineHeight: 1.65 }}>
            Listings with landlord sign-off get <b style={{ color: '#e9e9ed', fontWeight: 500 }}>3.4× more requests</b> and can use OrbitU's sublease contract and deposit escrow. Without it, your listing shows a "consent pending" flag.
          </div>
        </div>
      </div>
    </div>
  );
}
