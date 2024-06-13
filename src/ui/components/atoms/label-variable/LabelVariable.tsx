import type { IProps } from './types/IProps';
import './styles.scss';

function LabelVarible(props: IProps) {
  const { textbar1, text1, textbar2, text2 } = props;

  return (
    <div>
      <span className='vertical-bar'>
        {textbar1}
      </span>
      <span className='text'>
        {text1}
      </span>
      <span className='vertical-bar'>
        {textbar2}
      </span>
      <span className='text'>
        {text2}
      </span>
    </div>
  );
}

export default LabelVarible;
