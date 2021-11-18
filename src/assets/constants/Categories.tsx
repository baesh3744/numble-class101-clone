export const FIRST_CATEGORIES = [
    {
        name: "creative",
        children: ["digital", "drawing", "crafts", "dessert", "media"],
    },
    {
        name: "career",
        children: ["design", "writing"],
    },
];

export const SECOND_CATEGORIES = [
    // creative
    {
        name: "digital",
        children: ["character", "calligraphy"],
    },
    {
        name: "drawing",
        children: ["pen", "watercolor", "oilpastel"],
    },
    {
        name: "crafts",
        children: ["fabric", "soap", "flower"],
    },
    {
        name: "dessert",
        children: ["cake", "vegan"],
    },
    {
        name: "media",
        children: ["photo"],
    },
    // career
    {
        name: "design",
        children: ["brandDesign"],
    },
    {
        name: "writing",
        children: ["storytelling"],
    },
];

export const CATEGORY_EN2KO: { [key: string]: string } = {
    creative: "크리에이티브",

    digital: "디지털 드로잉",
    character: "캐릭터 드로잉",
    calligraphy: "캘리그라피",

    drawing: "드로잉",
    pen: "펜 · 연필",
    watercolor: "수채화",
    oilpastel: "오일파스텔",

    crafts: "공예",
    fabric: "패브릭 공예",
    soap: "비누 · 캔들 · 향",
    flower: "플라워 공예",

    dessert: "베이킹 · 디저트",
    cake: "케이크",
    vegan: "비건",

    media: "사진 · 영상",
    photo: "사진",

    career: "커리어",

    design: "디자인",
    brandDesign: "브랜드 디자인",

    writing: "글쓰기",
    storytelling: "스토리텔링",
};
