export const pastPhysicalCondition = ({
  name,
  c4,
  c6,
  c6Res,
}: {
  name: string; // 최지영
  c4: string;
  c6: string;
  c6Res?: string;
}) => {
  if (!name) {
    alert("name 데이터 형식이 맞지 않습니다. 확인해 주세요");
  }
  if (!c4) {
    alert("c4 데이터 형식이 맞지 않습니다. 확인해 주세요");
  }
  if (!c6) {
    alert("c6 데이터 형식이 맞지 않습니다. 확인해 주세요");
  }
  if (!c6Res) {
    alert("c6Res 데이터 형식이 맞지 않습니다. 확인해 주세요");
  }

  return `
비가나 21days 식욕 레벨 테스트 결과입니다.

${name}님은 과거 다이어트로 인해 식욕이 증가했으며, 식욕이 증가한 상태에서 또다시 다이어트를 반복함으로써 <식욕이 불안정>해진 상태입니다.

식욕이 불안정 궤도에 한번 올라가면, 이후 강력한 다이어트를 하지 않아도 음식에 대한 집착을 그대로 보유하게 됩니다.

음식에 대한 집착은 어떤 환경에서 일상을 보내느냐에 따라 각자 다양한 반응으로 나타납니다. ${name}님의 음식 집착은 ${c6}으로 반응하고 있으며, 이는 현재 체중 증가의 가장 큰 요인이기도 합니다.
체중 감량을 위해선 해당 습관을 해결하는 것이 우선이나, ${c6}의 본질적인 원인은 식욕 억제에 있으므로 단순히 '${c6Res}'와 같은 계획으로는 해당 문제를 해결할 수 없습니다.


테스트를 통해 ${c6}이 유발된 원인을 분석한 바 <미각 비활성화>라는 결론을 내렸습니다.
우리는 음식의 맛을 통해 만족감을 얻습니다. 미각이 둔해진 상태에선 어떤 음식을 먹어도 만족감을 느끼기 어렵습니다.
${c4}는 이유 또한 이 때문입니다.

------------------------------------------------------------------------------------------------------------

비가나 21days 식욕 레벨 테스트 결과입니다.

${name}님은 맛에 충분히 집중하지 못한 식사의 반복으로 <식욕이 불안정>해진 상태입니다.

식욕이 불안정 궤도에 한번 올라가면, 이후 강력한 다이어트를 하지 않아도 음식에 대한 집착을 그대로 보유하게 됩니다.

음식에 대한 집착은 어떤 환경에서 일상을 보내느냐에 따라 각자 다양한 반응으로 나타납니다.
${name}님의 음식 집착은 ${c6}으로 반응하고 있으며, 이는 현재 체중 증가의 가장 큰 요인이기도 합니다.
체중 감량을 위해선 해당 습관을 해결하는 것이 우선이나, ${c6}의 본질적인 원인은 식욕 억제에 있으므로 단순히 '${c6Res}'와 같은 계획으로는 해당 문제를 해결할 수 없습니다.


테스트를 통해 ${c6}이 유발된 원인을 분석한 바 <미각 비활성화>라는 결론을 내렸습니다.
우리는 음식의 맛을 통해 만족감을 얻습니다. 미각이 둔해진 상태에선 어떤 음식을 먹어도 만족감을 느끼기 어렵습니다.
${c4}는 이유 또한 이 때문입니다.
  
  `;
};

export const instabilityCondition = ({
  name,
  instability,
}: {
  name: string; // 최지영
  instability: string;
}) => {
  if (!name) {
    alert("name 데이터 형식이 맞지 않습니다. 확인해 주세요");
  }
  // if (!instability) {
  //   alert("instability 데이터 형식이 맞지 않습니다. 확인해 주세요");
  // }

  switch (instability) {
    case "상":
      return `
더불어, 일상이 불안정하면 어지러운 패턴으로 인해 오감이 둔해지고, 이는 식사 만족도 저하와 식욕 증가로 이어지게 됩니다.
${name}님의 일상 불안정도는 <상>으로, 식욕 안정화를 위해선 일상 밸런스 회복이 필히 선행되어야 합니다.
      `;
    case "중상":
      return `
더불어, 일상이 불안정하면 어지러운 패턴으로 인해 오감이 둔해지고, 이는 식사 만족도 저하와 식욕 증가로 이어지게 됩니다.
${name}님의 일상 불안정도는 <중상>으로, 식욕 안정화를 위해선 일상 밸런스 회복이 필히 선행되어야 합니다.
      `;
    default:
      return "=========== 확인 필수 ========(예외로 확인)";
  }
};

export const formatDD = ({
  name,
}: {
  name: string; // 최지영
}) => {
  if (!name) {
    alert("데이터 형식이 맞지 않습니다. 확인해 주세요");
  }

  return `
${name}님의 테스트 결과는 Lv.1에 해당하며, 한 달 동안 밸런스 회복, 식욕 안정화, 미각 활성화 등 탈다이어트에 필요한 모든 공식을 일상에 세팅해 다이어트로부터의 자유를 되찾을 수 있습니다.

*Lv.1 탈다이어트의 정석 히든 링크 https://www.bigana21.co.kr/fpqpf1lv124

`;
};
