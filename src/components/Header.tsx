import React from 'react'

interface Props {
    totalIncome: number;
}

const Header: React.FC<Props> = ({ totalIncome }) => {
    return (
        <header>
            <h1>Income Tracker</h1>
            <div className="totalIncome">${totalIncome}</div>
        </header>   
    )
}

export default Header
