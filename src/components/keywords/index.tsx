import './styles.scss';

type Props = {
  words: string[];
};

const KeyWords = ({ words }: Props) => {
  return (
    <section className='keywords'>
      {words.map((word, index) => {
        if (index === 0) return (<h1 key={index}>{word}</h1>)
        return (<h2 key={index}>{word}</h2>)
      })}

    </section>
  );
};

export default KeyWords;
