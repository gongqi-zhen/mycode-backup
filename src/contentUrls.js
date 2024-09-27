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
  { url: "https://mycode.jp/my/profile.html", name: "アカウント情報"},
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
  { url: "https://mycode.jp/my/fumfum/itch-intensity-for-mosquito-bites?int=fum_top", name: "蚊に刺された時のかゆみの強さ(結果)" },
  { url: "https://mycode.jp/fumfum/itch-intensity-for-mosquito-bites", name: "蚊に刺された時のかゆみの強さ(itch-intensity-for-mosquito-bites)" },
  { url: "https://mycode.jp/my/fumfum/ice-cream-liking?int=fum_top", name: "食の好み -アイスクリーム-(結果)" },
  { url: "https://mycode.jp/fumfum/ice-cream-liking", name: "食の好み -アイスクリーム-(ice-cream-liking)" },
  { url: "https://mycode.jp/my/fumfum/prospective-memory?int=fum_top", name: "展望記憶（予定の忘れやすさ）(結果)" },
  { url: "https://mycode.jp/fumfum/prospective-memory", name: "展望記憶（予定の忘れやすさ）(prospective-memory)" },
  { url: "https://mycode.jp/my/fumfum/attractiveness-to-mosquitoes?int=fum_top", name: "蚊の寄せ付けやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/attractiveness-to-mosquitoes", name: "蚊の寄せ付けやすさ(attractiveness-to-mosquitoes)" },
  { url: "https://mycode.jp/my/fumfum/working-memory?int=fum_top", name: "ワーキングメモリーの衰えにくさ(結果)" },
  { url: "https://mycode.jp/fumfum/working-memory", name: "ワーキングメモリーの衰えにくさ(working-memory)" },
  { url: "https://mycode.jp/my/fumfum/skin-aging?int=fum_top", name: "肌のキメの細かさ(結果)" },
  { url: "https://mycode.jp/fumfum/skin-aging", name: "肌のキメの細かさ(skin-aging)" },
  { url: "https://mycode.jp/my/fumfum/lactate-threshold?int=fum_top", name: "乳酸のたまりやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/lactate-threshold", name: "乳酸のたまりやすさ(lactate-threshold)" },
  { url: "https://mycode.jp/my/fumfum/verbal-iq?int=fum_top", name: "言語性IQ(結果)" },
  { url: "https://mycode.jp/fumfum/verbal-iq", name: "言語性IQ(verbal-iq)" },
  { url: "https://mycode.jp/my/fumfum/transepidermal-water-loss?int=fum_top", name: "肌の保湿力(結果)" },
  { url: "https://mycode.jp/fumfum/transepidermal-water-loss", name: "肌の保湿力(transepidermal-water-loss)" },
  { url: "https://mycode.jp/my/fumfum/emotional-memory?int=fum_top", name: "運動と記憶(結果）" },
  { url: "https://mycode.jp/fumfum/emotional-memory", name: "運動と記憶(emotional-memory)" },
  { url: "https://mycode.jp/my/fumfum/reward-dependence-men?int=fum_top", name: "報酬依存性(結果)" },
  { url: "https://mycode.jp/fumfum/reward-dependence-men", name: "報酬依存性(reward-dependence)" },
  { url: "https://mycode.jp/my/fumfum/positive-emotion?int=fum_top", name: "ポジティブ思考(結果)" },
  { url: "https://mycode.jp/fumfum/positive-emotion", name: "ポジティブ思考(positive-emotion)" },
  { url: "https://mycode.jp/my/fumfum/pupillary-light-reflex?int=fum_top", name: "眩しさに対する瞳の反応(結果)"},
  { url: "https://mycode.jp/fumfum/pupillary-light-reflex", name: "眩しさに対する瞳の反応(pupillary-light-reflex)"},
  { url: "https://mycode.jp/my/fumfum/attention-function?int=fum_top", name: "刺激への反応スピード(結果)"},
  { url: "https://mycode.jp/fumfum/attention-function", name: "刺激への反応スピード(reaction-time)"},
  { url: "https://mycode.jp/my/fumfum/ear-protrusion?int=fum_top", name: "耳の立ち具合(結果)"},
  { url: "https://mycode.jp/fumfum/ear-protrusion", name: "耳の立ち具合(ear-protrusion)"},
  { url: "https://mycode.jp/my/fumfum/eyeblink-rates?int=fum_top", name: "まばたきの回数(結果)" },
  { url: "https://mycode.jp/fumfum/eyeblink-rates", name: "まばたきの回数(eyeblink-rates)" },
  { url: "https://mycode.jp/my/fumfum/sitting-height-ratio?int=fum_top", name: "座高の比率(結果)" },
  { url: "https://mycode.jp/fumfum/sitting-height-ratio", name: "座高の比率(sitting-height-ratio)" },
  { url: "https://mycode.jp/my/fumfum/reasoning-skills?int=fum_top", name: "高齢時の論理的思考力(結果)" },
  { url: "https://mycode.jp/fumfum/reasoning-skills", name: "高齢時の論理的思考力(reasoning-skills)" },
  { url: "https://mycode.jp/my/fumfum/trait-depression?int=fum_top", name: "気分の落ち込み(結果)" },
  { url: "https://mycode.jp/fumfum/trait-depression", name: "気分の落ち込み(trait-depression)" },
  { url: "https://mycode.jp/my/fumfum/mathematical-ability?int=fum_top", name: "数学的思考力(結果)" },
  { url: "https://mycode.jp/fumfum/mathematical-ability", name: "数学的思考力(mathematical-ability)" },
  { url: "https://mycode.jp/my/fumfum/lobe-size?int=fum_top", name: "福耳(結果)" },
  { url: "https://mycode.jp/fumfum/lobe-size", name: "福耳(lobe-size)" },
  { url: "https://mycode.jp/my/fumfum/motion-sickness?int=fum_top", name: "乗り物酔い(結果)" },
  { url: "https://mycode.jp/fumfum/motion-sickness", name: "乗り物酔い(motion-sickness)" },
  { url: "https://mycode.jp/my/fumfum/word-reading?int=fum_top", name: "発音力(結果)" },
  { url: "https://mycode.jp/fumfum/word-reading", name: "発音力(word-reading)" },
  { url: "https://mycode.jp/fumfum/beard-thickness", name: "ひげの濃さ(beard-thickness)" },
  { url: "https://mycode.jp/my/fumfum/face-perception?int=fum_top", name: "顔認識力(結果)" },
  { url: "https://mycode.jp/fumfum/face-perception", name: "顔認識力(face-perception)" },
  { url: "https://mycode.jp/my/fumfum/dheas-levels?int=fum_top", name: "若返りホルモン(結果)" },
  { url: "https://mycode.jp/fumfum/dheas-levels", name: "若返りホルモン(DHEAS-levels)" },
  { url: "https://mycode.jp/my/fumfum/reading-and-spelling?int=fum_top", name: "リスニング力(結果）" },
  { url: "https://mycode.jp/fumfum/reading-and-spelling", name: "リスニング力(listening)" },
  { url: "https://mycode.jp/my/fumfum/hearing?int=fum_top", name: "聴力(結果)" },
  { url: "https://mycode.jp/fumfum/hearing", name: "聴力(hearing)" },
  { url: "https://mycode.jp/my/fumfum/fear-extinction?int=fum_top", name: "怖がり度(結果)" },
  { url: "https://mycode.jp/fumfum/fear-extinction", name: "怖がり度(fear-extinction)" },
  { url: "https://mycode.jp/my/fumfum/eveningness-preference?int=fum_top", name: "夜更かし傾向(結果)" },
  { url: "https://mycode.jp/fumfum/eveningness-preference", name: "夜更かし傾向(eveningness-preference)" },
  { url: "https://mycode.jp/my/fumfum/dental-caries-susceptibility?int=fum_top", name: "虫歯のなりやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/dental-caries-susceptibility", name: "虫歯のなりやすさ(dental-caries-susceptibility)" },
  { url: "https://mycode.jp/my/fumfum/facial-recognition?int=fum_top", name: "表情の認識力（怒った顔）(結果)" },
  { url: "https://mycode.jp/fumfum/facial-recognition", name: "表情の認識力（怒った顔）(facial-recognition)" },
  { url: "https://mycode.jp/my/fumfum/gastric-motility?int=fum_top", name: "朝の食欲（胃の動き）(結果)" },
  { url: "https://mycode.jp/fumfum/gastric-motility", name: "朝の食欲（胃の動き）(gastric-motility)" },
  { url: "https://mycode.jp/my/fumfum/exercise-behavior?int=fum_top", name: "運動好き（運動習慣）(結果)" },
  { url: "https://mycode.jp/fumfum/exercise-behavior", name: "運動好き（運動習慣）(exercise-behavior)" },
  { url: "https://mycode.jp/my/fumfum/agreeableness?int=fum_top", name: "協調性(結果)" },
  { url: "https://mycode.jp/fumfum/agreeableness", name: "協調性(agreeableness)" },
  { url: "https://mycode.jp/fumfum/third-molar-agenesis", name: "親知らずの本数(third-molar-agenesis)" },
  { url: "https://mycode.jp/my/fumfum/fracture-healing?int=fum_top", name: "骨折の治りやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/fracture-healing", name: "骨折の治りやすさ(fracture-healing)" },
  { url: "https://mycode.jp/my/fumfum/psychological-distress?int=fum_top", name: "打たれ強さ(結果)" },
  { url: "https://mycode.jp/fumfum/psychological-distress", name: "打たれ強さ(psychological-distress)" },
  { url: "https://mycode.jp/my/fumfum/altruism?int=fum_top", name: "親切さ（利他的行動）(結果)" },
  { url: "https://mycode.jp/fumfum/altruism", name: "親切さ（利他的行動）(altruism)" },
  { url: "https://mycode.jp/my/fumfum/endurance-performance?int=fum_top", name: "持久力(結果)" },
  { url: "https://mycode.jp/fumfum/endurance-performance", name: "持久力(endurance-performance)" },
  { url: "https://mycode.jp/my/fumfum/axillary-osmidrosis?int=fum_top", name: "わきが(結果)" },
  { url: "https://mycode.jp/fumfum/axillary-osmidrosis", name: "わきが(axillary-osmidrosis)" },
  { url: "https://mycode.jp/my/fumfum/persistence?int=fum_top", name: "粘り強さ(結果)" },
  { url: "https://mycode.jp/fumfum/persistence", name: "粘り強さ(persistence)" },
  { url: "https://mycode.jp/my/fumfum/cognitive-performance?int=fum_top", name: "記憶力（言語性）(結果)" },
  { url: "https://mycode.jp/fumfum/cognitive-performance", name: "記憶力（言語性）(cognitive-performance)" },
  { url: "https://mycode.jp/my/fumfum/excitement-seeking?int=fum_top", name: "スリル好き（刺激欲求）(結果)" },
  { url: "https://mycode.jp/fumfum/excitement-seeking", name: "スリル好き（刺激欲求）(excitement-seeking)" },
  { url: "https://mycode.jp/my/fumfum/musical-ability?int=fum_top", name: "音感（音程判別）(結果)" },
  { url: "https://mycode.jp/fumfum/musical-ability", name: "音感（音程判別）(musical-ability)" },
  { url: "https://mycode.jp/my/fumfum/weight-reduction?int=fum_top", name: "痩せやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/weight-reduction", name: "痩せやすさ(weight-reduction)" },
  { url: "https://mycode.jp/my/fumfum/angry-temperament?int=fum_top", name: "怒りっぽさ(結果)" },
  { url: "https://mycode.jp/fumfum/angry-temperament", name: "怒りっぽさ(angry-temperament)" },
  { url: "https://mycode.jp/my/fumfum/sprinter?int=fum_top", name: "短距離選手に多い遺伝型(結果)" },
  { url: "https://mycode.jp/fumfum/sprinter", name: "短距離選手に多い遺伝型(sprinter)" },
  { url: "https://mycode.jp/my/fumfum/conscientiousness?int=fum_top", name: "誠実さ(結果)" },
  { url: "https://mycode.jp/fumfum/conscientiousness", name: "誠実さ(conscientiousness)" },
  { url: "https://mycode.jp/my/fumfum/gambling?int=fum_top", name: "ギャンブルへのはまりやすさ(結果)" },
  { url: "https://mycode.jp/fumfum/gambling", name: "ギャンブルへのはまりやすさ(gambling)" },
  { url: "https://mycode.jp/my/fumfum/novelty-seeking?int=fum_top", name: "新しいものへの好奇心(結果)" },
  { url: "https://mycode.jp/fumfum/novelty-seeking", name: "新しいものへの好奇心(novelty-seeking)" },
];

// 遺伝子検査のご説明
const geneticTestingUrls = [
  { url: "https://mycode.jp/whatisdna.html", name: "遺伝子検査のご説明"},
  { url: "https://mycode.jp/whatisdna/genes.html", name: "遺伝子について"},
  { url: "https://mycode.jp/whatisdna/testing.html", name: "遺伝子検査とは"},
  { url: "https://mycode.jp/whatisdna/future.html", name: "遺伝子検査の進化と未来"},
];

// MYCODEの特徴
const MYCODEfeatureUrls = [
  { url: "https://mycode.jp/benefits.html", name: "MYCODEの特徴"},
  { url: "https://mycode.jp/benefits/voices.html", name: "お客様の声"},
  { url: "https://mycode.jp/benefits/analysis.html", name: "分析の質"},
  { url: "https://mycode.jp/benefits/basis.html", name: "科学的根拠の質"},
  { url: "https://mycode.jp/benefits/provision.html", name: "情報提供の質"},
  { url: "https://mycode.jp/benefits/infosec.html", name: "情報セキュリティーについて"},
  { url: "https://mycode.jp/howitworks/process.html", name: "検査方法について"},
];

// 検査メニュー
const MYCODEexaminationUrls = [
  {url: "https://mycode.jp/plans.html", name: "検査メニュー"},
  {url: "https://mycode.jp/plans/summary.html#!/diseases", name: "検査項目の一覧(疾患の検査項目)"},
  {url: "https://mycode.jp/plans/summary.html#!/traits", name: "検査項目の一覧(体質の検査項目)"},
  {url: "https://mycode.jp/plans/summary.html#!/ancestries", name: "検査項目の一覧(祖先の検査項目)"},
  {url: "https://mycode.jp/plans/snplist-disease.html", name: "検査SNP一覧(疾患)"},
  {url: "https://mycode.jp/plans/snplist-trait.html", name: "検査SNP一覧(体質)"},
  {url: "https://mycode.jp/plans/snplist-ancestries.html", name: "検査SNP一覧(祖先)"},
  {url: "https://mycode.jp/plans/optional-testing-items/covid-19.html", name: "COVID-19（新型コロナウイルス）検査項目"},
];

// 私たちについて
const MYCODEcompanyUrls = [
  {url: "https://mycode.jp/whoweare.html", name: "私たちについて"},
  {url: "https://mycode.jp/whoweare/mission.html", name: "運営会社について"},
  {url: "https://mycode.jp/whoweare/partner.html", name: "COI STREAMについて"},
  {url: "https://mycode.jp/terms.html", name: "会員規約"},
  {url: "https://mycode.jp/terms/informedconsent.html", name: "検査申し込みに関する説明事項"},
  {url: "https://mycode.jp/privacy.html", name: "個人情報保護方針"},
  {url: "https://mycode.jp/transactions.html", name: "特定商取引法に基づく表記"},
  {url: "https://mycode.jp/glossary.html", name: "用語集"},
  {url: "https://mycode.jp/faq.html", name: "FAQ（よくあるご質問）"},
  {url: "https://mycode.jp/inquiry.html", name: "お問い合わせ"},
  {url: "https://mycode.jp/information.html", name: "MYCODEからのお知らせ"},
];

// MYCODEトピックス
const MYCODEtopicsUrls = [
  {url: "https://mycode.jp/topics.html", name: "全項目"},
  {url: "https://mycode.jp/topics/genes.html", name: "遺伝子"},
  {url: "https://mycode.jp/topics/child-rearing.html", name: "育児・子供"},
  {url: "https://mycode.jp/topics/life.html", name: "食事・生活"},
  {url: "https://mycode.jp/topics/physical.html", name: "体質・身体"},
  {url: "https://mycode.jp/topics/diseases.html", name: "病気・医療"},
];

// MYCODE Research
const MYCODEresearchUrls = [
  {url: "https://mycode.jp/survey/research.html?int=gmenu", name: "MYCODE Research"},
  {url: "https://mycode.jp/my/research/results/computer-vision-syndrome", name: "眼の症状に関わる遺伝要因の探索研究結果"},
  {url: "https://mycode.jp/my/research/results/gwas-hair-morphology-2023", name: "髪質に関わる遺伝要因の探索研究結果"},
  {url: "https://mycode.jp/my/research/results/covid-19-vaccine-survey", name: "新型コロナワクチンに対する態度と副反応に関する調査結果"},
  {url: "https://mycode.jp/my/research/results/gwas-lifestyle-2022", name: "日本人の食習慣や睡眠に関わる遺伝的特徴を発見"},
  {url: "https://mycode.jp/survey/research/influenza21-23", name: "【2021-2023年】インフルエンザ"},
  {url: "https://mycode.jp/survey/research/restless-legs-syndrome", name: "むずむず脚症候群（レストレスレッグス症候群）"},
  {url: "https://mycode.jp/survey/research/medical-history", name: "あなたの病歴・家族の病歴"},
  {url: "https://mycode.jp/survey/research/geographical-information", name: "地理的情報についてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/norovirus", name: "ノロウイルス耐性についてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/height", name: "身長についてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/drinking-coffee", name: "コーヒー摂取傾向についてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/dental-caries", name: "虫歯についてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/birth-body-size", name: "出生時の体のサイズについてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/androgenetic-alopecia", name: "男性型脱毛症（既往歴を含む）"},
  {url: "https://mycode.jp/survey/research/dominant-eye", name: "利き目についてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/dry-eye", name: "ドライアイについてのアンケートの集計状況"},
  {url: "https://mycode.jp/survey/research/drinking", name: "飲酒歴についてのアンケートの集計状況"},
  {url: "https://mycode.jp/research-portal/hx89GKv7j", name: "MYCODE Research 研究プロジェクト参加者ページ"},
];

// MYCODE Findings
const MYCODEFindingsUrls = [
  {url: "https://mycode.jp/findings.html?int=gmenu", name: "MYCODE Findings"},
  {url: "https://mycode.jp/my/findings/computer-vision-syndrome.html", name: "眼の症状に関する研究"},
  {url: "https://mycode.jp/my/findings/gwas-gutmicrobiota.html", name: "腸内細菌に関する研究"},
];

// MYCODEセミナー
const MYCODESeminarsUrls = [
  {url: "https://mycode.jp/seminars.html?int=gmenu", name: "MYCODEセミナー"},
  {url: "https://mycode.jp/topics/life/hygiene/cold_constitution_211215.html?int=/seminars", name: "冷え症の原因と対策は？漢方医が解説～ノーベル医学生理学賞から冷え症を考える～【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/genes/research/gene_editing_200820.html?int=/seminars", name: "ゲノム編集とは何か？～農作物開発の現在と未来～【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/life/hygiene/lactic_acid_bacteria_200219.html?int=/seminars", name: "知っているようで知らない乳酸菌、健康に良い理由とは？【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/life/hygiene/sleeptech_200130.html?int=/seminars", name: "今さら聞けない、睡眠と健康の関係とは？専門家が教えます【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/life/hygiene/food_additive_191219.html?int=/seminars", name: "食品添加物って危険？安全？専門家に聞く正しいリスクの評価方法とは【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/life/neutral-fat/dyslipidemia_191113.html?int=/seminars", name: "コレステロール値が高いと何が問題なの！？医師が解説する正しい対策とは【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/diseases/symptom/fatty_liver_191017.html?int=/seminars", name: "なぜ日本人に脂肪肝が多いのか？～脂肪肝と遺伝子多型～【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/diseases/dementia/brain_training_190731.html?int=/seminars", name: "脳を鍛えて、健康に年を取る！「脳トレ」とスマート・エイジングの可能性を川島教授、大いに語る【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/physical/constitution/gut_microbiota_190717.html?int=/seminars", name: "腸内フローラで健康管理ができる？最新研究から読み解く腸内細菌の機能と可能性【MYCODEセミナーレポート】"},
  {url: "https://mycode.jp/topics/genes/genetic-test/discovery_190526.html?int=/seminars", name: "日本人はどこから来たのか？ ～MYCODEセミナー「ミトコンドリアDNAでたどる日本人のルーツ」【レポート】"},
];

function getContentUrls() {
  return [
    { title: "サービス終了のお知らせ", links: terminationUrls },
    { title: "アカウント", links: accountUrls },
    { title: "検査結果", links: testResultsUrls },
    { title: "生活習慣サポート", links: lifestyleSupportUrls },
    { title: "オプション", links: optionUrls },
    { title: "MYCODE fumfum", links: contentsfumfumUrls },
    { title: "遺伝子検査のご説明", links: geneticTestingUrls },
    { title: "MYCODEの特徴", links: MYCODEfeatureUrls },
    { title: "検査メニュー", links: MYCODEexaminationUrls },
    { title: "私たちについて", links: MYCODEcompanyUrls },
    { title: "MYCODEトピックス", links: MYCODEtopicsUrls},
    { title: "MYCODE Research", links: MYCODEresearchUrls},
    { title: "MYCODE Findings", links: MYCODEFindingsUrls},
    { title: "MYCODE セミナー", links: MYCODESeminarsUrls},
  ];
}
  
module.exports = {
  getContentUrls,
};
  