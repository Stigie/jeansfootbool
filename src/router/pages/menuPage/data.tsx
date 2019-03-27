import { LeftControl, RigthControl } from "./styles";

const menu = [
  {
    name: "Пас",
    item: (
      <LeftControl
        key={"Пас"}
        source={require("./assets/pas.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "УПРАЖНЕНИЕ НА ПАС ДЛЯ НОВИЧКОВ► Exercise on the ball",
        id: "3j6pWm5yQFw"
      },
      {
        name: "ЛУЧШЕЕ УПРАЖНЕНИЕ на ТОЧНЫЙ  НАВЕС И ПАС",
        id: "m1urLs0QYtg"
      }
    ]
  },
  {
    name: "Панна",
    item: (
      <RigthControl
        key={"Панна"}
        source={require("./assets/panna.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "ЛУЧШИЕ ПАННА ФИНТЫ / Обучение для НОВИЧКОВ",
        id: "cXfsta_0WII"
      },
      {
        name: "TRAINING THE PANNA FOR THE CHIPS FOR NEWBIES",
        id: "8KBqoVi8Izw"
      },
      {
        name: "ПАННА ОБУЧЕНИЕ ● ФИШКИ ДЛЯ НОВИЧКОВ ● PANNA TUTORIAL SKILL",
        id: "gygZwLGp958"
      },
      {
        name:
          "ПОКАЖИ СЕБЯ НА ПОЛЕ● ПАННА ФИШКИ ДЛЯ НОВИЧКОВ ОБУЧЕНИЕ/ PANNA SKILL TUTORIAL",
        id: "TUYP-5FpkA4"
      },
      {
        name: "ЭТИ НАВЫКИ в ПАННА ПОМОГУТ ТЕБЕ УДИВИТЬ ЛЮБОГО",
        id: "tIezPWq7jDI"
      },
      {
        name: "ПАННА ОБУЧЕНИЕ ● ФИШКИ ДЛЯ НОВИЧКОВ ● PANNA TUTORIAL SKILL",
        id: "dh0RtDmOYJU"
      },
      {
        name: "САМАЯ КРУТАЯ ФИШКА В ФУТБОЛЕ ТЕЛЕПОРТ от Séan Garnier/ОБУЧЕНИ",
        id: "tJApc1DRQWI"
      }
    ]
  },
  {
    name: "Чеканка",
    item: (
      <LeftControl
        key={"Чеканка"}
        source={require("./assets/chekanka.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "ЛУЧШИЕ УПРАЖНЕНИЯ на ЧЕКАНКУ МЯЧА / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        id: "KNp00rLD8sI"
      }
    ]
  },
  {
    name: "Фристайл",
    item: (
      <RigthControl
        key={"Фристайл"}
        source={require("./assets/fristayl.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name:
          "БАЗОВОЕ ОБУЧЕНИЕ КРОССОВЕРУ ЗА 1 МИНУТУ?! ЛЕГКО/ У ТЕБЯ ТОЖЕ ПОЛУЧИТСЯ",
        id: "-q-YgNbdjB4"
      },
      {
        name: "ОБУЧЕНИЕ ATW ЗА 3 МИНУТЫ?? ЛЕГКО! ATW TUTORIAL SKILL",
        id: "3ykIQJwu56Y"
      },
      {
        name: "САМАЯ ЭФФЕКТНАЯ ФИШКА ОТ РОНАЛДИНЬО● ОБУЧЕНИЕ СКОРПИОНУ ●",
        id: "Ei8uHqUU3DE"
      }
    ]
  },
  {
    name: "Прием мяча",
    item: (
      <LeftControl
        key={"Прием мяча"}
        source={require("./assets/priem_myacha.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "ДВА ЛУЧШИХ УПРАЖНЕНИЯ НА ОБРАБОТКУ И ПРИЕМ МЯЧА",
        id: "4Dr4esVZWlo"
      }
    ]
  },
  {
    name: "Навес",
    item: (
      <RigthControl
        key={"Навес"}
        source={require("./assets/naves.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "ЛУЧШЕЕ УПРАЖНЕНИЕ на ТОЧНЫЙ НАВЕС И ПАС",
        id: "m1urLs0QYtg"
      },
      {
        name: "ЛУЧШИЙ ЛАЙФХАК на ТОЧНУЮ ПЕРЕДАЧУ",
        id: "0ijMSVgC_-4"
      }
    ]
  },
  {
    name: "Реализация моментов",
    item: (
      <LeftControl
        key={"Реализация моментов"}
        source={require("./assets/realiz_moment.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name:
          "100% РЕАЛИЗАЦИЯ | ОБУЧЕНИЕ ПЕНАЛЬТИ ДЛЯ НОВИЧКОВ ОТ АНРИ И ГАРНЬЕ►TUTORIAL HENRY AND GARNIER",
        id: "yVqGd-VZC5M"
      },
      {
        name:
          "КАК ЗАБИТЬ 1 НА 1 СО 100% ГАРАНТИЕЙ / ОБУЧЕНИЕ ДЛЯ НАЧИНАЮЩИХ /РЕАЛИЗУЙ СВОЙ МОМЕНТ",
        id: "3ouw2OReQRU"
      }
    ]
  },
  {
    name: "Удар",
    item: (
      <RigthControl
        key={"Удар"}
        source={require("./assets/udar.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "КАК ПОСТАВИТЬ ХОРОШИЙ УДАР в ИГРЕ",
        id: "eGLVZbpGjuA"
      },
      {
        name:
          "НАУЧИСЬ КРУТИТЬ С ОСТРОГО УГЛА КАК ФРЭНК ЛЭМПАРД! СУПЕР ГОЛ ⚽ FRANK LAMPARD SKILL",
        id: "-B5VPfXEvWY"
      }
    ]
  },
  {
    name: "Вратарь",
    item: (
      <LeftControl
        key={"Вратарь"}
        source={require("./assets/vratar.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "ЛУЧШИЕ УПРАЖНЕНИЯ ДЛЯ ВРАТАРЯ / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        id: "CuCLuM4g1PI"
      },
      {
        name: "САМЫЕ УЖАСНЫЕ ОШИБКИ В ИГРЕ / НИКОГДА ТАК НЕ ДЕЛАЙ",
        id: "lZZkBgcRn3k"
      }
    ]
  },
  {
    name: "Финты",
    item: (
      <RigthControl
        key={"Финты"}
        source={require("./assets/finty.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "СУПЕР ФИНТ NINJA AKKA / ОБЫГРАЕШЬ ЛЮБОГО",
        id: "cJdI77vk16Y"
      },
      {
        name: "ТЬЯГО АЛЬКАНТАРА и ЕГО ФИНТ / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        id: "Q3AKW9PAwyA"
      },
      {
        name: "ЛУЧШИЙ ФИНТ АЛИСОНА и НЕЙМАРА / ОБУЧЕНИЕ для НОВИЧКОВ",
        id: "PUuG7bBHvXk"
      },
      {
        name: "ЛУЧШИЙ ФИНТ ИБРАГИМОВИЧА / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        id: "kbxTOw-5rKk"
      },
      {
        name: "ЛУЧШИЕ ФИНТЫ ДЛЯ НОВИЧКОВ со 100% ПРОХОДИМОСТЬЮ",
        id: "MtJTGlN1f0Y"
      },
      {
        name: "ЛЕГКИЕ ФИНТЫ ДЛЯ КРУТОЙ ИГРЫ / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        id: "YLs-q4s_WPE"
      },
      {
        name: "УДИВИ ВСЕХ НА ТРЕНИРОВКЕ / ОБУЧЕНИЕ ПО ФУТБОЛУ",
        id: "aU0fZ4QXb4g"
      },
      {
        name: "КРИШТИАНУ РОНАЛДУ И ЕГО ХИТРЫЕ ФИНТЫ / ОБУЧЕНИЕ ФУТБОЛУ",
        id: "CGmuVROoe_s"
      },
      {
        name:
          "ОБУЧЕНИЕ РАДУГЕ НЕЙМАРА И ЗНАМЕНИТОМУ ФИНТУ РОНАЛДИНЬО ДЛЯ НОВИЧКОВ",
        id: "DqnLr6xPve4"
      },
      {
        name: "ЛОЖНАЯ РАБОНА от RONALDO и AKKA / ОБУЧЕНИЕ ДЛЯ ШКОЛЬНИКОВ",
        id: "uKcbVmTgZkg"
      },
      {
        name:
          "СПИННЕР В ФУТБОЛЕ ЗА 1 МИНУТУ/SPINNER IN FOOTBAL TUTORIAL ONE MOMENT",
        id: "ubCRZCM0Svg"
      },
      {
        name: "ФИНТЫ ДЛЯ НОВИЧКОВ ОТ POGBA И ZIDANE",
        id: "_crTwKlTm_8"
      }
    ]
  },
  {
    name: "Дриблинг",
    item: (
      <LeftControl
        key={"Дриблинг"}
        source={require("./assets/dribling.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name:
          "МОЛОДОЙ КРИШТИАНУ РОНАЛДУ ОБУЧАЕТ ТЕХНИКЕ ● ТАК ДОЛЖЕН УМЕТЬ ДЕЛАТЬ КАЖДЫЙ ФУТБОЛИСТ",
        id: "QNUNUUcbbHE"
      },
      {
        name: "КОНТРОЛЬ И ДРИБЛИНГ В ТВОЕЙ ИГРЕ",
        id: "mNMZt0CfvWE"
      }
    ]
  },
  {
    name: "Тренер",
    item: (
      <RigthControl
        key={"Тренер"}
        source={require("./assets/trener.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "Я ТРЕНЕР на ПЕРВОМ КАНАЛЕ / ГОТОВЛЮ БЛОНДИНКУ К ЧМ-2018",
        id: "6GzNOfDWnSg"
      },
      {
        name: "ТРЕНЕР БЛОГЕРОВ /ОБУЧЕНИЕ ФИНТАМ",
        id: "x6L-ihq32x0"
      },
      {
        name: "ТРЕНЕР / ОБУЧЕНИЕ ЭЛАСТИКО, ПРИЕМУ МЯЧА, И НОЖНИЦАМ",
        id: "276ljWp3CZI"
      }
    ]
  }
];

export default menu