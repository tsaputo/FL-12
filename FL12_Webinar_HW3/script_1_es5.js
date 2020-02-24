//task1
function Deck() {
    var suits = ['hearts', 'diamonds', 'clubs', 'sprades'];
    var ranksAmount = 13;

    var _cards = function () {
        var arr = [];
        for (var j = 0; j < suits.length; j++) {
            for (var i = 1; i <= ranksAmount; i++) {
                arr.push(new Card(suits[j], i));
            }
        }
        return arr;
    }();


    this.shuffle = function () {
        for (var i = _cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _cards[i];
            _cards[i] = _cards[j];
            _cards[j] = temp;
        }
    }

    this.draw = function(n) {
        let popped = [];
        for (var i = 0; i < n; i++) {
            popped.push(_cards.pop());
        } 
        return popped;
    }

    this.count = function() {
        return _cards.length;
    }

}


function Card(suit, rank) {
    var _suit = suit;
    var _rank = rank;
    var _vaules = {1: 'Ace', 2: '2', 3: '3', 4: '4',
    5: '5', 6: '6', 7:'7', 8: '8', 9:'9', 
    10: '10', 11: 'Jack', 12: 'Queen', 13: 'King'};

    this.getRank = function() {
        return _rank;
    }

    this.getSuit = function() {
        return _suit;
    }

    this.isFacedCard = function () {
        if (_rank === 1 || _rank > 10) {
             return true;
        } else {
            return false;
        }
    }

    this.toString = function () { 
        var cardRankVal = _vaules[_rank];
        return `${cardRankVal} of ${[_suit]}`;
    }

    this.compare = function(anotherCard) {
        return this.getRank() > anotherCard.getRank();
    }
}


function Player(name) {
    var _name = name;
    var _wins = 0;

    this.getName = function() {
        return _name;
    }

    this.getWins = function() {
        return _wins;
    }

    this.resSetWins = function() {
         _wins = 0;
    }

    this.addWins = function() {
        return _wins++;
    }


    this.play = function(anotherPlayer) {
        this.resSetWins();
        anotherPlayer.resSetWins();
        this.deck = new Deck();
        this.deck.shuffle();
        anotherPlayer.deck = new Deck();
        anotherPlayer.deck.shuffle();
        while (this.deck.count() > 0) {
            var playerOneCard = this.deck.draw(1)[0];
            var playerSecondCard = anotherPlayer.deck.draw(1)[0];
            if (playerOneCard.compare(playerSecondCard)) {
                this.addWins();
            } else {
                anotherPlayer.addWins();
            }
        }

        if (this.getWins() > anotherPlayer.getWins()) {
            return `${this.getName()} wins ${this.getWins()} to ${anotherPlayer.getWins()}`
        } else {
            return `${anotherPlayer.getName()} wins ${anotherPlayer.getWins()} to ${this.getWins()}`
        }
    }
}

var player2 = new Player('Fedir', 0);
var player1 = new Player('Ivan', 0);
player1.play(player2);