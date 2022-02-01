function getBoxScoreLink() {
    let UrlPath = location.pathname;
    let gameCode = UrlPath.substring(7); // URLの末尾を文字列化

    let eAway = document.querySelector('.GameCard1Matchup-scores-awayTeamItem .bTextLink');
    let eHome = document.querySelector('.GameCard1Matchup-scores-homeTeamItem .bTextLink');

    let a = eAway.textContent.toLowerCase(); // アウェーチーム略称(小文字)
    let h = eHome.textContent.toLowerCase(); // ホームチーム略称(小文字)

    let link = 'https://www.nba.com/game/' + a + '-vs-' + h + '-00' + gameCode + '/box-score'; // 試合結果ページURL

    window.open(link, '_blank');
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getBoxScoreLink,
    });
});