import React, { createContext, useContext, useEffect,useState } from "react"

const ThemeContext = createContext()

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    const [isDark, setIsDark] = context.isDark

    const handleTheme = () => {
        setIsDark(prev => !prev)
        console.log(isDark)
    }

    return {
        handleTheme,
        isDark
    }
}

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <ThemeContext.Provider
            value={{ isDark: [isDark, setIsDark] }}
        >
            {children}
        </ThemeContext.Provider>
    )
}