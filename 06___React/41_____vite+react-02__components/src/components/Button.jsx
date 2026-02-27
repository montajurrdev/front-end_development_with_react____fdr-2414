const Button = ({btnText,className}) => {
  return (
    <button className={`font-medium text-[18px] py-4 px-7 rounded-3xl ${className}`}>{btnText}</button>
  )
}
export default Button