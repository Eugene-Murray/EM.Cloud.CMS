define(['models/card'], function(card) {

    var cards = [
         new card("Screen1:", "---", "---", "---"),
         new card("Screen2:", "---", "---", "---"),
         new card("Screen3:", "---", "---", "---"),
         new card("Screen4:", "---", "---", "---")
    ];

    return {
        cards: cards
    };
});