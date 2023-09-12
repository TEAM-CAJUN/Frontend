const theme = [
  {
      bg: "bg-blue-100",
      text: "text-blue-800",
  },
  {
      bg: "bg-red-100",
      text: "text-red-800",
  },
  {
      bg: "bg-green-100",
      text: "text-green-800",
  },
];

const StatusBanner = ({name, status} : {name:string, status: number}) => {
  return(
      <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-3 py-0.5 rounded-xl ${theme[status]?.bg || "bg-black-100"}`}>
          <p className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-center ${theme[status]?.text || "text-black-800"}`}>
              {name}
          </p>
      </div>
  )
}

export default StatusBanner;