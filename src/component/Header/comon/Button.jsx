
const Button = ({text,img}) => {
  return (
    <div>
      <button>
        <i className={img}></i>
        {/* <img src={img} alt="" /> */}
         {text}
      </button>
    </div>
  )
}

export default Button