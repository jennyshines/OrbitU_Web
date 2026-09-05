import { Link } from 'react-router-dom';
import { Brand, NavBar, NavLink, Btn, Tag, PhotoBlock, Match } from '../components/ui';
import { listings, stats } from '../data/mock';

export default function Home() {
  return (
    <div className="page">
      <NavBar>
        <Brand />
        <NavLink to="/search">Sublets</NavLink>
        <NavLink to="/list">Sublet yours</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <Btn to="/verify" kind="primary">Verify .edu</Btn>
      </NavBar>

      <div style={{ position: 'relative', padding: '44px 60px 52px', overflow: 'hidden' }}>
        <div className="mapbg" style={{ position: 'absolute', inset: 0, opacity: 0.55 }} />
        <div style={{ position: 'absolute', right: -60, top: -120, width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(150,138,224,.30), transparent 66%)' }} />
        <div style={{ position: 'relative' }}>
          <div className="k" style={{ marginBottom: 16 }}>Jun 15 → Sep 1 · 78 days · Seattle U</div>
          <h1 style={{ fontSize: 60, maxWidth: 800, margin: '0 0 14px', letterSpacing: '-.03em', lineHeight: 1.04 }}>
            Sublet the summer,<br />not the whole lease.
          </h1>
          <p style={{ maxWidth: 480, fontSize: 15.5, color: '#b2b6ca', marginBottom: 30 }}>
            Set your window. We show only the listings that actually cover it — and flag the ones that leave you a gap.
          </p>
          <div style={{ background: 'rgba(35,37,50,.86)', backdropFilter: 'blur(6px)', border: '1px solid var(--color-divider)', borderRadius: 14, padding: '20px 22px', maxWidth: 800, boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
              <div className="k">Your window</div>
              <div style={{ fontSize: 12.5, color: '#b2b6ca' }}>Drag to change · 2 weeks flexible</div>
            </div>
            <div style={{ position: 'relative', height: 44 }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 18, height: 6, borderRadius: 3, background: '#2b2741' }} />
              <div style={{ position: 'absolute', left: '12%', width: '64%', top: 18, height: 6, borderRadius: 3, background: 'var(--color-accent)', boxShadow: '0 0 18px rgba(150,138,224,.7)' }} />
              <div style={{ position: 'absolute', left: '12%', top: 11, width: 20, height: 20, marginLeft: -10, borderRadius: '50%', background: '#e9e9ed', boxShadow: 'var(--shadow-md)' }} />
              <div style={{ position: 'absolute', left: '76%', top: 11, width: 20, height: 20, marginLeft: -10, borderRadius: '50%', background: '#e9e9ed', boxShadow: 'var(--shadow-md)' }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', font: '400 11px Inter', color: '#75798c' }}>
                <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16, alignItems: 'center' }}>
              <Tag kind="accent">158 cover your full window</Tag>
              <Tag kind="neutral">41 partial — gap shown</Tag>
              <Btn to="/search" kind="primary" iconRight="arrow-right" style={{ marginLeft: 'auto' }}>Open results</Btn>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '8px 60px 44px' }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
          <div className="k">Closest to campus this week</div>
          <Btn to="/search" kind="ghost" iconRight="arrow-right">All {stats.liveListings}</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {listings.map((l) => (
            <Link key={l.id} to={`/listing/${l.id}`} className="card elev-sm" style={{ padding: 0, overflow: 'hidden', color: 'inherit' }}>
              <PhotoBlock label="unit photo" style={{ height: 120, borderRadius: 0 }} />
              <div style={{ padding: '13px 14px' }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <div style={{ font: '500 15px Inter' }}>${l.price}<span style={{ fontSize: 11, color: '#9397ab', fontWeight: 400 }}> /mo</span></div>
                  <Match fit={l.fit} />
                </div>
                <div style={{ fontSize: 12.5, color: '#b2b6ca', marginTop: 3 }}>{l.title} · {l.address}</div>
                <div style={{ fontSize: 11.5, color: '#75798c' }}>{l.walk} min walk · {l.moveIn} – {l.moveOut}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
