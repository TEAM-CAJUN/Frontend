export interface ItemProps {
  name: string,
  address: string,
  isDeal: number,
  isInsurance: number,
  isLoan: number,
  isPaper: number,
  isBpaper: number,
  isPhoto?: number,
}

interface bannerProps {
  name: string,
  status: number,
}

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

const StatusBanner = ({ name, status }: { name: string, status: number }) => {
  return (
    <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-3 py-0.5 rounded-xl ${theme[status]?.bg || "bg-black-100"}`}>
      <p className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-center ${theme[status]?.text || "text-black-800"}`}>
        {name}
      </p>
    </div>
  )
}

const ListItem = (props: ItemProps) => {
  const bannerList = [{ name: '등기부등본', status: props.isPaper }, { name: '건축물대장', status: props.isBpaper }, { name: '전세대출 가능', status: props.isLoan }, { name: '보증보험 가입', status: props.isInsurance },]
  return (
    <div
      className=" box-content flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[150px] relative overflow-hidden gap-2.5 p-[15px] rounded-[15px] border-2 border-blue-400 hover:border-blue-500 shadow-md hover:shadow-lg"
    >
      <div className="flex-grow-0 flex-shrink-0 w-[120px] h-[120px] relative overflow-hidden bg-[#d9d9d9]">
        <p className="absolute left-12 top-[52px] text-xs font-medium text-left text-black">사진</p>
      </div>
      <div className="flex flex-col justify-center items-start self-stretch flex-grow relative overflow-hidden gap-2.5 py-[5px]">
        <div className="self-stretch flex-grow relative overflow-hidden">
          주소 : 서울특별시 동대문구 망우로18가길 82-39
        </div>
        <div className="flex justify-start items-center h-fit flex-grow overflow-hidden gap-2.5 p-2.5">
          {bannerList.map((el, i) => <StatusBanner key={i} {...el} />)}
        </div>
      </div>
    </div>
  )
}

export default ListItem;