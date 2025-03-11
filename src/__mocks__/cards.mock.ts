import { Card, CardDTO } from "@/types/Card";

export const mockedCardsDTO: CardDTO[] = [
  {
    name: "Ancestor's Chosen",
    manaCost: "{5}{W}{W}",
    cmc: 7,
    colors: ["W"],
    colorIdentity: ["W"],
    type: "Creature — Human Cleric",
    types: ["Creature"],
    subtypes: ["Human", "Cleric"],
    rarity: "Uncommon",
    set: "10E",
    setName: "Tenth Edition",
    text: "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
    artist: "Pete Venters",
    number: "1",
    power: "4",
    toughness: "4",
    layout: "normal",
    multiverseid: "130550",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
    variations: ["b7c19924-b4bf-56fc-aa73-f586e940bd42"],
    foreignNames: [
      {
        name: "Ausgewählter der Ahnfrau",
        text: "Erstschlag (Diese Kreatur fügt Kampfschaden vor Kreaturen ohne Erstschlag zu.)\nWenn der Ausgewählte der Ahnfrau ins Spiel kommt, erhältst du 1 Lebenspunkt für jede Karte in deinem Friedhof dazu.",
        type: "Kreatur — Mensch, Kleriker",
        flavor: '„Es ist der Wille aller, und meine Hand, die ihn ausführt."',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148411&type=card",
        language: "German",
        identifiers: {
          scryfallId: "c8d214a2-6bce-4a31-a346-7d9831ff068c",
          multiverseId: 148411,
        },
        multiverseid: 148411,
      },
      {
        name: "Elegido de la Antepasada",
        text: "Daña primero. (Esta criatura hace daño de combate antes que las criaturas sin la habilidad de dañar primero.)\nCuando el Elegido de la Antepasada entre en juego, ganas 1 vida por cada carta en tu cementerio.",
        type: "Criatura — Clérigo humano",
        flavor: '"La voluntad de todos, realizada por mi mano."',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150317&type=card",
        language: "Spanish",
        identifiers: {
          scryfallId: "3f227aa5-cacf-47d0-917a-c6de07ec4fb3",
          multiverseId: 150317,
        },
        multiverseid: 150317,
      },
      {
        name: "Élu de l'Ancêtre",
        text: "Initiative (Cette créature inflige des blessures de combat avant les créatures sans l'initiative.)\nQuand l'Élu de l'Ancêtre arrive en jeu, vous gagnez 1 point de vie pour chaque carte dans votre cimetière.",
        type: "Créature : humain et clerc",
        flavor: "« La volonté de tous passe par ma main. »",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149934&type=card",
        language: "French",
        identifiers: {
          scryfallId: "03da122a-4487-4dcb-94e1-7029206d583c",
          multiverseId: 149934,
        },
        multiverseid: 149934,
      },
      {
        name: "Prescelto dell'Antenata",
        text: "Attacco improvviso (Questa creatura infligge danno da combattimento prima delle creature senza attacco improvviso.)\nQuando il Prescelto dell'Antenata entra in gioco, guadagni 1 punto vita per ogni carta nel tuo cimitero.",
        type: "Creatura — Chierico Umano",
        flavor: '"La volontà di tutti, eseguita per mano mia."',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148794&type=card",
        language: "Italian",
        identifiers: {
          scryfallId: "3d078ccc-7d64-42ab-9631-f3270ec1bec1",
          multiverseId: 148794,
        },
        multiverseid: 148794,
      },
      {
        name: "祖神に選ばれし者",
        text: "先制攻撃 （このクリーチャーは先制攻撃を持たないクリーチャーよりも先に戦闘ダメージを与える。）\n祖神に選ばれし者が場に出たとき、あなたはあなたの墓地にあるカード１枚につき１点のライフを得る。",
        type: "クリーチャー — 人間・クレリック",
        flavor: "すべての意思を、この手で成そう。",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148028&type=card",
        language: "Japanese",
        identifiers: {
          scryfallId: "6eac08c0-9201-4931-9b41-f3814c8449d6",
          multiverseId: 148028,
        },
        multiverseid: 148028,
      },
      {
        name: "Eleito da Ancestral",
        text: "Iniciativa (Esta criatura causa dano de combate antes de criaturas sem a habilidade de iniciativa.)\nQuando Eleito da Ancestral entra em jogo, você ganha 1 ponto de vida para cada card em seu cemitério.",
        type: "Criatura — Humano Clérigo",
        flavor: '"A vontade de todos pelas minhas mãos realizada."',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149551&type=card",
        language: "Portuguese (Brazil)",
        identifiers: {
          scryfallId: "fd447049-4cd9-4850-a7c0-6051f9672710",
          multiverseId: 149551,
        },
        multiverseid: 149551,
      },
      {
        name: "Избранник Прародителя",
        text: "Первый удар (Это существо наносит боевые повреждения раньше существ без Первого удара.)\nКогда Избранник Прародителя входит в игру, вы получаете 1 жизнь за каждую карту на вашем кладбище.",
        type: "Существо — Человек Священник",
        flavor: '"Общая воля моей рукой вершится".',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149168&type=card",
        language: "Russian",
        identifiers: {
          scryfallId: "a6b3f7cd-5a8a-441c-a84a-3a5d7ad860f9",
          multiverseId: 149168,
        },
        multiverseid: 149168,
      },
      {
        name: "祖灵的爱民",
        text: "先攻（此生物会比不具先攻异能的生物提前造成战斗伤害。）\n当祖灵的爱民进场时，你坟墓场中每有一张牌，你便获得1点生命。",
        type: "生物～人类／僧侣",
        flavor: "「众生所愿，吾手所圆。」",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=147645&type=card",
        language: "Chinese Simplified",
        identifiers: {
          scryfallId: "1e59f85a-ca42-46a1-a6aa-01bc9afd6f6c",
          multiverseId: 147645,
        },
        multiverseid: 147645,
      },
    ],
    printings: ["10E", "JUD", "UMA"],
    originalText:
      "First strike\nWhen Ancestor's Chosen comes into play, you gain 1 life for each card in your graveyard.",
    originalType: "Creature - Human Cleric",
    legalities: [
      {
        format: "Commander",
        legality: "Legal",
      },
      {
        format: "Duel",
        legality: "Legal",
      },
      {
        format: "Legacy",
        legality: "Legal",
      },
      {
        format: "Modern",
        legality: "Legal",
      },
      {
        format: "Oathbreaker",
        legality: "Legal",
      },
      {
        format: "Paupercommander",
        legality: "Restricted",
      },
      {
        format: "Penny",
        legality: "Legal",
      },
      {
        format: "Predh",
        legality: "Legal",
      },
      {
        format: "Premodern",
        legality: "Legal",
      },
      {
        format: "Vintage",
        legality: "Legal",
      },
    ],
    id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c",
  },
  {
    name: "Aven Cloudchaser",
    manaCost: "{3}{W}",
    cmc: 4.0,
    colors: ["W"],
    colorIdentity: ["W"],
    type: "Creature — Bird Soldier",
    types: ["Creature"],
    subtypes: ["Bird", "Soldier"],
    rarity: "Common",
    set: "10E",
    setName: "Tenth Edition",
    text: "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Cloudchaser enters the battlefield, destroy target enchantment.",
    artist: "Justin Sweet",
    number: "7",
    power: "2",
    toughness: "2",
    layout: "normal",
    multiverseid: "129470",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129470&type=card",
    variations: ["6adaf14d-43e3-521a-adf1-960c808e5b1a"],
    foreignNames: [
      {
        name: "Avior-Wolkenjäger",
        text: "Fliegend (Diese Kreatur kann außer von fliegenden Kreaturen und Kreaturen mit Reichweite nicht geblockt werden.)\nWenn der Avior-Wolkenjäger ins Spiel kommt, zerstöre eine Verzauberung deiner Wahl.",
        type: "Kreatur — Vogel, Soldat",
        flavor:
          '„Als es zur Neuverteilung kam, bat der Adler darum, Mensch werden zu dürfen. Die Ahnfrau gewährte das Gebet zur Hälfte." —Nomadenlegende',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148424&type=card",
        language: "German",
        identifiers: {
          scryfallId: "4d373600-f386-470a-805b-3ed5fc2d5cc0",
          multiverseId: 148424,
        },
        multiverseid: 148424,
      },
      {
        name: "Cazanubes aven",
        text: "Vuela. (Esta criatura no puede ser bloqueada excepto por criaturas que tengan la habilidad de volar o alcance.)\nCuando el Cazanubes aven entre en juego, destruye el encantamiento objetivo.",
        type: "Criatura — Soldado ave",
        flavor:
          '"En la Nueva Repartición, Águila suplicó ser humano. La Antepasada le concedió la mitad de esa súplica." —Mito nómada',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150323&type=card",
        language: "Spanish",
        identifiers: {
          scryfallId: "9a051f4b-1198-4724-9fcc-98ff393336e1",
          multiverseId: 150323,
        },
        multiverseid: 150323,
      },
      {
        name: "Avemain chasse-nuage",
        text: "Vol (Cette créature ne peut être bloquée que par des créatures avec le vol ou la portée.)\nQuand l'Avemain chasse-nuage arrive en jeu, détruisez l'enchantement ciblé.",
        type: "Créature : oiseau et soldat",
        flavor:
          "« Lors de la Grande Réattribution, les aigles demandèrent à devenir humains. L'Ancêtre exauça cette prière à moitié. » —Mythe des nomades",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149940&type=card",
        language: "French",
        identifiers: {
          scryfallId: "6d8fb627-197b-47f0-9655-bf16606fc5a5",
          multiverseId: 149940,
        },
        multiverseid: 149940,
      },
      {
        name: "Caccianubi Aviano",
        text: "Volare (Questa creatura non può essere bloccata tranne che da creature con volare o raggiungere.)\nQuando il Caccianubi Aviano entra in gioco, distruggi un incantesimo bersaglio.",
        type: "Creatura — Uccello Soldato",
        flavor:
          '"Durante la Ridistribuzione, le Aquile chiesero di diventare umane. Gli Antenati esaudirono solo in parte la loro preghiera." —Mito nomade',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148807&type=card",
        language: "Italian",
        identifiers: {
          scryfallId: "51f4eec5-245e-46b3-b4db-f6364738847a",
          multiverseId: 148807,
        },
        multiverseid: 148807,
      },
      {
        name: "雲を追うエイヴン",
        text: "飛行 （このクリーチャーは飛行や到達を持たないクリーチャーによってブロックされない。）\n雲を追うエイヴンが場に出たとき、エンチャント１つを対象とし、それを破壊する。",
        type: "クリーチャー — 鳥・兵士",
        flavor:
          "祖神が改めて生き物の数を決めたとき、鷲は人間になりたいと希望した。 祖神はその祈りを半分だけかなえてやった。 ――遊牧の民の神話",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148041&type=card",
        language: "Japanese",
        identifiers: {
          scryfallId: "51c86b1e-40cf-467b-9d39-f9e7434ea111",
          multiverseId: 148041,
        },
        multiverseid: 148041,
      },
      {
        name: "Caça-Nuvens Aviano",
        text: "Voar (Esta criatura só pode ser bloqueada por criaturas com a habilidade de voar ou alcance.)\nQuando Caça-Nuvens Aviano entrar em jogo, destrua o encantamento alvo.",
        type: "Criatura — Ave Soldado",
        flavor:
          '"Na nova Repartição, as Águias imploraram para ser humanas. A Ancestral concedeu metade daquela súplica." — Mito dos nômades',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149557&type=card",
        language: "Portuguese (Brazil)",
        identifiers: {
          scryfallId: "1d3726ee-d237-4e4e-b246-2f3e24b5f11e",
          multiverseId: 149557,
        },
        multiverseid: 149557,
      },
      {
        name: "Загонщик Облаков",
        text: "Полет (Это существо может быть заблокировано только существом с Полетом или Захватом.)\nКогда Загонщик Облаков входит в игру, уничтожьте целевые чары.",
        type: "Существо — Птица Солдат",
        flavor:
          '"На Великом распределении Орел умолял о том, чтобы стать человеком. Но Прародитель пожаловал лишь половину испрошенного". — Миф кочевников',
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149174&type=card",
        language: "Russian",
        identifiers: {
          scryfallId: "c3183808-8809-455b-8b72-27c447984059",
          multiverseId: 149174,
        },
        multiverseid: 149174,
      },
      {
        name: "艾文逐云战士",
        text: "飞行（只有具飞行或延势异能的生物才能阻挡它。）\n当艾文逐云战士进场时，消灭目标结界。",
        type: "生物～鸟／士兵",
        flavor:
          "「在分判日时，老鹰乞求成为人类。 圣祖灵仅允诺了半份祈愿。」 ～游牧人神话",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=147658&type=card",
        language: "Chinese Simplified",
        identifiers: {
          scryfallId: "3e1b42aa-81a4-4b5e-9565-2faf89ebe537",
          multiverseId: 147658,
        },
        multiverseid: 147658,
      },
    ],
    printings: ["10E", "8ED", "9ED", "ODY"],
    originalText:
      "Flying\nWhen Aven Cloudchaser comes into play, destroy target enchantment.",
    originalType: "Creature - Bird Soldier",
    legalities: [
      { format: "Commander", legality: "Legal" },
      { format: "Duel", legality: "Legal" },
      { format: "Legacy", legality: "Legal" },
      { format: "Modern", legality: "Legal" },
      { format: "Oathbreaker", legality: "Legal" },
      { format: "Pauper", legality: "Legal" },
      { format: "Paupercommander", legality: "Legal" },
      { format: "Penny", legality: "Legal" },
      { format: "Predh", legality: "Legal" },
      { format: "Premodern", legality: "Legal" },
      { format: "Vintage", legality: "Legal" },
    ],
    id: "8ac972b5-9f6e-5cc8-91c3-b9a40a98232e",
  },
];

export const mockedCards: Card[] = [
  {
    name: "Ancestor's Chosen",
    manaCost: "{5}{W}{W}",
    type: "Creature — Human Cleric",
    rarity: "Uncommon",
    set: "10E",
    text: "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
    illustrator: "Pete Venters",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
    id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c",
    colors: ["W"],
  },
  {
    name: "Aven Cloudchaser",
    manaCost: "{3}{W}",
    type: "Creature — Bird Soldier",
    rarity: "Common",
    set: "10E",
    text: "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Cloudchaser enters the battlefield, destroy target enchantment.",
    illustrator: "Justin Sweet",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129470&type=card",
    id: "8ac972b5-9f6e-5cc8-91c3-b9a40a98232e",
    colors: ["W"],
  },
];
