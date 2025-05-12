import '../../../styles/main.scss';

const tokens = [
  'none',
  'xsm',
  'sm',
  'sm-2x',
  'sm-3x',
  'sm-4x',
  'md',
  'md-2x',
  'md-3x',
  'md-lg',
  'md-lg-2x',
  'md-lg-3x',
  'infinity',
];

export default {
  title: 'tokens/Border Radius',
};

export function Demo() {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', maxWidth: 360, paddingLeft: '65px' }}
    >
      {tokens.map((token) => (
        <div
          key={token}
          className={`radius-${token}`}
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#7A44FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
          }}
        >
          {token}
        </div>
      ))}
    </div>
  );
}
