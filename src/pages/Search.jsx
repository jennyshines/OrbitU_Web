import { Link } from 'react-router-dom';
import { Brand, NavBar, NavLink, Tag, Match, VBadge, PhotoBlock, Icon, Btn } from '../components/ui';
import { listings, extraPins } from '../data/mock';

export default function Search() {
  return (
    <div className="page">
      <NavBar>
        <Brand />
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, background: 'var(--color-surface)', border: '1px solid var(--color-divider)', borderRadius: 10, padding: '6px 8px 6px 14px', marginRight: 'auto' }}>
          <span style={{ fontSize: 13 }}>Seattle U · 0.8 mi</span>
          <span style={{ width: 1, height: 18, background: 'var(--color-divider)', margin: '0 12px' }} />
          <span style={{ fontSize: 13 }}>Jun 15 – Sep 1</span>
          <span style={{ width: 1, height: 18, background: 'var(--color-divider)', margin: '0 12px' }} />
          <span style={{ fontSize: 13, color: '#9397ab' }}>≤ $1,100</span>
          <button className="btn btn-icon btn-ghost" style={{ marginLeft: 8 }}><Icon name="magnifying-glass" /></button>
        </div>
        <NavLink to="/messages">Messages</NavLink>
        <VBadge icon="seal-check">Jenny · verified</VBadge>
      </NavBar>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: '18px 24px 24px', borderRight: '1px solid var(--color-divider)' }}>
          <div className="row" style={{ gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
            <Tag kind="outline">Covers full window</Tag>
            <Tag kind="neutral">Furnished</Tag>
            <Tag kind="neutral">Landlord approved</Tag>
            <Tag kind="neutral">Private room</Tag>
            <Tag kind="neutral">≤ 10 min walk</Tag>
            <Tag kind="neutral">+ 6 filters</Tag>
          </div>
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 6 }}>
            <div style={{ fontSize: 13, color: '#b2b6ca' }}><b style={{ fontWeight: 500, color: '#e9e9ed' }}>158 sublets</b> cover Jun 15 – Sep 1</div>
            <div className="row" style={{ gap: 6, fontSize: 12.5, color: '#9397ab' }}><Icon name="sparkle" color="var(--color-accent)" />Sorted by fit</div>
          </div>
          <div style={{ background: '#1c1e2b', borderRadius: 8, padding: '12px 14px', margin: '10px 0 6px', boxShadow: 'var(--shadow-sm)' }}>
            <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
              <Icon name="sparkle" style={{ color: 'var(--color-accent)', fontSize: 16, marginTop: 2 }} />
              <div style={{ fontSize: 12.5, color: '#b2b6ca' }}>
                Ranked on your <b style={{ fontWeight: 500, color: '#e9e9ed' }}>Pigott Building</b> class location, a 15-min walk ceiling, and quiet-hours preference. <a href="#matched" style={{ color: '#d2cefd' }}>What we matched on</a>
              </div>
            </div>
          </div>

          {listings.map((l) => (
            <div className="srow" key={l.id}>
              <PhotoBlock label="unit photo" style={{ width: 120, height: 88, flex: 'none' }} />
              <div style={{ flex: 1 }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <div style={{ font: '500 16px Inter' }}>
                    ${l.price} <span style={{ fontSize: 11.5, color: '#9397ab', fontWeight: 400 }}>/ mo{l.priceNote ? ` · ${l.priceNote}` : ''}</span>
                  </div>
                  <Match fit={l.fit} />
                </div>
                <div style={{ fontSize: 13, color: '#b2b6ca', margin: '3px 0 2px' }}>{l.title} · {l.address}</div>
                <div className="row" style={{ gap: 12, fontSize: 11.5, color: '#75798c' }}>
                  <span><Icon name="person-simple-walk" /> {l.walk} min to campus</span>
                  {l.coverage === 'gap' ? (
                    <span style={{ color: '#b5abfc' }}><Icon name="warning" /> Ends {l.moveOut} — {l.gapNote}</span>
                  ) : (
                    <span><Icon name="calendar-check" /> {l.moveIn} – {l.moveOut}</span>
                  )}
                </div>
                <div className="row" style={{ gap: 10, marginTop: 7 }}>
                  {l.pending ? (
                    <VBadge icon="hourglass">Lease clause pending</VBadge>
                  ) : (
                    <VBadge icon="seal-check">Landlord approved</VBadge>
                  )}
                  <VBadge icon={l.roommateNote?.includes('roommate') || l.roommateNote?.includes('match') ? 'users-three' : 'user'}>{l.roommateNote}</VBadge>
                </div>
              </div>
              <Btn to={`/listing/${l.id}`} kind="secondary">View</Btn>
            </div>
          ))}
        </div>

        <div className="mapbg" style={{ minHeight: 640 }}>
          <div style={{ position: 'absolute', left: '52%', top: '44%', width: 340, height: 340, transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(150,138,224,.22), transparent 68%)' }} />
          <div style={{ position: 'absolute', left: '52%', top: '44%', transform: 'translate(-50%,-50%)', width: 74, height: 74, borderRadius: '50%', border: '1px solid rgba(150,138,224,.55)', display: 'grid', placeItems: 'center', textAlign: 'center', font: '500 9.5px Inter', color: '#d2cefd', letterSpacing: '.04em' }}>SEATTLE<br />U</div>
          {listings.map((l, i) => (
            <div key={l.id} className={`pin${i === 0 ? ' pin-a' : ''}`} style={{ left: `${l.pin.left}%`, top: `${l.pin.top}%` }}>${l.price}</div>
          ))}
          {extraPins.map((p, i) => (
            <div key={i} className="pin" style={{ left: `${p.left}%`, top: `${p.top}%` }}>${p.price}</div>
          ))}
          <div style={{ position: 'absolute', left: 20, top: 20, display: 'flex', gap: 8 }}>
            <button className="btn btn-secondary" style={{ background: 'rgba(22,24,38,.85)' }}><Icon name="stack" />Commute layer</button>
            <button className="btn btn-secondary" style={{ background: 'rgba(22,24,38,.85)' }}><Icon name="bus" />Transit</button>
          </div>
          <div style={{ position: 'absolute', right: 20, bottom: 20, background: 'rgba(35,37,50,.94)', borderRadius: 10, padding: '14px 16px', width: 260, boxShadow: 'var(--shadow-md)' }}>
            <div className="k" style={{ marginBottom: 6 }}>Commute layer</div>
            <div style={{ fontSize: 12.5, color: '#b2b6ca', marginBottom: 10 }}>Shaded by walk time to the Pigott Building.</div>
            <div className="row" style={{ gap: 6, fontSize: 11, color: '#75798c' }}>
              <span style={{ width: 34, height: 8, borderRadius: 4, background: '#968ae0' }} />0–8
              <span style={{ width: 34, height: 8, borderRadius: 4, background: '#5d5294' }} />8–15
              <span style={{ width: 34, height: 8, borderRadius: 4, background: '#2b2741' }} />15+ min
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
