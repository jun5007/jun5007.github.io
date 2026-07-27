# Lee Seokjun Portfolio Website

GitHub Pages repository for [https://jun5007.github.io](https://jun5007.github.io).

This site summarizes AI and big data projects for portfolio and job application use.

The portfolio presents AI and big data coursework and projects with an emphasis on data analysis, machine learning, and reproducible documentation.

## Focus

- Financial data analysis
- Generative AI package dependency analysis
- Time-series feature engineering
- News/search trend based market reaction analysis
- EDA storytelling and model evaluation
- Reproducibility and publishing-risk documentation

## Featured Projects

1. Generative AI Package Dependency Analysis — team project using PyPI metadata, version snapshots, dependency information, and package distributions; analysis code not public
2. Exchange Rate & Industry Return Analysis — assigned-stock data collection, preprocessing, and shared-format consolidation; Walk-Forward Validation co-developed with Minsung Lee; partial public R implementation; related to one conference publication
3. News/Search Trends & Stock Market Response — team data collection, final data consolidation, and visualization contribution; documentation only; independent reproduction unavailable
4. DACON ETRI Human Understanding Challenge — competition project; **Leaderboard Stage Completed**

## Competition Record

The signed-in DACON participant profile and the corresponding leaderboards were checked on **2026-07-26**. Ongoing ranks are snapshots and may change.

| Competition | Status | Participation Type | Verified Result |
|---|---|---|---|
| [DACON ETRI Human Understanding Challenge](https://www.dacon.io/competitions/official/236690/leaderboard) | **Leaderboard Stage Completed** | Individual | Public **1st / 0.50143** · Final Private **118th / 0.59183** |
| [2026 성균관대학교 멀티모달 AI Bias 챌린지](https://www.dacon.io/competitions/official/236722/leaderboard) | **Completed** | Individual | Public **2nd · 1** · Final Private **33rd / 263 · 0.85952** |
| [2026 Samsung Collegiate Programming Challenge : AI 챌린지](https://www.dacon.io/competitions/official/236730/leaderboard) | **Round 1 completed; advancement result pending** | Individual | Public snapshot **215th / 640 · 0.8686** |
| [제3회 풍력발전량 예측 AI 경진대회 - BARAM 2026](https://www.dacon.io/competitions/official/236727/leaderboard) | **In Progress** | Individual | — |

## ETRI 대회 회고

### 1. 처음의 접근 방식

이 대회에서는 Public Leaderboard 순위가 교과목 성적에 반영되었기 때문에,
초기에는 Public 점수를 높이는 것을 우선적인 목표로 두고 모델을 설계했습니다.

여러 모델과 전처리 방식을 실험한 결과 Public Leaderboard 1위를 기록했고,
그 이후에는 최종 Private 평가에서도 일반화될 수 있도록
모델과 검증 방식을 다시 조정했습니다.

이 과정에서 Public 순위가 3위와 5위로 내려가기도 했지만,
최종 제출 모델은 다시 Public 1위를 기록했습니다.

### 2. 잘된 점과 아쉬웠던 점

Public Leaderboard 1위를 달성하면서
수업 평가와 초기 목표 측면에서는 좋은 결과를 얻었습니다.

하지만 최종 Private Leaderboard에서는 118위를 기록하여,
Public에서의 높은 성능이 전체 테스트 데이터에는
그대로 일반화되지 않았다는 사실을 확인했습니다.

현재 남아 있는 자료만으로 정확한 원인을 하나로 단정할 수는 없습니다.
다만 Public 점수를 반복적으로 확인하며 모델을 선택한 과정에서
Public 구간의 특성에 간접적으로 맞춰졌을 가능성과,
로컬 검증 방식이 최종 Private 데이터의 특성을
충분히 반영하지 못했을 가능성을 돌아보게 되었습니다.

### 3. 배운 점

이번 경험을 통해 Public Leaderboard 순위와
모델의 실제 일반화 성능은 서로 다른 기준이라는 점을 배웠습니다.

Public 점수가 높은 모델이 반드시 최종 평가에서도
가장 좋은 모델이 되는 것은 아니며,
모델 자체뿐 아니라 검증 방식과 최종 제출 모델을 선택하는 기준도
대회 결과에 큰 영향을 줄 수 있다는 점을 알게 되었습니다.

또한 리더보드 결과를 확인할 때마다 모델을 변경하기보다,
사전에 정한 로컬 검증 기준과 실험 기록을 바탕으로
모델을 판단하는 과정이 필요하다는 점을 배웠습니다.

### 4. 다음 대회에서 바꿀 점

앞으로 DACON 대회에 참가할 때는 학교 성적과 Public 순위도 고려하되,
Public 점수에만 맞춰 모델을 선택하지 않을 계획입니다.

대회 시작 단계에서 먼저 데이터 구조에 적합한 검증 방식을 정하고,
다음 항목을 체계적으로 기록하겠습니다.

- 모델별 Local Validation 점수
- Fold 및 Random Seed별 성능 변동
- Public 점수와 Local Validation 점수의 차이
- 모델과 Feature 변경 내역
- 제출 파일별 결과와 선택 이유
- 예측 확률 분포와 Calibration
- 최종 제출 모델을 선택한 기준

앞으로도 DACON 대회에 계속 참가하면서,
순위뿐 아니라 잘못된 판단과 개선할 부분을 함께 기록하고
이전 대회에서 배운 내용을 다음 대회의 검증과 모델 설계에 반영하겠습니다.

These entries are competition records only. They do not assert an award or unannounced advancement, and Public-stage rankings are not presented as final placements. No dedicated public repository or publishable code artifact for the three newly listed competitions is present in this workspace, and original competition data are excluded.

## Certification

- **Google Analytics Certification (2026)** — Google Skillshop
  - Issued: **2026-06-12**
  - Expires: **2027-06-12**
  - The certificate ID and PDF are not published in this repository.

## Publication

이민성, 홍찬기, 추민주, 이석준, 우지영, “환율 민감도 기반 클러스터링과 동조지수를 이용한 산업별 월간 수익률 예측,” *한국컴퓨터정보학회 2025 하계학술대회 논문집*, 제33권 제2호, pp. 959–961, 2025.07.

- [DBpia 문헌 정보](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12337990)
- Role: **Co-author**
- 논문 원문은 저작권 및 팀 공개 범위 확인 전까지 저장소에 포함하지 않음

## Files

- `index.html`: Portfolio content and project summaries
- `styles.css`: Responsive layout and visual styling
- `projects/genai-package-dependency/`: Public project documentation and inspectable CSV outputs
