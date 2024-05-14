import React,{useState, useReducer} from 'react';
import personReducer from './reducer/person-reducer'

export default function AppMentors() {
    //객체를 새롭게 만들어나갈 함수 로직을 전달 & 초기값 전달
    //상태에 접근할 수 있는 person
    //Reducer을 호출할 수 있는 dispatch -> 원하는 action 명령 가능
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    const handleUpdate = ()=>{
        const prev = prompt("누구의 이름을 바꾸고 싶은가요?")
        const current = prompt("이름을 무엇으로 바꾸고 싶은가요?")
        //dispatch안의 인자들은 모두 personReducer의 action에 해당한다
        dispatch({type:'updated', prev, current})
    }
    const handleAdd = ()=>{
        const name = prompt("새로운 멘토 이름")
        const title = prompt("새로운 멘토 타이틀")
        dispatch({type:'added', name, title})
    }
    const handleDelete = ()=>{
        const name = prompt("삭제할 멘토")
        dispatch({type:'deleted', name})
    }
    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor,index)=>
                    <li key={index}>{mentor.name} ({mentor.title})</li>
                )}
            </ul>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
}
const initialPerson = {
    name:'엘리',
    title:'개발자',
    mentors:[{
        name: '밥',
        title: '시니어개발자'
    }, {
        name: '제임스',
        title: '시니어 개발자'
    }]
}

