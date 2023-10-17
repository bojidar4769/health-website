function demo(input) {
    let series = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let timeForLunch = breakLength * 1/8;
    let timeForBreak = breakLength * 1/4;
    let timeLeft = breakLength - (timeForBreak + timeForLunch);
    let timeNeeded = episodeLength - timeLeft;

    if (timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}
demo(["Game of Thrones", "60", "96"]);
