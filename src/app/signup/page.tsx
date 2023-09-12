'use client'

import Button from "@/components/button/Button";
import { FormEventHandler } from "react";

interface inputProps {
  label: string,
  name: string,
  type?: string | "text",
}

const InputBlock = ({ label, name, type }: inputProps) => {
  return (
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px]">
      <label htmlFor={name} className="flex flex-shrink-0 justify-center items-center w-24 h-full">
        {label}
      </label>
      <div className="flex justify-start items-start flex-grow h-[50px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
        <input id={name} name={name} type={type} className="self-stretch flex-grow w-full h-10 relative overflow-hidden rounded-[14px] border-2 border-[#2e9bff] px-2" />
      </div>
    </div>
  )
}

const Signup = () => {

  const infoList : inputProps[] = [{
    label:"아이디(이메일)",
    name:"bdsemail",
  }, {
    label:"비밀번호",
    name:"bdspassword",
    type:"password"
  },{
    label:"비밀번호 확인",
    name:"bdscheck",
    type:"password"
  },{
    label:"이름",
    name:"bdsname",
  },{
    label:"생년월일",
    name:"bdsbirth",
    type:"date",
  },{
    label:"연락처",
    name:"bdsphone",
  },];

  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log("Sign Up");
  }

  return (
    <div className="flex flex-col justify-center items-center flex-grow w-[1024px] overflow-hidden px-5">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-10 py-5 rounded-[18px] border-4 border-[#2e81ff]">
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[50px] relative overflow-hidden text-2xl">
          회원가입
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-10 py-5 border-t-0 border-r-0 border-b border-l-0 border-[#2e9bff]">
          {infoList.map((el,i)=>(
            <InputBlock key={i} {...el}/>
          ))}
        </div>
        <div className="w-full h-fit py-2 flex flex-shrink-0 justify-center items-center">
          <Button text={"회원가입"} />
        </div>
      </form>
    </div>
  )
};

export default Signup;