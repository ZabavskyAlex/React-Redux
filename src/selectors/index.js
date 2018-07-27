const settingsSelector = (state) => {
    return{
        difficultType: state.gameSettings.difficultType,
        typeCard: state.gameSettings.cardType
    };
};

const resultsGameSelectors = (state) => {
    return{
        time: state.timeGame.timeGame,
        resultBestPlayers: state.gameResults.allResultsGame ?
            state.gameResults.allResultsGame.sort((persA, persB) => {return persA.score - persB.score}).splice(0,10): []
    };
};

export {
    settingsSelector,
    resultsGameSelectors
}
