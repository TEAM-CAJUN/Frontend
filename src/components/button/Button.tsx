interface props {
  text: string,
  onClick?: Function,
}

const Button = ({ text, onClick }: props) => {
  return (
    <button
      onClick={() => { onClick != undefined && onClick() }}
      className="flex justify-center items-center h-[39px] overflow-hidden px-[11px] py-[7px] rounded bg-indigo-600 hover:bg-indigo-500 text-white"
      style={{
        boxShadow:
          "0px 1px 2px 0 rgba(0,0,0,0.05), 0px 0px 0px 2px #fff, 0px 0px 0px 4px #6366f1",
      }}
    >
      {text}
    </button>
  )
}

export default Button;