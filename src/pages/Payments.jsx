import { Brand, NavBar, NavLink, VBadge, Btn, Icon } from '../components/ui';
import { paymentSchedule } from '../data/mock';

const statusKind = { Paid: 'neutral', Scheduled: 'outline', 'Pending move-out': 'neutral' };

export default function Payments() {
  return (
    <div className="page">
      <NavBar>
        <Brand />
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/payments" current>Payments</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <VBadge icon="seal-check">Jenny · verified</VBadge>
      </NavBar>

      <div style={{ padding: '26px 32px 34px' }}>
        <h2 style={{ margin: '0 0 4px', fontSize: 26 }}>Payments &amp; deposit</h2>
        <div style={{ fontSize: 13, color: '#9397ab', marginBottom: 24 }}>12th &amp; E Marion · Jun 15 – Sep 1, 2027 · subletting from Alex K.</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 26 }}>
          <div style={{ background: 'var(--color-surface)', borderRadius: 12, padding: '19px 20px', boxShadow: 'var(--shadow-sm)' }}>
            <div className="k" style={{ marginBottom: 8 }}>Deposit in escrow</div>
            <div style={{ font: '500 30px Inter', marginBottom: 4 }}>$500.00</div>
            <div style={{ fontSize: 12, color: '#9397ab', marginBottom: 14 }}>Held by OrbitU, not by Alex. Released 7 days after move-out unless a claim is filed.</div>
            <div className="row" style={{ gap: 12 }}>
              <VBadge icon="lock-simple">Escrow · Stripe Treasury</VBadge>
              <VBadge icon="calendar">Releases Sep 8</VBadge>
            </div>
          </div>
          <div style={{ background: 'var(--color-surface)', borderRadius: 12, padding: '19px 20px', boxShadow: 'var(--shadow-sm)' }}>
            <div className="k" style={{ marginBottom: 8 }}>Next payment</div>
            <div style={{ font: '500 30px Inter', marginBottom: 4 }}>$940.00</div>
            <div style={{ fontSize: 12, color: '#9397ab', marginBottom: 14 }}>Auto-pays Jul 1 from Visa ···· 4417. Rent is only ever charged for nights you hold.</div>
            <div className="row" style={{ gap: 10 }}>
              <Btn kind="secondary">Change method</Btn>
              <Btn kind="ghost">Pay early</Btn>
            </div>
          </div>
        </div>

        <div className="k" style={{ marginBottom: 14 }}>Schedule</div>
        <table className="table" style={{ marginBottom: 26 }}>
          <thead><tr><th>Date</th><th>What</th><th>Method</th><th>Status</th><th style={{ textAlign: 'right' }}>Amount</th></tr></thead>
          <tbody>
            {paymentSchedule.map((p, i) => (
              <tr key={i}>
                <td>{p.date}</td>
                <td>{p.what}</td>
                <td>{p.method}</td>
                <td><span className={`tag tag-${statusKind[p.status]}`}>{p.status}</span></td>
                <td style={{ textAlign: 'right' }}>{p.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: '#1c1e2b', borderRadius: 10, padding: '15px 16px' }}>
            <div className="row" style={{ gap: 9, alignItems: 'flex-start' }}>
              <Icon name="camera" style={{ color: 'var(--color-accent)', fontSize: 18, marginTop: 1 }} />
              <div>
                <div style={{ font: '500 13px Inter', marginBottom: 4 }}>Protect your deposit</div>
                <div style={{ fontSize: 12, color: '#9397ab', lineHeight: 1.6 }}>Upload move-in photos within 48 hours of getting the keys. Both sides see the same set, timestamped.</div>
                <Btn kind="secondary" style={{ marginTop: 10 }}>Upload move-in photos</Btn>
              </div>
            </div>
          </div>
          <div style={{ background: '#1c1e2b', borderRadius: 10, padding: '15px 16px' }}>
            <div className="row" style={{ gap: 9, alignItems: 'flex-start' }}>
              <Icon name="scales" style={{ color: 'var(--color-accent)', fontSize: 18, marginTop: 1 }} />
              <div>
                <div style={{ font: '500 13px Inter', marginBottom: 4 }}>If something goes wrong</div>
                <div style={{ fontSize: 12, color: '#9397ab', lineHeight: 1.6 }}>Either side can open a claim before the release date. OrbitU holds the funds while it's reviewed — WA deposit law applies.</div>
                <Btn kind="ghost" iconRight="arrow-right" style={{ marginTop: 10 }}>Read the deposit policy</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
