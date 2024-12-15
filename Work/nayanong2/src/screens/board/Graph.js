import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useRecoilValue } from "recoil";
import { searchResultsAtom } from "../../recoil/FarmRecoil";

const Graph = () => {
    const searchResults = useRecoilValue(searchResultsAtom);

    // 데이터를 변환하여 X축: 날짜, Y축: 가격
    const formattedData = searchResults
        .filter((item) => item.countyname === "평균")
        .map((item) => ({
            date: item.regday,
            price: parseFloat(item.price) * 1000, // 원 단위로 변환
        }));

    // 평균 가격 계산
    const averagePrice =
        formattedData.reduce((sum, item) => sum + item.price, 0) /
        (formattedData.length || 1);

    // Y축 최소/최대 범위 설정
    const minY = Math.floor(averagePrice - 2000);
    const maxY = Math.ceil(averagePrice + 2000);

    return (
        <div className="graph-container">
            <h3>평균 가격 선 그래프</h3>
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
                * 날짜별 그래프에 표시되는 금액은 천 단위로 표시됩니다.
            </p>
            {formattedData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={formattedData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            stroke="#5a5a5a"
                            label={{
                                value: "날짜",
                                position: "insideBottom",
                                dy: 20,
                                fontSize: 14,
                                fill: "#5a5a5a",
                            }}
                        />
                        <YAxis
                            domain={[minY, maxY]}
                            tickFormatter={(value) => `${value.toLocaleString()}원`}
                            ticks={[minY, Math.round(averagePrice), maxY]}
                            tick={{ fontSize: 12 }}
                            stroke="#5a5a5a"
                            label={{
                                value: "가격 (원)",
                                angle: -90,
                                position: "insideLeft",
                                dx: -10,
                                fontSize: 14,
                                fill: "#5a5a5a",
                            }}
                        />
                        {/* 툴팁 */}
                        <Tooltip
                            formatter={(value) => [`${Number(value).toLocaleString()}원`, "가격"]} // '가격'으로 레이블 변경
                            labelFormatter={(label) => `날짜: ${label}`}
                            contentStyle={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #d4a373",
                                borderRadius: "5px",
                                fontSize: "14px",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#d4a373"
                            strokeWidth={2}
                            dot={{ stroke: "#d4a373", strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <p>그래프에 표시할 데이터가 없습니다.</p>
            )}
        </div>
    );

};

export default Graph;
