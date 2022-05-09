'use strict';

(() => {
  const figuresEng =
  ['rock', 'paper', 'scissors', 'More',
    'Computer choose', 'You choose', 'You win',
    'You lose', 'Player', 'Result',
    'You cannot do this', 'Draw', 'Are you sure you want to leave',
    'Computers wins', 'Your wins'];
  const figuresRu =
  ['камень', 'бумага', 'ножницы', 'Ещё',
    'Компьютер выбрал', 'Вы выбрали', 'Ты выиграл',
    'Ты проиграл', 'Игрок', 'Результат',
    'Так нельзя', 'Ничья', 'Вы точно хотите выйти', 'Побед компьютера',
    'Твои победы'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(3);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
    figuresEng : figuresRu;

    return function start() {
      let computerChoice = getRandomIntInclusive();
      if (computerChoice === 1) {
        computerChoice = lang[0];
      } else if (computerChoice === 2) {
        computerChoice = lang[1];
      } else if (computerChoice === 3) {
        computerChoice = lang[2];
      }
      console.log(computerChoice);
      let yourChoice = prompt(`${lang[0]},${lang[1]},${lang[2]}?`);
      if (yourChoice === null) {
        if (window.confirm(`${lang[12]}?`)) {
          alert(`${lang[9]}: 
          ${lang[8]}: ${result.player}
          ${lang[4]}: ${result.computer}`);
          return;
        } else {
          start();
        }
      }
      yourChoice = yourChoice.toLowerCase();
      if (yourChoice.charAt(0) !== lang[0].charAt(0) &&
      yourChoice.charAt(0) !== lang[1].charAt(0) &&
      yourChoice.charAt(0) !== lang[2].charAt(0)) {
        alert(`${lang[10]}`);
      }
      if (yourChoice.charAt(0) === computerChoice.charAt(0)) {
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${computerChoice}
        ${lang[11]}`);
      } else if (yourChoice.charAt(0) === lang[2].charAt(0) &&
      computerChoice === lang[0]) {
        result.computer++;
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${lang[2]}
        ${lang[7]}`);
      } else if (yourChoice.charAt(0) === lang[1].charAt(0) &&
      computerChoice === lang[0]) {
        result.player++;
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${lang[1]}
        ${lang[6]}`);
      } else if (yourChoice.charAt(0) === lang[1].charAt(0) &&
      computerChoice === lang[2]) {
        result.computer++;
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${lang[1]}
        ${lang[7]}`);
      } else if (yourChoice.charAt(0) === lang[0].charAt(0) &&
      computerChoice === lang[2]) {
        result.player++;
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${lang[0]}
        ${lang[6]}`);
      } else if (yourChoice.charAt(0) === lang[0].charAt(0) &&
      computerChoice === lang[1]) {
        result.computer++;
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${lang[0]}
        ${lang[7]}`);
      } else if (yourChoice.charAt(0) === lang[2].charAt(0) &&
      computerChoice === lang[1]) {
        result.player++;
        alert(`${lang[4]}: ${computerChoice}
        ${lang[5]}: ${lang[2]}
        ${lang[6]}`);
      }
      if (window.confirm(`${lang[3]}?`)) {
        start();
      } else {
        alert(`${lang[9]}: 
        ${lang[14]}: ${result.player}
        ${lang[13]}: ${result.computer}`);
        return;
      }
    };
  };
  window.rps = game;
})();
