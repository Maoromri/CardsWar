


import { Component, Input, OnInit, } from '@angular/core';
import { Card } from 'src/app/interfaces/card';


@Component({
  selector: 'app-cards-war',
  templateUrl: './cards-war.component.html',
  styleUrls: ['./cards-war.component.scss'],
})
export class CardsWarComponent implements OnInit {
  cardDeck: Card[] = [
    {
      title: '2',
      value: 2,
      shape: 'club',
      src: '../../../assets/card img/2-p.png',
    },

    {
      title: '2',
      value: 2,
      shape: 'spade',
      src: '../../../assets/card img/2-s.png',
    },

    {
      title: '2',
      value: 2,
      shape: 'heart',
      src: '../../../assets/card img/2-h.png',
    },

    {
      title: '2',
      value: 2,
      shape: 'diamond',
      src: '../../../assets/card img/2-d.png',
    },

    {
      title: '3',
      value: 3,
      shape: 'club',
      src: '../../../assets/card img/3-p.png',
    },

    {
      title: '3',
      value: 3,
      shape: 'spade',
      src: '../../../assets/card img/3-s.png',
    },

    {
      title: '3',
      value: 3,
      shape: 'heart',
      src: '../../../assets/card img/3-h.png',
    },

    {
      title: '3',
      value: 3,
      shape: 'diamond',
      src: '../../../assets/card img/3-d.png',
    },

    {
      title: '4',
      value: 4,
      shape: 'club',
      src: '../../../assets/card img/4-p.png',
    },

    {
      title: '4',
      value: 4,
      shape: 'spade',
      src: '../../../assets/card img/4-s.png',
    },

    {
      title: '4',
      value: 4,
      shape: 'heart',
      src: '../../../assets/card img/4-h.png',
    },

    {
      title: '4',
      value: 4,
      shape: 'diamond',
      src: '../../../assets/card img/4-d.png',
    },

    {
      title: '5',
      value: 5,
      shape: 'club',
      src: '../../../assets/card img/5-p.png',
    },

    {
      title: '5',
      value: 5,
      shape: 'spade',
      src: '../../../assets/card img/5-s.png',
    },

    {
      title: '5',
      value: 5,
      shape: 'heart',
      src: '../../../assets/card img/5-h.png',
    },
    {
      title: '5',
      value: 5,
      shape: 'diamond',
      src: '../../../assets/card img/5-d.png',
    },

    {
      title: '6',
      value: 6,
      shape: 'club',
      src: '../../../assets/card img/6-p.png',
    },

    {
      title: '6',
      value: 6,
      shape: 'spade',
      src: '../../../assets/card img/6-s.png',
    },

    {
      title: '6',
      value: 6,
      shape: 'heart',
      src: '../../../assets/card img/6-h.png',
    },

    {
      title: '6',
      value: 6,
      shape: 'diamond',
      src: '../../../assets/card img/6-d.png',
    },

    {
      title: '7',
      value: 7,
      shape: 'club',
      src: '../../../assets/card img/7-p.png',
    },

    {
      title: '7',
      value: 7,
      shape: 'spade',
      src: '../../../assets/card img/7-s.png',
    },

    {
      title: '7',
      value: 7,
      shape: 'heart',
      src: '../../../assets/card img/7-h.png',
    },

    {
      title: '7',
      value: 7,
      shape: 'diamond',
      src: '../../../assets/card img/7-d.png',
    },

    {
      title: '8',
      value: 8,
      shape: 'club',
      src: '../../../assets/card img/8-p.png',
    },

    {
      title: '8',
      value: 8,
      shape: 'spade',
      src: '../../../assets/card img/8-s.png',
    },

    {
      title: '8',
      value: 8,
      shape: 'heart',
      src: '../../../assets/card img/8-h.png',
    },

    {
      title: '8',
      value: 8,
      shape: 'diamond',
      src: '../../../assets/card img/8-d.png',
    },

    {
      title: '9',
      value: 9,
      shape: 'club',
      src: '../../../assets/card img/9-p.png',
    },

    {
      title: '9',
      value: 9,
      shape: 'spade',
      src: '../../../assets/card img/9-s.png',
    },

    {
      title: '9',
      value: 9,
      shape: 'heart',
      src: '../../../assets/card img/9-h.png',
    },

    {
      title: '9',
      value: 9,
      shape: 'diamond',
      src: '../../../assets/card img/9-d.png',
    },

    {
      title: '10',
      value: 10,
      shape: 'club',
      src: '../../../assets/card img/10-p.png',
    },

    {
      title: '10',
      value: 10,
      shape: 'spade',
      src: '../../../assets/card img/10-s.png',
    },

    {
      title: '10',
      value: 10,
      shape: 'heart',
      src: '../../../assets/card img/10-h.png',
    },

    {
      title: '10',
      value: 10,
      shape: 'diamond',
      src: '../../../assets/card img/10-d.png',
    },

    {
      title: 'J',
      value: 11,
      shape: 'club',
      src: '../../../assets/card img/J-p.png',
    },

    {
      title: 'J',
      value: 11,
      shape: 'spade',
      src: '../../../assets/card img/J-s.png',
    },

    {
      title: 'J',
      value: 11,
      shape: 'heart',
      src: '../../../assets/card img/J-h.png',
    },

    {
      title: 'J',
      value: 11,
      shape: 'diamond',
      src: '../../../assets/card img/J-d.png',
    },

    {
      title: 'Q',
      value: 12,
      shape: 'club',
      src: '../../../assets/card img/Q-p.png',
    },

    {
      title: 'Q',
      value: 12,
      shape: 'spade',
      src: '../../../assets/card img/Q-s.png',
    },

    {
      title: 'Q',
      value: 12,
      shape: 'heart',
      src: '../../../assets/card img/Q-h.png',
    },

    {
      title: 'Q',
      value: 12,
      shape: 'diamond',
      src: '../../../assets/card img/Q-d.png',
    },

    {
      title: 'K',
      value: 13,
      shape: 'club',
      src: '../../../assets/card img/K-p.png',
    },

    {
      title: 'K',
      value: 13,
      shape: 'spade',
      src: '../../../assets/card img/K-s.png',
    },

    {
      title: 'K',
      value: 13,
      shape: 'heart',
      src: '../../../assets/card img/K-h.png',
    },

    {
      title: 'K',
      value: 13,
      shape: 'diamond',
      src: '../../../assets/card img/K-d.png',
    },

    {
      title: 'Α',
      value: 14,
      shape: 'club',
      src: '../../../assets/card img/A-p.png',
    },

    {
      title: 'Α',
      value: 14,
      shape: 'spade',
      src: '../../../assets/card img/A-s.png',
    },

    {
      title: 'Α',
      value: 14,
      shape: 'heart',
      src: '../../../assets/card img/A-h.png',
    },

    {
      title: 'Α',
      value: 14,
      shape: 'diamond',
      src: '../../../assets/card img/A-d.png',
    },

    {
      title: '🤡',
      value: 15,
      shape: 'joker',
      src: '../../../assets/card img/joker.png',
    },

    {
      title: '🤡',
      value: 15,
      shape: 'joker',
      src: '../../../assets/card img/joker.png',
    },
  ];

  cardAudio = [
    { key: 'Mix', src: '../../../assets/card sound/cardsMix.mp3' },
    { key: 'Deal', src: '../../../assets/card sound/dealingCard.wav' },
    { key: 'war', src: '../../../assets/card sound/tda.wav' },
  ];

  warDeck1: any[] = [];
  warDeck2: any[] = [];
  warDeck3: any[] = [];
  finalWarDeck: any[] = [];

  @Input() winnerIs: any = null;
  @Input() playerWon: boolean = false;
  @Input() computerDeck: any[] = [];
  @Input() playerDeck: any[] = [];
  @Input() computerCard: any = null;
  @Input() playerCard: any = null;
  @Input() computerCardTitle: string = '';
  @Input() playerCardTitle: string = '';
  @Input() playerCardValue: number = 0;
  @Input() computerCardValue: number = 0;
  @Input() playerCardIcon: string = '';
  @Input() computerCardIcon: string = '';
  @Input() cardsImgSrcCu: string = '../../../assets/card img/BlueDack.png';
  @Input() cardsImgSrcPlayer: string = '../../../assets/card img/BlueDack.png';
  @Input() mixCardsS: string = '';
  @Input() dealCardsS: string = '';
  @Input() dis:boolean = true;
  @Input() dis2:boolean = false;

  soundArray=this.cardAudio
  mixS = this.soundArray[0].src;
  dealS = this.soundArray[1].src;
  warS = this.soundArray[2].src;

  playAudio(soundArray:any,sound:string) {
    soundArray = new Audio();
    soundArray.src = sound;
    soundArray.load();
    soundArray.play();
  
  }

  splitDeck(cardDeck: any, computerDeck: any, playerDeck: any) {
    this.cardDeck = cardDeck.sort(() => Math.random() - 0.5);
    3;
    this.computerDeck = computerDeck;
    this.playerDeck = playerDeck;

    this.computerDeck = this.cardDeck.splice(0, 27);
    this.playerDeck = this.cardDeck.splice(0, 27);

    this.playAudio(this.soundArray,this.mixS);
    setTimeout(() => {
      this.dis = false
    }, 3000);
  }

  hitCard() {
    if (this.computerDeck.length && this.playerDeck.length) {
      this.dis = true
          setTimeout(() => {
            this.dis = false;
          }, 700);
      this.playAudio(this.soundArray,this.dealS);
      this.computerCard =
        this.computerDeck[Math.floor(Math.random() * this.computerDeck.length)];
      this.computerDeck.splice(this.computerDeck.indexOf(this.computerCard), 1);
      this.playerCard =
        this.playerDeck[Math.floor(Math.random() * this.playerDeck.length)];
      this.playerDeck.splice(this.playerDeck.indexOf(this.playerCard), 1);

      this.cardsImgSrcCu = this.computerCard.src;
      this.cardsImgSrcPlayer = this.playerCard.src;
      this.computerCardIcon = this.computerCard.icon;

      this.playerCardIcon = this.playerCard.icon;

      this.computerCardTitle = this.computerCard.title;

      this.playerCardTitle = this.playerCard.title;

      if (this.computerCard.value > this.playerCard.value) {
        this.computerDeck.push(this.computerCard, this.playerCard);
        this.winnerIs = 'Computer win 🤖';
      } else if (this.playerCard.value > this.computerCard.value) {
        this.playerDeck.push(this.computerCard, this.playerCard);
        this.playerWon = true;
        this.winnerIs = 'U Win 😍';
      } else {
        this.winnerIs = '😡 Let`s go to WaR 😡';
         
         setTimeout(() => {
            this.playAudio(this.soundArray, this.warS);
         }, 500);
       

        this.warDeck1.push(this.computerCard, this.playerCard);

        //----------1---------

        setTimeout(() => {
          this.computerCard =
            this.computerDeck[
              Math.floor(Math.random() * this.computerDeck.length)
            ];
          this.computerDeck.splice(
            this.computerDeck.indexOf(this.computerCard),
            1
          );
          this.playerCard =
            this.playerDeck[Math.floor(Math.random() * this.playerDeck.length)];
          this.playerDeck.splice(this.playerDeck.indexOf(this.playerCard), 1);

          this.cardsImgSrcCu = this.computerCard.src;
          this.cardsImgSrcPlayer = this.playerCard.src;

          this.computerCardIcon = this.computerCard.icon;

          this.playerCardIcon = this.playerCard.icon;

          this.computerCardTitle = this.computerCard.title;

          this.playerCardTitle = this.playerCard.title;

          this.warDeck2.push(this.computerCard, this.playerCard);

          //----------2---------

          setTimeout(() => {
            this.computerCard =
              this.computerDeck[
                Math.floor(Math.random() * this.computerDeck.length)
              ];
            this.computerDeck.splice(
              this.computerDeck.indexOf(this.computerCard),
              1
            );
            this.playerCard =
              this.playerDeck[
                Math.floor(Math.random() * this.playerDeck.length)
              ];
            this.playerDeck.splice(this.playerDeck.indexOf(this.playerCard), 1);

            this.cardsImgSrcCu = this.computerCard.src;
            this.cardsImgSrcPlayer = this.playerCard.src;
            this.computerCardIcon = this.computerCard.icon;

            this.playerCardIcon = this.playerCard.icon;

            this.computerCardTitle = this.computerCard.title;

            this.playerCardTitle = this.playerCard.title;

            this.warDeck3.push(this.computerCard, this.playerCard);

            //-------3---------

            setTimeout(() => {
              this.computerCard =
                this.computerDeck[
                  Math.floor(Math.random() * this.computerDeck.length)
                ];
              this.computerDeck.splice(
                this.computerDeck.indexOf(this.computerCard),
                1
              );
              this.playerCard =
                this.playerDeck[
                  Math.floor(Math.random() * this.playerDeck.length)
                ];
              this.playerDeck.splice(
                this.playerDeck.indexOf(this.playerCard),
                1
              );

              this.cardsImgSrcCu = this.computerCard.src;
              this.cardsImgSrcPlayer = this.playerCard.src;
              this.computerCardIcon = this.computerCard.icon;

              this.playerCardIcon = this.playerCard.icon;

              this.computerCardTitle = this.computerCard.title;

              this.playerCardTitle = this.playerCard.title;

              this.finalWarDeck.push(this.computerCard, this.playerCard);

              //-------check for winner---------

              if (this.computerCard.value > this.playerCard.value) {
                this.computerDeck.push(
                  ...this.warDeck1,
                  ...this.warDeck2,
                  ...this.warDeck3,
                  ...this.finalWarDeck
                );
                this.warDeck1 = [];
                this.warDeck2 = [];
                this.warDeck3 = [];
                this.finalWarDeck = [];
                this.winnerIs = 'Computer win 🤖';

                return;
              } else if (this.playerCard.value > this.computerCard.value) {
                this.playerDeck.push(
                  ...this.warDeck1,
                  ...this.warDeck2,
                  ...this.warDeck3,
                  ...this.finalWarDeck
                );
                this.warDeck1 = [];
                this.warDeck2 = [];
                this.warDeck3 = [];
                this.finalWarDeck = [];
                this.playerWon = true;
                this.winnerIs = 'U Win 😍';

                return;
              } else {
                this.winnerIs = 'Its a draw 😮';
                console.error('no winner');

                return;
              }
            }, 2500);
          }, 2500);
        }, 4000);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
