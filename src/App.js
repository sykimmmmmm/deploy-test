import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_TEST_KEY)
  return (
    <div className="App">
      <p>vercel 호스팅사이트에 배포테스트입니다.</p>

      <p>버셀 환경변수 설정 테스트 : {process.env.REACT_APP_TEST_KEY}</p>
    </div>
  );
}

export default App;
