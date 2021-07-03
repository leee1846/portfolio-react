import React from "react";
import * as Styled from "./About.style";
import image from "../../assets/images/image.jpg";

function About() {
  return (
    <Styled.Container>
      <Styled.Top>
        <h1>
          안녕하십니까! 클린코드에 대하여 항상 고민하는 주니어 개발자
          이경준입니다.
        </h1>
        <p>
          개발에 관심을 가지기전 호텔리어로써 커리어를 쌓았으며, 4년제 영어학과를
          졸업하였습니다. 주부들을 위한 주방도구, 식료품을 판매하며 주부우울증을 해소할수 있는 커뮤니티를 제공하는 쇼핑몰오픈을 목표로 공부하고 있습니다.
        </p>
      </Styled.Top>
      <Styled.Bottom>
        <Styled.Image src={image} />
        <Styled.Inform>
          <p>
            평소 사소한 기능 하나하나를 구현해낼때 다른 직무에서 느낄수 없었던
            큰 성취감에 더욱 더 노력하게되고, 재사용가능한 코드에 의문을 갖고 알아가며 마법처럼 그냥 이루어지는게 아닌 결과에 대한 이유를 알아가는데에 의미를 두고 학습하고 있습니다. 협업 프로젝트를하면서 겪게되는 예상치못한 버그들이 종종 스트레스를 주지만 해결하면서 재미를 느끼고 있습니다. 기술 트렌드에관한 블로그 글을 읽는것을 좋아하며, 미래의 프론트엔드 개발자로서 동료들에게 지식을 공유할수있는 시니어개발자가 되는 꿈을 품고 있습니다. 동료들과의 원활한 소통으로 완성도있는 결과물을 함께 만들어가는 개발자가 되고싶습니다.
          </p>
          <li>이 경 준</li>
          <li>010 - 7689 - 1846</li>
          <li>
            <Styled.Address href='mailto:leee1846@gmail.com'>
              leee1846@gmail.com
            </Styled.Address>
          </li>
          <li>
            <Styled.Address href='https://github.com/leee1846'>
              github.com/leee1846
            </Styled.Address>
          </li>
          <li>
            <Styled.Address href='https://velog.io/@kyungjune'>
              velog.io/@kyungjune
            </Styled.Address>
          </li>
        </Styled.Inform>
      </Styled.Bottom>
    </Styled.Container>
  );
}

export default About;
