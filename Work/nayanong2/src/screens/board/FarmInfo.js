import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  startDateStateAtom,
  endDateStateAtom,
  priceRequestDTOAtom,
} from "../../recoil/FarmRecoil";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import FarmData from "../../assets/FarmData.json"; // FarmData.json import
import axios from "axios";

const FarmInfo = () => {
  const [startDate, setStartDate] = useRecoilState(startDateStateAtom); // 시작 날짜 리코일 상태
  const [endDate, setEndDate] = useRecoilState(endDateStateAtom); // 종료 날짜 리코일 상태
  const [priceRequestDTO, setPriceRequestDTO] = useRecoilState(priceRequestDTOAtom); // 전체 요청 데이터
  const [selectedProduct, setSelectedProduct] = useState(""); // 선택된 품목 상태
  const [selectedKind, setSelectedKind] = useState(""); // 선택된 품종 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [priceType, setPriceType] = useState("retail"); // 검색 유형

  const categories = [
    { code: "100", name: "식량작물" },
    { code: "200", name: "채소류" },
    { code: "300", name: "특용작물" },
    { code: "400", name: "과일류" },
  ];

  const regions = [
    { code: "1101", name: "서울" },
    { code: "2300", name: "인천" },
  ];

  const products = Object.keys(FarmData).filter((key) => {
    return FarmData[key]?.some(
      (item) => item.p_itemcategorycode === priceRequestDTO.p_itemcategorycode
    );
  });

  const kinds = selectedProduct
    ? FarmData[selectedProduct]?.map((item) => ({ kindcode: item.p_kindcode, kindname: item.kindname })) || []
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
      console.log("검색 결과:", response.data);
    } catch (err) {
      console.error("요청 실패:", err);
      setError("데이터 요청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    setPriceRequestDTO((prev) => ({
      ...prev,
      p_itemcategorycode: e.target.value,
    }));
  };

  const handleRegionChange = (e) => {
    setPriceRequestDTO((prev) => ({
      ...prev,
      p_countrycode: e.target.value,
    }));
  };

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    setPriceRequestDTO((prev) => ({
      ...prev,
      p_itemcode: FarmData[e.target.value]?.[0]?.p_itemcode || "",
    }));
  };

  const handleKindChange = (e) => {
    setSelectedKind(e.target.value);
    setPriceRequestDTO((prev) => ({
      ...prev,
      p_kindcode: e.target.value,
    }));
  };

  return (
    <div className="FarmInfo_container">
      <h2 className="FarmInfo_title">소매가격 도매가격 정보 검색</h2>
      <div className="FarmInfo_form">
        {/* 날짜 선택 */}
        <div className="FarmInfo_row">
          <label className="FarmInfo_label">기간:</label>
          <div className="FarmInfo_datePicker">
            <DatePicker
              selected={new Date(startDate)}
              onChange={(date) => setStartDate(date.toISOString().split("T")[0])}
              dateFormat="yyyy.MM.dd"
              className="FarmInfo_input"
            />
            <span>~</span>
            <DatePicker
              selected={new Date(endDate)}
              onChange={(date) => setEndDate(date.toISOString().split("T")[0])}
              dateFormat="yyyy.MM.dd"
              className="FarmInfo_input"
            />
          </div>
        </div>

        {/* 분류 */}
        <div className="FarmInfo_row">
          <label className="FarmInfo_label">분류:</label>
          <select onChange={handleCategoryChange} className="FarmInfo_select">
            <option value="">전체</option>
            {categories.map((category) => (
              <option key={category.code} value={category.code}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* 품목 */}
        <div className="FarmInfo_row">
          <label className="FarmInfo_label">품목:</label>
          <select onChange={handleProductChange} className="FarmInfo_select">
            <option value="">전체</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* 품종 */}
        <div className="FarmInfo_row">
          <label className="FarmInfo_label">품종:</label>
          <select onChange={handleKindChange} className="FarmInfo_select">
            <option value="">전체</option>
            {kinds.map((kind, index) => (
              <option key={index} value={kind.kindcode}>
                {kind.kindname}
              </option>
            ))}
          </select>
        </div>

        {/* 지역 */}
        <div className="FarmInfo_row">
          <label className="FarmInfo_label">지역:</label>
          <select onChange={handleRegionChange} className="FarmInfo_select">
            <option value="">전체</option>
            {regions.map((region) => (
              <option key={region.code} value={region.code}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        {/* 검색 버튼 */}
        <div className="FarmInfo_buttons">
          <button
            className="FarmInfo_button"
            onClick={() => setPriceType("retail") || handleSearch()}
          >
            소매가로 검색
          </button>
          <button
            className="FarmInfo_button"
            onClick={() => setPriceType("wholeSale") || handleSearch()}
          >
            도매가로 검색
          </button>
        </div>

        {/* 로딩 상태 및 에러 메시지 */}
        {loading && <p className="FarmInfo_loading">로딩 중...</p>}
        {error && <p className="FarmInfo_error">{error}</p>}
      </div>
    </div>
  );
};

export default FarmInfo;
