import React from 'react';

export default function CreditCard() {
    return (
        <div>
            <Card 
                img="/img/assignmentImg/ShinhanDeepDream.png"
                name="Deep Dream">
                <p>Card of Your Deep Dreams!</p>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                </ul>
            </Card>
            <Card 
                img="/img/assignmentImg/ShinhanMain.png"
                name="Main">
                <h3>Main Means Steady</h3>
                <p>Strong, Steady, Lasting, Trustworthy.</p>
            </Card>
            <Card 
                img="/img/assignmentImg/ShinhanTheBestPlus.png"
                name="The Best +">
                <p>Best of the Best</p>
                <p style={{fontSize:'10px'}}>Very pricy</p>
            </Card>
        </div>
    );
}

function Card({img, name, children}){
    return(
        <div style={{
            backgroundColor:'grey',
            display:'inline-block',
            borderRadius: '20px',
            textAlign:'center',
            margin:'10px 10px 10px 10px'
        }}>
            <img src={img} width="300px" height="auto" alt="card"/>
            <h1>{name}</h1>
            {children}
        </div>        
    )
}