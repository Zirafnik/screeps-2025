import { DrillerV1, HaulerV1 } from 'creeps';
import { addToSpawnQueue } from 'structures/spawn';

export function gameStateActions(): void {
    const creepsCount = Object.keys(Game.creeps).length;
    const availableRooms = Object.keys(Game.rooms);
    const roomEnergy = Game.rooms[availableRooms[0]].energyAvailable;

    // GAME START
    if (availableRooms.length === 1 && creepsCount === 0 && roomEnergy <= 300) {
        Memory.spawnQueue = [];
        // Memory.sources = {};

        // Add two basic creeps to spawn queue
        addToSpawnQueue(
            {
                time: 0,
                data: DrillerV1,
            },
            {
                time: 1,
                data: HaulerV1,
            }
        );
    }
}

export function cleanUpMemory(): void {
    for (const creep in Memory.creeps) {
        if (!Game.creeps[creep]) {
            delete Memory.creeps[creep];
        }
    }
}
