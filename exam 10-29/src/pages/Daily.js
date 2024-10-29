import { useEffect, useState } from "react";

import { getDaily } from "../api/movie";

import { StyledDiv } from "../components/StyledDiv";

import Header from "../components/Header";

const Daily = () => {
  const yesterday = (date) => {
    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate() - 1).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const [date, setDate] = useState(yesterday(new Date()));

  const [list, setList] = useState([]);

  const dailyAPI = async (date) => {
    const response = await getDaily(date.replace(/-/g, ""));

    setList(response.data.boxOfficeResult.dailyBoxOfficeList);
  };

  useEffect(() => {
    dailyAPI(date);
  }, [date]);

  return (
    <StyledDiv>
      <Header />

      <h1>일별 박스오피스</h1>

      <p>이전 날짜의 박스오피스 기록만 조회할 수 있습니다.</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>순위</th>

            <th>영화제목</th>

            <th>개봉날짜</th>
          </tr>
        </thead>

        <tbody>
          {list?.map((movie) => (
            <tr key={movie.rnum}>
              <td>{movie.rank}</td>

              <td>{movie.movieNm}</td>

              <td>{movie.openDt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledDiv>
  );
};

export default Daily;
