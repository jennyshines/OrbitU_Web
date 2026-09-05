import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, PhotoBlock, Tag } from '../components/ui';
import { MobileFrame, StatusBar } from '../components/MobileFrame';
import { conversations as initialConversations } from '../data/mock';

function Bubble({ msg }) {
  if (msg.day) return <div style={{ textAlign: 'center', fontSize: 10.5, color: '#75798c' }}>{msg.day}</div>;
  if (msg.typing) return <div style={{ alignSelf: 'flex-start', fontSize: 10.5, color: '#75798c' }}>Someone is typing…</div>;
  if (msg.system) {
    return (
      <div style={{ alignSelf: 'center', width: '100%', background: '#1c1e2b', borderRadius: 10, padding: '12px 13px', boxShadow: 'var(--shadow-sm)' }}>
        <div className="row" style={{ gap: 8, marginBottom: 6 }}>
          <Icon name="calendar-check" style={{ color: 'var(--color-accent)', fontSize: 15 }} />
          <div style={{ font: '500 12px Inter' }}>{msg.title}</div>
        </div>
        <div style={{ fontSize: 11.5, color: '#9397ab', marginBottom: 10 }}>{msg.body}</div>
        <Link className="btn btn-primary btn-block" to="/request" style={{ marginTop: 0 }}>{msg.cta}</Link>
      </div>
    );
  }
  const mine = msg.from === 'me';
  return (
    <div style={{
      alignSelf: mine ? 'flex-end' : 'flex-start',
      maxWidth: '78%',
      background: mine ? '#423a6a' : 'var(--color-surface)',
      color: mine ? '#f5f4ff' : 'inherit',
      borderRadius: mine ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
      padding: '10px 12px',
      fontSize: 13,
    }}>
      {msg.text}
    </div>
  );
}

const dealTagKind = { accent: 'accent', neutral: 'neutral' };

export default function Messages() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0].id);
  const [draft, setDraft] = useState('');

  const active = conversations.find((c) => c.id === activeId);

  function send() {
    if (!draft.trim()) return;
    setConversations((cs) => cs.map((c) => (
      c.id === activeId
        ? { ...c, messages: [...c.messages.filter((m) => !m.typing), { from: 'me', text: draft }], lastMessage: draft, time: 'now' }
        : c
    )));
    setDraft('');
  }

  return (
    <div className="page" style={{ padding: '40px 40px' }}>
      <div className="row" style={{ gap: 22, alignItems: 'flex-start' }}>
        <MobileFrame>
          <StatusBar />
          <div style={{ padding: '8px 0 0' }}>
            <div className="row" style={{ gap: 11, padding: '10px 18px 12px', borderBottom: '1px solid var(--color-divider)' }}>
              <button className="btn btn-icon btn-ghost"><Icon name="arrow-left" /></button>
              <PhotoBlock label="av" style={{ width: 34, height: 34, borderRadius: '50%', flex: 'none', fontSize: 7 }} />
              <div style={{ flex: 1 }}>
                <div style={{ font: '500 14px Inter' }}>{active.name}</div>
                <div className="row" style={{ gap: 5, fontSize: 11, color: '#75798c' }}>
                  <Icon name="seal-check" color="var(--color-accent)" />{active.program}
                </div>
              </div>
              <button className="btn btn-icon btn-ghost"><Icon name="info" /></button>
            </div>
            <div style={{ padding: '12px 18px', background: '#1c1e2b', borderBottom: '1px solid var(--color-divider)' }}>
              <div className="row" style={{ gap: 10 }}>
                <PhotoBlock label="photo" style={{ width: 44, height: 34, flex: 'none', fontSize: 7 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ font: '500 12.5px Inter' }}>{active.listing.title}</div>
                  <div style={{ fontSize: 11, color: '#75798c' }}>{active.listing.priceNote}</div>
                </div>
                <Tag kind={dealTagKind[active.dealStateType]}>{active.dealState}</Tag>
              </div>
            </div>
            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 11, minHeight: 400 }}>
              {active.messages.map((m, i) => <Bubble key={i} msg={m} />)}
            </div>
            <div className="row" style={{ gap: 9, padding: '11px 16px', borderTop: '1px solid var(--color-divider)' }}>
              <button className="btn btn-icon btn-ghost"><Icon name="plus" /></button>
              <input
                className="input"
                style={{ flex: 1 }}
                placeholder={`Message ${active.name.split(' ')[0]}…`}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
              />
              <button className="btn btn-icon btn-primary" onClick={send}><Icon name="paper-plane-right" /></button>
            </div>
          </div>
        </MobileFrame>

        <div style={{ width: 430, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="k">Inbox · same rules on desktop</div>
          <div className="scr" style={{ width: 430 }}>
            <div className="row" style={{ gap: 10, padding: '14px 18px', borderBottom: '1px solid var(--color-divider)' }}>
              <span className="brand" style={{ fontSize: 15, margin: 0 }}><Icon name="chat-circle" />Messages</span>
              <Tag kind="neutral" style={{ marginLeft: 'auto' }}>{conversations.length} active</Tag>
            </div>
            <div style={{ padding: '6px 0' }}>
              {conversations.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  style={{
                    padding: '13px 18px',
                    background: c.id === activeId ? '#1c1e2b' : 'transparent',
                    borderLeft: c.id === activeId ? '2px solid var(--color-accent)' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  <div className="row" style={{ gap: 11 }}>
                    <PhotoBlock label="av" style={{ width: 36, height: 36, borderRadius: '50%', flex: 'none', fontSize: 7 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div style={{ font: '500 13.5px Inter' }}>{c.name}</div>
                        <div style={{ fontSize: 11, color: '#75798c' }}>{c.time}</div>
                      </div>
                      <div style={{ fontSize: 12, color: '#b2b6ca', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.lastMessage}</div>
                      <Tag kind={dealTagKind[c.dealStateType]} style={{ marginTop: 5 }}>{c.dealState}</Tag>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#1c1e2b', borderRadius: 10, padding: '14px 15px', width: 430 }}>
            <div className="row" style={{ gap: 9, alignItems: 'flex-start' }}>
              <Icon name="shield-check" style={{ color: 'var(--color-accent)', fontSize: 17, marginTop: 1 }} />
              <div style={{ fontSize: 12, color: '#9397ab', lineHeight: 1.6 }}>
                <b style={{ color: '#e9e9ed', fontWeight: 500 }}>Why deal state lives in the thread:</b> "dates agreed", "request sent" and "signed" are system cards, not claims either side typed. Off-platform payment requests are blocked and flagged.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
