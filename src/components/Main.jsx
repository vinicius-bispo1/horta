import * as S from "./Styled"
import alface from "../assets/alface.jpg"

export default function Main() {
  return (
    <S.Main>
        <S.BoxOne>
            <S.Title>HORTIFRUTI <span>VnW</span></S.Title>
            <h2>Nossos Produtos</h2>
        </S.BoxOne>
        <S.BoxTwo>
            <S.BoxItem>
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                <img src={alface} alt="" />
                
            </S.BoxItem>
        </S.BoxTwo>
    </S.Main>
  )
}
