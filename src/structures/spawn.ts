import { SpawnQueueElement } from 'types/global';

export function spawnCreep(spawnName: string) {
    // Checks
    const queueNonEmpty = Memory.spawnQueue.length;
    const lastQueueItemScheduled = Memory.spawnQueue[Memory.spawnQueue.length - 1]?.time <= Game.time;

    if (/*notAlreadySpawning &&*/ queueNonEmpty && lastQueueItemScheduled /*&& enoughEnergyAvailable*/) {
        // Get first creep in queue
        const creepData = Memory.spawnQueue[Memory.spawnQueue.length - 1].data;

        // Adjust name with tick time
        const name = `${creepData[1].memory?.role}-${Game.time}`;

        const result = Game.spawns[spawnName].spawnCreep(creepData[0], name, creepData[1]);

        if (result === 0) {
            Memory.spawnQueue.pop();
        } else console.log(`${spawnName} error: ${result}`); // If successfully spawned, remove from queue (this way we do not need to make extra checks in beginning, as they are again checked here (e.g. notAlreadySpawning, enoughEnergyAvailable, ...)=> saves CPU)
    }
}

export function addToSpawnQueue(...items: SpawnQueueElement[]): void {
    for (const item of items) {
        Memory.spawnQueue.push(item);
    }

    Memory.spawnQueue.sort((a, b) => b.time - a.time); // descending sort (most recent to end)
}
