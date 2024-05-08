import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name ='yoon'
  const list = ['우유', '딸기','바나나','요거트'];
  return (
    <>  
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hello</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => <li>{item}</li>)
        }
      </ul>
      <img 
        style ={{ width:'200px', height: '200px' }}
        src ='https:/images.unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EC%9D%8C%EC%9C%BC%EB%A1%9C-%EB%8D%AE%EC%9D%B8-%EB%82%98%EB%AC%B4%EA%B0%80-%EA%B0%80%EB%93%9D%ED%95%9C-%EC%88%B2-jcctFkUQcO4'
        alt=''
      />
    </>
  

  );
}

export default AppJSX;
