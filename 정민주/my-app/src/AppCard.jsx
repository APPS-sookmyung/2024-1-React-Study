import React from 'react';

export default function AppCard() {
    return (
        <div>
            <Card>
                <p>바보</p>
            </Card>
            <Card>
                <h1>똥개</h1>
                <p>말미잘</p>
            </Card>
        </div>
    );
}
function Card({children}){
    return(
        <div style={{
            backgroundColor:"black",
            color:'white',
            width:'15vw',
            height:'30vh',
            marginLeft:'1vw',
            marginTop:'2vh',
            paddingTop: '0.5vh',
            borderRadius:'20px',
            textAlign:'center',
        }}>
            {children}
        </div>
    )
}

