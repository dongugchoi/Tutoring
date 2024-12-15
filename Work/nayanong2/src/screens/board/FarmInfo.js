import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  startDateStateAtom,
  endDateStateAtom,
  priceRequestDTOAtom,
  searchResultsAtom,
  titleAtom,
} from "../../recoil/FarmRecoil";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import FarmData from "../../assets/FarmData.json";
import axios from "axios";
import "../../css/FarmInfo.css";
import Graph from "./Graph";
import { ko } from "date-fns/locale";


const FarmInfo = () => {
  const [startDate, setStartDate] = useRecoilState(startDateStateAtom);
  const [endDate, setEndDate] = useRecoilState(endDateStateAtom);
  const [priceRequestDTO, setPriceRequestDTO] = useRecoilState(priceRequestDTOAtom);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsAtom); // Recoil 상태로 변경
  const [title, setTitle] = useRecoilState(titleAtom); // Recoil 상태로 변경
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedKind, setSelectedKind] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priceType, setPriceType] = useState("retail");

  const categories = [
    { code: "100", name: "식량작물" },
    { code: "200", name: "채소류" },
    { code: "300", name: "특용작물" },
    { code: "400", name: "과일류" },
  ];

  const regions = [
    { code: "1101", name: "서울" },
    { code: "2100", name: "부산" },
    { code: "2200", name: "대구" },
    { code: "2300", name: "인천" },
    { code: "2401", name: "광주" },
    { code: "2501", name: "대전" },
    { code: "2601", name: "울산" },
    { code: "2701", name: "세종" },
    { code: "3101", name: "경기" },
    { code: "3201", name: "강원" },
    { code: "3301", name: "충북" },
    { code: "3401", name: "충남" },
    { code: "3501", name: "전북" },
    { code: "3601", name: "전남" },
    { code: "3701", name: "경북" },
    { code: "3801", name: "경남" },
    { code: "3901", name: "제주" }
  ];

  const products = Object.keys(FarmData).filter((key) => {
    return FarmData[key]?.some(
      (item) => item.p_itemcategorycode === priceRequestDTO.p_itemcategorycode
    );
  });

  const kinds = selectedProduct
    ? FarmData[selectedProduct]?.map((item) => ({
        kindcode: item.p_kindcode,
        kindname: item.kindname,
      })) || []
    : [];

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    

    const apiUrl =
      priceType === "retail"
        ? "http://localhost:7070/retail/price/all"
        : "http://localhost:7070/wholeSale/price/all";

    const requestData = {
      ...priceRequestDTO,
      p_startday: startDate,
      p_endday: endDate,
    };

    try {
      const response = await axios.post(apiUrl, requestData);
      const filteredResults = response.data.filter((item) => item.countyname === "평균");
      setSearchResults(filteredResults);

      // 제목 업데이트
      const regionName =
        regions.find((region) => region.code === priceRequestDTO.p_countrycode)?.name || "지역 없음";
      const productName = FarmData[selectedProduct]?.[0]?.itemname || selectedProduct || "품목 없음";
      const kindName =
        FarmData[selectedProduct]?.find((item) => item.p_kindcode === selectedKind)?.kindname ||
        selectedKind ||
        "품종 없음";

      setTitle(`${regionName} ${productName}의 ${kindName} 평균 가격`);
    } catch (err) {
      setError("데이터 요청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="farmInfo-container">
      <h2>소매 · 도매 날짜별 평균가격</h2>
      <div className="farmInfo-datePicker-container">
        <label>기간:</label>
        <DatePicker
          selected={new Date(startDate)}
          onChange={(date) => setStartDate(date.toISOString().split("T")[0])}
          dateFormat="yyyy.MM.dd"
          locale={ko} // 한글 로케일 설정
          placeholderText="날짜를 선택해주세요" // 입력창 플레이스홀더 한글
        />
        <span>~</span>
        <DatePicker
          selected={new Date(endDate)}
          onChange={(date) => setEndDate(date.toISOString().split("T")[0])}
          dateFormat="yyyy.MM.dd"
          locale={ko} // 한글 로케일 설정
          placeholderText="날짜를 선택해주세요" // 입력창 플레이스홀더 한글
        />
      </div>

      <div className="farmInfo-dropdown-container">
        <div>
          <label>분류:</label>
          <select onChange={(e) => setPriceRequestDTO({ ...priceRequestDTO, p_itemcategorycode: e.target.value })}>
            <option value="">전체</option>
            {categories.map((category) => (
              <option key={category.code} value={category.code}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>품목:</label>
          <select onChange={(e) => setSelectedProduct(e.target.value)}>
            <option value="">전체</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>품종:</label>
          <select onChange={(e) => setSelectedKind(e.target.value)}>
            <option value="">전체</option>
            {kinds.map((kind) => (
              <option key={kind.kindcode} value={kind.kindcode}>
                {kind.kindname}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>지역:</label>
          <select onChange={(e) => setPriceRequestDTO({ ...priceRequestDTO, p_countrycode: e.target.value })}>
            <option value="">전체</option>
            {regions.map((region) => (
              <option key={region.code} value={region.code}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="farmInfo-button-container">
        <button onClick={() => setPriceType("retail") || handleSearch()}>소매가로 검색</button>
        <button onClick={() => setPriceType("wholeSale") || handleSearch()}>도매가로 검색</button>
      </div>

      <div className="farmInfo-result-container">
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <h3>{title}</h3>
            <ul>
              {searchResults.map((item, index) => (
                <li key={index}>
                  날짜: {item.regday}, 평균 가격: {item.price}원
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Graph 컴포넌트 */}
      <Graph />
    </div>
  );
};

export default FarmInfo;
