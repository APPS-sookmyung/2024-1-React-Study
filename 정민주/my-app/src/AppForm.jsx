import React,{useState} from 'react';

export default function AppForm() {
    const [form, setForm] = useState({name: '', email: ''});
    const handleSubmit = (e)=>{
        //이거 없으면 자동으로 페이지가 refresh된다.
        e.preventDefault();
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }
    return (
        //uncontrolled component
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름: </label>    
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange}/>

            <label htmlFor="email">이메일: </label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    );
}