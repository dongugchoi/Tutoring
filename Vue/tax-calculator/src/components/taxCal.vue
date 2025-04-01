<template>
  <v-app>
    <v-container class="d-flex justify-center mt-10" style="width: 1000px; height: 842px;">
      <div class="d-flex flex-column" style="height: 100%;">
        <div class="d-flex justify-center">
          <h1 class="d-flex justify-center">고용증대 세액계산</h1>
        </div>
        <div @click="onClickShowState" class="d-flex justify-center align-center" style="width: 100%; cursor: pointer;">&nbsp;</div>
        <div class="d-flex justify-spacebetween">
          <v-spacer></v-spacer>
          <button v-if="showState" @click="addRow()" class="d-flex justify-end align-center mr-5 mb-5">+행추가</button>
          <input
            v-if="showState"
            v-model="deleteIndex"
            type="number"
            min="0"
            :max="rows.length - 1"
            placeholder="삭제번호입력"
            class="mb-5"
            @keyup.enter="deleteRowByIndex"
            style="width: 20%; border: 1px solid #ccc; text-align: center; margin-right: 8px;"
          />
          <button v-if="showState" @click="deleteRowByIndex" class="mb-5" style="cursor: pointer; color: red;">
            삭제
          </button>
        </div>
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <label for="year" class="d-flex mt-1 mr-1" style="font-weight: 600;">연도</label>
            <input type="number" name="year" v-model.number="year" class="d-flex mb-1 pl-2" style="border: 1px solid black; border-radius:5px;"/>
          </div>
          <input v-if="showState" type="file" class="mb-1" style="cursor: pointer;" @change="handleFileUpload" />
        </div>
        <div class="d-flex flex-column" style="width: 100%;">
          <table class="d-flex flex-column" style="width: 100%;  table-layout: fixed;">
            <thead class="d-flex flex-row" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); border: 2px solid black; border-bottom: 1px solid black;">
              <tr 
                v-for="(item, idx) in header" :key="idx"
                class="d-flex justify-center"
                style="width: 100%;  padding: 12px; text-align: center;">
                <th>{{ item.name }}</th>
              </tr>
            </thead>
            <tbody class="d-flex flex-column" style="width: 100%; border: 1px solid black; border-top: none; ">
              <tr v-for="(row, index) in rows" :key="index" class="d-flex justify-center " style="width: 100%;">
                <th class="d-flex" style="width: 100%;">
                  <span v-if="showState" style="width: 50%; border: 1px solid black;" class="d-flex align-center justify-center">{{ index+1}}</span>
                  <input type="text" class="d-flex row-item" v-model="row.name" />
                </th>
                <th class="d-flex" style="width: 100%;">
                  <input type="text" class="d-flex row-item" v-model="row.gender" />
                </th>
                <th class="d-flex" style="width: 100%;">
                  <input type="text" class="d-flex row-item" v-model="row.birth" />
                </th>
                <th class="d-flex" style="width: 100%;">
                  <input type="text" class="d-flex row-item" v-model="row.join" />
                </th>
                <th class="d-flex" style="width: 100%;">
                  <input type="text" class="d-flex row-item" v-model="row.quit" />
                </th>
                <th class="d-flex" style="width: 100%;">
                  <div type="text" class="d-flex justify-center align-center row-item">
                    {{ calculateMonths(row) === 0 ? '' : calculateMonths(row) + ' 개월' }}
                  </div>
                </th>
                <th class="d-flex" style="width: 100%;">
                  <div type="text" class="d-flex justify-center align-center row-item">
                    {{ calculateMonthsIfUnder34(row) === 0 ? '' : calculateMonthsIfUnder34(row) + ' 개월' }}
                  </div>
                </th>
                <th 
                  class="d-flex" style="width: 100%;">
                  <div type="text" class="d-flex justify-center align-center row-item" style="">
                    {{ calculateMonthsIfOver60(row) === 0 ? '' : calculateMonthsIfOver60(row) + ' 개월' }}

                  </div>
                </th>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-end" style="width: 100%;">
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">상시월수합계</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">{{ getTotalMonths('total') }}</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">{{ getTotalMonths('under34') }}</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; font-weight: 600;">{{ getTotalMonths('over60') }}</div>
          </div>
          <div class="d-flex justify-end" style="width: 100%;">
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">인원</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">전체</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">청년</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none;  font-weight: 600;">청년외</div>
          </div>
          <div class="d-flex justify-end" style="width: 100%;">
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">인원합계</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">{{ getRoundedDownYears('total') }}</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none; border-right: none; font-weight: 600;">{{ getRoundedDownYouthTotalYears() }}</div>
            <div class="d-flex justify-center align-center" style="background: linear-gradient(to bottom right, #ffffff, #f0f0f0); height: 40px; width: 12.5%; border-top: none;  font-weight: 600;">{{ getRoundedDownYears('total') - getRoundedDownYouthTotalYears() }}</div>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  name: 'App',
  mounted() {
    document.title = "ㅤ";
  },
  data() {
    return {
      header: [
        { name: '이름' },
        { name: '성별' },
        { name: '생년월일' },
        { name: '입사날짜' },
        { name: '퇴사날짜' },
        { name: '상시월수' },
        { name: '34↓' },
        { name: '60↑' }
      ],
      rows: [
        { name: '', gender: '', birth: '', join: '', quit: '' }
      ],
      year: new Date().getFullYear()-1,
      showState: true,
      deleteIndex: ''
    };
  },

  methods: {
    addRow() {
      this.rows.push({ name: '', gender: '', birth: '', join: '', quit: '' });
    },

    deleteRowByIndex() {
      const idx = parseInt(this.deleteIndex, 10) - 1; 
      if (!isNaN(idx) && idx >= 0 && idx < this.rows.length) {
        this.rows.splice(idx, 1);
        this.deleteIndex = '';
      } else {
        alert('올바른 번호를 입력해주세요.');
      }
    },



    onClickShowState(){
      this.showState = !this.showState
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const str = dateString.toString();
      if (str.length < 8) return '';
      return `${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(6, 8)}`;
    },

    getTotalMonths(field) {
      return this.rows.reduce((sum, row) => {
        if (field === 'total') return sum + this.calculateMonths(row);
        if (field === 'under34') return sum + this.calculateMonthsIfUnder34(row);
        if (field === 'over60') return sum + this.calculateMonthsIfOver60(row);
        return sum;
      }, 0);
    },

    getRoundedDownYears(field) {
    const totalMonths = this.getTotalMonths(field);
    const years = totalMonths / 12;
    return Math.floor(years * 100) / 100;
    },

    getRoundedDownYouthTotalYears() {
      const under34 = this.getTotalMonths('under34');
      const over60 = this.getTotalMonths('over60');
      const totalMonths = under34 + over60;
      const years = totalMonths / 12;


      const roundDown = (val, digits) => {
        const factor = Math.pow(10, digits);
        return Math.floor(val * factor) / factor;
      };

      return roundDown(years, 2);
    },


    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });


        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];


        const jsonData = XLSX.utils.sheet_to_json(sheet);


        this.rows = jsonData.map(row => ({
          name: row['사원명'] || '', 
          birth: row['주민(외국인)등록번호'] ? row['주민(외국인)등록번호'].toString().slice(0, 6) : '', 
          gender: row['성별'] || '', 
          join: row['입사일자'] ? this.formatDate(row['입사일자']) : '',
          quit: row['퇴사일자'] ? this.formatDate(row['퇴사일자']) : ''
        }));
      };
      reader.readAsBinaryString(file);
    },
    
    calculateMonths(row) {
      if (!row.join) return 0; 

      const joinDate = new Date(row.join); 
      const joinYear = joinDate.getFullYear();
      const joinMonth = joinDate.getMonth() + 1; 

      let quitYear, quitMonth, quitDay;
      
      if (row.quit) {
        const quitDate = new Date(row.quit);
        quitYear = quitDate.getFullYear();
        quitMonth = quitDate.getMonth() + 1;
        quitDay = quitDate.getDate();
      } else {
        quitYear = null; 
        quitMonth = null;
        quitDay = null;
      }


      const targetYear = parseInt(this.year); 

      if (joinYear > targetYear) return 0;

      if (quitYear && quitYear < targetYear) return 0;

      const startMonth = joinYear < targetYear ? 1 : joinMonth; 
      let endMonth = quitYear && quitYear === targetYear ? quitMonth : 12; 

 
      function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      }

      function getLastDayOfMonth(year, month) {
        const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return daysInMonth[month - 1];
      }


      if (quitYear && quitYear === targetYear) {
        const lastDayOfQuitMonth = getLastDayOfMonth(quitYear, quitMonth);
        if (quitDay !== lastDayOfQuitMonth) {
          endMonth -= 1;
        }
      }

      let months = endMonth - startMonth + 1;
      return months > 0 ? months : 0;
    },

    calculateMonthsIfUnder34(row) {
  if (!row.birth || row.birth.toString().length < 6) return 0;

  const birthStr = row.birth.toString().padStart(6, '0');
  const birthYear = parseInt(birthStr.slice(0, 2), 10);
  const birthMonth = parseInt(birthStr.slice(2, 4), 10);
  const birthDay = parseInt(birthStr.slice(4, 6), 10);

  const targetYear = parseInt(this.year, 10);
  const fullBirthYear = birthYear + (birthYear <= targetYear % 100 ? 2000 : 1900);

  const today = new Date();
  const 기준일 = new Date(targetYear, today.getMonth(), today.getDate());

  const 생일 = new Date(targetYear, birthMonth - 1, birthDay);

  const 생일이안지남 = 기준일 < 생일;

  let age = targetYear - fullBirthYear;
  if (생일이안지남) {
    age -= 1;
  }

  return age <= 34 ? this.calculateMonths(row) : 0;
},














calculateMonthsIfOver60(row) {
  if (!row.birth || row.birth.toString().length < 6) return 0;

  const birthStr = row.birth.toString().padStart(6, '0');
  const birthYear = parseInt(birthStr.slice(0, 2), 10);
  const birthMonth = parseInt(birthStr.slice(2, 4), 10);
  const birthDay = parseInt(birthStr.slice(4, 6), 10);

  const targetYear = parseInt(this.year, 10);
  const fullBirthYear = birthYear + (birthYear <= targetYear % 100 ? 2000 : 1900);

  // 기준일: 오늘과 같은 월·일, 하지만 연도는 targetYear
  const today = new Date();
  const referenceDate = new Date(targetYear, today.getMonth(), today.getDate());

  // 생일: 기준연도에 해당하는 생일
  const birthdayThisYear = new Date(targetYear, birthMonth - 1, birthDay);

  // 생일이 아직 안 지났다면 true
  const isBirthdayNotPassed = referenceDate < birthdayThisYear;

  // 만 나이 계산
  let age = targetYear - fullBirthYear;
  if (isBirthdayNotPassed) {
    age -= 1;
  }

  console.log("내나이",age)
  // 만 60세 이상일 경우만 개월 수 계산
  return age >= 60 ? this.calculateMonths(row) : 0;
},
















  }
};
</script>

<style>
  .row-item{
    width: 100%; 
    padding: 12px; 
    border: 1px solid black;
    text-align: center;
    font-size: 14px;
    height: 40px;
  }



</style>
