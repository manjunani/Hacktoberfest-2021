

function genQuote() {
    let randNum = Math.floor(Math.random() * 7) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    let tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
    let facebookQuote = quotes[randNum].split(' ').join('%20');
    facebookQuote = facebookQuote.split('<br>').join('');
    facebookQuote = "https://www.facebook.com/sharer/sharer.php?u=" + facebookQuote.split('"').join('')
    $('.facebook-share-button').attr('href', facebookQuote);
  }
  
  //quote array
  let quotes = ["Blank", "\"Either I will find a way, or I will make one.\" - Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"- C.S Lewis", "\"If you can dream it, you can do it.\"- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"- Bruce Lee",];


