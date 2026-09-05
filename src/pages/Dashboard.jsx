import { Brand, NavBar, NavLink, Btn, Card, VBadge, PhotoBlock, Icon, Avatar, Match, Tag } from '../components/ui';
import { requests } from '../data/mock';

const statusKind = { New: 'accent', Messaged: 'neutral', 'Awaiting you': 'neutral' };

export default function Dashboard() {
  return (
    <div className="page">
      <NavBar>
        <Brand />
        <NavLink to="/dashboard" current>Dashboard</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/payments">Payments</NavLink>
        <VBadge icon="seal-check">Alex · verified</VBadge>
      </NavBar>

      <div style={{ padding: '26px 30px 34px' }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 22 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 26 }}>Your summer, at a glance</h2>
            <div style={{ fontSize: 13, color: '#9397ab' }}>Jun 10 – Sep 5 · 87 days away · 1 listing live</div>
          </div>
          <Btn to="/list" kind="primary">Edit listing</Btn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 26 }}>
          <Card>
            <div className="card-kicker">Requests</div>
            <div style={{ font: '500 27px Inter' }}>3</div>
            <div style={{ fontSize: 11.5, color: '#75798c' }}>2 cover your full window</div>
          </Card>
          <Card>
            <div className="card-kicker">Views this week</div>
            <div style={{ font: '500 27px Inter' }}>148</div>
            <div style={{ fontSize: 11.5, color: '#75798c' }}>+31% vs last week</div>
          </Card>
          <Card>
            <div className="card-kicker">Rent covered</div>
            <div style={{ font: '500 27px Inter' }}>76%</div>
            <div className="bar" style={{ marginTop: 6 }}><span style={{ width: '76%' }} /></div>
          </Card>
          <Card style={{ boxShadow: '0 0 0 1px var(--color-accent)' }}>
            <div className="card-kicker">Needs you</div>
            <div style={{ font: '500 27px Inter' }}>1</div>
            <div style={{ fontSize: 11.5, color: '#b5abfc' }}>Landlord consent expires in 4 days</div>
          </Card>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 26 }}>
          <div>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
              <div className="k">Requests to sublet</div>
              <Btn to="/request" kind="ghost">Request settings</Btn>
            </div>
            <table className="table">
              <thead><tr><th>Student</th><th>Dates</th><th>Fit</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <div className="row" style={{ gap: 9 }}>
                        <Avatar size={30} label="av" />
                        <div>
                          <div style={{ fontSize: 13 }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: '#75798c' }}>{r.program}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: 12.5 }}>{r.dates}</div>
                      <div style={{ fontSize: 11, color: r.coverage === 'Full cover' ? '#b5abfc' : '#75798c' }}>{r.coverage}</div>
                    </td>
                    <td><Match fit={r.fit} /></td>
                    <td><Tag kind={statusKind[r.status]}>{r.status}</Tag></td>
                    <td><Btn to={r.status === 'Messaged' ? '/messages' : '/request'} kind="secondary">{r.status === 'Messaged' ? 'Reply' : 'Review'}</Btn></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="k" style={{ margin: '24px 0 10px' }}>Your listing</div>
            <Card style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
              <PhotoBlock label="unit photo" style={{ width: 96, height: 70, flex: 'none' }} />
              <div style={{ flex: 1 }}>
                <div style={{ font: '500 14.5px Inter' }}>Private room in 3-bed · 12th &amp; E Marion</div>
                <div style={{ fontSize: 12, color: '#9397ab', margin: '2px 0 6px' }}>$940 / mo · Jun 10 – Sep 5 · Furnished</div>
                <div className="row" style={{ gap: 12 }}>
                  <VBadge icon="seal-check">Landlord approved</VBadge>
                  <VBadge icon="eye">Live</VBadge>
                </div>
              </div>
              <Btn to="/listing/l1" kind="secondary">Preview</Btn>
            </Card>
          </div>

          <div>
            <div style={{ background: 'var(--color-surface)', borderRadius: 10, padding: '16px 17px', boxShadow: '0 0 0 1px var(--color-accent)', marginBottom: 16 }}>
              <div className="row" style={{ gap: 8, marginBottom: 8 }}>
                <Icon name="warning" style={{ color: '#b5abfc', fontSize: 17 }} />
                <div className="k" style={{ color: '#d2cefd' }}>Action needed</div>
              </div>
              <div style={{ fontSize: 13, marginBottom: 5 }}>Landlord consent expires Sep 9</div>
              <div style={{ fontSize: 12, color: '#9397ab', marginBottom: 12 }}>Madison Park Mgmt's written consent covers Jun 10 – Sep 5. Re-request if you extend your dates.</div>
              <Btn kind="primary" block>Re-request consent</Btn>
            </div>
            <div className="k" style={{ marginBottom: 10 }}>Checklist before handoff</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              <div className="row" style={{ gap: 9, fontSize: 13 }}><Icon name="check-circle" style={{ color: '#b5abfc', fontSize: 16 }} />Lease clause verified</div>
              <div className="row" style={{ gap: 9, fontSize: 13 }}><Icon name="check-circle" style={{ color: '#b5abfc', fontSize: 16 }} />Landlord consent on file</div>
              <div className="row" style={{ gap: 9, fontSize: 13, color: '#9397ab' }}><Icon name="circle" size={16} />Sublease signed by both parties</div>
              <div className="row" style={{ gap: 9, fontSize: 13, color: '#9397ab' }}><Icon name="circle" size={16} />Move-in photos uploaded</div>
              <div className="row" style={{ gap: 9, fontSize: 13, color: '#9397ab' }}><Icon name="circle" size={16} />Key handoff arranged</div>
            </div>
            <div style={{ background: '#1c1e2b', borderRadius: 10, padding: '14px 15px' }}>
              <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
                <Icon name="sparkle" style={{ color: 'var(--color-accent)', fontSize: 16, marginTop: 1 }} />
                <div style={{ fontSize: 12, color: '#9397ab', lineHeight: 1.6 }}>
                  <b style={{ color: '#e9e9ed', fontWeight: 500 }}>Pricing note:</b> similar rooms within 0.5 mi are asking $980–$1,150. Raising to $995 would still keep you in the top third for fit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
