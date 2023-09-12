"use client"

interface itemProps {
    name: string,
    comp: string[],
}

const HeaderButton = ({ item }: { item: itemProps }) => {
    return (
        <div className="w-36 h-full flex flex-col overflow-visible z-50 hover:bg-blue-700 hover:text-white">
            <div className="w-36 h-[50px] flex justify-center items-center flex-shrink-0">
                {item.name}
            </div>
            <div className="w-36 h-[100px] flex flex-col flex-shrink-0 justify-start">
                {item.comp.map((el, i)=>(
                    <div key={i} className="w-36 h-fit text-white hover:bg-black/20"> - {el}</div>
                ))}
            </div>
        </div>
    )
}

const UserButton = () => {
    return (
        <div className="w-48 h-fit my-auto border-4 border-[#00000040] rounded-md flex justify-center items-center">
            Sign Up
        </div>
    )
}

const Header = () => {
    const btnList: itemProps[] = [{ name: '조회', comp: ['안심매물조회', '주변시세조회'] }, { name: '정보제공', comp: ['전세계약 안심정보', '공지사항'] }];

    return (
        <header className="absolute w-screen h-[50px] hover:h-[150px] bg-white border-b-2 border-blue-400 flex flex-col flex-shrink-0 justify-center items-center overflow-hidden box-content z-50 transition-all">
            <div className="w-full max-w-5xl h-[50px] flex flex-row flex-shrink-0 overflow-visible">
                <div id="logo" className="w-24 h-full bg-blue-600" />
                <div id="btnSection" className="w-full h-full bg-white flex">
                    {btnList.map((el, i) => <HeaderButton key={i} item={el}></HeaderButton>)}
                </div>
                <UserButton />
            </div>
            <div id="componentSection" className="w-full h-[100px] bg-blue-600"/>
        </header>
    )
}

export default Header;