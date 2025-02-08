import { CreepBuild } from 'types/global';

export const DrillerV1: CreepBuild = [
    [WORK, MOVE],
    {
        memory: { role: 'DrillerV1' },
    },
];

export const HaulerV1: CreepBuild = [
    [WORK, CARRY],
    {
        memory: { role: 'HaulerV1' },
    },
];
