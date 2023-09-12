'use client'

import ListItem, { ItemProps } from "@/components/list/ListItem";
import { FormEventHandler, useRef, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface selectItems {
  name: string,
  value: string,
}

const Home = () => {
  const rows = 1;
  const MAX_PAGE = useRef<number>(3);
  const [page, setPage] = useState<number>(1);

  const itemList: ItemProps[] = [
    {
      name: '기차옆집',
      address: '서울특별시 동대문구 휘경동 88-1',
      isLoan: 1,
      isDeal: 0,
      isPaper: 2,
      isBpaper: 0,
      isInsurance: 1,
    },
    {
      name: '학교근처 개꿀',
      address: '서울특별시 동대문구 휘경동 729-3',
      isLoan: 0,
      isDeal: 2,
      isPaper: 1,
      isBpaper: 2,
      isInsurance: 1,
    },
  ];

  const showList = itemList.slice(page * rows - rows, page * rows);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log(data.get("gu"), data.get("addr"));
  }

  const guList: selectItems[] = [{ name: "동대문구", value: "동대문구" }, { name: "강남구", value: "강남구" }, { name: "서초구", value: "서초구" }];
  const dongList: selectItems[] = [{ name: "가리봉동", value: "가리봉동" }, { name: "휘경동", value: "휘경동" }, { name: "회기동", value: "회기동" }];

  return (
    <main className='w-screen h-full flex flex-shrink-0 justify-center'>
      <div className="flex flex-col justify-start items-start flex-grow w-full max-w-5xl overflow-hidden px-10">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 py-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-black">안심 매물 조회</p>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-10 py-2.5 rounded-3xl border-[3px] border-[#2e81ff]">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[22px]">
              <label className="self-stretch flex-grow-0 flex-shrink-0 h-5 relative overflow-hidden">
                주소 검색
              </label>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[50px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
                <select name="gu" className="self-stretch flex-grow relative overflow-hidden rounded-[14px] border-2 border-[#2e9bff]" defaultValue={"동대문구"}>
                  {guList.map((el, i) => <option key={i} value={el.value}>{el.name}</option>)}
                </select>
                <select name="dong" className="self-stretch flex-grow relative overflow-hidden rounded-[14px] border-2 border-[#2e9bff]" defaultValue={"법정동"}>
                  {dongList.map((el, i) => <option key={i} value={el.value}>{el.name}</option>)}
                </select>
                <input name="addr" className="self-stretch flex-grow w-[226.67px] h-10 relative overflow-hidden rounded-[14px] border-2 border-[#2e9bff] px-2" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[100px] relative overflow-hidden flex justify-center items-center">
            <button
              className="flex justify-center items-center h-[39px] overflow-hidden px-[11px] py-[7px] rounded bg-indigo-600 hover:bg-indigo-500 text-white"
              style={{
                boxShadow:
                  "0px 1px 2px 0 rgba(0,0,0,0.05), 0px 0px 0px 2px #fff, 0px 0px 0px 4px #6366f1",
              }}
            >
              검색
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-2.5 py-2.5">
          {showList.map((el, i) => <ListItem key={i} {...el} />)}
          <div className="flex justify-center items-center gap-2.5 px-4 py-2">
            <AiFillCaretLeft onClick={() => { if (page > 1) setPage(page - 1) }} className={`${page == 1 ? "text-gray-400" : "text-black cursor-pointer"}`} />
            {[page - 2, page - 1, page, page + 1, page + 2].filter(el => el > 0 && el <= MAX_PAGE.current).map((el, i) => (
              <div key={i} onClick={() => { setPage(el) }} className={`${page == el ? "font-bold" : "font-baseline"}`}>{el}</div>
            ))}
            <AiFillCaretRight onClick={() => { if (page < MAX_PAGE.current) setPage(page + 1) }} className={`${page == MAX_PAGE.current ? "text-gray-400" : "text-black cursor-pointer"}`} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;