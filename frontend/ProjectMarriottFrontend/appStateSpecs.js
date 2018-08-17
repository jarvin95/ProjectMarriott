const appState = {
    currentUserInfo: {
        id: 'int',
        name: 'name',
    },
    lastGame: {
        gameId: 'int',
        gameDateTime: 'datetime',
    },
    currentGameInfo: {
        roundSettings: {
            id: 'int',
            title: 'int',
            startDatetime: 'datetime',
            shooterPay: 'bool',
            betAmount: 'int',
            zimoBonus: 'int',
            users: {
                eastUser: {
                    id: 'int',
                    name: 'string',
                },
                southUser: {
                    id: 'int',
                    name: 'string',
                },
                westUser: {
                    id: 'int',
                    name: 'string',
                },
                northUser: {
                    id: 'int',
                    name: 'string',
                },
            },
        },
        currentInfo: {
            currentWind: {
                id: 'int',
                directionEnum: 'int',
            },
            currentGame: {
                id: 'int',
                directionEnum: 'int',
                repeat: 'int'
            }
        }
    }
};