'use client'

import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FormEventHandler } from "react";
import Button from "@/components/button/Button";

const Signup = () => {

  const handleSummit: FormEventHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log("sign in")
  }

  return (
    <div className="flex flex-col justify-center items-center flex-grow w-[1024px] overflow-hidden px-10">
      <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-10 py-5 rounded-[18px] border-4 border-[#2e81ff]">
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[50px] relative overflow-hidden">
          <p className="absolute left-0 top-2.5 text-2xl text-left text-black">로그인</p>
        </div>
        <form onSubmit={handleSummit} className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-10 border-t-0 border-r-0 border-b border-l-0 border-[#2e9bff]">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5 px-[11px]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-0.5">
                아이디(이메일)
              </div>
              <div className="flex justify-start items-start flex-grow h-[50px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
                <input name="bdsid" type="email" className="self-stretch flex-grow px-2 w-full h-10 relative overflow-hidden rounded-[14px] border-2 border-[#2e9bff]" />
              </div>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-0.5">
                비밀번호
              </div>
              <div className="flex justify-start items-start flex-grow h-[50px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
                <input name="bdspassword" type="password" className="self-stretch flex-grow px-2 w-full h-10 relative overflow-hidden rounded-[14px] border-2 border-[#2e9bff]" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[100px] relative overflow-hidden flex justify-center items-center">
            <Button text="로그인" />
          </div>
        </form>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-10 py-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#2e9bff]">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5 px-[11px]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-0.5">
                소셜 로그인
              </div>
              <div className="flex justify-start items-start flex-grow h-[70px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[60px] flex justify-center items-center rounded-[56px] bg-[#fff500] border-4 border-[#ebe218]">
                  <RiKakaoTalkFill className="text-4xl" />
                </div>
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[60px] flex justify-center items-center rounded-[36px] bg-[#00ff1a] border-4 border-[#00e031]">
                  <SiNaver className="text-white text-2xl" />
                </div>
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[60px] flex justify-center items-center rounded-[36px] bg-white border-4 border-gray-300">
                  <FcGoogle className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-10 border-t-0 border-r-0 border-b border-l-0 border-[#2e9bff]">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5 px-[11px] border-t-0 border-r border-b-0 border-l-0 border-[#2e81ff]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px]">
              <div className="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 py-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-black">
                  아직 계정이 없으신가요?
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#2e68ff]">
                  회원가입
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5 px-[11px]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px]">
              <div className="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 py-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-black">
                  비밀번호를 잊으셨나요?
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] relative overflow-hidden gap-2.5 px-2.5 py-[5px]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#2e81ff]">
                  비밀번호 찾기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Signup;