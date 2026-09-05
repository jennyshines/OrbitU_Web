import { Icon } from './ui';

export function StatusBar() {
  return (
    <div className="mstat">
      <span>9:41</span>
      <span>
        <Icon name="cell-signal-full" />
        <Icon name="wifi-high" />
        <Icon name="battery-full" />
      </span>
    </div>
  );
}

export function TabBar({ active = 'browse' }) {
  const tabs = [
    { key: 'browse', icon: 'magnifying-glass', label: 'Browse' },
    { key: 'saved', icon: 'heart', label: 'Saved' },
    { key: 'messages', icon: 'chat-circle', label: 'Messages' },
    { key: 'you', icon: 'user-circle', label: 'You' },
  ];
  return (
    <div className="tabbar">
      {tabs.map((t) => (
        <div key={t.key} className={t.key === active ? 'active' : ''}>
          <Icon name={t.icon} />
          {t.label}
        </div>
      ))}
    </div>
  );
}

export function MobileFrame({ children }) {
  return <div className="mob">{children}</div>;
}
