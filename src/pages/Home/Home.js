import { HomeWrap, HomeText, HomeTitle } from "./Home.styled";

export default function Home() {
    return (
      <HomeWrap>
        <HomeTitle>Ласкаво просимо у довідник контактів!</HomeTitle>
        <HomeText>Щоб отримати доступ до контактної книги, зареєструйтеся або увійдіть до вже наявного облікового запису.</HomeText>
      </HomeWrap>
    );
  }