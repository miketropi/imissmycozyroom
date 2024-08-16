import starIcon from '../images/star-icon.svg';

export default function RatingStart({ number }) {
  return <div className="rating-start">
    {
      number &&
      Array(number).fill(null).map((_, i) => <img key={ i } width={ '16px' } src={ starIcon } alt="#star" />)
    }
  </div>
}