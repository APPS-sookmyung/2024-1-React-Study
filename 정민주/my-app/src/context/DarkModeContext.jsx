import { createContext, useState } from "react";

//데이터를 콘텍스트에 담기
//context를 만든다!
export const DarkModeContext = createContext()

//우산을 만드는 과정 - 컴포넌트임
//밑에 있는 컴포넌트들을 감싸는 부모 우산 컴포넌트
//UI적으로 무언가를 하지는 않지만, children을 감싸는 umbrella임
export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode((mode)=> !mode)
    return(  
        //자식 컴포넌트와 공유하고 싶은 놈들을 value에 객체로 넣어준다.
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}