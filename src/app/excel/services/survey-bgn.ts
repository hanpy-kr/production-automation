class ServeyBGN {
  c6format(text: string) {
    if (!text || text.length === 0) {
      alert("c6 데이터가 없습니다.");
      return;
    }
    const list = text.split(",");
    const targetKey = list[0].trim();

    switch (targetKey) {
      case "주기적인 폭식":
        return "오늘부터 폭식 절대 금지!";
      case "야식을 먹어야 잠들 수 있음":
        return "오늘부터 야식 절대 금지!";
      case "빈번한 과식":
        return "오늘부터 과식 절대 금지!";
      case "끊임 없이 음식 당김":
        return "오늘부터 군것질 절대 금지!";
      case "식사 후 간식 당김":
        return "오늘부터 간식 절대 금지!";
      case "일반식 식사 시 식사량 유독 증가":
        return "오늘부터 무조건 적게 먹어야지!";
      default:
        // alert("c6 내용이 데이터에 없습니다. (기타 의견)");
        return "-";
    }
  }
}

export default new ServeyBGN();
// export default ServeyBGN;
