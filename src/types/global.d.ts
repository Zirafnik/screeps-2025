declare global {
    interface Memory {
        spawnQueue: Array<SpawnQueueElement>;
        // sources:
    }

    interface CreepMemory {
        role: string;
    }
}

interface SpawnQueueElement {
    time: number;
    data: CreepBuild;
}

type CreepBuild = [Array<BodyPartConstant>, SpawnOptions];

export { SpawnQueueElement, CreepBuild };
