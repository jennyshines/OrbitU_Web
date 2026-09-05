import { Link } from 'react-router-dom';

export function Icon({ name, size, style, color }) {
  return <i className={`ph ph-${name}`} style={{ fontSize: size, color, ...style }} />;
}

export function Tag({ children, kind = 'neutral', style }) {
  return <span className={`tag tag-${kind}`} style={style}>{children}</span>;
}

export function VBadge({ icon, children }) {
  return (
    <span className="vbadge">
      <Icon name={icon} />
      {children}
    </span>
  );
}

export function Match({ fit }) {
  return (
    <span className="match">
      <Icon name="sparkle" />
      {fit}% fit
    </span>
  );
}

export function Btn({ as = 'button', kind = 'primary', icon, iconRight, block, children, to, href, ...rest }) {
  const cls = `btn btn-${kind}${block ? ' btn-block' : ''}`;
  const content = (
    <>
      {icon && <Icon name={icon} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </>
  );
  if (to) return <Link className={cls} to={to} {...rest}>{content}</Link>;
  if (href) return <a className={cls} href={href} {...rest}>{content}</a>;
  const Tag = as;
  return <Tag className={cls} {...rest}>{content}</Tag>;
}

export function IconBtn({ icon, kind = 'ghost', ...rest }) {
  return (
    <button className={`btn btn-icon btn-${kind}`} {...rest}>
      <Icon name={icon} />
    </button>
  );
}

export function PhotoBlock({ label, style, radius }) {
  return (
    <div className="ph-img" style={{ borderRadius: radius, ...style }}>
      {label}
    </div>
  );
}

export function Avatar({ size = 40, label = 'avatar' }) {
  return <PhotoBlock label={label} style={{ width: size, height: size, borderRadius: '50%', flex: 'none', fontSize: 8 }} />;
}

export function Field({ label, children }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

export function InputDisplay({ children, style }) {
  return (
    <div className="input" style={{ display: 'flex', alignItems: 'center', ...style }}>
      {children}
    </div>
  );
}

export function Card({ children, elev = 'sm', style }) {
  return (
    <div className={`card elev-${elev}`} style={style}>
      {children}
    </div>
  );
}

export function Brand() {
  return (
    <Link className="brand" to="/">
      <Icon name="planet" />
      OrbitU
    </Link>
  );
}

export function NavBar({ children }) {
  return <div className="nav2">{children}</div>;
}

export function NavLink({ to, children, current }) {
  return (
    <Link className="nl" to={to} aria-current={current ? 'page' : undefined} style={current ? { color: 'var(--color-accent)' } : undefined}>
      {children}
    </Link>
  );
}
