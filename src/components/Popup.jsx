export default function Popup(props) {
  const { children, title, active, onClose } = props;


  return <div className={ ['popup', (active ? '__active' : '')].join() }>
    <div className="popup__inner">
      <button className="popup__close" onClick={ onClose }>x</button>
      {
        title != '' && 
        <div className="popup__heading">
          <h4 className="title">{ title }</h4>
        </div>
      }
      <div className="popup__body">
        { children }
      </div>
    </div>
  </div>
}