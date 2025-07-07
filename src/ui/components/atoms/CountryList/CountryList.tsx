import { MenuItem } from '@mui/material';
import type { IProps } from './types/IProps';

export function CountryListDropdown(props: IProps) {
  const { countryList, error, disabled, size } = props;

  // const [highlightIndex, setHighlightIndex] = useState(-1);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (!isOpen) return;

  //     if (event.key === 'ArrowDown') {
  //       setHighlightIndex((prevIndex) => Math.min(prevIndex + 1, countries.length - 1));
  //     } else if (event.key === 'ArrowUp') {
  //       setHighlightIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  //     } else if (event.key === 'Enter' && highlightIndex !== -1) {
  //       onSelectCountry(countries[highlightIndex].code);
  //       onClose();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [isOpen, highlightIndex, countries, onSelectCountry, onClose]);

  return (
    <>
      {countryList.map((item) => (
        <MenuItem key={item.code}>
          <img src={`./images/flags/${item.code}.svg`} alt="" />
          {item.name} ({item.dialCode})
        </MenuItem>
      ))}
    </>
  );
}
