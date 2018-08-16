import playerList from './reducers/player_list';

export const resolveDirection = (nsew) => {
    switch (nsew.toUpperCase()) {
        case 'NORTH':
            return '北';
        case 'SOUTH':
            return '南';
        case 'EAST':
            return '东';
        case 'WEST':
            return '西';
        default:
            return '';
    }
};

export const resolvePlayer = (id) => {
    const player = playerList.find((player) => (player.id === id));
    return player.name;
};