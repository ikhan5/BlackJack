/* Card: 
value: 1-11
altValue 1-14
suit:   4 - hearts
		3- diamonds, 
		2- clubs, 
		1 - spades
*/

/*eslint-env browser*/

function Card(name, value, suit, secondvalue, altvalue, cardimg) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.secondValue = secondvalue;
    this.altValue = altvalue;
    this.cardimg = cardimg;
}
// Heart Cards
const aceH = new Card("Ace of Hearts", 1, 4, 11, 14, 'cards/AH.png');
const twoH = new Card("Two of Hearts", 2, 4, null, null, 'cards/2H.png');
const threeH = new Card("Three of Hearts", 3, 4, null, null, 'cards/3H.png');
const fourH = new Card("Four of Hearts", 4, 4, null, null, 'cards/4H.png');
const fiveH = new Card("Five of Hearts", 5, 4, null, null, 'cards/5H.png');
const sixH = new Card("Six of Hearts", 6, 4, null, null, 'cards/6H.png');
const sevenH = new Card("Seven of Hearts", 7, 4, null, null, 'cards/7H.png');
const eightH = new Card("Eight of Hearts", 8, 4, null, null, 'cards/8H.png');
const nineH = new Card("Nine of Hearts", 9, 4, null, null, 'cards/9H.png');
const tenH = new Card("Ten of Hearts", 10, 4, null, null, 'cards/10H.png');
const jackH = new Card("Jack of Hearts", 10, 4, null, 11, 'cards/JH.png');
const queenH = new Card("Queen of Hearts", 10, 4, null, 12, 'cards/QH.png');
const kingH = new Card("King of Hearts", 10, 4, null, 13, 'cards/KH.png');
// Diamond Cards
const aceD = new Card("Ace of Diamonds", 1, 3, 11, 14, 'cards/AD.png');
const twoD = new Card("Two of Diamonds", 2, 3, null, null, 'cards/2D.png');
const threeD = new Card("Three of Diamonds", 3, 3, null, null, 'cards/3D.png');
const fourD = new Card("Four of Diamonds", 4, 3, null, null, 'cards/4D.png');
const fiveD = new Card("Five of Diamonds", 5, 3, null, null, 'cards/5D.png');
const sixD = new Card("Six of Diamonds", 6, 3, null, null, 'cards/6D.png');
const sevenD = new Card("Seven of Diamonds", 7, 3, null, null, 'cards/7D.png');
const eightD = new Card("Eight of Diamonds", 8, 3, null, null, 'cards/8D.png');
const nineD = new Card("Nine of Diamonds", 9, 3, null, null, 'cards/9D.png');
const tenD = new Card("Ten of Diamonds", 10, 3, null, null, 'cards/10D.png');
const jackD = new Card("Jack of Diamonds", 10, 3, null, 11, 'cards/JD.png');
const queenD = new Card("Queen of Diamonds", 10, 3, null, 12, 'cards/QD.png');
const kingD = new Card("King of Diamonds", 10, 3, null, 13, 'cards/KD.png');
//Club Cards
const aceC = new Card("Ace of Clubs", 1, 2, 11, 14, 'cards/AC.png');
const twoC = new Card("Two of Clubs", 2, 2, null, null, 'cards/2C.png');
const threeC = new Card("Three of Clubs", 3, 2, null, null, 'cards/3C.png');
const fourC = new Card("Four of Clubs", 4, 2, null, null, 'cards/4C.png');
const fiveC = new Card("Five of Clubs", 5, 2, null, null, 'cards/5C.png');
const sixC = new Card("Six of Clubs", 6, 2, null, null, 'cards/6C.png');
const sevenC = new Card("Seven of Clubs", 7, 2, null, null, 'cards/7C.png');
const eightC = new Card("Eight of Clubs", 8, 2, null, null, 'cards/8C.png');
const nineC = new Card("Nine of Clubs", 9, 2, null, null, 'cards/9C.png');
const tenC = new Card("Ten of Clubs", 10, 2, null, null, 'cards/10C.png');
const jackC = new Card("Jack of Clubs", 10, 2, null, 11, 'cards/JC.png');
const queenC = new Card("Queen of Clubs", 10, 2, null, 12, 'cards/QC.png');
const kingC = new Card("King of Clubs", 10, 2, null, 13, 'cards/KC.png');
// Spade Cards
const aceS = new Card("Ace of Spades", 1, 1, 11, 14, 'cards/AS.png');
const twoS = new Card("Two of Spades", 2, 1, null, null, 'cards/2S.png');
const threeS = new Card("Three of Spades", 3, 1, null, null, 'cards/3S.png');
const fourS = new Card("Four of Spades", 4, 1, null, null, 'cards/4S.png');
const fiveS = new Card("Five of Spades", 5, 1, null, null, 'cards/5S.png');
const sixS = new Card("Six of Spades", 6, 1, null, null, 'cards/6S.png');
const sevenS = new Card("Seven of Spades", 7, 1, null, null, 'cards/7S.png');
const eightS = new Card("Eight of Spades", 8, 1, null, null, 'cards/8S.png');
const nineS = new Card("Nine of Spades", 9, 1, null, null, 'cards/9S.png');
const tenS = new Card("Ten of Spades", 10, 1, null, null, 'cards/10S.png');
const jackS = new Card("Jack of Spades", 10, 1, null, 11, 'cards/JS.png');
const queenS = new Card("Queen of Spades", 10, 1, null, 12, 'cards/QS.png');
const kingS = new Card("King of Spades", 10, 1, null, 13, 'cards/KS.png');

var deck = [aceH, twoH, threeH, fourH, fiveH, sixH, sevenH, eightH, nineH, tenH, jackH, queenH, kingH,
    aceD, twoD, threeD, fourD, fiveD, sixD, sevenD, eightD, nineD, tenD, jackD, queenD, kingD,
    aceC, twoC, threeC, fourC, fiveC, sixC, sevenC, eightC, nineC, tenC, jackC, queenC, kingC,
    aceS, twoS, threeS, fourS, fiveS, sixS, sevenS, eightS, nineS, tenS, jackS, queenS, kingS
];

var shuffledDeck = new Array(52);

window.onload = pageLoaded;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageLoaded() {
    /** Button Actions **/
    var newgame = document.getElementById("newgame-btn");
    newgame.addEventListener("click", newGame);

    var hit = document.getElementById("hit-btn");
    hit.addEventListener("click", hitMe);

    var holdHand = document.getElementById("hold-btn");
    holdHand.addEventListener("click", hold);

    /** Playing Area elements **/
    var gamearea = document.getElementById('gameArea');
    var dealerarea = document.getElementById('dealerArea');
    var playerarea = document.querySelectorAll('[id*="playerArea"]');
    /*0 - Player 1 (left) , 1 - Player 2 (bottom), 2 - Player 3 (right)*/
    var winnerarea = document.getElementById('winnerArea');

    /*Score Display */
    var dealerscore = document.getElementById('dealerScore');
    var playerscore = document.getElementById('playerScore');
    var playerwins = document.getElementById('playerWins');
    var dealerwins = document.getElementById('dealerWins');


    /** Hand Objects **/
    function Player(name, firsttotal, secondtotal, total, wins) {
        this.name = name;
        this.firsttotal = firsttotal;
        this.secondtotal = secondtotal;
        this.total = total;
        this.wins = wins;
    }
    var playerHand = new Player("Player 1", 0, 0, 0, 0);
    var playerHand1 = new Player("Player 2", 0, 0, 0, 0);
    var playerHand2 = new Player("Player 3", 0, 0, 0, 0);
    var dealerHand = new Player("Dealer", 0, 0, 0, 0);


    /** Card Function **/

    /* Fischer-Yates Shuffling Method
        1) After each game the original array is concatenated to the
        shuffledDeck array so that all the cards that were dealt are back in the deck.
        2) The copied deck is then shuffled via the Fischer-Yates Method and the array is returned
    */
    function shuffle(array) {
        shuffledDeck = [].concat(array);
        var i = 0,
            j, temp;
        var length = shuffledDeck.length - 1;
        while (i < shuffledDeck.length) {
            j = Math.floor(Math.random() * Math.floor(length - 1));
            temp = shuffledDeck[j];
            shuffledDeck[j] = shuffledDeck[i];
            shuffledDeck[i] = temp;
            i++;
        }
        return shuffledDeck;
    }

    /* When called, the function returns the last card object from the shuffledDeck array, i.e a random card from the deck */
    function randomCard() {
        var randCard = shuffledDeck.pop();
        return randCard;
    }

    /* 1) Using the randomCard() object, the card is appended to the different areas on the game board depending on which player requires it 
    2) The card objects values are passed for comparison in the updatePlayerScore() function 
    */
    function playerCards() {
        let j =0;
        while (j !=1){
            let i = 0;
            for(i=0;i <3;i++){
                var playerCard = randomCard();
                var cardSRC = dealCard(playerCard.cardimg);
                playerarea[i].appendChild(cardSRC);
                updatePlayerScore(playerCard.value, playerCard.secondValue, i);
            }
            j++;
        }
    }

    function dealerCards() {
        var dealerCard = randomCard();
        updateDealerScore(dealerCard.value, dealerCard.secondValue);
        var dealerSRC = dealCard(dealerCard.cardimg);
        dealerarea.appendChild(dealerSRC);
    }

    /* Creates a card element in the document using the image src of the random card */
    function dealCard(cardimg) {
        var card = document.createElement("IMG");
        card.src = cardimg;
        return card;
    }
    /*Used to create the flipped over card of the dealers hand*/
    function backCard() {
        var backcard = document.createElement("IMG");
        backcard.src = "cards/blue_back.png";
        backcard.classList.add("coverCard");
        return backcard;
    }
    /** Player Actions **/
    /*At the start of the game, only the new game button is made active*/
    function gameStart() {
        newgame.disabled = true;
        holdHand.disabled = false;
        hit.disabled = false;
    }

    /* When called, all hand totals are reset to 0, and the card elements on the board are removed */

    function resetGame() {
        shuffle(deck);
        gameStart();
        dealerarea.innerHTML = "";
        playerarea[0].innerHTML = "";
        playerarea[1].innerHTML = "";
        playerarea[2].innerHTML = "";
        winnerarea.innerHTML = "";
        playerHand.firsttotal = 0;
        dealerHand.firsttotal = 0;
        playerHand.secondtotal = 0;
        dealerHand.secondtotal = 0;
    }

    /* Everytime the new game button is clicked, the game resets and 2 cards are dealt to the player and dealer*/
    function newGame() {
        resetGame();
        for (var i = 0; i < 2; i++) {
            playerCards();
        }
        dealerCards();
        dealerarea.appendChild(backCard());
        checkBlackJack();
    }

    /* 1)When clicked, the hold function reveals the dealers face down card, i.e removes the back card from the board, and replaces it with a random card 
    2) The dealer continues to be dealt cards until they have a greater total than the players
    3) When that happens the dealers hand total and the players hand total are compared and checked to see if the dealer goes over 21
    */
    function hold() {
        dealerscore.innerHTML = (dealerHand.total);
        var x = document.getElementsByClassName("coverCard")[0];
        x.parentNode.removeChild(x);
        disableActions();
        dealerCards();
        newgame.disabled = true;

        while (dealerHand.total <= playerHand.total) {
            dealerCards();
        }
        compareTotals();
        checkOver();
    }

    /*A card is added to the players hand, and their total is check to see they acheive 21(max total) or if they went over 21 */

    function hitMe() {
        playerCards();
        checkBlackJack();
        checkOver();
    }

    /** Scoring Functions **/

    /*If the players hand is equal to 21, the player wins, ending the game */
    function checkBlackJack() {
        if (playerHand.total == 21) {
            whoWins(1);
            gameOver();
        }
    }
    /*All the Aces have two separate values referred to as second total, when a card is dealt two totals are generated:
    firsttotal which is calculated if Ace were '1', secondtotal is calculated as if Ace were '11' */
    function updatePlayerScore(first, second, playerID) {
        playerHand.firsttotal += first;
        playerHand.secondtotal += second || first;
        biggerTotal(playerHand);
    }

    function updateDealerScore(first, second) {
        dealerHand.firsttotal += first;
        dealerHand.secondtotal += second || first;
        biggerTotal(dealerHand);
    }

    /* The bigger of the two totals are taken unless, the biggertotal is greater than 21, the chosen total is display in the game area*/
    function biggerTotal(hand) {
        if (hand.firsttotal < hand.secondtotal && hand.secondtotal <= 21) {
            hand.total = hand.secondtotal;
        } else {
            hand.total = hand.firsttotal;
        }
        playerscore.innerHTML = playerHand.total;
        dealerscore.innerHTML = dealerHand.total;
    }
    /* Whenever a hand total goes over 21, that hand is invalid and they lose, A flag is passed onto the who wins function depending on whose hand went over 21*/

    function checkOver() {
        if (playerHand.total > 21) {
            whoWins(0);
        }
        if (dealerHand.total > 21) {
            whoWins(1);
        }
    }
    /*The function compares the dealers hand and players hand to see which one is bigger to determine who wins, both hands must be below 21*/
    function compareTotals() {
        if (playerHand.total < dealerHand.total && dealerHand.total <= 21) {
            whoWins(0);
        }

        if (playerHand.total > dealerHand.total && playerHand.total <= 21) {
            whoWins(1);
        }
    }
    /* When a winner is determined in the other function, a flag is used to determine the winner and displays it onto the centre of the board, and the game ends*/
    function whoWins(winner) {
        var winString = document.createElement("DIV");
        winString.classList.add("winnerText");

        if (winner == 1) {
            winString.innerHTML = "Player Wins";
            playerwins.innerHTML = ++playerHand.wins;

        } else {
            winString.innerHTML = "Dealer Wins";
            dealerwins.innerHTML = ++dealerHand.wins;
        }
        winnerarea.appendChild(winString);
        gameOver();
    }

    /* Game over function ends the game */
    function gameOver() {
        disableActions();
    }

    /* The 'Hit' and 'Hold' buttons are disabled so no more cards can be added to either the player's or dealer's hand */
    function disableActions() {
        hit.disabled = true;
        holdHand.disabled = true;
        newgame.disabled = false;
    }


} //end of PAGELOADED wrapper


/*TO DO
    - Isolate card totals to their respective player 
*/