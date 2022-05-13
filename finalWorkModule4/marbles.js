'use strict';

(() => {
  const game = () => {
    let step = true;
    let playerCountBalls = 5;
    let compCountBalls = 5;
    let winner;
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

    return function start() {
      const rpsGame = (language) => {
        const result = {
          player: 0,
          computer: 0,
        };
        const lang = language === 'EN' || language === 'ENG' ?
        figuresEng : figuresRu;
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
        if (yourChoice.charAt(0) === lang[0].charAt(0)) {
          yourChoice = lang[0];
        } else if (yourChoice.charAt(0) === lang[1].charAt(0)) {
          yourChoice = lang[1];
        } else if (yourChoice.charAt(0) === lang[2].charAt(0)) {
          yourChoice = lang[2];
        }
        yourChoice = yourChoice.toLowerCase();
        if (yourChoice.charAt(0) !== lang[0].charAt(0) &&
        yourChoice.charAt(0) !== lang[1].charAt(0) &&
        yourChoice.charAt(0) !== lang[2].charAt(0)) {
          alert(`${lang[10]}`);
        } else if (yourChoice.charAt(0) === computerChoice.charAt(0)) {
          alert(`${lang[4]}: ${computerChoice}
          ${lang[5]}: ${yourChoice}
          ${lang[11]}`);
        } else if (yourChoice.charAt(0) === lang[1].charAt(0) &&
        computerChoice === lang[0] ||
        yourChoice.charAt(0) === lang[0].charAt(0) &&
        computerChoice === lang[2] ||
        yourChoice.charAt(0) === lang[2].charAt(0) &&
        computerChoice === lang[1]) {
          result.player++;
          alert(`${lang[4]}: ${computerChoice}
          ${lang[5]}: ${yourChoice}
          ${lang[6]}`);
        } else {
          result.computer++;
          alert(`${lang[4]}: ${computerChoice}
          ${lang[5]}: ${yourChoice}
          ${lang[7]}`);
        }
        if (result.computer === 0 && result.player === 0) {
          rpsGame();
        } else if (result.computer === 1) {
          return step = false;
        } else if (result.player === 1) {
          return step = true;
        }
      };
      const startBalloon = () => {
        const compEvenOdd = Math.round(Math.random());
        const guessCompBalls =
        Math.round(Math.random() * (compCountBalls - 1) + 1);
        console.log(`Количество шариков:
  у компа: ${compCountBalls}
  у игрока: ${playerCountBalls}`);
        if (step) {
          const guessPlayerBalls = +prompt(
              `Введите количество шариков от 1 до ${playerCountBalls}`);
          if (guessPlayerBalls === 0 || guessPlayerBalls > playerCountBalls ||
              isNaN(guessPlayerBalls)) {
            alert('Неверное количество');
          } else {
            if (guessPlayerBalls % 2 === 0 && compEvenOdd === 1 ||
              guessPlayerBalls % 2 !== 0 && compEvenOdd === 0) {
              playerCountBalls += guessPlayerBalls;
              compCountBalls -= guessPlayerBalls;
              alert(`Вы выиграли ${guessPlayerBalls} шт.`);
            } else {
              playerCountBalls -= guessPlayerBalls;
              compCountBalls += guessPlayerBalls;
              alert(`Вы проиграли ${guessPlayerBalls} шт.`);
            }
            step = !step;
          }
        } else {
          if (confirm(`Да - чёт, отмена - нечет`)) {
            if (guessCompBalls % 2 === 0) {
              alert(`Вы угадали! Компьютер выбрал чёт
              и отдаёт вам: ${guessCompBalls} шт.`);
              playerCountBalls += guessCompBalls;
              compCountBalls -= guessCompBalls;
            } else {
              alert(`Вы не угадали компьютер выбрал нечет
              и забирает у вас: ${guessCompBalls} шт.`);
              playerCountBalls -= guessCompBalls;
              compCountBalls += guessCompBalls;
            }
          } else {
            if (guessCompBalls % 2 !== 0) {
              alert(`Вы угадали! Компьютер выбрал нечет
                и отдаёт вам: ${guessCompBalls} шт.`);
              playerCountBalls += guessCompBalls;
              compCountBalls -= guessCompBalls;
            } else {
              alert(`Вы угадали компьютер выбрал чёт
              и забирает у вас: ${guessCompBalls} шт.`);
              playerCountBalls -= guessCompBalls;
              compCountBalls += guessCompBalls;
            }
          }
          step = true;
        }
        if (playerCountBalls >= 10) {
          winner = 'Вы победили';
        } else if (compCountBalls >= 10) {
          winner = 'Вы проиграли';
        }
        if (playerCountBalls >= 10 || compCountBalls >= 10) {
          alert(`${winner}`);
          if (confirm(`сыграть по новой?`)) {
            playerCountBalls = 5;
            compCountBalls = 5;
            rpsGame();
          } else {
            return;
          }
        }
        startBalloon();
      };
      rpsGame();
      startBalloon();
    };
  };
  window.marbles = game;
})();


const startGame = window.marbles();
startGame();

