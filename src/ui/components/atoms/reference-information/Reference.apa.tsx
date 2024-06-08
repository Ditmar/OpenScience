import type { IProps } from './types/IProps';
import './styles.scss';

function ReferenceAPA(props: IProps) {
  const { text, color } = props;
  const colorText = color ? `reference-apa__text--${color}` : '';
  const colorLinks = color ? `reference-apa__links--${color}` : '';

  const pnasUrl = 'https://www.pnas.org/doi/10.1073/pnas.2301662120#body-ref-r1';
  const nejmUrl = 'https://www.nejm.org/doi/10.1056/NEJMra2208860';
  const pubmedUrl = 'https://pubmed.ncbi.nlm.nih.gov/36286263/';
  const googleScholarUrl = `https://scholar.google.com/scholar_lookup?title=Monkeypox&author=A.+Gessain&
    author=E.+Nakoune&author=Y.+Yazdanpanah&publication_year=2022&journal=N.+Engl.+J.+Med.&
    pages=1783-1793&doi=10.1056%2FNEJMra2208860&pmid=36286263`;

  return (
    <div className={`reference-apa__text ${colorText}`}>
      <span>{text}</span>
      <div className={`reference-apa__links ${colorLinks}`}>
        <a
          href={pnasUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Go to reference
        </a>
        <a
          href={nejmUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Crossref
        </a>
        <a
          href={pubmedUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          PubMed
        </a>
        <a
          href={googleScholarUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Google Scholar
        </a>
      </div>
    </div>
  );
}

export default ReferenceAPA;
