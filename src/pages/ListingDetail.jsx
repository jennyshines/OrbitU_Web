import { useParams } from 'react-router-dom';
import { Brand, NavBar, NavLink, Tag, Match, VBadge, PhotoBlock, Icon, Btn, Field, InputDisplay, Card, Avatar } from '../components/ui';
import { listingDetail } from '../data/mock';

export default function ListingDetail() {
  const { id } = useParams();
  const d = listingDetail; // single mock detail record, reused for any id

  return (
    <div className="page">
      <NavBar>
        <Brand />
        <NavLink to="/search"><Icon name="arrow-left" /> Back to 158 results</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <VBadge icon="seal-check">Jenny · verified</VBadge>
      </NavBar>

      <div style={{ padding: '22px 26px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '104px 104px', gap: 8, marginBottom: 22 }}>
          <PhotoBlock label={<>hero photo · room shot on dark background<br />1600×1000</>} style={{ gridRow: 'span 2', height: '100%' }} />
          <PhotoBlock label="photo · kitchen" />
          <PhotoBlock label="photo · street view" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 34 }}>
          <div>
            <div className="row" style={{ gap: 10, marginBottom: 10 }}>
              <Tag kind="accent">Covers your full window</Tag>
              <Tag kind="outline">Landlord approved</Tag>
            </div>
            <h2 style={{ margin: '0 0 6px', fontSize: 30 }}>{d.title}</h2>
            <div className="row" style={{ gap: 16, fontSize: 13, color: '#9397ab', marginBottom: 20 }}>
              <span><Icon name="person-simple-walk" /> {d.walk} min walk to campus</span>
              <span><Icon name="calendar-check" /> {d.dates}</span>
              <span><Icon name="armchair" /> Furnished</span>
            </div>

            <div style={{ background: 'var(--color-surface)', borderRadius: 10, padding: '16px 18px', marginBottom: 20, boxShadow: 'var(--shadow-sm)' }}>
              <div className="k" style={{ marginBottom: 12 }}>Sublet legality</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 22px' }}>
                {d.legality.map((item, i) => (
                  <div className="row" style={{ alignItems: 'flex-start', gap: 9 }} key={i}>
                    <Icon name={item.icon} style={{ color: item.icon === 'info' ? '#9397ab' : '#b5abfc', fontSize: 17 }} />
                    <div>
                      <div style={{ fontSize: 13 }}>{item.title}</div>
                      <div style={{ fontSize: 11.5, color: '#75798c' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h4 style={{ margin: '0 0 8px' }}>The summer, from the tenant</h4>
            <p style={{ fontSize: 13.5, color: '#b2b6ca', maxWidth: 560 }}>{d.story}</p>

            <h4 style={{ margin: '20px 0 10px' }}>Who you'd be living with</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 22 }}>
              {d.roommates.map((r, i) => (
                <Card key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <Avatar size={42} />
                  <div>
                    <div style={{ font: '500 13.5px Inter' }}>{r.name}</div>
                    <div style={{ fontSize: 11.5, color: '#75798c' }}>{r.note}</div>
                  </div>
                </Card>
              ))}
            </div>

            <h4 style={{ margin: '0 0 10px' }}>Amenities</h4>
            <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
              {d.amenities.map((a) => <Tag key={a} kind="neutral">{a}</Tag>)}
            </div>
          </div>

          <div>
            <div style={{ background: 'var(--color-surface)', borderRadius: 12, padding: 20, boxShadow: 'var(--shadow-md)', position: 'sticky', top: 20 }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ font: '500 26px Inter' }}>${d.price}<span style={{ fontSize: 12.5, color: '#9397ab', fontWeight: 400 }}> / month</span></div>
                <Match fit={d.fit} />
              </div>
              <div style={{ fontSize: 12, color: '#75798c', margin: '2px 0 16px' }}>Utilities and wifi included</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 12 }}>
                <Field label="Your move in"><InputDisplay style={{ fontSize: 13 }}>Jun 15</InputDisplay></Field>
                <Field label="Your move out"><InputDisplay style={{ fontSize: 13 }}>Sep 1</InputDisplay></Field>
              </div>
              <div style={{ background: '#1c1e2b', borderRadius: 8, padding: '12px 13px', marginBottom: 14 }}>
                {d.breakdown.map((b, i) => (
                  <div className="row" key={i} style={{ justifyContent: 'space-between', fontSize: 12.5, color: '#b2b6ca', marginBottom: 6 }}>
                    <span>{b.label}</span><span>{b.amount}</span>
                  </div>
                ))}
                <div className="row" style={{ justifyContent: 'space-between', font: '500 14px Inter', paddingTop: 8, borderTop: '1px solid var(--color-divider)' }}>
                  <span>Total</span><span>{d.total}</span>
                </div>
              </div>
              <Btn to="/request" kind="primary" block>Request to sublet</Btn>
              <Btn to="/messages" kind="secondary" block>Message {d.host.name.split(' ')[0]}</Btn>
              <div style={{ fontSize: 11.5, color: '#75798c', textAlign: 'center', marginTop: 10 }}>You're not charged until {d.host.name.split(' ')[0]} accepts</div>
              <hr className="hr" style={{ marginLeft: -20, marginRight: -20 }} />
              <div className="row" style={{ gap: 11 }}>
                <Avatar size={40} />
                <div>
                  <div style={{ font: '500 13.5px Inter' }}>{d.host.name}</div>
                  <div style={{ fontSize: 11.5, color: '#75798c' }}>{d.host.program}</div>
                </div>
              </div>
              <div className="row" style={{ gap: 12, marginTop: 9, flexWrap: 'wrap' }}>
                <VBadge icon="seal-check">.edu verified</VBadge>
                <VBadge icon="identification-card">ID checked</VBadge>
                <VBadge icon="clock">Replies in ~2h</VBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
