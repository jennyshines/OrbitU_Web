import { useNavigate } from 'react-router-dom';
import { Brand, NavBar, Btn, Field, InputDisplay, IconBtn, PhotoBlock, Icon } from '../components/ui';
import { listingDetail } from '../data/mock';

export default function RequestToSublet() {
  const navigate = useNavigate();
  const d = listingDetail;

  return (
    <div className="page">
      <NavBar>
        <Brand />
        <span style={{ fontSize: 13, color: '#9397ab', marginRight: 'auto' }}>Request to sublet</span>
        <IconBtn icon="x" onClick={() => navigate(-1)} />
      </NavBar>
      <div style={{ padding: '28px 34px 34px', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 32 }}>
        <div>
          <h2 style={{ margin: '0 0 6px', fontSize: 26 }}>Ask {d.host.name.split(' ')[0]} for Jun 15 – Sep 1</h2>
          <p style={{ fontSize: 13.5, color: '#9397ab', marginBottom: 22 }}>{d.host.name.split(' ')[0]} reviews requests in about 2 hours. Nothing is charged until they accept.</p>

          <Field label="Your dates">
            <div style={{ background: 'var(--color-surface)', borderRadius: 10, padding: '15px 16px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ position: 'relative', height: 34, marginBottom: 10 }}>
                <div style={{ position: 'absolute', left: 0, right: 0, top: 8, height: 8, borderRadius: 4, background: '#2b2741' }} />
                <div style={{ position: 'absolute', left: '6%', width: '82%', top: 8, height: 8, borderRadius: 4, background: '#5d5294' }} />
                <div style={{ position: 'absolute', left: '14%', width: '66%', top: 8, height: 8, borderRadius: 4, background: 'var(--color-accent)', boxShadow: '0 0 14px rgba(150,138,224,.6)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', font: '400 10.5px Inter', color: '#75798c' }}>
                  <span>Jun 1</span><span>Jul 1</span><span>Aug 1</span><span>Sep 15</span>
                </div>
              </div>
              <div className="row" style={{ gap: 16, fontSize: 11.5, color: '#9397ab' }}>
                <span className="row" style={{ gap: 6 }}><span style={{ width: 20, height: 6, borderRadius: 3, background: 'var(--color-accent)' }} />Your stay</span>
                <span className="row" style={{ gap: 6 }}><span style={{ width: 20, height: 6, borderRadius: 3, background: '#5d5294' }} />{d.host.name.split(' ')[0]}'s availability</span>
                <span style={{ marginLeft: 'auto', color: '#b5abfc' }}><Icon name="check-circle" /> Fully covered</span>
              </div>
            </div>
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, margin: '18px 0' }}>
            <Field label="Who's staying"><InputDisplay>Just me</InputDisplay></Field>
            <Field label="Reason for the summer"><InputDisplay>Internship — Amazon, SLU</InputDisplay></Field>
          </div>

          <Field label="Note to Alex">
            <div className="input" style={{ minHeight: 96, padding: '11px 12px', fontSize: 13.5, color: '#b2b6ca' }}>
              Hi {d.host.name.split(' ')[0]} — I'm a rising senior in Nursing, interning in South Lake Union Jun–Aug. I'm quiet on weeknights, cook most meals, no pets. Happy to overlap a day for the handoff if that helps.
            </div>
          </Field>

          <Field label="Share with your request">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
              <label className="radio"><input type="radio" name="share" defaultChecked /><span className="dot" />Verified profile + roommate compatibility (recommended)</label>
              <label className="radio"><input type="radio" name="share" /><span className="dot" />Verified profile only</label>
            </div>
          </Field>

          <div className="row" style={{ gap: 10, marginTop: 8 }}>
            <Btn kind="primary" iconRight="paper-plane-right" onClick={() => navigate('/messages')}>Send request</Btn>
            <Btn kind="secondary" onClick={() => navigate('/messages')}>Message first</Btn>
          </div>
        </div>

        <div>
          <div className="card elev-sm" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
            <PhotoBlock label="unit photo" style={{ height: 104, borderRadius: 0 }} />
            <div style={{ padding: '13px 14px' }}>
              <div style={{ font: '500 14px Inter' }}>Private room · 12th & E Marion</div>
              <div style={{ fontSize: 11.5, color: '#75798c', marginTop: 2 }}>6 min walk · Furnished · Landlord approved</div>
            </div>
          </div>
          <div style={{ background: 'var(--color-surface)', borderRadius: 10, padding: '15px 16px', boxShadow: 'var(--shadow-sm)', marginBottom: 16 }}>
            <div className="k" style={{ marginBottom: 11 }}>If accepted</div>
            <div className="row" style={{ justifyContent: 'space-between', fontSize: 12.5, color: '#b2b6ca', marginBottom: 6 }}><span>Rent · Jun 15 – Sep 1</span><span>$2,444</span></div>
            <div className="row" style={{ justifyContent: 'space-between', fontSize: 12.5, color: '#b2b6ca', marginBottom: 6 }}><span>Deposit (refundable)</span><span>$500</span></div>
            <div className="row" style={{ justifyContent: 'space-between', fontSize: 12.5, color: '#b2b6ca', marginBottom: 8 }}><span>Service fee</span><span>$73</span></div>
            <div className="row" style={{ justifyContent: 'space-between', font: '500 14px Inter', paddingTop: 8, borderTop: '1px solid var(--color-divider)', marginBottom: 10 }}><span>Due at acceptance</span><span>$1,514</span></div>
            <div style={{ fontSize: 11.5, color: '#75798c' }}>First month + deposit + fee. The rest is billed monthly on the 1st.</div>
          </div>
          <div style={{ background: '#1c1e2b', borderRadius: 10, padding: '14px 15px' }}>
            <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
              <Icon name="users-three" style={{ color: 'var(--color-accent)', fontSize: 17, marginTop: 1 }} />
              <div>
                <div style={{ font: '500 13px Inter', marginBottom: 5 }}>Roommate compatibility 94%</div>
                <div style={{ fontSize: 12, color: '#9397ab', lineHeight: 1.6 }}>Matched on quiet hours (both after 11pm), cleanliness, and cooking at home. Mismatch: you have guests over more often than Maya prefers.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
