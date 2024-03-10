import { Heading } from "@chakra-ui/react";
import ServeyBGN from "../services/survey-bgn";
import { SAMPLE_DATA } from "../contents/sample";
import {
  formatDD,
  instabilityCondition,
  pastPhysicalCondition,
} from "../contents/resultFormat";

const ResultText = ({ data }: { data: any }) => {
  console.log(data);

  return (
    <>
      {data.length > 0 &&
        data.map((innerData: any, idx: number) => {
          console.log("=============");
          console.log(innerData);
          return (
            <>
              <br />
              <br />
              <br />
              <br />
              <Heading style={{ color: "blue" }}>USER INFO</Heading>
              <div>name : {innerData["- 성함"]}</div>
              <div>email : {innerData["아이디"]}</div>
              <Heading>AA Section</Heading>
              <>
                {ServeyBGN.c6format(
                  innerData["C6. 식습관에 대한 가장 큰 고민"]
                ) === "-" ? (
                  <div>=========== 확인 필수 ======== (해당사항 없음)</div>
                ) : (
                  pastPhysicalCondition({
                    name: innerData["- 성함"],
                    c4: ",".includes(
                      innerData["C4. 일반식 식사 시, 포만감 (복수선택 가능)"]
                    )
                      ? innerData["C4. 일반식 식사 시, 포만감 (복수선택 가능)"]
                          .split(",")[0]
                          .replace("멈춘다.", "멈추")
                      : innerData["C4. 일반식 식사 시, 포만감 (복수선택 가능)"],
                    c6: ",".includes(
                      innerData["C6. 식습관에 대한 가장 큰 고민"]
                    )
                      ? innerData["C6. 식습관에 대한 가장 큰 고민"].split(
                          ","
                        )[0]
                      : innerData["C6. 식습관에 대한 가장 큰 고민"],
                    c6Res: ServeyBGN.c6format(
                      innerData["C6. 식습관에 대한 가장 큰 고민"]
                    ),
                  })
                )}
              </>

              <Heading>BB Section</Heading>
              <>
                {instabilityCondition({
                  name: innerData["- 성함"],
                  instability: innerData["Lv.1\n일상\n불안정도"],
                })}
              </>

              <Heading>DD1 Lv.1 Section</Heading>
              <>
                {formatDD({
                  name: innerData["- 성함"],
                })}
              </>
            </>
          );
        })}
      {/* <br />
      <br />
      <br />
      <br />
      <Heading>AA Section</Heading>
      <>
        {pastPhysicalCondition({
          name: SAMPLE_DATA["- 성함"],
          c4: SAMPLE_DATA["C4. 일반식 식사 시, 포만감 (복수선택 가능)"]
            .split(",")[0]
            .replace("멈춘다.", "멈추"),
          c6: SAMPLE_DATA["C6. 식습관에 대한 가장 큰 고민"].split(",")[0],
          c6Res: ServeyBGN.c6format(
            SAMPLE_DATA["C6. 식습관에 대한 가장 큰 고민"]
          ),
        })}
      </>

      <Heading>BB Section</Heading>
      <>
        {instabilityCondition({
          name: SAMPLE_DATA["- 성함"],
          instability: SAMPLE_DATA["Lv.1\n일상\n불안정도"],
        })}
      </>

      <Heading>DD1 Lv.1 Section</Heading>
      <>
        {formatDD({
          name: SAMPLE_DATA["- 성함"],
        })}
      </> */}
    </>
  );
};

export default ResultText;
