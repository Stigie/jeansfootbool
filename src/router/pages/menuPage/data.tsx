import { LeftControl, RigthControl } from "./styles";
import React from "react";

const menu = [
  {
    name: "Пас",
    item: (
      <LeftControl
        key={"Пас"}
        source={require("./assets/pas.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "УПРАЖНЕНИЕ НА ПАС ДЛЯ НОВИЧКОВ► Exercise on the ball",
        key: "3j6pWm5yQFw"
      },
      {
        name: "ЛУЧШЕЕ УПРАЖНЕНИЕ на ТОЧНЫЙ  НАВЕС И ПАС",
        key: "m1urLs0QYtg"
      }
    ]
  },
  {
    name: "Панна",
    item: (
      <RigthControl
        key={"Панна"}
        source={require("./assets/panna.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "ЛУЧШИЕ ПАННА ФИНТЫ / Обучение для НОВИЧКОВ",
        key: "cXfsta_0WII"
      },
      {
        name: "TRAINING THE PANNA FOR THE CHIPS FOR NEWBIES",
        key: "8KBqoVi8Izw"
      },
      {
        name: "ПАННА ОБУЧЕНИЕ ● ФИШКИ ДЛЯ НОВИЧКОВ ● PANNA TUTORIAL SKILL",
        key: "gygZwLGp958"
      },
      {
        name:
          "ПОКАЖИ СЕБЯ НА ПОЛЕ● ПАННА ФИШКИ ДЛЯ НОВИЧКОВ ОБУЧЕНИЕ/ PANNA SKILL TUTORIAL",
        key: "TUYP-5FpkA4"
      },
      {
        name: "ЭТИ НАВЫКИ в ПАННА ПОМОГУТ ТЕБЕ УДИВИТЬ ЛЮБОГО",
        key: "tIezPWq7jDI"
      },
      {
        name: "ПАННА ОБУЧЕНИЕ ● ФИШКИ ДЛЯ НОВИЧКОВ ● PANNA TUTORIAL SKILL",
        key: "dh0RtDmOYJU"
      },
      {
        name: "САМАЯ КРУТАЯ ФИШКА В ФУТБОЛЕ ТЕЛЕПОРТ от Séan Garnier/ОБУЧЕНИ",
        key: "tJApc1DRQWI"
      }
    ]
  },
  {
    name: "Чеканка",
    item: (
      <LeftControl
        key={"Чеканка"}
        source={require("./assets/chekanka.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "ЛУЧШИЕ УПРАЖНЕНИЯ на ЧЕКАНКУ МЯЧА / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        key: "KNp00rLD8sI"
      }
    ]
  },
  {
    name: "Фристайл",
    item: (
      <RigthControl
        key={"Фристайл"}
        source={require("./assets/fristayl.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name:
          "БАЗОВОЕ ОБУЧЕНИЕ КРОССОВЕРУ ЗА 1 МИНУТУ?! ЛЕГКО/ У ТЕБЯ ТОЖЕ ПОЛУЧИТСЯ",
        key: "-q-YgNbdjB4"
      },
      {
        name: "ОБУЧЕНИЕ ATW ЗА 3 МИНУТЫ?? ЛЕГКО! ATW TUTORIAL SKILL",
        key: "3ykIQJwu56Y"
      },
      {
        name: "САМАЯ ЭФФЕКТНАЯ ФИШКА ОТ РОНАЛДИНЬО● ОБУЧЕНИЕ СКОРПИОНУ ●",
        key: "Ei8uHqUU3DE"
      }
    ]
  },
  {
    name: "Прием мяча",
    item: (
      <LeftControl
        key={"Прием мяча"}
        source={require("./assets/priem_myacha.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "ДВА ЛУЧШИХ УПРАЖНЕНИЯ НА ОБРАБОТКУ И ПРИЕМ МЯЧА",
        key: "4Dr4esVZWlo"
      }
    ]
  },
  {
    name: "Навес",
    item: (
      <RigthControl
        key={"Навес"}
        source={require("./assets/naves.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "ЛУЧШЕЕ УПРАЖНЕНИЕ на ТОЧНЫЙ НАВЕС И ПАС",
        key: "m1urLs0QYtg"
      },
      {
        name: "ЛУЧШИЙ ЛАЙФХАК на ТОЧНУЮ ПЕРЕДАЧУ",
        key: "0ijMSVgC_-4"
      }
    ]
  },
  {
    name: "Реализация моментов",
    item: (
      <LeftControl
        key={"Реализация моментов"}
        source={require("./assets/realiz_moment.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name:
          "100% РЕАЛИЗАЦИЯ | ОБУЧЕНИЕ ПЕНАЛЬТИ ДЛЯ НОВИЧКОВ ОТ АНРИ И ГАРНЬЕ►TUTORIAL HENRY AND GARNIER",
        key: "yVqGd-VZC5M"
      },
      {
        name:
          "КАК ЗАБИТЬ 1 НА 1 СО 100% ГАРАНТИЕЙ / ОБУЧЕНИЕ ДЛЯ НАЧИНАЮЩИХ /РЕАЛИЗУЙ СВОЙ МОМЕНТ",
        key: "3ouw2OReQRU"
      }
    ]
  },
  {
    name: "Удар",
    item: (
      <RigthControl
        key={"Удар"}
        source={require("./assets/udar.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "КАК ПОСТАВИТЬ ХОРОШИЙ УДАР в ИГРЕ",
        key: "eGLVZbpGjuA"
      },
      {
        name:
          "НАУЧИСЬ КРУТИТЬ С ОСТРОГО УГЛА КАК ФРЭНК ЛЭМПАРД! СУПЕР ГОЛ ⚽ FRANK LAMPARD SKILL",
        key: "-B5VPfXEvWY"
      }
    ]
  },
  {
    name: "Вратарь",
    item: (
      <LeftControl
        key={"Вратарь"}
        source={require("./assets/vratar.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "ЛУЧШИЕ УПРАЖНЕНИЯ ДЛЯ ВРАТАРЯ / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        key: "CuCLuM4g1PI"
      },
      {
        name: "САМЫЕ УЖАСНЫЕ ОШИБКИ В ИГРЕ / НИКОГДА ТАК НЕ ДЕЛАЙ",
        key: "lZZkBgcRn3k"
      }
    ]
  },
  {
    name: "Финты",
    item: (
      <RigthControl
        key={"Финты"}
        source={require("./assets/finty.png")}
        resizeMode={"cover"}
      />
    ),
    children: [
      {
        name: "СУПЕР ФИНТ NINJA AKKA / ОБЫГРАЕШЬ ЛЮБОГО",
        key: "cJdI77vk16Y"
      },
      {
        name: "ТЬЯГО АЛЬКАНТАРА и ЕГО ФИНТ / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        key: "Q3AKW9PAwyA"
      },
      {
        name: "ЛУЧШИЙ ФИНТ АЛИСОНА и НЕЙМАРА / ОБУЧЕНИЕ для НОВИЧКОВ",
        key: "PUuG7bBHvXk"
      },
      {
        name: "ЛУЧШИЙ ФИНТ ИБРАГИМОВИЧА / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        key: "kbxTOw-5rKk"
      },
      {
        name: "ЛУЧШИЕ ФИНТЫ ДЛЯ НОВИЧКОВ со 100% ПРОХОДИМОСТЬЮ",
        key: "MtJTGlN1f0Y"
      },
      {
        name: "ЛЕГКИЕ ФИНТЫ ДЛЯ КРУТОЙ ИГРЫ / ОБУЧЕНИЕ ДЛЯ НОВИЧКОВ",
        key: "YLs-q4s_WPE"
      },
      {
        name: "УДИВИ ВСЕХ НА ТРЕНИРОВКЕ / ОБУЧЕНИЕ ПО ФУТБОЛУ",
        key: "aU0fZ4QXb4g"
      },
      {
        name: "КРИШТИАНУ РОНАЛДУ И ЕГО ХИТРЫЕ ФИНТЫ / ОБУЧЕНИЕ ФУТБОЛУ",
        key: "CGmuVROoe_s"
      },
      {
        name:
          "ОБУЧЕНИЕ РАДУГЕ НЕЙМАРА И ЗНАМЕНИТОМУ ФИНТУ РОНАЛДИНЬО ДЛЯ НОВИЧКОВ",
        key: "DqnLr6xPve4"
      },
      {
        name: "ЛОЖНАЯ РАБОНА от RONALDO и AKKA / ОБУЧЕНИЕ ДЛЯ ШКОЛЬНИКОВ",
        key: "uKcbVmTgZkg"
      },
      {
        name:
          "СПИННЕР В ФУТБОЛЕ ЗА 1 МИНУТУ/SPINNER IN FOOTBAL TUTORIAL ONE MOMENT",
        key: "ubCRZCM0Svg"
      },
      {
        name: "ФИНТЫ ДЛЯ НОВИЧКОВ ОТ POGBA И ZkeyANE",
        key: "_crTwKlTm_8"
      }
    ]
  },
  {
    name: "Дриблинг",
    item: (
      <LeftControl
        key={"Дриблинг"}
        source={require("./assets/dribling.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name:
          "МОЛОДОЙ КРИШТИАНУ РОНАЛДУ ОБУЧАЕТ ТЕХНИКЕ ● ТАК ДОЛЖЕН УМЕТЬ ДЕЛАТЬ КАЖДЫЙ ФУТБОЛИСТ",
        key: "QNUNUUcbbHE"
      },
      {
        name: "КОНТРОЛЬ И ДРИБЛИНГ В ТВОЕЙ ИГРЕ",
        key: "mNMZt0CfvWE"
      }
    ]
  },
  {
    name: "Тренер",
    item: (
      <RigthControl
        key={"Тренер"}
        source={require("./assets/trener.png")}
        resizeMode={"stretch"}
      />
    ),
    children: [
      {
        name: "Я ТРЕНЕР на ПЕРВОМ КАНАЛЕ / ГОТОВЛЮ БЛОНДИНКУ К ЧМ-2018",
        key: "6GzNOfDWnSg"
      },
      {
        name: "ТРЕНЕР БЛОГЕРОВ /ОБУЧЕНИЕ ФИНТАМ",
        key: "x6L-ihq32x0"
      },
      {
        name: "ТРЕНЕР / ОБУЧЕНИЕ ЭЛАСТИКО, ПРИЕМУ МЯЧА, И НОЖНИЦАМ",
        key: "276ljWp3CZI"
      }
    ]
  }
];

export default menu