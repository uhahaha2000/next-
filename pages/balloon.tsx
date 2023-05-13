import "../styles/balloon.scss";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Balloon() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const screenScroll = document.querySelector(".screen_scroll");
    const balloons = document.querySelectorAll(".balloon");
    const balloonLength = balloons.length;

    function showNextElement() {
      console.log(currentIndex, balloonLength);
      if (currentIndex >= balloonLength) {
        screenScroll.classList.add("end"); // 모든 말풍선보이면 end 클래스 추가
        return;
      }
      balloons[currentIndex].classList.add("show");
      setCurrentIndex(currentIndex + 1);
      screenScroll.scrollTop = screenScroll.scrollHeight;
    }
    setTimeout(showNextElement, 500);

    return () => {
      showNextElement();
    };
  }, [currentIndex]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <div className="page_wrap">
          <div className="mobile_wrap">
            <div className="mobile_head"></div>
            <div className="mobile_body">
              <div className="screen_scroll">
                <div className="balloon-list">
                  <div className="balloon receive">
                    <div className="balloon_content">
                      안녕하세요. 무엇을 도와드릴까요?
                    </div>
                  </div>
                  <div className="balloon send">
                    <div className="balloon_content">
                      에스프레소 머신 구매의 장점과 단점을 알려 줘
                    </div>
                  </div>
                  <div className="balloon receive">
                    <div className="balloon_content">
                      <p className="balloon_text">
                        에스프레소 머신은 집에서 진짜 에스프레소를 만들 수 있는
                        좋은 방법입니다. 에스프레소는 커피 원두를 뜨거운 물로
                        추출하여 만든 진하고 크리미한 음료입니다. 라떼,
                        카푸치노, 모카와 같은 다양한 커피 음료를 만드는 데
                        사용할 수 있습니다. 에스프레소 머신 구매의 장점은 다음과
                        같습니다. 집에서 진짜 에스프레소를 만들 수 있습니다.
                        자신의 취향에 맞는 에스프레소 음료를 만들 수 있습니다.
                        커피숍에 갈 필요가 없습니다. 돈을 절약할 수 있습니다.
                        재미있을 수 있습니다. 에스프레소 머신 구매의 단점은
                        다음과 같습니다. 비쌀 수 있습니다. 사용법을 배워야 할
                        수도 있습니다. 유지 관리가 필요할 수 있습니다. 원두와
                        기타 액세서리를 구입해야 할 수도 있습니다. 공간을 차지할
                        수 있습니다. 전반적으로 에스프레소 머신을 구입할지
                        여부는 개인의 필요와 선호도에 따라 다릅니다. 집에서 진짜
                        에스프레소를 만들고 싶다면 에스프레소 머신은 좋은 투자가
                        될 수 있습니다. 그러나 사용법을 배우고 유지 관리를 할
                        의향이 없다면 에스프레소 머신이 적합하지 않을 수
                        있습니다.
                      </p>

                      <div className="balloon_tag_wrap">
                        <div className="tags_list">
                          <span className="tag">라마르조코</span>
                          <span className="tag">시모넬리</span>
                          <span className="tag">브레빌</span>
                          <span className="tag">드롱기</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="balloon send">
                    <div className="balloon_content">
                      에스크레소 머신 상위 브랜드 3가지 알려줘
                    </div>
                  </div>
                  <div className="balloon receive">
                    <div className="balloon_table">
                      <div className="balloon_table_inner">
                        <div className="table_wrap">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>브랜드명</th>
                                <th>설명</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Breville</td>
                                <td>
                                  Breville은 다양한 가격대와 기능을 갖춘 다양한
                                  에스프레소 머신을 만드는 인기 있는
                                  브랜드입니다. 그들의 머신은 사용하기 쉽고
                                  신뢰할 수 있습니다.
                                </td>
                              </tr>
                              <tr>
                                <td>De'Longhi</td>
                                <td>
                                  De'Longhi는 다양한 가격대와 기능을 갖춘 다양한
                                  에스프레소 머신을 만드는 또 다른 인기 있는
                                  브랜드입니다. 그들의 머신은 사용하기 쉽고 유지
                                  관리가 적습니다.
                                </td>
                              </tr>
                              <tr>
                                <td>Jura</td>
                                <td>
                                  Jura는 다양한 가격대와 기능을 갖춘 다양한
                                  에스프레소 머신을 만드는 스위스 브랜드입니다.
                                  그들의 머신은 사용하기 쉽고 자동화되어
                                  있습니다.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="balloon send">
                    <div className="balloon_content">
                      드롱기 브랜드 머신 가격대별 종류 알려줘
                    </div>
                  </div>
                  <div className="balloon receive">
                    <div className="balloon_content">
                      <p className="balloon_text">
                        저가형(20만원 이하): 이 머신은 작고 휴대 가능하며
                        사용하기 쉽습니다. 일반적으로 에스프레소와 룽고만 추출할
                        수 있습니다. 예: Dedica, EC685. 중급형(20만원~50만원):
                        이 머신은 더 크고 강력하며 더 많은 기능을 제공합니다.
                        일반적으로 에스프레소, 룽고, 카푸치노 및 라떼와 같은
                        다양한 음료를 추출할 수 있습니다. 예: ECAM23.460.B,
                        ECAM23.260.B. 고급형(50만원 이상): 이 머신은 가장 크고
                        강력하며 가장 많은 기능을 제공합니다. 일반적으로
                        에스프레소, 룽고, 카푸치노, 라떼, 플랫 화이트 및 기타
                        다양한 음료를 추출할 수 있습니다. 예: ECAM610.75.M,
                        ECAM650.85.M.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile_bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}
