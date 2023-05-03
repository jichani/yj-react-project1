import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";





function App() {
  return (
    <>
      {/* css 리셋 */}
      <GlobalStyles/>

      {/* 헤더 */}
      <Header></Header>
      
      {/* 메인이미지 */}
      <MainImage></MainImage>
    </>
      
  );
}

export default App;