import { ErrorMapper } from 'utils/ErrorMapper';
import { spawnCreep } from 'structures/spawn';
import { cleanUpMemory, gameStateActions } from 'gameState';
import { roomCalculations } from 'room/roomCalculations';

export const loop = ErrorMapper.wrapLoop(() => {
    console.log(`Current game tick is ${Game.time}`);

    for (const room in Game.rooms) {
        roomCalculations(room);
    }

    gameStateActions();

    // TODO: Iterate over Spawners
    spawnCreep('spawn0');

    cleanUpMemory();
});
