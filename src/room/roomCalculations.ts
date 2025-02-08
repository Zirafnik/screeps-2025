import { getEmptySourceSpots } from 'helpers/source.helper';

export function roomCalculations(roomName: string) {
    saveEmptySourceSpots(roomName);
}

function saveEmptySourceSpots(roomName: string) {
    const roomSources = Game.rooms[roomName].find(FIND_SOURCES);

    for (const source of roomSources) {
        const coords = getEmptySourceSpots(source.pos);

        Memory.rooms[roomName].sources[]
    }
}
