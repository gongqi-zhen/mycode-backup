// 2024年9月30日（月）をもって遺伝子検査「MYCODE」のサービスを終了
const terminationUrls = [
  { url: "https://mycode.jp/information/20240606_2.html?int=top", name: "遺伝子検査結果提供終了のお知らせ" },
  { url: "https://mycode.jp/information/20240606.html?int=mypage", name: "研究参加のご案内について" },
];
 
// アカウント
const accountUrls = [
  { url: "https://mycode.jp/my.html", name: "マイページ" },
  { url: "https://mycode.jp/my/password.html?int=gmenu", name: "パスワードと秘密の質問変更" },
  { url: "https://mycode.jp/my/verification_switch", name: "ログイン方式変更" },
  { url: "https://mycode.jp/my/profile/edit.html?int=gmenu", name: "アカウント情報変更" },
  { url: "https://mycode.jp/my/mail.html?int=gmenu", name: "メールアドレス変更" },
  { url: "https://mycode.jp/my/sales_orders.html?int=gmenu", name: "購入履歴" },
];

// 検査結果
const testResultsUrls = [
  { url: "https://mycode.jp/my/report/diseases.html?int=gmenu", name: "病気の結果一覧" },
  { url: "https://mycode.jp/my/report/traits.html?int=gmenu", name: "体質の結果一覧" },
  { url: "https://mycode.jp/my/discovery/summary.html?int=gmenu", name: "体質と祖先の検査結果" },
  { url: "https://mycode.jp/my/bookmarks.html?int=gmenu", name: "MYボックス" },
  { url: "https://mycode.jp/my/report/covid-19.html?int=gmenu", name: "新型コロナウイルス関連項目" },
];
 
// 生活習慣サポート
const lifestyleSupportUrls = [
  { url: "https://mycode.jp/my/advice.html?int=gmenu", name: "生活習慣一覧" },
  { url: "https://mycode.jp/my/survey.html?int=gmenu", name: "生活習慣チェック" },
  { url: "https://mycode.jp/my/report/advice.html?int=gmenu", name: "病気の発症予防・促進要因" },
];
 
// オプション
const optionUrls = [
  { url: "https://mycode.jp/my/free_tickets.html?int=gmenu", name: "オプションチケット一覧" },
];

// コンテンツ MYCODE fumfum
const contentsfumfumUrls = [
  { url: "https://mycode.jp/fumfum.html?int=gmenu", name: "fumfumトップページ" },
  { url: "https://mycode.jp/fumfum/risk-seeking", name: "リスクを求める(risk-seeking)" },
  { url: "https://mycode.jp/fumfum/mushrooms-liking", name: "食の好み - きのこ(mushrooms-liking)" },
  { url: "https://mycode.jp/fumfum/sagging-eyelids", name: "まぶたのたるみ(sagging-eyelids)" },
  { url: "https://mycode.jp/my/fumfum/snoring?int=fum_top", name: "いびき(結果)" },
  { url: "https://mycode.jp/fumfum/snoring", name: "いびき(snoring)" },
  { url: "https://mycode.jp/my/fumfum/diurnal-inactivity?int=fum_top", name: "昼寝の長さ(結果)" },
  { url: "https://mycode.jp/fumfum/diurnal-inactivity", name: "昼寝の長さ(diurnal-inactivity)" },
  { url: "https://mycode.jp/my/fumfum/sleep-quality?int=fum_top", name: "睡眠の質(結果)" },
  { url: "https://mycode.jp/fumfum/sleep-quality", name: "睡眠の質(sleep-quality)" },
  { url: "https://mycode.jp/fumfum/olfactory-performance", name: "嗅覚(olfactory-performance) " },
  { url: "https://mycode.jp/my/fumfum/habitual-sleep-duration?int=fum_top", name: "睡眠時間の長さ(結果)" },
  { url: "https://mycode.jp/fumfum/habitual-sleep-duration", name: "睡眠時間の長さ(habitual-sleep-duration)" },
  { url: "https://mycode.jp/fumfum/grip-strength", name: "握力(grip-strength)" },
  { url: "https://mycode.jp/fumfum/olfactory-sensitivity-beta-ionone", name: "匂いの感じやすさ（スミレの香り）(olfactory-sensitivity-beta-ionone)" },
  { url: "https://mycode.jp/fumfum/salt-taste-preference", name: "塩味を好む(salt-taste-preference)" },
  { url: "https://mycode.jp/fumfum/educational-attainment", name: "学歴（就学年数の長さ）(educational-attainment)" },
  { url: "https://mycode.jp/fumfum/eyebrow-thickness", name: "眉毛の濃さ(eyebrow-thickness)" },
  { url: "https://mycode.jp/fumfum/hypnotizability", name: "催眠のかかりやすさ(hypnotizability)" },
  { url: "https://mycode.jp/fumfum/memory-performance-in-response-to-high-fat-diet", name: "高脂肪食と記憶力の関係(memory-performance-in-response-to-high-fat-diet)" },
  { url: "https://mycode.jp/my/fumfum/harm-avoidance?int=fum_top", name: "損害回避(結果)" },
  { url: "https://mycode.jp/fumfum/harm-avoidance", name: "損害回避(harm-avoidance)" },
  { url: "https://mycode.jp/my/fumfum/excessive-hairiness?int=fum_top", name: "毛深さ(結果）" },
  { url: "https://mycode.jp/fumfum/excessive-hairiness", name: "毛深さ(excessive-hairiness)" },
  { url: "https://mycode.jp/fumfum/pigment-forearm", name: "シミのできやすさ（腕）(pigment-forearm)" },
  { url: "https://mycode.jp/my/fumfum/decision-making-during-total-sleep-deprivation?int=fum_top", name: "寝不足時の判断力(結果)" },
  { url: "https://mycode.jp/fumfum/decision-making-during-total-sleep-deprivation", name: "寝不足時の判断力(decision-making-during-total-sleep-deprivation)" },
  { url: "https://mycode.jp/my/fumfum/excessive-sweating?int=fum_top", name: "汗のかきやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/excessive-sweating", name: "汗のかきやすさ(excessive-sweating)" },
  { url: "https://mycode.jp/fumfum/dark-chocolate-liking", name: "食の好み -ダークチョコレート-(dark-chocolate-liking)" },
  { url: "https://mycode.jp/my/fumfum/crows-feet?int=fum_top", name: "目尻のシワ(結果)" },
  { url: "https://mycode.jp/fumfum/crows-feet", name: "目尻のシワ(crow's-feet)" },
  { url: "https://mycode.jp/my/fumfum/mathematics-ability?int=fum_top", name: "数学の向き不向き(結果)" },
  { url: "https://mycode.jp/fumfum/mathematics-ability", name: "数学の向き不向き(mathematics-ability)" },
];
  
module.exports = {
  terminationUrls,
  accountUrls,
  testResultsUrls,
  lifestyleSupportUrls,
  optionUrls,
  contentsfumfumUrls,
};
  