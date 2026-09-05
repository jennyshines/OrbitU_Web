import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brand, Btn, Field, Icon, PhotoBlock, VBadge } from '../components/ui';
import { MobileFrame, StatusBar, TabBar } from '../components/MobileFrame';

function StepOne({ onNext }) {
  return (
    <MobileFrame>
      <StatusBar />
      <div style={{ padding: '26px 22px 30px' }}>
        <Brand />
        <div className="k" style={{ margin: '26px 0 10px' }}>Step 1 of 2</div>
        <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>Start with your student email</h3>
        <p style={{ fontSize: 13.5, color: '#9397ab', marginBottom: 22 }}>OrbitU is students only. We check the domain against enrolled institutions — Seattle U included.</p>
        <Field label="Student email">
          <div className="input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            jshines@seattleu.edu<Icon name="check-circle" color="#b5abfc" />
          </div>
        </Field>
        <div style={{ background: '#1c1e2b', borderRadius: 8, padding: '12px 13px', margin: '14px 0 20px' }}>
          <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
            <Icon name="buildings" style={{ color: 'var(--color-accent)', fontSize: 16 }} />
            <div style={{ fontSize: 12.5, color: '#b2b6ca' }}>Recognized: <b style={{ fontWeight: 500, color: '#e9e9ed' }}>Seattle University</b>. We'll send a 6-digit code.</div>
          </div>
        </div>
        <Btn kind="primary" block onClick={onNext}>Send code</Btn>
        <div style={{ fontSize: 11.5, color: '#75798c', textAlign: 'center', marginTop: 12 }}>We never show your email to other students.</div>
        <hr className="hr" />
        <div className="row" style={{ gap: 9, fontSize: 12.5, color: '#9397ab' }}>
          <Icon name="shield-check" style={{ color: 'var(--color-accent)', fontSize: 17 }} />Not a student? OrbitU isn't open to the public — that's the point.
        </div>
      </div>
      <TabBar />
    </MobileFrame>
  );
}

function StepTwo({ onBack, onDone }) {
  return (
    <MobileFrame>
      <StatusBar />
      <div style={{ padding: '26px 22px 30px' }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 24 }}>
          <button className="btn btn-icon btn-ghost" onClick={onBack}><Icon name="arrow-left" /></button>
          <div className="bar" style={{ flex: 1, margin: '0 14px' }}><span style={{ width: '70%' }} /></div>
          <span style={{ fontSize: 11.5, color: '#75798c' }}>2 / 2</span>
        </div>
        <div className="k" style={{ marginBottom: 10 }}>Step 2 of 2</div>
        <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>Now your student ID</h3>
        <p style={{ fontSize: 13.5, color: '#9397ab', marginBottom: 20 }}>A photo of your SU ID confirms you're currently enrolled. It's checked once and never shown publicly.</p>
        <PhotoBlock label={<>camera viewfinder<br />ID card centered in frame</>} style={{ height: 170, marginBottom: 8 }} />
        <div className="row" style={{ gap: 8, justifyContent: 'center', marginBottom: 18 }}>
          <VBadge icon="check">Edges detected</VBadge>
          <VBadge icon="check">Name legible</VBadge>
        </div>
        <Btn kind="primary" block onClick={onDone}>Use this photo</Btn>
        <Btn kind="ghost" block>Retake</Btn>
        <div style={{ background: '#1c1e2b', borderRadius: 8, padding: '12px 13px', marginTop: 20 }}>
          <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
            <Icon name="lock-simple" style={{ color: 'var(--color-accent)', fontSize: 16 }} />
            <div style={{ fontSize: 12, color: '#9397ab', lineHeight: 1.6 }}>
              Your ID image is deleted after review. Other students only ever see the badge: <span className="vbadge" style={{ display: 'inline-flex' }}><Icon name="seal-check" />verified</span>
            </div>
          </div>
        </div>
      </div>
      <TabBar />
    </MobileFrame>
  );
}

export default function Verify() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="page" style={{ alignItems: 'center', padding: '40px 0' }}>
      <div className="row" style={{ gap: 22, alignItems: 'flex-start', justifyContent: 'center' }}>
        {step === 1 ? (
          <StepOne onNext={() => setStep(2)} />
        ) : (
          <StepTwo onBack={() => setStep(1)} onDone={() => navigate('/')} />
        )}
      </div>
    </div>
  );
}
